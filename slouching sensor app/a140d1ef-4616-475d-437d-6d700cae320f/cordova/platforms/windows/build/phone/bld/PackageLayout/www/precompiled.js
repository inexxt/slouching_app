var TDev;
if (!TDev) TDev = {};
TDev.precompiledScript = {
"this": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "cordova_ble_test";
cs.scriptColor = "\u0023800080";
cs.objectSingletons = {};
/* ACTION: main */
function a_xXmjyp5Udu2suwp6(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xXmjyp5Udu2suwp6$0;
  s.name = "main";
  s.$text = undefined;
  s.$format = undefined;
  return s;
}
cs.registerAction("main", "xXmjyp5Udu2suwp6", a_xXmjyp5Udu2suwp6, true);

function ok1(s, a0) {
  return (a0 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok2(s, a0, a1) {
  return (a0 == undefined || a1 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok3(s, a0, a1, a2) {
  return (a0 == undefined || a1 == undefined || a2 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok4(s, a0, a1, a2, a3) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function a_xXmjyp5Udu2suwp6$0(s) {
  (s.pc = "Enne61qt6TE1SGuQ");
  lib.App.import_("cordova", "com.megster.cordova.ble", "\u002a", s);
  (s.pc = "xyDVxYwNmqKN89ng");
  var t_call_0 = lib.App.create_logger("ble", s);
  (/* logger */ s.d.$KvVmFZocbiuImUZu = t_call_0);
  s.rt.logDataWrite();
  (s.pc = "HDeNhUQFuFD09Xtr");
  lib.String_.post_to_wall("Creating a logger", s);
  (s.pc = "npcA4JFNfxJoS3zb");
  return s.rt.enter(a_M4wwLvuZr4aqKv4c(s, a_xXmjyp5Udu2suwp6$1));
}
cs.registerStep(a_xXmjyp5Udu2suwp6$0, 'a_xXmjyp5Udu2suwp6$0');

function a_xXmjyp5Udu2suwp6$1(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  (s.$text = s.rt.returnedFrom.results[0]);
  (s.$format = s.rt.returnedFrom.results[1]);
  (s.pc = "utOGviN4ohH8YxmS");
  (ok1(s, s.$text) && lib.String_.post_to_wall(s.$text, s));
  (s.pc = "QSRXEVYiCdT4qSZR");
  (ok1(s, s.$format) && lib.String_.post_to_wall(s.$format, s));
  return s.rt.leave();
}
cs.registerStep(a_xXmjyp5Udu2suwp6$1, 'a_xXmjyp5Udu2suwp6$1');

/* ACTION: scan */
function a_SA8AgkbYhcrOq98n(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_SA8AgkbYhcrOq98n$0;
  s.name = "scan";
  s.result = undefined;
  return s;
}
cs.registerAction("scan", "SA8AgkbYhcrOq98n", a_SA8AgkbYhcrOq98n, true);

function a_SA8AgkbYhcrOq98n$0(s) {
  (s.pc = "En4qa0bxsuMz4J9u");
  var t_resumeCtx_0 = s.rt.getAwaitResumeCtx(a_SA8AgkbYhcrOq98n$1);
  (function(_resumeCtx){
   var s = _resumeCtx.stackframe;
   function resume() { _saveResults(); _resumeCtx.resume() }
   s.localResume = resume;
  function _saveResults() {
    s.result = res;
  }
  var res = s.result;
  var rt = s.rt;
  function _userCode() {

cordova.plugins.ble.scan([], 5, lib.protect(s, function (result) {\n res = lib.wrapJson(result)\n resume()\n}), \nlib.protect(s, function (error) { \n res = lib.wrapJson({ error: error })\n resume()\n}));

  }
  _userCode();
})(t_resumeCtx_0);
  return a_SA8AgkbYhcrOq98n$1;
}
cs.registerStep(a_SA8AgkbYhcrOq98n$0, 'a_SA8AgkbYhcrOq98n$0');

function a_SA8AgkbYhcrOq98n$1(s) {
  if (s.previous.needsPicker) {
  s.rt.displayResult("res", s.result)
  }
  return s.rt.leave();
}
cs.registerStep(a_SA8AgkbYhcrOq98n$1, 'a_SA8AgkbYhcrOq98n$1');

/* ACTION: scan_a */
function a_M4wwLvuZr4aqKv4c(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_M4wwLvuZr4aqKv4c$0;
  s.name = "scan_a";
  s.results = [];
  s.results[0] = undefined;
  s.results[1] = undefined;
  s.$res = undefined;
  return s;
}
cs.registerAction("scan_a", "M4wwLvuZr4aqKv4c", a_M4wwLvuZr4aqKv4c, true);

function a_M4wwLvuZr4aqKv4c$0(s) {
  (s.pc = "dZgfoTJfNd9KthQF");
  return s.rt.enter(a_SA8AgkbYhcrOq98n(s, a_M4wwLvuZr4aqKv4c$1));
}
cs.registerStep(a_M4wwLvuZr4aqKv4c$0, 'a_M4wwLvuZr4aqKv4c$0');

function a_M4wwLvuZr4aqKv4c$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  (s.$res = t_actRes_0);
  var t_elseIf_1 = true;
  (s.pc = "nR4943DZ16vR6yY5");
  var t_call_2 = (ok1(s, s.$res) && s.$res.contains_key("error", s));
  ok1(s, t_call_2);
  if (t_call_2) {
  (s.pc = "xXaDsSfCxf4Hd2pS");
  var t_call_3 = lib.Invalid.string(s);
  (s.results[0] = t_call_3);
  (s.pc = "H49sWhquS42iBKxi");
  var t_call_4 = lib.Invalid.string(s);
  (s.results[1] = t_call_4);
  } else {
  (s.pc = "F6VzyfC32ktLcppB");
  var t_call_5 = (ok1(s, s.$res) && s.$res.string("text", s));
  (s.results[0] = t_call_5);
  (s.pc = "zlYTpKbxjBlbMg7v");
  var t_call_6 = (ok1(s, s.$res) && s.$res.string("format", s));
  (s.results[1] = t_call_6);
  }
  (s.pc = "SID2F4cSaEyvO4Mv");
  null;
  if (s.previous.needsPicker) {
  s.rt.displayResult("format", s.results[1])
  s.rt.displayResult("text", s.results[0])
  }
  return s.rt.leave();
}
cs.registerStep(a_M4wwLvuZr4aqKv4c$1, 'a_M4wwLvuZr4aqKv4c$1');

(function () {
  var lib, bnd, resolve;
  var bnds = cs.libBindings = {};
  lib = libs["this"] = {};
  bnd = bnds["this"] = libs;
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "this");
    lib["main"] = cs.mkLibProxyFactory(bnd, "this", "main");
    lib["scan"] = cs.mkLibProxyFactory(bnd, "this", "scan");
    lib["scan_a"] = cs.mkLibProxyFactory(bnd, "this", "scan_a");
}());
cs.startFn = function(rt) {
lib.App.rt_start(rt);
lib.Player.rt_start(rt);
lib.Senses.rt_start(rt);
lib.Time.rt_start(rt);
lib.Web.rt_start(rt);
};

cs.stopFn = function(rt) {
lib.App.rt_stop(rt);
lib.Player.rt_stop(rt);
lib.Senses.rt_stop(rt);
lib.Time.rt_stop(rt);
lib.Web.rt_stop(rt);
};

cs._compilerVersion = '1';
cs._initGlobals = function(d,rt) {

};

cs._initGlobals2 = function(d) {
};

cs._resetGlobals = function(d) {
  d.$KvVmFZocbiuImUZu = undefined;
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "main";
cs.authorId = "oovd";
cs.scriptGuid = "a140d1ef-4616-475d-437d-6d700cae320f";
})}
