#!/usr/bin/env node
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var fs = require('fs');
var fileLog = undefined;
if (process.env["TD_SHELL_LOG_FILE"]) {
    var logPath = process.env["TD_SHELL_LOG_FILE"];
    fileLog = function (msg) {
        var fl = fs.openSync(logPath, "a");
        var b = new Buffer(msg + '\r\n');
        fs.writeSync(fl, b, 0, b.length, 0);
        fs.closeSync(fl);
    };
}
var url = require('url');
var http = require('http');
var https = require('https');
var path = require('path');
var zlib = require('zlib');
var util = require('util');
var crypto = require('crypto');
var child_process = require('child_process');
var os = require('os');
var net = require("net");
var config;
var currentReqNo = 0;
var inAzure = false;
var controllerUrl = "";
var isNpm = true;
var inNodeWebkit = false;
var dataDir = ".";
function dataPath(p) {
    p = p || "";
    return dataDir ? path.join(dataDir, p) : p;
}
function userHome() {
    return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}
var tdstate;
var wsModule;
var Logger = (function () {
    function Logger(name, level) {
        this.name = name;
        this.level = level;
        this.logIdx = -1;
        this.logMsgs = [];
        this.logSz = 1000;
    }
    Logger.prototype.addMsg = function (s) {
        var m = {
            timestamp: Date.now(),
            msg: s
        };
        if (fileLog)
            fileLog(s);
        if (!inAzure)
            console.log(s);
        if (this.logIdx >= 0) {
            this.logMsgs[this.logIdx++] = m;
            if (this.logIdx >= this.logSz)
                this.logIdx = 0;
        }
        else {
            this.logMsgs.push(m);
            if (this.logMsgs.length >= this.logSz)
                this.logIdx = 0;
        }
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        this.addMsg(util.format.apply(null, args));
    };
    Logger.prototype.getMsgs = function () {
        var i = this.logIdx;
        var res = [];
        var wrapped = false;
        if (i < 0)
            i = 0;
        var n = Date.now();
        while (i < this.logMsgs.length) {
            var m = this.logMsgs[i];
            var diff = ("00000000" + (n - m.timestamp)).slice(-7).replace(/(\d\d\d)$/, function (m) { return "." + m; });
            res.push({
                timestamp: m.timestamp,
                msg: m.msg,
                elapsed: diff,
                level: this.level,
                category: "shell",
            });
            if (++i == this.logMsgs.length && !wrapped) {
                wrapped = true;
                i = 0;
            }
            if (wrapped && i >= this.logIdx)
                break;
        }
        res.reverse();
        return res;
    };
    return Logger;
})();
var error = new Logger("error", 3);
var info = new Logger("info", 6);
var debug = new Logger("debug", 7);
var ApiRequest = (function () {
    function ApiRequest(req, resp) {
        this.req = req;
        this.resp = resp;
        this.data = {};
        this.cmd = [];
        this.reqNo = ++currentReqNo;
    }
    ApiRequest.prototype.error = function (code, text) {
        info.log("HTTP error " + code + ": " + text);
        this.resp.writeHead(code, { 'Content-Type': 'text/plain' });
        this.resp.write(text, "utf8");
        this.resp.end();
    };
    ApiRequest.prototype.setCors = function () {
        this.resp.setHeader('Access-Control-Allow-Origin', "*");
        this.resp.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST');
        this.resp.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        this.resp.setHeader('Access-Control-Expose-Headers', 'ErrorMessage');
    };
    ApiRequest.prototype.processMgmt = function () {
        var cmd = this.cmd;
        if (this.data.minVersion && config.shellVersion < this.data.minVersion) {
            this.error(400, "shell version is too old");
            return;
        }
        if (mgmt.hasOwnProperty(cmd[0])) {
            mgmt[cmd[0]](this);
        }
        else {
            this.error(404, "no such api " + cmd[0]);
        }
    };
    ApiRequest.prototype.handleMgmt = function (cmd) {
        var _this = this;
        var buf = "";
        var final = function () {
            try {
                _this.cmd = cmd;
                _this.data = JSON.parse(buf || "{}");
                _this.processMgmt();
            }
            catch (e) {
                _this.exception(e);
            }
        };
        var req = this.req;
        if (req.method == "POST" || req.method == "PUT") {
            req.setEncoding('utf8');
            req.on('data', function (chunk) {
                buf += chunk;
            });
            req.on('end', final);
        }
        else {
            final();
        }
    };
    ApiRequest.prototype.ok = function (r) {
        this.resp.writeHead(200, { 'Content-Type': 'application/json; encoding=utf-8' });
        this.resp.write(JSON.stringify(r), "utf8");
        this.resp.end();
    };
    ApiRequest.prototype.exception = function (e) {
        saveState();
        var msg = "exception: " + e.toString() + " " + e.stack;
        error.log(msg);
        this.error(500, msg);
    };
    ApiRequest.prototype.pluginCb = function (passData) {
        var _this = this;
        if (passData === void 0) { passData = false; }
        return function (err, data) {
            if (err)
                _this.ok({ error: err + "" });
            else if (passData)
                _this.ok({ data: data });
            else
                _this.ok({});
        };
    };
    return ApiRequest;
})();
function downloadStream(u, f) {
    var p = url.parse(u);
    https.get(p, function (res) {
        if (res.statusCode == 200) {
            f(res);
        }
        else {
            var msg = "error downloading file " + u + "; HTTP " + res.statusCode;
            console.error(msg);
            f(null);
        }
    });
}
function downloadFile(u, f) {
    var p = url.parse(u);
    p.headers = {
        "Accept-Encoding": "gzip"
    };
    var mod = http;
    if (p.protocol == "https:")
        mod = https;
    debug.log('download ' + u);
    mod.get(p, function (res) {
        if (res.statusCode == 302) {
            downloadFile(res.headers['location'], f);
            res.end();
        }
        else if (res.statusCode == 200) {
            if (/gzip/.test(res.headers['content-encoding'])) {
                var g = zlib.createUnzip(undefined);
                res.pipe(g);
            }
            else {
                g = res;
            }
            var bufs = [];
            g.on('data', function (c) {
                if (typeof c === "string")
                    bufs.push(new Buffer(c, "utf8"));
                else
                    bufs.push(c);
            });
            g.on('end', function () {
                var total = Buffer.concat(bufs);
                f(null, total, res.headers);
            });
        }
        else {
            var msg = "error downloading file " + u + "; HTTP " + res.statusCode;
            error.log(msg);
            f(msg, null);
        }
    }).on("error", function (e) {
        var msg = "error downloading file " + u + "; " + e;
        error.log(msg);
        f(msg, null);
    });
}
function downloadJson(u, f) {
    downloadFile(u, function (err, b) {
        if (err)
            f(err, null);
        else {
            try {
                var d = JSON.parse(b.toString("utf8"));
            }
            catch (err) {
                f(err, null);
                return;
            }
            f(null, d);
        }
    });
}
function mkDirP(path, mode, cb) {
    if (mode === void 0) { mode = "777"; }
    var elts = path.split(/\/|\\/);
    var mk = function (i) {
        if (i > 0) {
            var p = elts.slice(0, i).join("/");
            if (!fs.existsSync(p)) {
                mk(i - 1);
                fs.mkdirSync(p, mode);
            }
        }
    };
    mk(elts.length - 1);
    if (cb)
        cb();
}
function processFileEntry(fe, f) {
    var state = tdstate.downloadedFiles;
    fe.path = fe.path.replace(/\\/g, "/");
    if (fe.url && state[fe.path] === fe.url) {
        f(null);
        return;
    }
    var prevUrl = state[fe.path];
    mkDirP(fe.path);
    state[fe.path] = "undefined://";
    saveState();
    var final = function (err) {
        if (!err) {
            state[fe.path] = fe.url;
            saveState();
        }
        f(err);
    };
    if (fe.content) {
        var h = crypto.createHash("sha256");
        h.update(new Buffer(fe.content, "utf8"));
        fe.url = "sha256://" + h.digest("hex");
        if (fe.url != prevUrl)
            fe.updated = true;
        debug.log('writefile: ' + fe.path + ' ' + fe.url);
        fs.writeFile(fe.path, fe.content, "utf8", final);
    }
    else {
        fe.updated = true;
        downloadFile(fe.url, function (err, s) {
            if (err)
                f(err);
            else {
                debug.log('writefile: ' + fe.path);
                fs.writeFile(fe.path, s, null, final);
            }
        });
    }
}
function executeNpm(args, finish) {
    var p = process.env["NPM_JS_PATH"] || path.join(path.dirname(process.execPath), "node_modules/npm/bin/npm-cli.js");
    if (!fs.existsSync(p))
        p = path.join(path.dirname(process.execPath).replace("/bin", "/lib"), "node_modules/npm/bin/npm-cli.js");
    if (!fs.existsSync(p))
        p = process.execPath.replace(/nodejs.*/, "npm/1.4.10/node_modules/npm/bin/npm-cli.js");
    info.log("running npm, " + p);
    child_process.execFile(process.execPath, [p].concat(args), {}, function (err, stdout, stderr) {
        if (err)
            error.log("npm failure: " + err);
        if (stdout)
            info.log("npm install output: " + stdout);
        if (stderr)
            error.log("npm install error: " + stderr);
        finish();
    });
}
var pythonEnv = undefined;
function initPython(force, finish) {
    var pythonExe = "python.exe";
    if (pythonEnv) {
        info.log('python virtual environment already setup...');
        finish();
        return;
    }
    var virtualEnvDir = null;
    var pathSep = process.platform == "win32" ? ";" : ":";
    function setEnv() {
        pythonEnv = {};
        if (virtualEnvDir) {
            pythonEnv.VIRTUAL_ENV = virtualEnvDir;
            pythonEnv.PYTHONHOME = '';
            pythonEnv.PATH = path.join(virtualEnvDir, "Scripts") + pathSep + process.env["PATH"];
        }
    }
    function done() {
        setEnv();
        finish();
    }
    function pythonVersion(next) {
        child_process.exec("python --version", function (err, stdout, stderr) {
            if (!err && stdout)
                info.log(stdout.toString());
            next(err, stdout);
        });
    }
    function findPython(next) {
        pythonVersion(function (err, stdout) {
            if (err) {
                if (/^win/.test(process.platform)) {
                    debug.log('python not found, searching...');
                    var pythonPath;
                    if (process.env["PYTHONHOME"] && fs.existsSync(process.env["PYTHONHOME"]))
                        pythonPath = process.env["PYTHONHOME"];
                    else if (fs.existsSync("C:\\Python27\\python.exe"))
                        pythonPath = "C:\\Python27\\";
                    else if (fs.existsSync("D:\\Python27\\python.exe"))
                        pythonPath = "D:\\Python27\\";
                    else if (fs.existsSync("E:\\Python27\\python.exe"))
                        pythonPath = "E:\\Python27\\";
                    if (pythonPath) {
                        info.log('found python at ' + pythonPath);
                        var pathEnv = process.env["PATH"];
                        if (pathEnv && pathEnv.indexOf(pythonPath) < 0) {
                            debug.log('adding python to PATH');
                            process.env["PYTHONHOME"] = pythonPath;
                            process.env["PATH"] = pathEnv + pathSep + pythonPath + pathSep + path.join(pythonPath, "Scripts");
                            pythonVersion(function (err2, stdout2) {
                                if (err2)
                                    error.log('could not find python.exe. make sure the python installation folder is added to the path');
                                next();
                            });
                            return;
                        }
                    }
                }
                error.log('could not find python.exe, did you install python?');
            }
            next();
        });
    }
    function mkVirtualEnv(pyDir) {
        child_process.execFile("pip", ["install", "virtualenv"], {}, function (e, so, se) {
            child_process.execFile("python", ["-m", "virtualenv", "--verbose", pyDir], {}, function (err, stdout, stderr) {
                if (stdout)
                    debug.log(stdout.toString());
                if (stderr)
                    info.log(stderr.toString());
                if (!err)
                    virtualEnvDir = pyDir;
                setEnv();
                checkPip();
            });
        });
    }
    function checkPip() {
        runCommand({ command: "pip --version", cwd: virtualEnvDir }, function (res) {
            if (res.stdout)
                debug.log(res.stdout);
            if (res.stderr)
                info.log(res.stderr);
            if (res.code) {
                info.log('pip not installed, installing...');
                installPip();
            }
            else {
                info.log("pip installed, skipping...");
                done();
            }
        });
    }
    function installPip() {
        downloadFile('https://bootstrap.pypa.io/get-pip.py', function (e, buf) {
            if (e)
                finish('error while download get-pip.py: ' + e);
            else {
                debug.log('writing get-pip.py');
                fs.writeFileSync(path.join(virtualEnvDir + '/get-pip.py'), buf, 'utf-8');
                runCommand({ command: "python get-pip.py", cwd: virtualEnvDir }, function (res) {
                    if (res.stdout)
                        debug.log(res.stdout);
                    if (res.stderr)
                        error.log(res.stderr);
                    if (res.code)
                        finish("pip installation failed: " + res.code);
                    else
                        done();
                });
            }
        });
    }
    findPython(function () {
        var pyDir = dataPath("py");
        var ready = fs.existsSync(pyDir);
        if (ready && !force) {
            info.log('found existing python virtual environment at ' + pyDir);
            virtualEnvDir = pyDir;
            done();
            return;
        }
        info.log("creating Python virtual environment...");
        mkVirtualEnv(pyDir);
    });
}
function executePip(args, finish) {
    var p = "pip " + args.join(" ");
    info.log("install python packages...");
    child_process.exec(p, {
        env: pythonEnv
    }, function (err, stdout, stderr) {
        if (err)
            error.log("pip failure: " + err);
        if (stdout)
            info.log(stdout.toString());
        if (stderr)
            error.log(stderr.toString());
        finish();
    });
}
function deploy(d, cb, isScript) {
    if (isScript === void 0) { isScript = true; }
    var numFiles = 1;
    var hadExn = false;
    var runNpm = false;
    var runPython = false;
    var runPip = false;
    info.log("starting deployment");
    var finish = function () {
        if (!isScript) {
            cb(null, { status: "ok" });
            return;
        }
        try {
            reloadScript();
            scriptLoadPromise.done(function () { return cb(null, { status: "ok" }); }, function (err) {
                handleError(err);
                cb(err, null);
            });
        }
        catch (e) {
            handleError(e);
            cb(e, null);
        }
    };
    var oneUp = function () {
        if (numFiles == 0 || --numFiles == 0) {
            if (runNpm) {
                runNpm = false;
                executeNpm(["install"], oneUp);
            }
            else if (runPython) {
                runPython = false;
                initPython(runPip, oneUp);
            }
            else if (runPip) {
                runPip = false;
                executePip(["install", "-r", "requirements.txt"], oneUp);
            }
            else {
                finish();
            }
        }
    };
    if (isScript) {
        tdstate.numDeploys = (tdstate.numDeploys || 0) + 1;
        tdstate.deployedId = "";
        saveState();
    }
    debug.log("deploy: " + JSON.stringify(d.files.map(function (f) { return f.path; })));
    d.files.forEach(function (fe) {
        numFiles++;
        processFileEntry(fe, function (err) {
            if (isScript && fe.path == "package.json" && fe.updated)
                runNpm = true;
            else if (isScript && fe.path == "requirements.txt") {
                runPython = true;
                runPip = fe.updated;
            }
            if (hadExn)
                saveState();
            else if (err) {
                hadExn = true;
                cb(err, null);
            }
            else {
                oneUp();
            }
        });
    });
    oneUp();
}
function clone(obj) {
    var r = new obj.constructor;
    for (var k in obj) {
        if (obj.hasOwnProperty(k))
            r[k] = obj[k];
    }
    return r;
}
function createProcess(d) {
    var isWin = /^win/.test(os.platform());
    debug.log("running: " + (d.cwd || "") + ">" + d.command + (d.args ? (" " + d.args.join(" ")) : ""));
    var env = clone(d.env || process.env);
    if (pythonEnv)
        Object.keys(pythonEnv).forEach(function (k) { return env[k] = pythonEnv[k]; });
    var proc = child_process.spawn(d.args ? d.command : isWin ? "cmd" : "sh", d.args || [isWin ? "/c" : "-c", d.command], {
        cwd: d.cwd || undefined,
        env: env,
    });
    proc.stdout.setEncoding("utf8");
    proc.stderr.setEncoding("utf8");
    return proc;
}
function runCommand(d, f) {
    var proc = createProcess(d);
    proc.stdin.write(d.stdin || "", "utf8");
    proc.stdin.end();
    var stdout = "";
    var stderr = "";
    proc.stdout.on("data", function (data) {
        process.stdout.write(data);
        stdout += data;
    });
    proc.stderr.on("data", function (data) {
        process.stdout.write(data);
        stderr += data;
    });
    proc.on("exit", function (code) {
        f({
            code: code,
            stdout: stdout,
            stderr: stderr,
        });
    });
}
function deployAr(ar, isScript) {
    if (!isScript)
        tdstate.downloadedFiles = {};
    deploy(ar.data, function (err, resp) {
        if (err)
            ar.ok({ status: "error", message: err + "" });
        else
            ar.ok(resp);
    }, isScript);
}
var socketCmds = {
    shell: function (ws, data) {
        data.cwd = dataPath(data.cwd);
        var proc = createProcess(data);
        socketCmds['kill'](ws, data);
        ws.currProc = proc;
        debug.log('process ' + ws.currProc.pid);
        proc.stdin.write(data.stdin || "", "utf8");
        if (!data.streamStdin)
            proc.stdin.end();
        proc.stdout.on("data", function (data) {
            process.stdout.write(data);
            ws.sendJson({ op: "stdout", data: data });
        });
        proc.stderr.on("data", function (data) {
            process.stdout.write(data);
            ws.sendJson({ op: "stderr", data: data });
        });
        proc.on("exit", function (code) {
            ws.currProc = null;
            ws.sendJson({ op: "exit", code: code });
        });
        proc.on("error", function (err) {
            ws.currProc = null;
            ws.sendError(err);
        });
    },
    stdin: function (ws, data) {
        if (ws.currProc)
            ws.currProc.write(data.data || "", "utf8");
        else
            ws.sendError("no child process");
    },
    kill: function (ws, data) {
        if (ws.currProc && ws.currProc.pid) {
            debug.log('killing process ' + ws.currProc.pid);
            ws.currProc.kill("SIGKILL");
            ws.currProc = null;
        }
        if (ws.currSock) {
            debug.log('closing socket');
            ws.currSock.destroy();
            ws.currSock = null;
        }
    },
    log: function (ws, data) {
        logListeners.push(ws);
    },
    connect: function (ws, data) {
        socketCmds['kill'](ws, data);
        ws.currSock = net.connect(data.options, function () {
            ws.currSock.setEncoding("utf8");
            ws.sendJson({ op: "connected" });
        });
        ws.currSock.on("data", function (data) {
            ws.sendJson({ op: "recv", data: data });
        });
        ws.currSock.on("error", function (err) {
            ws.currSock = null;
            ws.sendError(err);
        });
    },
    send: function (ws, data) {
        if (!ws.currSock)
            ws.sendError("no socket open");
        else
            ws.currSock.write(data.data, "utf8");
    },
};
var logListeners = [];
function sendLogMsg(json) {
    logListeners = logListeners.filter(function (w) { return w.readyState == WebSocket.OPEN; });
    var payload = JSON.stringify(json);
    logListeners.forEach(function (w) { return w.send(payload); });
}
var logTransport = {
    log: function (level, category, msg, meta) {
        if (logListeners.length == 0)
            return;
        sendLogMsg({
            op: "logmsg",
            level: level,
            category: category,
            msg: msg,
            meta: meta
        });
    },
    logException: function (err, meta) {
        if (logListeners.length == 0)
            return;
        sendLogMsg({
            op: "logexception",
            err: err + "",
            meta: meta,
        });
    },
};
function mgmtSocket(ws) {
    ws.sendJson = function (j) { return ws.send(JSON.stringify(j)); };
    ws.sendError = function (err) { return ws.sendJson({ op: "error", message: err + "" }); };
    ws.on("message", function (msg) {
        var cmd = JSON.parse(msg.data);
        if (socketCmds.hasOwnProperty(cmd.op))
            socketCmds[cmd.op](ws, cmd);
        else
            ws.sendJson({ error: "unknown command " + cmd.op });
    });
    ws.on("close", function () {
        socketCmds["kill"](ws, {});
    });
}
var pluginCmds = {
    mkdir: function (ar) { return mkDirP(dataPath(path.join(ar.data.name, "dummy")), ar.data.mode, function () {
        ar.pluginCb()(undefined, undefined);
    }); },
    writeFile: function (ar) {
        mkDirP(dataPath(ar.data.name));
        return fs.writeFile(dataPath(ar.data.name), ar.data.data, "utf8", ar.pluginCb());
    },
    readFile: function (ar) { return fs.readFile(dataPath(ar.data.name), "utf8", ar.pluginCb(true)); },
    readDir: function (ar) { return fs.readdir(dataPath(ar.data.name), ar.pluginCb(true)); },
    writeFiles: function (ar) {
        ar.data.files.forEach(function (f) { return f.path = dataPath(f.path); });
        deployAr(ar, false);
    },
    shell: function (ar) {
        ar.data.cwd = dataPath(ar.data.cwd);
        runCommand(ar.data, function (r) { return ar.ok(r); });
    },
    open: function (ar) { return openUrl(ar.data.url, function () { return ar.ok({}); }); },
    pythonEnv: function (ar) { return initPython(false, function (err) {
        if (err)
            ar.exception(err);
        else
            ar.ok({});
    }); },
};
function hasAutoUpdate() {
    return process.env["TD_AUTO_UPDATE_ENABLED"] === "true";
}
var mgmt = {
    config: function (ar) {
        ar.ok(config);
    },
    stats: function (ar) {
        ar.ok({
            shellVersion: config.shellVersion,
            shellSha: shellSha(),
            autoUpdate: hasAutoUpdate(),
            memory: process.memoryUsage(),
            uptime: process.uptime(),
            nodeVersion: process.version,
            argv: process.argv,
            numRequests: currentReqNo,
            numDeploys: tdstate.numDeploys,
        });
    },
    autoupdate: function (ar) {
        if (hasAutoUpdate()) {
            fs.writeFile(__filename, ar.data.shell, "utf8", function (err) {
                if (err)
                    ar.exception(err);
                else {
                    info.log("updated shell, restarting");
                    ar.ok({ status: "ok" });
                    setTimeout(function () { return process.exit(0); }, 1000);
                }
            });
        }
        else {
            ar.ok({ error: "auto update not enabled" });
        }
    },
    info: function (ar) {
        loadScript(function () {
            TDev.RT.Node.getRuntimeInfoAsync(ar.cmd.slice(1).join("/")).done(function (resp) { return ar.ok(resp); }, function (err) { return ar.exception(err); });
        });
    },
    runtime: function (ar) {
        loadScript(function () {
            TDev.RT.Node.runtimeOpAsync(ar.cmd.slice(1).join("/"), ar.data).done(function (resp) { return ar.ok(resp); }, function (err) { return ar.exception(err); });
        });
    },
    logs: function (ar) {
        ar.ok({
            shellVersion: config.shellVersion,
            error: error.getMsgs(),
            info: info.getMsgs(),
            debug: debug.getMsgs(),
        });
    },
    combinedlogs: function (ar) {
        var msgs = error.getMsgs().concat(info.getMsgs()).concat(debug.getMsgs());
        msgs.sort(function (a, b) { return b.timestamp - a.timestamp; });
        ar.ok({
            shellVersion: config.shellVersion,
            logs: msgs,
        });
    },
    exit: function (ar) {
        nodeExit();
        ar.ok({ msg: "This probably won't make it out." });
    },
    runcli: function (ar) {
        runCommand(ar.data, function (r) { return ar.ok(r); });
    },
    plugin: function (ar) {
        if (pluginCmds.hasOwnProperty(ar.cmd[1]))
            pluginCmds[ar.cmd[1]](ar);
        else
            ar.error(404, "plugin api missing");
    },
    writefiles: function (ar) { return deployAr(ar, false); },
    deploy: function (ar) { return deployAr(ar, true); },
    ctrlresp: function (ar) {
        for (var i = 0; i < pendingProxyEntries.length; ++i) {
            var pe = pendingProxyEntries[i];
            if (pe.postBackId == ar.cmd[1]) {
                pendingProxyEntries.splice(i, 1);
                pe.ar.resp.writeHead(ar.data.code, ar.data.headers);
                var dd = ar.data.data;
                if (typeof dd != "string")
                    dd = JSON.stringify(dd);
                pe.ar.resp.end(dd, "utf8");
                ar.ok({});
                return;
            }
        }
        ar.error(404, "no more");
    },
    proxy: function (ar) {
        var id = ar.cmd[1];
        var pb = crypto.randomBytes(20).toString("hex");
        var ent = new ProxyEntry(ar, pb, ar.cmd[1], {
            data: ar.data,
            cmd: ar.cmd.slice(2),
            postBack: "/-tdevmgmt-/" + config.deploymentKey + "/ctrlresp/" + pb
        });
        pendingProxyEntries.push(ent);
        for (var i = 0; i < pendingContollers.length; ++i) {
            var f = pendingContollers[i];
            if (f()) {
                pendingContollers.splice(i, 1);
                return;
            }
        }
    },
    ctrl: function (ar) {
        if (scanProxyQueue(ar))
            return;
        else {
            var fn = function () { return scanProxyQueue(ar); };
            pendingContollers.push(fn);
            setTimeout(function () {
                var idx = pendingContollers.indexOf(fn);
                if (idx >= 0) {
                    pendingContollers.splice(idx, 1);
                    ar.resp.writeHead(204);
                    ar.resp.end();
                }
            }, 30000);
        }
    },
    savecache: function (ar) {
        fs.writeFile(dataPath("offlinecache.json"), JSON.stringify(ar.data), "utf8", function (err) {
            if (err)
                ar.exception(err);
            else
                ar.ok({});
        });
    },
    resizeimages: function (ar) {
        var Jimp = require('jimp');
        var src = ar.data.src;
        var todo = ar.data.files.length;
        function crop(img, x, y, w, h) {
            var bitmap = [];
            var data = img.bitmap.data;
            img.scan(x, y, w, h, function (_x, _y, idx) {
                bitmap.push(data[idx]);
                bitmap.push(data[idx + 1]);
                bitmap.push(data[idx + 2]);
                bitmap.push(data[idx + 3]);
            });
            img.bitmap.data = new Buffer(bitmap);
            img.bitmap.width = w;
            img.bitmap.height = h;
        }
        function onedone() {
            todo--;
            if (todo == 0) {
                ar.ok({});
            }
        }
        fs.exists(src, function (srcexists) {
            if (!srcexists) {
                ar.ok({ status: "error", message: src + ' does not exist' });
                return;
            }
            ar.data.files.forEach(function (target) {
                var img = new Jimp(src, function () {
                    var w = img.bitmap.width;
                    var h = img.bitmap.height;
                    var tw = target.width;
                    var th = target.height;
                    if (w / tw > h / th) {
                        var dx = Math.floor((w - h * tw / th) / 2);
                        crop(img, dx, 0, w - 2 * dx, h);
                    }
                    else {
                        var dy = Math.floor((h - w * th / tw) / 2);
                        crop(img, 0, dy, w, h - 2 * dy);
                    }
                    img.resize(tw, th);
                    mkDirP(target.path);
                    img.write(target.path, function () { return onedone(); });
                });
            });
        });
    }
};
var ProxyApiRequest = (function (_super) {
    __extends(ProxyApiRequest, _super);
    function ProxyApiRequest(controller, d) {
        _super.call(this, null, null);
        this.data = d.data;
        this.cmd = d.cmd;
        var pp = url.parse(controller);
        this.postBackUrl = pp.protocol + "//" + pp.host + d.postBack;
        debug.log("PROXY " + this.cmd.join("/"));
    }
    ProxyApiRequest.prototype.setCors = function () {
    };
    ProxyApiRequest.prototype.error = function (code, text) {
        info.log("HTTP (proxied) error " + code + ": " + text);
        this.postBack({
            code: code,
            headers: { 'Content-Type': 'text/plain' },
            data: text
        });
    };
    ProxyApiRequest.prototype.ok = function (r) {
        this.postBack({
            code: 200,
            headers: { 'Content-Type': 'application/json; encoding=utf-8' },
            data: r
        });
    };
    ProxyApiRequest.prototype.postBack = function (d) {
        var opts = url.parse(this.postBackUrl);
        opts.method = 'POST';
        var req = (/^https/.test(this.postBackUrl) ? https : http).request(opts);
        req.write(JSON.stringify(d), "utf8");
        req.end();
    };
    ProxyApiRequest.prototype.execute = function () {
        try {
            this.processMgmt();
        }
        catch (e) {
            this.exception(e);
        }
    };
    return ProxyApiRequest;
})(ApiRequest);
function scanProxyQueue(ar) {
    var id = ar.cmd[1];
    var seenOld = 0;
    var past = Date.now() - 600000;
    pendingProxyEntries = pendingProxyEntries.filter(function (pe) { return pe.timestamp > past; });
    for (var i = 0; i < pendingProxyEntries.length; ++i) {
        var pe = pendingProxyEntries[i];
        if (pe.id == id) {
            pe.id = "--processing--";
            ar.ok(pe.preq);
            return true;
        }
    }
    return false;
}
var pendingProxyEntries = [];
var pendingContollers = [];
var ProxyEntry = (function () {
    function ProxyEntry(ar, postBackId, id, preq) {
        this.ar = ar;
        this.postBackId = postBackId;
        this.id = id;
        this.preq = preq;
        this.timestamp = Date.now();
    }
    return ProxyEntry;
})();
function saveState() {
    fs.writeFileSync(dataPath("tdstate.json"), JSON.stringify(tdstate));
}
function getMime(filename) {
    var ext = path.extname(filename).slice(1);
    switch (ext) {
        case "txt": return "text/plain";
        case "html":
        case "htm": return "text/html";
        case "css": return "text/css";
        case "ts": return "text/plain";
        case "js": return "application/javascript";
        case "jpg":
        case "jpeg": return "image/jpeg";
        case "png": return "image/png";
        case "ico": return "image/x-icon";
        case "manifest": return "text/cache-manifest";
        case "json": return "application/json";
        case "svg": return "image/svg+xml";
        default: return "application/octet-stream";
    }
}
var app;
var wsServer;
var needsStop = false;
var scriptLoadPromise;
var rootDir = "";
function loadScript(f) {
    scriptLoadPromise.done(f);
}
function initScript(f) {
    scriptLoadPromise.then(function () { return TDev.Runtime.theRuntime.initPromise; }).done(f);
}
function reloadScript() {
    scriptLoadPromise = loadScriptCoreAsync();
}
var logException = function (msg) {
};
function loadScriptCoreAsync() {
    if (needsStop) {
        needsStop = false;
        return global.TDev.Runtime.stopPendingScriptsAsync().thenalways(function () { return loadScriptCoreAsync(); });
    }
    debug.log("handling script files");
    global.TDev = {};
    if (!global.window)
        global.window = {};
    if (!global.document)
        global.document = global.window.document = { URL: "http://localhost/" };
    global.window.isNodeJS = true;
    var files = ["./static/browser.js", "./static/runtime.js", "./script/compiled.js"];
    var total = "";
    files.forEach(function (f) {
        total += fs.readFileSync(f, "utf8") + "\n";
    });
    total = total.replace(/^var TDev;/mg, "");
    total = total.replace(/^  TDev;/mg, "  TDev_fake;");
    fs.writeFileSync("script/total.js", total, "utf8");
    debug.log("require " + rootDir + "/script/total.js");
    var name = require.resolve(rootDir + "/script/total.js");
    delete require.cache[name];
    require(rootDir + "/script/total.js");
    debug.log("loading script");
    var res = new TDev.PromiseInv();
    loadWsModule(function () {
        var WebSocketServer = wsModule.server;
        if (wsServer) {
            debug.log("shutting down websockets");
            wsServer.closeConnections();
        }
        debug.log("loading new websockets server");
        wsServer = new TDev.WebSocketServerWrapper(wsModule);
        needsStop = true;
        TDev.RT.Node.logInfo = function (s) { return info.log(s); };
        TDev.RT.Node.logError = function (s) { return error.log(s); };
        TDev.RT.Node.handleError = handleError;
        logException = function (msg) {
            try {
                TDev.RT.App.logException(msg);
            }
            catch (e) {
            }
        };
        TDev.RT.App.addTransport(logTransport);
        res.success(TDev.RT.Node.loadScriptAsync(wsServer));
    });
    return res;
}
function loadWsModule(f) {
    if (wsModule)
        f();
    else {
        var finish = function () {
            wsModule = require("faye-websocket");
            global.WebSocket = wsModule.Client;
            debug.log("Faye websocket loaded");
            f();
        };
        if (fs.existsSync(rootDir + "/node_modules/faye-websocket"))
            finish();
        else
            executeNpm(["install", "faye-websocket"], finish);
    }
}
var lastCtrlResponse = Date.now();
var numControllers = 0;
var maxControllers = 2;
function nodeExit() {
    process.kill(process.pid, "SIGTERM");
}
function checkRespawn() {
    setTimeout(function () {
        if (Date.now() - lastCtrlResponse > 40000) {
            error.log("cannot connect to controller for 40s; exiting");
            nodeExit();
        }
        else {
            checkRespawn();
        }
    }, 20000);
}
function connectToContoller(controller) {
    var req;
    if (numControllers >= maxControllers)
        return;
    numControllers++;
    var opts = url.parse(controller);
    opts.agent = false;
    var respawn = function () {
        if (Date.now() - lastCtrlResponse > 40000) {
            error.log("cannot connect to controller for 40s; exiting");
            nodeExit();
        }
        else {
            if (numControllers == 0)
                connectToContoller(controller);
            setTimeout(function () { return connectToContoller(controller); }, Math.random() * 5000);
            setTimeout(function () { return connectToContoller(controller); }, Math.random() * 5000);
        }
    };
    var dbg = function (s) { return console.log(s); };
    try {
        if (/^https/.test(controller)) {
            req = https.request(opts);
        }
        else {
            req = http.request(opts);
        }
    }
    catch (exn) {
        error.log("exception when creating ctrl request: " + exn);
        nodeExit();
    }
    dbg("start ctrl " + controller);
    req.end();
    var added = 1;
    var gotSomeResponse = false;
    req.on("response", function (resp) {
        numControllers -= added;
        added = 0;
        if (resp.statusCode == 204) {
            dbg("response 204");
            lastCtrlResponse = Date.now();
            respawn();
        }
        else if (resp.statusCode == 200) {
            dbg("response 200");
            lastCtrlResponse = Date.now();
            respawn();
            var dat = "";
            resp.setEncoding("utf8");
            resp.on("data", function (d) { return dat += d; });
            resp.on("end", function () {
                var pr = new ProxyApiRequest(controller, JSON.parse(dat));
                dbg("execute");
                pr.execute();
            });
        }
        else {
            error.log("invalid controller response: " + resp.statusCode);
            respawn();
        }
    });
    req.on("error", function (err) {
        numControllers -= added;
        added = 0;
        error.log("ctrl error: " + err);
        respawn();
    });
}
var editorCache;
function cacheError(err) {
    error.log(err + "");
}
function cacheEditor(version, manifest) {
    var cache = {};
    var ent = function (buf, hd) {
        var tp = hd['content-type'];
        var r = {
            headers: {
                'Content-Type': tp
            }
        };
        if (/image/.test(tp))
            r.b64Content = buf.toString("base64");
        else
            r.content = buf.toString("utf8");
        return r;
    };
    downloadFile(manifest, function (err, buf, hd) {
        if (err) {
            cacheError(err);
            return;
        }
        var text = buf.toString("utf8");
        if (editorCache[manifest] && editorCache[manifest].content == text)
            return;
        info.log("caching new version of the editor, " + text.length);
        debug.log(text);
        cache[manifest] = ent(buf, hd);
        var num = 0;
        var lines = text.split(/\n/);
        lines.push(manifest.replace(/\.manifest/, ""));
        lines.push(manifest.replace(/\.manifest/, ".error"));
        lines.push(manifest.replace(/\.manifest/, ".browsers"));
        var l0 = lines.filter(function (l) { return /\/c\/main.js$/.test(l); })[0];
        if (l0)
            l0 = l0.replace(/main.js$/, "");
        lines.forEach(function (l) {
            l = l.replace(/^\s+/, "").replace(/\s+$/, "");
            if (/^#/.test(l))
                return;
            if (!/^http/.test(l))
                return;
            num++;
            downloadFile(l, function (err, buf, hd) {
                if (err) {
                    cacheError(err);
                    return;
                }
                cache[l] = ent(buf, hd);
                if (--num == 0) {
                    Object.keys(cache).forEach(function (k) { return editorCache[k] = cache[k]; });
                    fs.writeFile(dataPath(version + ".json"), JSON.stringify(cache, null, 2), "utf8", function (err) {
                        if (err)
                            cacheError(err);
                    });
                }
            });
        });
    });
}
function proxyEditor(cmds, req, resp) {
    if (!editorCache) {
        editorCache = {};
        ["current", "beta", "latest"].forEach(function (v) {
            var editorJson = dataPath(v + ".json");
            if (fs.existsSync(editorJson)) {
                var c = JSON.parse(fs.readFileSync(editorJson, "utf8"));
                Object.keys(c).forEach(function (k) { return editorCache[k] = c[k]; });
            }
        });
        if (!fs.existsSync(dataPath("cdn-cache"))) {
            fs.mkdirSync(dataPath("cdn-cache"));
            fs.mkdirSync(dataPath("cdn-cache/meta"));
        }
    }
    var rel = cmds[0];
    if (!rel)
        rel = "current";
    var localPath = process.env["TD_LOCAL_EDITOR_PATH"];
    if (rel == "local" && !localPath)
        rel = "nope";
    if (!/^(current|beta|latest|local|cdn-pub|cdn-thumb|cache|^\d\d\d\d\d\d[\da-z\.-]+)$/.test(rel)) {
        resp.writeHead(404, "Not found");
        resp.end("Not found");
        return;
    }
    var file = cmds.slice(1).join("/");
    if (file == "") {
        file = "index.html";
        if (rel == "local" && cmds[1] === undefined) {
            resp.writeHead(301, {
                "Location": "/editor/local/"
            });
            resp.end();
            return;
        }
    }
    var cdn = "https://az31353.vo.msecnd.net/";
    var url = cdn + "app/" + rel + "/c/" + file;
    var path = "https://www.touchdevelop.com/app/";
    var suff = "";
    var cacheDir = "none";
    if (/^cdn-/.test(rel)) {
        file = encodeURIComponent(cdn + rel.slice(4) + "/" + file);
        rel = "cache";
    }
    if (rel == "current")
        path += "current";
    else if (rel == "beta")
        path += "beta";
    else if (rel == "latest")
        path += "latest";
    else if (rel == "cache") {
        url = decodeURIComponent(file);
        url = url.replace(/[?&]access_token=.*/, "");
        file = url.replace(/^https?:\/\/(www\.|az31353.vo.msecnd.net\/)/, "").replace(/[^a-zA-Z0-9\.\-]/g, "_").slice(0, 64);
        var h = crypto.createHash("sha256");
        h.update(new Buffer(url, "utf8"));
        file += "." + h.digest("base64").replace(/[^a-zA-Z0-9]/g, "").slice(0, 16);
        cacheDir = dataPath("cdn-cache");
    }
    else
        suff = "?releaseid=" + rel;
    var rewrite;
    var specRel = rel;
    var selfUrl = "http://" + req.headers.host + "/editor";
    var relUrl = selfUrl + "/" + rel + "/";
    var replUrl = function (s) { return s.replace(/https:\/\/az31353.vo.msecnd.net\/app\/\d\d\d[\da-z\.-]+\/(c\/)?/g, relUrl); };
    switch (file) {
        case "index.html":
            url = path + suff;
            rewrite = function (s) {
                s = replUrl(s);
                if (rel != "local") {
                    s = s.replace(/manifest="[^"]+"/, "manifest=\"" + selfUrl + "/" + specRel + "/manifest" + "\"");
                    s = s.replace(/(browsers|error)Url = .*/g, function (a, b) { return b + "Url = \"" + selfUrl + "/" + specRel + "/" + b + "\""; });
                }
                s = s.replace(/localProxy = ".*"/, 'localProxy = "yes"');
                if (rel == "local") {
                    s = s.replace(/betaFriendlyId = ".*"/, "betaFriendlyId = \"(local)\"");
                }
                else if (specRel == "current") {
                    s = s.replace(/betaFriendlyId = ".*"/, "betaFriendlyId = \"\"");
                }
                return s;
            };
            break;
        case "browsers":
        case "error":
        case "manifest":
            url = path + "." + file + suff;
            rewrite = replUrl;
            break;
        case "offlinecache":
            fs.readFile(dataPath("offlinecache.json"), "utf8", function (err, data) {
                if (err)
                    data = "{}";
                resp.writeHead(200, { 'Content-Type': 'application/json; encoding=utf-8' });
                var d = JSON.parse(data);
                d.entroy = crypto.randomBytes(64).toString("base64");
                resp.end(JSON.stringify(d));
            });
            return;
    }
    if ((rel == "current" || rel == "beta" || rel == "latest") && file == "manifest")
        cacheEditor(rel, url);
    var serveText = function (text) {
        if (!rewrite)
            rewrite = function (s) { return s; };
        if (!/^\d/.test(rel)) {
            var m = /https:\/\/az31353.vo.msecnd.net\/app\/(\d\d\d[\da-z\.-]+)/.exec(text);
            if (m) {
                rel = m[1];
                relUrl = selfUrl + "/" + rel + "/";
            }
        }
        resp.end(rewrite(text), "utf8");
    };
    if (rel == "cache" || /^cdn-/.test(rel)) {
        fs.readFile(cacheDir + "/meta/" + file + ".json", "utf8", function (err, str) {
            var sendCached = function () {
                var meta = JSON.parse(str);
                resp.writeHead(200, meta.headers);
                fs.readFile(cacheDir + "/" + meta.filename, null, function (err, data) { return resp.end(data); });
            };
            if (err) {
                downloadFile(url, function (err, buff, hd) {
                    if (err) {
                        error.log(err);
                        resp.writeHead(404);
                        resp.end(err);
                    }
                    else {
                        debug.log("CACHE " + url);
                        var ctp = hd['content-type'];
                        var ext = ctp.replace(/.*\//, "").replace(/[^a-z]/g, "").slice(0, 8);
                        var fn = file + "." + ext;
                        fs.writeFile(cacheDir + "/" + fn, buff, null, function (err) {
                            if (!err) {
                                str = JSON.stringify({
                                    filename: fn,
                                    headers: {
                                        'Content-Type': hd['content-type']
                                    }
                                });
                                fs.writeFile(cacheDir + "/meta/" + file + ".json", str, "utf8", sendCached);
                            }
                        });
                    }
                });
            }
            else
                sendCached();
        });
    }
    else if (rel == "local") {
        var mime = getMime(file);
        var enc = /^text\//.test(mime) ? "utf8" : null;
        if (fs.existsSync(localPath + "/www/" + file))
            localPath += "/www";
        else if (fs.existsSync(localPath + "/build/" + file))
            localPath += "/build";
        fs.readFile(localPath + "/" + file, enc, function (err, data) {
            if (err) {
                resp.writeHead(404);
                resp.end(err + "");
            }
            else {
                if (rewrite)
                    data = rewrite(data);
                if (typeof data == "string")
                    data = new Buffer(data, "utf8");
                resp.writeHead(200, {
                    'Content-Type': mime,
                    'Content-Length': data.length
                });
                resp.end(data);
            }
        });
    }
    else if (editorCache.hasOwnProperty(url)) {
        var c = editorCache[url];
        resp.writeHead(200, c.headers);
        if (c.b64Content)
            resp.end(new Buffer(c.b64Content, "base64"));
        else
            serveText(c.content);
    }
    else {
        downloadFile(url, function (err, buff, hd) {
            if (err) {
                error.log(url + " - " + err);
                resp.writeHead(404);
                resp.end("Problem");
            }
            else {
                resp.writeHead(200, {
                    'Content-Type': hd['content-type']
                });
                if (rewrite) {
                    serveText(buff.toString("utf8"));
                }
                else {
                    resp.end(buff);
                }
            }
        });
    }
}
function handleReq(req, resp) {
    var ar = new ApiRequest(req, resp);
    try {
        var u = url.parse(req.url);
        var uu = u.pathname;
        if (uu == "/")
            uu = "index.html";
        if (!/^[\/\\]/.test(uu))
            uu = "/" + uu;
        uu = path.normalize(uu).replace(/^[\/\\]+/, "").replace(/\\/g, "/");
        var cmd = uu.split(/\//);
        if (cmd[0] != "editor")
            debug.log(req.method + " " + req.url);
        if (cmd[0] == "-tdevmgmt-") {
            ar.setCors();
            if (req.method == "OPTIONS") {
                resp.writeHead(200, "OK");
                resp.end();
            }
            else {
                if (cmd[1] === config.deploymentKey) {
                    ar.handleMgmt(cmd.slice(2));
                }
                else {
                    ar.error(403, "wrong key");
                }
            }
            return;
        }
        else if (cmd[0] == "editor" && process.env["TD_ALLOW_EDITOR"] === "true") {
            proxyEditor(cmd.slice(1), req, resp);
            return;
        }
        else if (cmd[0] == "favicon.ico" && process.env["TD_ALLOW_EDITOR"] === "true") {
            proxyEditor(["cache", encodeURIComponent("https://www.touchdevelop.com/favicon.ico")], req, resp);
        }
        else if (!scriptLoadPromise) {
            ar.error(404, "No script deployed");
        }
        else {
            initScript(function () {
                var rt = TDev.Runtime.theRuntime;
                if (rt.requestHandler)
                    rt.requestHandler(req, resp);
                else {
                    var local = path.join("static", uu);
                    fs.stat(local, function (err, stats) {
                        if (!err && stats.isFile()) {
                            fs.readFile(local, function (err, content) {
                                resp.writeHead(200, { 'Content-Type': getMime(local) });
                                resp.end(content, "utf-8");
                            });
                        }
                        else {
                            ar.error(404, "File not found; forgot /api ?");
                        }
                    });
                }
            });
        }
    }
    catch (e) {
        ar.exception(e);
    }
}
function handleError(err) {
    if (err.rtProtectHandled)
        return;
    error.log("exception (top): " + err.toString() + "\n" + err.stack);
    logException("unhandled exception, forgot lib.protect()? " + err.toString() + "\n" + err.stack);
}
function openUrl(startUrl, cb) {
    if (!/^[a-z0-9A-Z#=\.\-\\\/%:\?_]+$/.test(startUrl)) {
        error.log("invalid URL to open: " + startUrl);
        return;
    }
    var cmds = {
        darwin: "open",
        win32: "start",
        linux: "xdg-open"
    };
    if (/^win/.test(os.platform()) && !/^[a-z0-9]+:\/\//i.test(startUrl))
        startUrl = startUrl.replace('/', '\\');
    else
        startUrl = startUrl.replace('\\', '/');
    var cmd = cmds[process.platform];
    if (cmd) {
        runCommand({ command: cmd + " " + startUrl }, function (resp) {
        });
    }
    if (cb)
        cb();
}
function runScript(id, start, reload) {
    var pkgPath = process.env["TD_PKG_PATH"] || "";
    var getpackage = function (id) {
        if (!pkgPath && tdstate.deployedId == id) {
            debug.log("starting cached script");
            reload();
        }
        else
            downloadJson("https://www.touchdevelop.com/api/" + id + "/" + (pkgPath || "nodepackage"), function (err, content) {
                if (err)
                    handleError(err);
                else if (!pkgPath && (!content.meta || !content.meta.isCloud)) {
                    handleError("the script is not marked as web service");
                }
                else
                    deploy(content, function (err, resp) {
                        if (err) {
                            handleError(err);
                        }
                        else {
                            tdstate.deployedId = id;
                            saveState();
                            start();
                        }
                    });
            });
    };
    downloadJson("https://www.touchdevelop.com/api/" + id, function (err, json) {
        if (err)
            handleError(err);
        else if (json.updateid != id && json.updatetime > json.time) {
            info.log("getting updated script /" + json.updateid);
            getpackage(json.updateid);
        }
        else {
            info.log("getting original script /" + id);
            getpackage(id);
        }
    });
}
function respawnLoop() {
    info.log('starting shell watch...');
    function copy() {
        debug.log("copying touchdevelop.js to local folder...");
        var src = fs.readFileSync(__filename, "utf8");
        fs.writeFileSync("tdserver.js", src, "utf8");
    }
    var attempts = 0;
    function startOne() {
        var startTime = Date.now();
        var child = child_process.fork(process.cwd() + "/tdserver.js", process.argv.slice(2));
        child.on("exit", function (code) {
            debug.log("local folder touchdevelop exit, " + code);
            if (code === 0) {
                if (++attempts > 10) {
                    console.error("Too many failures, aborting. Please retry manually.");
                    process.exit();
                }
                else {
                    debug.log("Failure, retrying in 5s...");
                    setTimeout(startOne, 5000);
                }
            }
        });
    }
    if (!fs.existsSync("tdserver.js"))
        copy();
    startOne();
}
var _shellSha = "";
function shellSha() {
    if (!_shellSha) {
        var h = crypto.createHash("sha256");
        h.update(fs.readFileSync(__filename));
        _shellSha = h.digest("hex").toLowerCase();
    }
    return _shellSha;
}
function main() {
    inAzure = !!process.env.PORT;
    var port = process.env.PORT || 4242;
    rootDir = process.cwd();
    var args = process.argv.slice(2);
    var scriptId = "";
    var internet = inAzure ? true : false;
    var useBeta = false;
    var useLatest = false;
    var cli = false;
    var useHome = false;
    inNodeWebkit = fs.existsSync("./app.html");
    var usage = function () {
        console.error("unknown option: " + args[0]);
        console.error("Options:");
        console.error("  --controller URL  -- a website controlling this shell (-c)");
        console.error("  --port NUMBER     -- port to listen to (-p)");
        console.error("  --scriptid ID     -- fetch newest version of /ID and run it (-s)");
        console.error("  --cli             -- don't start the browser");
        console.error("  --latest          -- use latest (potentially unstable) TouchDevelop version");
        console.error("  --internet        -- allow connections from outside localhost");
        console.error("  --usehome         -- write all cached files to the user home folder");
        console.error("  NAME=VALUE        -- set environment variable for the script");
        process.exit(1);
    };
    if (!inAzure && !inNodeWebkit && __dirname != process.cwd()) {
        if (isNpm)
            process.env["TD_ALLOW_EDITOR"] = "true";
        respawnLoop();
        return;
    }
    debug.log("starting with " + args.join(" "));
    while (args.length > 0) {
        switch (args[0]) {
            case "-c":
            case "--controller":
                args.shift();
                controllerUrl = args.shift();
                break;
            case "-p":
            case "--port":
                args.shift();
                port = parseInt(args.shift());
                break;
            case "-s":
            case "--scriptid":
                args.shift();
                scriptId = args.shift();
                break;
            case "--cli":
                args.shift();
                cli = true;
                break;
            case "--beta":
                args.shift();
                useBeta = true;
                break;
            case "--latest":
                args.shift();
                useLatest = true;
            case "--internet":
                args.shift();
                internet = true;
                break;
            case "--usehome":
                args.shift();
                useHome = true;
                break;
            default:
                var m = /^([A-Za-z0-9_]+)=(.*)$/.exec(args[0]);
                if (m) {
                    debug.log("set " + m[1] + "=" + m[2]);
                    process.env[m[1]] = m[2];
                    args.shift();
                }
                else {
                    usage();
                }
                break;
        }
    }
    useBeta = true;
    if (inNodeWebkit) {
        cli = true;
        process.env['TD_ALLOW_EDITOR'] = true;
        useHome = true;
    }
    if (useHome && userHome()) {
        dataDir = path.join(userHome(), "TouchDevelop");
        mkDirP(path.join(dataDir, 'dummy'));
        info.log('data directory: ' + dataDir);
    }
    debug.log("start, autoupdate=" + hasAutoUpdate());
    var shouldStart = !cli && (isNpm || !!process.env['TD_LOCAL_DROP'] || !!process.env['TD_ALLOW_EDITOR']);
    var tdConfigJson = dataPath("tdconfig.json");
    if (process.env['TD_LOCAL_DROP'] || !fs.existsSync(tdConfigJson)) {
        debug.log("generating initial tdconfig.json");
        config = {
            deploymentKey: crypto.randomBytes(20).toString("hex").toLowerCase(),
            timestamp: Date.now(),
            tiemstampText: new Date().toString(),
            shellVersion: 108
        };
        fs.writeFileSync(tdConfigJson, JSON.stringify(config, null, 2));
    }
    config = JSON.parse(fs.readFileSync(tdConfigJson, "utf8"));
    info.log("Deployment key: " + config.deploymentKey);
    var startUrl = undefined;
    if (process.env['TD_ALLOW_EDITOR']) {
        startUrl = "http://localhost:" + port + "/editor/";
        if (process.env["TD_LOCAL_EDITOR_PATH"])
            startUrl += "local";
        else if (useLatest)
            startUrl += "latest";
        else if (useBeta)
            startUrl += "beta";
        startUrl += "#td_deployment_key=" + config.deploymentKey;
        info.log("Editor URL: " + startUrl);
    }
    if (!startUrl)
        shouldStart = false;
    if (inAzure)
        shouldStart = false;
    if (controllerUrl)
        shouldStart = false;
    process.env['TD_SERVER'] = 'http://localhost:' + port;
    process.env['TD_DEPLOYMENT_KEY'] = config.deploymentKey;
    process.env['TD_CONTROLLER_URL'] = controllerUrl;
    var tdStateJson = dataPath("tdstate.json");
    if (fs.existsSync(tdStateJson))
        tdstate = JSON.parse(fs.readFileSync(tdStateJson, "utf8"));
    else
        tdstate = { downloadedFiles: {}, numDeploys: 0, deployedId: "" };
    process.on('uncaughtException', handleError);
    var startUp = function () {
        if (internet)
            app.listen(port);
        else
            app.listen(port, "127.0.0.1");
        if (controllerUrl) {
            connectToContoller(controllerUrl);
            checkRespawn();
        }
        if (shouldStart)
            openUrl(startUrl);
        info.log('touchdevelop local started...');
    };
    var reload = function () {
        info.log('reloading script...');
        try {
            reloadScript();
            scriptLoadPromise.done(startUp, function (err) {
                handleError(err);
                startUp();
            });
        }
        catch (e) {
            handleError(e);
            startUp();
        }
    };
    app = http.createServer(handleReq);
    app.on("upgrade", function (req, sock, body) {
        loadWsModule(function () {
            if (wsModule.isWebSocket(req) && req.url.slice(0, 12) == "/-tdevmgmt-/") {
                if (req.url.slice(-config.deploymentKey.length) == config.deploymentKey) {
                    debug.log("starting mgmt socket");
                    mgmtSocket(new wsModule(req, sock, body));
                }
                else {
                    debug.log("invalid key for socket");
                    sock.end();
                }
            }
            else if (wsServer)
                wsServer.upgradeCallback(req, sock, body);
            else
                sock.end();
        });
    });
    if (scriptId) {
        shouldStart = false;
        runScript(scriptId, startUp, reload);
    }
    else if (tdstate.numDeploys > 0) {
        reload();
    }
    else {
        startUp();
    }
}
main();
