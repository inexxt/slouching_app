var TDev;
if (!TDev) TDev = {};

TDev.precompiledScript = {
"this": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "Slouch Sensor";
cs.scriptColor = "\u00239955BB";
cs.objectSingletons = {};
/* ACTION: Calibrate */
function a_rJD4TuS19UYYJE4S(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_rJD4TuS19UYYJE4S$0;
  s.name = "Calibrate";
  return s;
}
cs.registerAction("Calibrate", "rJD4TuS19UYYJE4S", a_rJD4TuS19UYYJE4S, true);

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

function a_rJD4TuS19UYYJE4S$0(s) {
  (s.pc = "KPKfrs1OmgrQNbC3");
  var t_call_0 = (ok1(s, /* Calibration table */ s.d.$CiFkT3g2g9sF2fG4) && /* Calibration table */ s.d.$CiFkT3g2g9sF2fG4.row_at(0, s));
  if (t_call_0) {
  t_call_0.perform_set("BoUrIMl524YdqHZ2", 3, s);
  }
  (s.pc = "N2lfXpz2i8pi1Dpa");
  var t_call_1 = (ok1(s, /* Calibration table */ s.d.$CiFkT3g2g9sF2fG4) && /* Calibration table */ s.d.$CiFkT3g2g9sF2fG4.row_at(0, s));
  if (t_call_1) {
  t_call_1.perform_set("x2QFkRVwB4w6zGSJ", 5, s);
  }
  (s.pc = "cJ6pashSdu5PHQ39");
  var t_call_2 = (ok1(s, /* Calibration table */ s.d.$CiFkT3g2g9sF2fG4) && /* Calibration table */ s.d.$CiFkT3g2g9sF2fG4.row_at(0, s));
  if (t_call_2) {
  t_call_2.perform_set("KkFrIOkKK1V2zBdy", 7, s);
  }
  (s.pc = "d4x2yh0Un1qGTqDa");
  null;
  return s.rt.leave();
}
cs.registerStep(a_rJD4TuS19UYYJE4S$0, 'a_rJD4TuS19UYYJE4S$0');

/* ACTION: SlouchTest */
function a_KJBJF4kWG2Sstb6n(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_KJBJF4kWG2Sstb6n$0;
  s.name = "SlouchTest";
  return s;
}
cs.registerAction("SlouchTest", "KJBJF4kWG2Sstb6n", a_KJBJF4kWG2Sstb6n, false);

function a_KJBJF4kWG2Sstb6n$0(s) {
  (s.pc = "yt0rYShi3ChCIDZr");
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_KJBJF4kWG2Sstb6n$1);
  lib.Wall.prompt("touchdevelop", t_resumeCtx_0);
  return a_KJBJF4kWG2Sstb6n$1;
}
cs.registerStep(a_KJBJF4kWG2Sstb6n$0, 'a_KJBJF4kWG2Sstb6n$0');

function a_KJBJF4kWG2Sstb6n$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_KJBJF4kWG2Sstb6n$1, 'a_KJBJF4kWG2Sstb6n$1');


//Ent_CiFkT3g2g9sF2fG4
function Ent_CiFkT3g2g9sF2fG4(p) {
  this.parent = p;
}
Ent_CiFkT3g2g9sF2fG4.prototype = new lib.CloudTableEntry();
Ent_CiFkT3g2g9sF2fG4.prototype.keys = [];
Ent_CiFkT3g2g9sF2fG4.prototype.values = ["BoUrIMl524YdqHZ2", "x2QFkRVwB4w6zGSJ", "KkFrIOkKK1V2zBdy"];
Ent_CiFkT3g2g9sF2fG4.prototype.fields = ["BoUrIMl524YdqHZ2", "x2QFkRVwB4w6zGSJ", "KkFrIOkKK1V2zBdy"];
Ent_CiFkT3g2g9sF2fG4.prototype["BoUrIMl524YdqHZ2_realname"] = "x";
Ent_CiFkT3g2g9sF2fG4.prototype["x2QFkRVwB4w6zGSJ_realname"] = "y";
Ent_CiFkT3g2g9sF2fG4.prototype["KkFrIOkKK1V2zBdy_realname"] = "z";
//Tbl_CiFkT3g2g9sF2fG4
function Tbl_CiFkT3g2g9sF2fG4(l) {
  this.libName = l;
  this.initParent();
}
Tbl_CiFkT3g2g9sF2fG4.prototype = new lib.CloudTableSingleton();
Tbl_CiFkT3g2g9sF2fG4.prototype.entryCtor = Ent_CiFkT3g2g9sF2fG4;
cs.objectSingletons["Calibration"] = function(d) { return d.$CiFkT3g2g9sF2fG4 };
Tbl_CiFkT3g2g9sF2fG4.prototype.selfCtor = Tbl_CiFkT3g2g9sF2fG4;
Tbl_CiFkT3g2g9sF2fG4.prototype.stableName = "CiFkT3g2g9sF2fG4";
Tbl_CiFkT3g2g9sF2fG4.prototype.entryKindName = "Calibration";
Tbl_CiFkT3g2g9sF2fG4.prototype.cloudtype = "CiFkT3g2g9sF2fG4\u0028\u0029";
Tbl_CiFkT3g2g9sF2fG4.prototype.key_cloudtypes = [];
Tbl_CiFkT3g2g9sF2fG4.prototype.value_cloudtypes = ["BoUrIMl524YdqHZ2\u002cdouble\u005bCiFkT3g2g9sF2fG4\u0028\u0029\u005d", "x2QFkRVwB4w6zGSJ\u002cdouble\u005bCiFkT3g2g9sF2fG4\u0028\u0029\u005d", "KkFrIOkKK1V2zBdy\u002cdouble\u005bCiFkT3g2g9sF2fG4\u0028\u0029\u005d"];
Tbl_CiFkT3g2g9sF2fG4.prototype.localsession = true;

// jsonimport
Ent_CiFkT3g2g9sF2fG4.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
  this.perform_set("BoUrIMl524YdqHZ2", ctx.importNumber(json, "x"), s);
  this.perform_set("x2QFkRVwB4w6zGSJ", ctx.importNumber(json, "y"), s);
  this.perform_set("KkFrIOkKK1V2zBdy", ctx.importNumber(json, "z"), s);
}
cs.registerGlobal("$CiFkT3g2g9sF2fG4");

//Ent_f25bIZh8P0Uk0K1A
function Ent_f25bIZh8P0Uk0K1A(p) {
  this.parent = p;
}
Ent_f25bIZh8P0Uk0K1A.prototype = new lib.CloudTableEntry();
Ent_f25bIZh8P0Uk0K1A.prototype.keys = [];
Ent_f25bIZh8P0Uk0K1A.prototype.values = ["Umm4UvzsByM2jM4A", "RIMm9JXdUcwU4xL4", "lG7Pzq9rVkJrwkj6", "B2mLioF4la8TQBhd", "zLwnU2Ip2uIlgyyy", "nMhLYO4Udvrb3bDs", "S0uM4W4SottMd455", "S3uDnw6dOwwFhHpk"];
Ent_f25bIZh8P0Uk0K1A.prototype.fields = ["Umm4UvzsByM2jM4A", "RIMm9JXdUcwU4xL4", "lG7Pzq9rVkJrwkj6", "B2mLioF4la8TQBhd", "zLwnU2Ip2uIlgyyy", "nMhLYO4Udvrb3bDs", "S0uM4W4SottMd455", "S3uDnw6dOwwFhHpk"];
Ent_f25bIZh8P0Uk0K1A.prototype["Umm4UvzsByM2jM4A_realname"] = "Alarm On\u002fOff";
Ent_f25bIZh8P0Uk0K1A.prototype["RIMm9JXdUcwU4xL4_realname"] = "Alarm";
Ent_f25bIZh8P0Uk0K1A.prototype["lG7Pzq9rVkJrwkj6_realname"] = "Volume";
Ent_f25bIZh8P0Uk0K1A.prototype["B2mLioF4la8TQBhd_realname"] = "SMS On\u002fOff";
Ent_f25bIZh8P0Uk0K1A.prototype["zLwnU2Ip2uIlgyyy_realname"] = "SMS1";
Ent_f25bIZh8P0Uk0K1A.prototype["nMhLYO4Udvrb3bDs_realname"] = "SMS2";
Ent_f25bIZh8P0Uk0K1A.prototype["S0uM4W4SottMd455_realname"] = "SMS3";
Ent_f25bIZh8P0Uk0K1A.prototype["S3uDnw6dOwwFhHpk_realname"] = "Message";
//Tbl_f25bIZh8P0Uk0K1A
function Tbl_f25bIZh8P0Uk0K1A(l) {
  this.libName = l;
  this.initParent();
}
Tbl_f25bIZh8P0Uk0K1A.prototype = new lib.CloudTableSingleton();
Tbl_f25bIZh8P0Uk0K1A.prototype.entryCtor = Ent_f25bIZh8P0Uk0K1A;
cs.objectSingletons["Settings"] = function(d) { return d.$f25bIZh8P0Uk0K1A };
Tbl_f25bIZh8P0Uk0K1A.prototype.selfCtor = Tbl_f25bIZh8P0Uk0K1A;
Tbl_f25bIZh8P0Uk0K1A.prototype.stableName = "f25bIZh8P0Uk0K1A";
Tbl_f25bIZh8P0Uk0K1A.prototype.entryKindName = "Settings";
Tbl_f25bIZh8P0Uk0K1A.prototype.cloudtype = "f25bIZh8P0Uk0K1A\u0028\u0029";
Tbl_f25bIZh8P0Uk0K1A.prototype.key_cloudtypes = [];
Tbl_f25bIZh8P0Uk0K1A.prototype.value_cloudtypes = ["Umm4UvzsByM2jM4A\u002cboolean\u005bf25bIZh8P0Uk0K1A\u0028\u0029\u005d", "RIMm9JXdUcwU4xL4\u002cstring\u005bf25bIZh8P0Uk0K1A\u0028\u0029\u005d", "lG7Pzq9rVkJrwkj6\u002cdouble\u005bf25bIZh8P0Uk0K1A\u0028\u0029\u005d", "B2mLioF4la8TQBhd\u002cboolean\u005bf25bIZh8P0Uk0K1A\u0028\u0029\u005d", "zLwnU2Ip2uIlgyyy\u002cdouble\u005bf25bIZh8P0Uk0K1A\u0028\u0029\u005d", "nMhLYO4Udvrb3bDs\u002cdouble\u005bf25bIZh8P0Uk0K1A\u0028\u0029\u005d", "S0uM4W4SottMd455\u002cdouble\u005bf25bIZh8P0Uk0K1A\u0028\u0029\u005d", "S3uDnw6dOwwFhHpk\u002cstring\u005bf25bIZh8P0Uk0K1A\u0028\u0029\u005d"];
Tbl_f25bIZh8P0Uk0K1A.prototype.localsession = true;

// jsonimport
Ent_f25bIZh8P0Uk0K1A.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
  this.perform_set("Umm4UvzsByM2jM4A", ctx.importBoolean(json, "Alarm On\u002fOff"), s);
  this.perform_set("RIMm9JXdUcwU4xL4", ctx.importString(json, "Alarm"), s);
  this.perform_set("lG7Pzq9rVkJrwkj6", ctx.importNumber(json, "Volume"), s);
  this.perform_set("B2mLioF4la8TQBhd", ctx.importBoolean(json, "SMS On\u002fOff"), s);
  this.perform_set("zLwnU2Ip2uIlgyyy", ctx.importNumber(json, "SMS1"), s);
  this.perform_set("nMhLYO4Udvrb3bDs", ctx.importNumber(json, "SMS2"), s);
  this.perform_set("S0uM4W4SottMd455", ctx.importNumber(json, "SMS3"), s);
  this.perform_set("S3uDnw6dOwwFhHpk", ctx.importString(json, "Message"), s);
}
cs.registerGlobal("$f25bIZh8P0Uk0K1A");
/* ACTION: numbers */
function a_Yvu451ue0PPofaaC(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_Yvu451ue0PPofaaC$0;
  s.name = "numbers";
  s.$_ = undefined;
  s.$changehandler1 = undefined;
  s.$x = undefined;
  s.$changehandler2 = undefined;
  s.$x1 = undefined;
  s.$changehandler3 = undefined;
  s.$x2 = undefined;
  s.$on_tapped = undefined;
  return s;
}
cs.registerPage("numbers", "Yvu451ue0PPofaaC", a_Yvu451ue0PPofaaC, false);

function ok4(s, a0, a1, a2, a3) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok5(s, a0, a1, a2, a3, a4) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined || a4 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function a_Yvu451ue0PPofaaC$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "AxuKNdUMisoKWiQS");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$TQOaQ4R6HcUdMAek.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "sobH6DVHxsLfOBFX");
  null;
  } else {
  (s.pc = "Rs2hZsD9uUrgYOBx");
  null;
  }
  var t_elseIf_2 = true;
  (s.pc = "HaFm44Yl2TJbRLFx");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "YHPW0vXJAWGQc0kH");
  lib.Box.push_box(s);
  (s.pc = "JA44ur6yfAUnAnwY");
  lib.Box.set_padding(0, 2, 0, 2, s);
  (s.pc = "x2wpIBSl0eV809JF");
  lib.String_.post_to_wall("Enter the numbers of three people who will be contacted in case of slouching\u003a\u000a", s);
  (s.pc = "thQbzrglGtV6Dd4P");
  lib.String_.post_to_wall(" ", s);
  (s.pc = "x0OQQESrhJmxh5VE");
  lib.Box.push_box(s);
  (s.pc = "pMZZ8egqx9rsDnaT");
  lib.Box.set_border_widths(0.1, 0.1, 0.1, 0.1, s);
  (s.pc = "YTh7hRyrm58Ki2lN");
  var t_lmbProxy_3 = s.libs.mkLambdaProxy;
  (s.$changehandler1 = function(la0, la1, la2) { return a_a_Yvu451ue0PPofaaC$3(t_lmbProxy_3(la0), la1, la2) });
  (s.pc = "wpt9W3LuKmH8yuIP");
  var t_call_4 = (ok1(s, s.$_) && lib.FieldRef.mk(s.$_, "$text1"))._ref(s);
  var t_libcall_5 = s.libs["zuI2pzVcjyOExq4F"]["input number"](s);
  return s.rt.enter(t_libcall_5.invoke(t_libcall_5, a_Yvu451ue0PPofaaC$4, "1st number", t_call_4, s.$changehandler1));
  } else {
  (s.pc = "dL4aOHhw3VtFrZbE");
  null;
  }
  return a_Yvu451ue0PPofaaC$2;
}
cs.registerStep(a_Yvu451ue0PPofaaC$0, 'a_Yvu451ue0PPofaaC$0');

function a_Yvu451ue0PPofaaC$4(s) {
  (s.pc = "VCBc1dLOUEMcbrZi");
  var t_lmbProxy_6 = s.libs.mkLambdaProxy;
  (s.$changehandler2 = function(la0, la1, la2) { return a_a_Yvu451ue0PPofaaC$5(t_lmbProxy_6(la0), la1, la2) });
  (s.pc = "moJ4axyZescZNQHN");
  var t_call_7 = (ok1(s, s.$_) && lib.FieldRef.mk(s.$_, "$text2"))._ref(s);
  var t_libcall_8 = s.libs["zuI2pzVcjyOExq4F"]["input number"](s);
  return s.rt.enter(t_libcall_8.invoke(t_libcall_8, a_Yvu451ue0PPofaaC$6, "2nd number", t_call_7, s.$changehandler2));
}
cs.registerStep(a_Yvu451ue0PPofaaC$4, 'a_Yvu451ue0PPofaaC$4');

function a_Yvu451ue0PPofaaC$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_Yvu451ue0PPofaaC$2, 'a_Yvu451ue0PPofaaC$2');

function a_Yvu451ue0PPofaaC$6(s) {
  (s.pc = "Ux0MO4VnZ4UhexiT");
  var t_lmbProxy_9 = s.libs.mkLambdaProxy;
  (s.$changehandler3 = function(la0, la1, la2) { return a_a_Yvu451ue0PPofaaC$7(t_lmbProxy_9(la0), la1, la2) });
  (s.pc = "SZhDrbNFo2ejSeEF");
  var t_call_10 = (ok1(s, s.$_) && lib.FieldRef.mk(s.$_, "$text3"))._ref(s);
  var t_libcall_11 = s.libs["zuI2pzVcjyOExq4F"]["input number"](s);
  return s.rt.enter(t_libcall_11.invoke(t_libcall_11, a_Yvu451ue0PPofaaC$8, "3rd number", t_call_10, s.$changehandler3));
}
cs.registerStep(a_Yvu451ue0PPofaaC$6, 'a_Yvu451ue0PPofaaC$6');

function a_Yvu451ue0PPofaaC$8(s) {
  lib.Box.pop_box(s);
  (s.pc = "J2DSlXm4ulXqeJxm");
  var t_lmbProxy_12 = s.libs.mkLambdaProxy;
  (s.$on_tapped = function(la0, la1) { return a_a_Yvu451ue0PPofaaC$9(t_lmbProxy_12(la0), la1) });
  (s.pc = "rwZg8TX3D7SCChWi");
  var t_libcall_13 = s.libs["zuI2pzVcjyOExq4F"]["button"](s);
  return s.rt.enter(t_libcall_13.invoke(t_libcall_13, a_Yvu451ue0PPofaaC$10, "ok", s.$on_tapped));
}
cs.registerStep(a_Yvu451ue0PPofaaC$8, 'a_Yvu451ue0PPofaaC$8');

function a_Yvu451ue0PPofaaC$10(s) {
  lib.Box.pop_box(s);
  s.rt.leave_render();
  return a_Yvu451ue0PPofaaC$2;
}
cs.registerStep(a_Yvu451ue0PPofaaC$10, 'a_Yvu451ue0PPofaaC$10');

/* ACTION: a_Yvu451ue0PPofaaC::lambda::3 */
function a_a_Yvu451ue0PPofaaC$3(previous, returnAddr, $x) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_Yvu451ue0PPofaaC$3$0;
  s.name = "numbers";
  s.$x = $x;
  return s;
}
cs.registerLambda("a_Yvu451ue0PPofaaC\u003a\u003alambda\u003a\u003a3", "a_Yvu451ue0PPofaaC$3", a_a_Yvu451ue0PPofaaC$3, true);

function a_a_Yvu451ue0PPofaaC$3$0(s) {
  (s.pc = "FZuasvCEcjOWJRv0");
  return s.rt.enter(a_eBXS2TS0mg45a1x0(s, a_a_Yvu451ue0PPofaaC$3$1, s.$x, 1));
}
cs.registerStep(a_a_Yvu451ue0PPofaaC$3$0, 'a_a_Yvu451ue0PPofaaC$3$0');

function a_a_Yvu451ue0PPofaaC$3$1(s) {
  (s.pc = "MENd9qubrADtXyzQ");
  null;
  return s.rt.leave();
}
cs.registerStep(a_a_Yvu451ue0PPofaaC$3$1, 'a_a_Yvu451ue0PPofaaC$3$1');

/* ACTION: a_Yvu451ue0PPofaaC::lambda::5 */
function a_a_Yvu451ue0PPofaaC$5(previous, returnAddr, $x) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_Yvu451ue0PPofaaC$5$0;
  s.name = "numbers";
  s.$x = $x;
  return s;
}
cs.registerLambda("a_Yvu451ue0PPofaaC\u003a\u003alambda\u003a\u003a5", "a_Yvu451ue0PPofaaC$5", a_a_Yvu451ue0PPofaaC$5, true);

function a_a_Yvu451ue0PPofaaC$5$0(s) {
  (s.pc = "OG5viYmEtQmu7By2");
  return s.rt.enter(a_eBXS2TS0mg45a1x0(s, a_a_Yvu451ue0PPofaaC$5$1, s.$x, 2));
}
cs.registerStep(a_a_Yvu451ue0PPofaaC$5$0, 'a_a_Yvu451ue0PPofaaC$5$0');

function a_a_Yvu451ue0PPofaaC$5$1(s) {
  (s.pc = "Qw5Qx9ZYQ0X2p9jC");
  null;
  return s.rt.leave();
}
cs.registerStep(a_a_Yvu451ue0PPofaaC$5$1, 'a_a_Yvu451ue0PPofaaC$5$1');

/* ACTION: a_Yvu451ue0PPofaaC::lambda::7 */
function a_a_Yvu451ue0PPofaaC$7(previous, returnAddr, $x) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_Yvu451ue0PPofaaC$7$0;
  s.name = "numbers";
  s.$x = $x;
  return s;
}
cs.registerLambda("a_Yvu451ue0PPofaaC\u003a\u003alambda\u003a\u003a7", "a_Yvu451ue0PPofaaC$7", a_a_Yvu451ue0PPofaaC$7, true);

function a_a_Yvu451ue0PPofaaC$7$0(s) {
  (s.pc = "xmQJwIg2yrPke4W2");
  return s.rt.enter(a_eBXS2TS0mg45a1x0(s, a_a_Yvu451ue0PPofaaC$7$1, s.$x, 3));
}
cs.registerStep(a_a_Yvu451ue0PPofaaC$7$0, 'a_a_Yvu451ue0PPofaaC$7$0');

function a_a_Yvu451ue0PPofaaC$7$1(s) {
  (s.pc = "TxP1TWzoEtn6oHVx");
  null;
  return s.rt.leave();
}
cs.registerStep(a_a_Yvu451ue0PPofaaC$7$1, 'a_a_Yvu451ue0PPofaaC$7$1');

/* ACTION: a_Yvu451ue0PPofaaC::lambda::9 */
function a_a_Yvu451ue0PPofaaC$9(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_Yvu451ue0PPofaaC$9$0;
  s.name = "numbers";
  return s;
}
cs.registerLambda("a_Yvu451ue0PPofaaC\u003a\u003alambda\u003a\u003a9", "a_Yvu451ue0PPofaaC$9", a_a_Yvu451ue0PPofaaC$9, true);

function a_a_Yvu451ue0PPofaaC$9$0(s) {
  (s.pc = "JJ9zbCXXfOIJOyDV");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "straight page");
  return s.rt.leave();
}
cs.registerStep(a_a_Yvu451ue0PPofaaC$9$0, 'a_a_Yvu451ue0PPofaaC$9$0');


//Ent_TQOaQ4R6HcUdMAek
function Ent_TQOaQ4R6HcUdMAek(p) {
  this.parent = p;
}
Ent_TQOaQ4R6HcUdMAek.prototype = new lib.ObjectEntry();
Ent_TQOaQ4R6HcUdMAek.prototype.keys = [];
Ent_TQOaQ4R6HcUdMAek.prototype.values = ["$text1", "$text2", "$text3", "$text"];
Ent_TQOaQ4R6HcUdMAek.prototype.fields = ["$text1", "$text2", "$text3", "$text"];
Ent_TQOaQ4R6HcUdMAek.prototype["$text1_realname"] = "text1";
Ent_TQOaQ4R6HcUdMAek.prototype["$text2_realname"] = "text2";
Ent_TQOaQ4R6HcUdMAek.prototype["$text3_realname"] = "text3";
Ent_TQOaQ4R6HcUdMAek.prototype["$text_realname"] = "text";
Ent_TQOaQ4R6HcUdMAek.prototype["$text1"] = "";
Ent_TQOaQ4R6HcUdMAek.prototype["$text2"] = "";
Ent_TQOaQ4R6HcUdMAek.prototype["$text3"] = "";
Ent_TQOaQ4R6HcUdMAek.prototype["$text"] = "";
//Tbl_TQOaQ4R6HcUdMAek
function Tbl_TQOaQ4R6HcUdMAek(l) {
  this.libName = l;
  this.initParent();
}
Tbl_TQOaQ4R6HcUdMAek.prototype = new lib.ObjectSingleton();
Tbl_TQOaQ4R6HcUdMAek.prototype.entryCtor = Ent_TQOaQ4R6HcUdMAek;
cs.objectSingletons["numbers page data"] = function(d) { return d.$TQOaQ4R6HcUdMAek };
Tbl_TQOaQ4R6HcUdMAek.prototype.selfCtor = Tbl_TQOaQ4R6HcUdMAek;
Tbl_TQOaQ4R6HcUdMAek.prototype.stableName = "TQOaQ4R6HcUdMAek";
Tbl_TQOaQ4R6HcUdMAek.prototype.entryKindName = "numbers page data";

// jsonimport
Ent_TQOaQ4R6HcUdMAek.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
  this.perform_set("$text1", ctx.importString(json, "text1"), s);
  this.perform_set("$text2", ctx.importString(json, "text2"), s);
  this.perform_set("$text3", ctx.importString(json, "text3"), s);
  this.perform_set("$text", ctx.importString(json, "text"), s);
}
cs.registerGlobal("$TQOaQ4R6HcUdMAek");
/* ACTION: Initialize */
function a_h1TZI26BI4PKuOpj(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_h1TZI26BI4PKuOpj$0;
  s.name = "Initialize";
  return s;
}
cs.registerAction("Initialize", "h1TZI26BI4PKuOpj", a_h1TZI26BI4PKuOpj, true);

function a_h1TZI26BI4PKuOpj$0(s) {
  (s.pc = "x24FkUpHNQKPNgXD");
  return a_h1TZI26BI4PKuOpj$1;
}
cs.registerStep(a_h1TZI26BI4PKuOpj$0, 'a_h1TZI26BI4PKuOpj$0');

function a_h1TZI26BI4PKuOpj$1(s) {
  var t_call_0 = (ok1(s, /* Calibration table */ s.d.$CiFkT3g2g9sF2fG4) && /* Calibration table */ s.d.$CiFkT3g2g9sF2fG4.count(s));
  var t_infix_1 = (ok1(s, t_call_0) && (t_call_0 !== 2));
  if (t_infix_1) {
  var t_elseIf_2 = true;
  (s.pc = "xtnJ5XAd7YbEKyTf");
  var t_call_3 = (ok1(s, /* Calibration table */ s.d.$CiFkT3g2g9sF2fG4) && /* Calibration table */ s.d.$CiFkT3g2g9sF2fG4.count(s));
  var t_infix_4 = (ok1(s, t_call_3) && (t_call_3 > 2));
  ok1(s, t_infix_4);
  if (t_infix_4) {
  (s.pc = "btQPn0jE32CAXs76");
  var t_call_5 = (ok1(s, /* Calibration table */ s.d.$CiFkT3g2g9sF2fG4) && /* Calibration table */ s.d.$CiFkT3g2g9sF2fG4.count(s));
  var t_infix_6 = (ok1(s, t_call_5) && (t_call_5 - 1));
  var t_call_7 = (ok2(s, /* Calibration table */ s.d.$CiFkT3g2g9sF2fG4, t_infix_6) && /* Calibration table */ s.d.$CiFkT3g2g9sF2fG4.row_at(t_infix_6, s));
  s.rt.logObjectMutation(t_call_7);
  (ok1(s, t_call_7) && t_call_7.delete_row(s));
  } else {
  (s.pc = "u3BhBvx5L4OdJe2k");
  var t_call_8 = (ok1(s, /* Calibration table */ s.d.$CiFkT3g2g9sF2fG4) && /* Calibration table */ s.d.$CiFkT3g2g9sF2fG4.add_row(s));
  t_call_8;
  }
  return a_h1TZI26BI4PKuOpj$1;
  }
  (s.pc = "EiewuvHmH8kav0IP");
  return a_h1TZI26BI4PKuOpj$4;
}
cs.registerStep(a_h1TZI26BI4PKuOpj$1, 'a_h1TZI26BI4PKuOpj$1');

function a_h1TZI26BI4PKuOpj$4(s) {
  var t_call_9 = (ok1(s, /* Settings table */ s.d.$f25bIZh8P0Uk0K1A) && /* Settings table */ s.d.$f25bIZh8P0Uk0K1A.count(s));
  var t_infix_10 = (ok1(s, t_call_9) && (t_call_9 !== 1));
  if (t_infix_10) {
  var t_elseIf_11 = true;
  (s.pc = "LHqLbFsYrnAq0wxL");
  var t_call_12 = (ok1(s, /* Settings table */ s.d.$f25bIZh8P0Uk0K1A) && /* Settings table */ s.d.$f25bIZh8P0Uk0K1A.count(s));
  var t_infix_13 = (ok1(s, t_call_12) && (t_call_12 > 1));
  ok1(s, t_infix_13);
  if (t_infix_13) {
  (s.pc = "n27vBhwYBUTa8f5V");
  var t_call_14 = (ok1(s, /* Settings table */ s.d.$f25bIZh8P0Uk0K1A) && /* Settings table */ s.d.$f25bIZh8P0Uk0K1A.count(s));
  var t_infix_15 = (ok1(s, t_call_14) && (t_call_14 - 1));
  var t_call_16 = (ok2(s, /* Settings table */ s.d.$f25bIZh8P0Uk0K1A, t_infix_15) && /* Settings table */ s.d.$f25bIZh8P0Uk0K1A.row_at(t_infix_15, s));
  s.rt.logObjectMutation(t_call_16);
  (ok1(s, t_call_16) && t_call_16.delete_row(s));
  } else {
  (s.pc = "xAqBn69opZ0z9QQM");
  var t_call_17 = (ok1(s, /* Settings table */ s.d.$f25bIZh8P0Uk0K1A) && /* Settings table */ s.d.$f25bIZh8P0Uk0K1A.add_row(s));
  t_call_17;
  }
  return a_h1TZI26BI4PKuOpj$4;
  }
  (s.pc = "Tw9GylDm5pcmQYcH");
  var t_call_18 = (ok1(s, /* Settings table */ s.d.$f25bIZh8P0Uk0K1A) && /* Settings table */ s.d.$f25bIZh8P0Uk0K1A.row_at(0, s));
  if (t_call_18) {
  t_call_18.perform_set("Umm4UvzsByM2jM4A", true, s);
  }
  (s.pc = "VZyL2G72mAXX4cST");
  var t_call_19 = (ok1(s, /* Settings table */ s.d.$f25bIZh8P0Uk0K1A) && /* Settings table */ s.d.$f25bIZh8P0Uk0K1A.row_at(0, s));
  if (t_call_19) {
  t_call_19.perform_set("B2mLioF4la8TQBhd", false, s);
  }
  (s.pc = "v6UoT6EbbNLk7yuV");
  var t_call_20 = (ok1(s, /* Settings table */ s.d.$f25bIZh8P0Uk0K1A) && /* Settings table */ s.d.$f25bIZh8P0Uk0K1A.row_at(0, s));
  if (t_call_20) {
  t_call_20.perform_set("S3uDnw6dOwwFhHpk", "The person\u0027s back is slouching!", s);
  }
  (s.pc = "knOxgtNgmTd54yu1");
  var t_call_21 = (ok1(s, /* Settings table */ s.d.$f25bIZh8P0Uk0K1A) && /* Settings table */ s.d.$f25bIZh8P0Uk0K1A.row_at(0, s));
  if (t_call_21) {
  t_call_21.perform_set("lG7Pzq9rVkJrwkj6", 0.5, s);
  }
  return s.rt.leave();
}
cs.registerStep(a_h1TZI26BI4PKuOpj$4, 'a_h1TZI26BI4PKuOpj$4');

/* ACTION: numberhandler */
function a_eBXS2TS0mg45a1x0(previous, returnAddr, $p, $whichNumber) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_eBXS2TS0mg45a1x0$0;
  s.name = "numberhandler";
  s.$p = $p;
  s.$whichNumber = $whichNumber;
  return s;
}
cs.registerAction("numberhandler", "eBXS2TS0mg45a1x0", a_eBXS2TS0mg45a1x0, false);

function a_eBXS2TS0mg45a1x0$0(s) {
  if (s.previous.needsPicker) {
  s.rt.pickParameters(a_eBXS2TS0mg45a1x0$10, lib.RTValue.mkPicker(lib.Number_.picker(), 0, "p", "$p"), lib.RTValue.mkPicker(lib.Number_.picker(), 0, "whichNumber", "$whichNumber"));
  return a_eBXS2TS0mg45a1x0$10;
  }
  return a_eBXS2TS0mg45a1x0$9;
}
cs.registerStep(a_eBXS2TS0mg45a1x0$0, 'a_eBXS2TS0mg45a1x0$0');

function a_eBXS2TS0mg45a1x0$10(s) {
  return a_eBXS2TS0mg45a1x0$9;
}
cs.registerStep(a_eBXS2TS0mg45a1x0$10, 'a_eBXS2TS0mg45a1x0$10');

function a_eBXS2TS0mg45a1x0$9(s) {
  var t_elseIf_0 = true;
  (s.pc = "EmYELTclOsHe3TlG");
  var t_infix_1 = (ok1(s, s.$whichNumber) && (s.$whichNumber === 1));
  ok1(s, t_infix_1);
  if (t_infix_1) {
  (t_elseIf_0 = false);
  (s.pc = "xTGK7Bqute2wOOw3");
  var t_call_2 = (ok1(s, /* Settings table */ s.d.$f25bIZh8P0Uk0K1A) && /* Settings table */ s.d.$f25bIZh8P0Uk0K1A.row_at(1, s));
  if (t_call_2) {
  t_call_2.perform_set("zLwnU2Ip2uIlgyyy", s.$p, s);
  }
  }
  if (t_elseIf_0) {
  (s.pc = "rpia7CtM2S8I2fOp");
  var t_infix_3 = (ok1(s, s.$whichNumber) && (s.$whichNumber === 2));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (t_elseIf_0 = false);
  (s.pc = "tRAdJL6GeTufgkrR");
  var t_call_4 = (ok1(s, /* Settings table */ s.d.$f25bIZh8P0Uk0K1A) && /* Settings table */ s.d.$f25bIZh8P0Uk0K1A.row_at(1, s));
  if (t_call_4) {
  t_call_4.perform_set("nMhLYO4Udvrb3bDs", s.$p, s);
  }
  }
  }
  if (t_elseIf_0) {
  (s.pc = "IFAZiKf19P9NMOeW");
  var t_infix_5 = (ok1(s, s.$whichNumber) && (s.$whichNumber === 3));
  ok1(s, t_infix_5);
  if (t_infix_5) {
  (s.pc = "RsGY8qOENT2X22sw");
  var t_call_6 = (ok1(s, /* Settings table */ s.d.$f25bIZh8P0Uk0K1A) && /* Settings table */ s.d.$f25bIZh8P0Uk0K1A.row_at(1, s));
  if (t_call_6) {
  t_call_6.perform_set("S0uM4W4SottMd455", s.$p, s);
  }
  } else {
  (s.pc = "x0edJfnuRNCIjkLU");
  null;
  }
  }
  return s.rt.leave();
}
cs.registerStep(a_eBXS2TS0mg45a1x0$9, 'a_eBXS2TS0mg45a1x0$9');

cs.registerArtResource("Picture", "$ZN3pVUS145shUZZV", ".\u002fart\u002fl0_ZN3pVUS145shUZZV");
cs.registerArtResource("Picture", "$SugPLvW1420NTivB", ".\u002fart\u002fl0_SugPLvW1420NTivB");
/* ACTION: volume */
function a_xE12rBbM0xelSPQW(previous, returnAddr, $p) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xE12rBbM0xelSPQW$0;
  s.name = "volume";
  s.$_ = undefined;
  s.$p = $p;
  s.$snd = undefined;
  s.$changehandler = undefined;
  s.$x = undefined;
  s.$on_tapped = undefined;
  s.$on_tapped1 = undefined;
  return s;
}
cs.registerPage("volume", "xE12rBbM0xelSPQW", a_xE12rBbM0xelSPQW, false);

function a_xE12rBbM0xelSPQW$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "xDOhpa4cNsPu6lHo");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$Wi9qp1NRkv0XpRgG.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "YGL1Iot9bbpYBkvj");
  null;
  } else {
  (s.pc = "r4ZUPkLKMVyIFY5f");
  null;
  }
  var t_elseIf_2 = true;
  (s.pc = "xnLxm42padGjfXIT");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "I2SvTOGThxL7mp1v");
  lib.Box.push_box(s);
  (s.pc = "WznJO9ePpBn7pDAR");
  lib.Box.set_padding(0, 2, 0, 2, s);
  (s.pc = "xzJR8s7v5HFTzXJ8");
  lib.String_.post_to_wall("The music should be playing", s);
  (s.pc = "y4FdOTFQbv3Jxfem");
  (s.$snd = /* alarm2 */ s.d.$U4TW4hNHINP2BjrR);
  (s.pc = "x1ZDX6YJlEZPaXdD");
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_xE12rBbM0xelSPQW$3);
  (ok2(s, s.$snd, s.$p) && s.$snd.play_special(s.$p, 0, 0, t_resumeCtx_3));
  return a_xE12rBbM0xelSPQW$3;
  } else {
  (s.pc = "ZC3ISIZxWNumTITh");
  null;
  }
  return a_xE12rBbM0xelSPQW$2;
}
cs.registerStep(a_xE12rBbM0xelSPQW$0, 'a_xE12rBbM0xelSPQW$0');

function a_xE12rBbM0xelSPQW$3(s) {
  (s.pc = "dQoTZDNHD6wTy494");
  var t_lmbProxy_4 = s.libs.mkLambdaProxy;
  (s.$changehandler = function(la0, la1, la2) { return a_a_xE12rBbM0xelSPQW$4(t_lmbProxy_4(la0), la1, la2) });
  (s.pc = "uJkX60gZEohNXXvA");
  var t_call_5 = (ok1(s, s.$_) && lib.FieldRef.mk(s.$_, "$text"))._ref(s);
  var t_libcall_6 = s.libs["zuI2pzVcjyOExq4F"]["input number w\u002f range"](s);
  return s.rt.enter(t_libcall_6.invoke(t_libcall_6, a_xE12rBbM0xelSPQW$5, "How loud would you like it to be? \u00281-100\u0029", t_call_5, s.$changehandler, 0, 100));
}
cs.registerStep(a_xE12rBbM0xelSPQW$3, 'a_xE12rBbM0xelSPQW$3');

function a_xE12rBbM0xelSPQW$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_xE12rBbM0xelSPQW$2, 'a_xE12rBbM0xelSPQW$2');

function a_xE12rBbM0xelSPQW$5(s) {
  (s.pc = "eJDu0g08ZGJ5pa4B");
  var t_lmbv_7 = s.$snd;
  var t_lmbProxy_8 = s.libs.mkLambdaProxy;
  (s.$on_tapped = function(la0, la1) { return a_a_xE12rBbM0xelSPQW$6(t_lmbProxy_8(la0), la1, t_lmbv_7) });
  (s.pc = "JbD5YckhKwxC9V3w");
  var t_libcall_9 = s.libs["zuI2pzVcjyOExq4F"]["button"](s);
  return s.rt.enter(t_libcall_9.invoke(t_libcall_9, a_xE12rBbM0xelSPQW$7, "Change volume", s.$on_tapped));
}
cs.registerStep(a_xE12rBbM0xelSPQW$5, 'a_xE12rBbM0xelSPQW$5');

function a_xE12rBbM0xelSPQW$7(s) {
  (s.pc = "XXGkX84od9gh6VSn");
  var t_lmbProxy_10 = s.libs.mkLambdaProxy;
  (s.$on_tapped1 = function(la0, la1) { return a_a_xE12rBbM0xelSPQW$8(t_lmbProxy_10(la0), la1) });
  (s.pc = "xZ6UfWEf9GpPje55");
  var t_libcall_11 = s.libs["zuI2pzVcjyOExq4F"]["button"](s);
  return s.rt.enter(t_libcall_11.invoke(t_libcall_11, a_xE12rBbM0xelSPQW$9, "It\u0027s ok\u002c let\u0027s move on", s.$on_tapped1));
}
cs.registerStep(a_xE12rBbM0xelSPQW$7, 'a_xE12rBbM0xelSPQW$7');

function a_xE12rBbM0xelSPQW$9(s) {
  lib.Box.pop_box(s);
  s.rt.leave_render();
  return a_xE12rBbM0xelSPQW$2;
}
cs.registerStep(a_xE12rBbM0xelSPQW$9, 'a_xE12rBbM0xelSPQW$9');

/* ACTION: a_xE12rBbM0xelSPQW::lambda::4 */
function a_a_xE12rBbM0xelSPQW$4(previous, returnAddr, $x) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_xE12rBbM0xelSPQW$4$0;
  s.name = "volume";
  s.$x = $x;
  return s;
}
cs.registerLambda("a_xE12rBbM0xelSPQW\u003a\u003alambda\u003a\u003a4", "a_xE12rBbM0xelSPQW$4", a_a_xE12rBbM0xelSPQW$4, true);

function a_a_xE12rBbM0xelSPQW$4$0(s) {
  (s.pc = "x220JWgoEGmdbdqz");
  var t_call_0 = (ok1(s, /* Settings table */ s.d.$f25bIZh8P0Uk0K1A) && /* Settings table */ s.d.$f25bIZh8P0Uk0K1A.row_at(0, s));
  if (t_call_0) {
  t_call_0.perform_set("lG7Pzq9rVkJrwkj6", s.$x, s);
  }
  return s.rt.leave();
}
cs.registerStep(a_a_xE12rBbM0xelSPQW$4$0, 'a_a_xE12rBbM0xelSPQW$4$0');

/* ACTION: a_xE12rBbM0xelSPQW::lambda::6 */
function a_a_xE12rBbM0xelSPQW$6(previous, returnAddr, $snd) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_xE12rBbM0xelSPQW$6$0;
  s.name = "volume";
  s.$snd = $snd;
  return s;
}
cs.registerLambda("a_xE12rBbM0xelSPQW\u003a\u003alambda\u003a\u003a6", "a_xE12rBbM0xelSPQW$6", a_a_xE12rBbM0xelSPQW$6, true);

function a_a_xE12rBbM0xelSPQW$6$0(s) {
  (s.pc = "Q9AXBIDxBC8NcQAJ");
  var t_call_0 = (ok1(s, /* Settings table */ s.d.$f25bIZh8P0Uk0K1A) && /* Settings table */ s.d.$f25bIZh8P0Uk0K1A.row_at(0, s));
  if (t_call_0) {
  var t_recOp_1 = t_call_0.perform_get("lG7Pzq9rVkJrwkj6", s);
  }
  var t_infix_2 = (ok1(s, t_recOp_1) && (t_recOp_1 / 100));
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_a_xE12rBbM0xelSPQW$6$2);
  (ok2(s, s.$snd, t_infix_2) && s.$snd.play_special(t_infix_2, 0, 0, t_resumeCtx_3));
  return a_a_xE12rBbM0xelSPQW$6$2;
}
cs.registerStep(a_a_xE12rBbM0xelSPQW$6$0, 'a_a_xE12rBbM0xelSPQW$6$0');

function a_a_xE12rBbM0xelSPQW$6$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_xE12rBbM0xelSPQW$6$2, 'a_a_xE12rBbM0xelSPQW$6$2');

/* ACTION: a_xE12rBbM0xelSPQW::lambda::8 */
function a_a_xE12rBbM0xelSPQW$8(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_xE12rBbM0xelSPQW$8$0;
  s.name = "volume";
  return s;
}
cs.registerLambda("a_xE12rBbM0xelSPQW\u003a\u003alambda\u003a\u003a8", "a_xE12rBbM0xelSPQW$8", a_a_xE12rBbM0xelSPQW$8, true);

function a_a_xE12rBbM0xelSPQW$8$0(s) {
  (s.pc = "LSdDc7XhCC84RAnw");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "statistics");
  return s.rt.leave();
}
cs.registerStep(a_a_xE12rBbM0xelSPQW$8$0, 'a_a_xE12rBbM0xelSPQW$8$0');


//Ent_Wi9qp1NRkv0XpRgG
function Ent_Wi9qp1NRkv0XpRgG(p) {
  this.parent = p;
}
Ent_Wi9qp1NRkv0XpRgG.prototype = new lib.ObjectEntry();
Ent_Wi9qp1NRkv0XpRgG.prototype.keys = [];
Ent_Wi9qp1NRkv0XpRgG.prototype.values = ["$text"];
Ent_Wi9qp1NRkv0XpRgG.prototype.fields = ["$text"];
Ent_Wi9qp1NRkv0XpRgG.prototype["$text_realname"] = "text";
Ent_Wi9qp1NRkv0XpRgG.prototype["$text"] = "";
//Tbl_Wi9qp1NRkv0XpRgG
function Tbl_Wi9qp1NRkv0XpRgG(l) {
  this.libName = l;
  this.initParent();
}
Tbl_Wi9qp1NRkv0XpRgG.prototype = new lib.ObjectSingleton();
Tbl_Wi9qp1NRkv0XpRgG.prototype.entryCtor = Ent_Wi9qp1NRkv0XpRgG;
cs.objectSingletons["volume page data"] = function(d) { return d.$Wi9qp1NRkv0XpRgG };
Tbl_Wi9qp1NRkv0XpRgG.prototype.selfCtor = Tbl_Wi9qp1NRkv0XpRgG;
Tbl_Wi9qp1NRkv0XpRgG.prototype.stableName = "Wi9qp1NRkv0XpRgG";
Tbl_Wi9qp1NRkv0XpRgG.prototype.entryKindName = "volume page data";

// jsonimport
Ent_Wi9qp1NRkv0XpRgG.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
  this.perform_set("$text", ctx.importString(json, "text"), s);
}
cs.registerGlobal("$Wi9qp1NRkv0XpRgG");
/* ACTION: main */
function a_v9fkt4WsLuaZ3oad(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_v9fkt4WsLuaZ3oad$0;
  s.name = "main";
  return s;
}
cs.registerAction("main", "v9fkt4WsLuaZ3oad", a_v9fkt4WsLuaZ3oad, true);

function a_v9fkt4WsLuaZ3oad$0(s) {
  (s.pc = "LqKunP3NbUYSYmBK");
  return s.rt.enter(a_h1TZI26BI4PKuOpj(s, a_v9fkt4WsLuaZ3oad$1));
}
cs.registerStep(a_v9fkt4WsLuaZ3oad$0, 'a_v9fkt4WsLuaZ3oad$0');

function a_v9fkt4WsLuaZ3oad$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "iC80sYWOQnuvjil3");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "title page");
  return s.rt.leave();
}
cs.registerStep(a_v9fkt4WsLuaZ3oad$1, 'a_v9fkt4WsLuaZ3oad$1');

/* ACTION: title page */
function a_xXNhKo7mpg3O8f04(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xXNhKo7mpg3O8f04$0;
  s.name = "title page";
  s.$_ = undefined;
  s.$on_tapped = undefined;
  return s;
}
cs.registerPage("title page", "xXNhKo7mpg3O8f04", a_xXNhKo7mpg3O8f04, false);

function a_xXNhKo7mpg3O8f04$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "Vv0Hki2KBCl9eEEo");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$KJT5L1lf8pdMJ6BK.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "xCRUalLv946l6bWu");
  null;
  } else {
  (s.pc = "DZCVvUJNdizJ4Goq");
  null;
  }
  var t_elseIf_2 = true;
  (s.pc = "e39HJ9s6Sqc06Mr9");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "PBoJmQldktltqoY0");
  lib.Box.push_box(s);
  (s.pc = "trHClJU1RYyQdPTE");
  lib.Box.set_height_range(0, 300, s);
  (s.pc = "x0JdUq5ezhOTM4xv");
  lib.Box.set_width_range(0, 300, s);
  (s.pc = "CJpYPZiP3083nq5n");
  lib.Box.set_padding(0, 2, 0, 2, s);
  (s.pc = "xbRtA4E2bx6Mx232");
  var t_call_3 = lib.Colors.orange(s);
  (ok1(s, t_call_3) && lib.Wall.set_background(t_call_3, s));
  (s.pc = "TMCAyMz0mxNkWezn");
  lib.String_.post_to_wall("Welcome to our slouching application. ", s);
  (s.pc = "B6zgkjAmoIEqKF2T");
  lib.String_.post_to_wall("We\u0027ll go through the simple process of initialization\u002c allowing you to choose a few settings", s);
  (s.pc = "x3VpnS4l4ETTqPxa");
  lib.String_.post_to_wall("It shouldn\u0027t take longer than a few minutes", s);
  (s.pc = "xloCkeBdvW7mGLCt");
  var t_lmbProxy_4 = s.libs.mkLambdaProxy;
  (s.$on_tapped = function(la0, la1) { return a_a_xXNhKo7mpg3O8f04$3(t_lmbProxy_4(la0), la1) });
  (s.pc = "bKvJx5vdxHXY0Bha");
  var t_libcall_5 = s.libs["zuI2pzVcjyOExq4F"]["button"](s);
  return s.rt.enter(t_libcall_5.invoke(t_libcall_5, a_xXNhKo7mpg3O8f04$4, "Ok\u002c let\u0027s start", s.$on_tapped));
  } else {
  (s.pc = "M73k24C5sfJPkR32");
  null;
  }
  return a_xXNhKo7mpg3O8f04$2;
}
cs.registerStep(a_xXNhKo7mpg3O8f04$0, 'a_xXNhKo7mpg3O8f04$0');

function a_xXNhKo7mpg3O8f04$4(s) {
  lib.Box.pop_box(s);
  s.rt.leave_render();
  return a_xXNhKo7mpg3O8f04$2;
}
cs.registerStep(a_xXNhKo7mpg3O8f04$4, 'a_xXNhKo7mpg3O8f04$4');

function a_xXNhKo7mpg3O8f04$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_xXNhKo7mpg3O8f04$2, 'a_xXNhKo7mpg3O8f04$2');

/* ACTION: a_xXNhKo7mpg3O8f04::lambda::3 */
function a_a_xXNhKo7mpg3O8f04$3(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_xXNhKo7mpg3O8f04$3$0;
  s.name = "title page";
  return s;
}
cs.registerLambda("a_xXNhKo7mpg3O8f04\u003a\u003alambda\u003a\u003a3", "a_xXNhKo7mpg3O8f04$3", a_a_xXNhKo7mpg3O8f04$3, true);

function a_a_xXNhKo7mpg3O8f04$3$0(s) {
  (s.pc = "nKwLNysdk45qjZ38");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "numbers");
  return s.rt.leave();
}
cs.registerStep(a_a_xXNhKo7mpg3O8f04$3$0, 'a_a_xXNhKo7mpg3O8f04$3$0');


//Ent_KJT5L1lf8pdMJ6BK
function Ent_KJT5L1lf8pdMJ6BK(p) {
  this.parent = p;
}
Ent_KJT5L1lf8pdMJ6BK.prototype = new lib.ObjectEntry();
Ent_KJT5L1lf8pdMJ6BK.prototype.keys = [];
Ent_KJT5L1lf8pdMJ6BK.prototype.values = [];
Ent_KJT5L1lf8pdMJ6BK.prototype.fields = [];
//Tbl_KJT5L1lf8pdMJ6BK
function Tbl_KJT5L1lf8pdMJ6BK(l) {
  this.libName = l;
  this.initParent();
}
Tbl_KJT5L1lf8pdMJ6BK.prototype = new lib.ObjectSingleton();
Tbl_KJT5L1lf8pdMJ6BK.prototype.entryCtor = Ent_KJT5L1lf8pdMJ6BK;
cs.objectSingletons["title page page data"] = function(d) { return d.$KJT5L1lf8pdMJ6BK };
Tbl_KJT5L1lf8pdMJ6BK.prototype.selfCtor = Tbl_KJT5L1lf8pdMJ6BK;
Tbl_KJT5L1lf8pdMJ6BK.prototype.stableName = "KJT5L1lf8pdMJ6BK";
Tbl_KJT5L1lf8pdMJ6BK.prototype.entryKindName = "title page page data";

// jsonimport
Ent_KJT5L1lf8pdMJ6BK.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
}
cs.registerGlobal("$KJT5L1lf8pdMJ6BK");
/* ACTION: statistics */
function a_y5p9hkRsGSV2f14S(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_y5p9hkRsGSV2f14S$0;
  s.name = "statistics";
  s.$_ = undefined;
  s.$i = undefined;
  s.$body = undefined;
  return s;
}
cs.registerPage("statistics", "y5p9hkRsGSV2f14S", a_y5p9hkRsGSV2f14S, false);

function a_y5p9hkRsGSV2f14S$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "w2qz3vlHkFD4rUc3");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$ZfHnUGGqt2NKzEIR.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "mEMeBUJyaSjIma4v");
  null;
  } else {
  (s.pc = "x7hiuKyHckfpia1p");
  null;
  }
  var t_elseIf_2 = true;
  (s.pc = "AXDWziXPJ3HYDtOK");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "Df5IuA5oHq5OeZC6");
  null;
  (s.pc = "mG4l3FfhLBl5ZZAU");
  (ok1(s, /* Settings table */ s.d.$f25bIZh8P0Uk0K1A) && /* Settings table */ s.d.$f25bIZh8P0Uk0K1A.post_to_wall(s));
  (s.pc = "gNkLG1OXquNzuYfs");
  (ok1(s, /* Calibration table */ s.d.$CiFkT3g2g9sF2fG4) && /* Calibration table */ s.d.$CiFkT3g2g9sF2fG4.post_to_wall(s));
  (s.pc = "LR7UuA0UYpBOZiUY");
  null;
  var t_elseIf_3 = true;
  (s.pc = "coqr8BYVFufnk3dH");
  var t_call_4 = (ok1(s, /* Settings table */ s.d.$f25bIZh8P0Uk0K1A) && /* Settings table */ s.d.$f25bIZh8P0Uk0K1A.row_at(0, s));
  if (t_call_4) {
  var t_recOp_5 = t_call_4.perform_get("Umm4UvzsByM2jM4A", s);
  }
  var t_call_6 = (ok1(s, t_recOp_5) && lib.Boolean_.equals(t_recOp_5, true, s));
  ok1(s, t_call_6);
  if (t_call_6) {
  (s.pc = "Mw0N4JKu3gQYwTaS");
  s.t_bnd_7 = 100;
  (s.$i = 0);
  return a_y5p9hkRsGSV2f14S$5;
  } else {
  (s.pc = "EmkET4RFfjnMvUyY");
  null;
  }
  return a_y5p9hkRsGSV2f14S$4;
  } else {
  (s.pc = "xClb8A7Ow6FEWnep");
  null;
  }
  return a_y5p9hkRsGSV2f14S$2;
}
cs.registerStep(a_y5p9hkRsGSV2f14S$0, 'a_y5p9hkRsGSV2f14S$0');

function a_y5p9hkRsGSV2f14S$5(s) {
  if ((s.$i < s.t_bnd_7)) {
  (s.pc = "r50MlF04Fz2QI1lM");
  var t_call_8 = (ok1(s, /* Settings table */ s.d.$f25bIZh8P0Uk0K1A) && /* Settings table */ s.d.$f25bIZh8P0Uk0K1A.row_at(0, s));
  if (t_call_8) {
  var t_recOp_9 = t_call_8.perform_get("lG7Pzq9rVkJrwkj6", s);
  }
  var t_resumeCtx_10 = s.rt.getBlockingResumeCtx(a_y5p9hkRsGSV2f14S$8);
  (ok2(s, /* alarm2 */ s.d.$U4TW4hNHINP2BjrR, t_recOp_9) && /* alarm2 */ s.d.$U4TW4hNHINP2BjrR.play_special(t_recOp_9, 0, 0, t_resumeCtx_10));
  return a_y5p9hkRsGSV2f14S$8;
  }
  return a_y5p9hkRsGSV2f14S$4;
}
cs.registerStep(a_y5p9hkRsGSV2f14S$5, 'a_y5p9hkRsGSV2f14S$5');

function a_y5p9hkRsGSV2f14S$4(s) {
  var t_elseIf_11 = true;
  (s.pc = "hjvIOY48jf14QKnm");
  var t_call_12 = (ok1(s, /* Settings table */ s.d.$f25bIZh8P0Uk0K1A) && /* Settings table */ s.d.$f25bIZh8P0Uk0K1A.row_at(0, s));
  if (t_call_12) {
  var t_recOp_13 = t_call_12.perform_get("B2mLioF4la8TQBhd", s);
  }
  var t_call_14 = (ok1(s, t_recOp_13) && lib.Boolean_.equals(t_recOp_13, true, s));
  ok1(s, t_call_14);
  if (t_call_14) {
  (s.pc = "W578g7zpUb8uz4dL");
  var t_call_15 = (ok1(s, /* Settings table */ s.d.$f25bIZh8P0Uk0K1A) && /* Settings table */ s.d.$f25bIZh8P0Uk0K1A.row_at(0, s));
  (s.$body = t_call_15);
  (s.pc = "ZMVTy1vAuVZhJLbi");
  var t_call_16 = (ok1(s, /* Settings table */ s.d.$f25bIZh8P0Uk0K1A) && /* Settings table */ s.d.$f25bIZh8P0Uk0K1A.row_at(0, s));
  if (t_call_16) {
  var t_recOp_17 = t_call_16.perform_get("S3uDnw6dOwwFhHpk", s);
  }
  var t_resumeCtx_18 = s.rt.getBlockingResumeCtx(a_y5p9hkRsGSV2f14S$12);
  (ok1(s, t_recOp_17) && lib.Social.send_sms("00447778735501", t_recOp_17, t_resumeCtx_18));
  return a_y5p9hkRsGSV2f14S$12;
  } else {
  (s.pc = "e43R4WQpEpJCVCLC");
  null;
  }
  return a_y5p9hkRsGSV2f14S$10;
}
cs.registerStep(a_y5p9hkRsGSV2f14S$4, 'a_y5p9hkRsGSV2f14S$4');

function a_y5p9hkRsGSV2f14S$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_y5p9hkRsGSV2f14S$2, 'a_y5p9hkRsGSV2f14S$2');

function a_y5p9hkRsGSV2f14S$8(s) {
  (s.$i++);
  return a_y5p9hkRsGSV2f14S$5;
}
cs.registerStep(a_y5p9hkRsGSV2f14S$8, 'a_y5p9hkRsGSV2f14S$8');

function a_y5p9hkRsGSV2f14S$12(s) {
  return a_y5p9hkRsGSV2f14S$10;
}
cs.registerStep(a_y5p9hkRsGSV2f14S$12, 'a_y5p9hkRsGSV2f14S$12');

function a_y5p9hkRsGSV2f14S$10(s) {
  (s.pc = "xvHTfw94mPrpA2fL");
  null;
  s.rt.leave_render();
  return a_y5p9hkRsGSV2f14S$2;
}
cs.registerStep(a_y5p9hkRsGSV2f14S$10, 'a_y5p9hkRsGSV2f14S$10');


//Ent_ZfHnUGGqt2NKzEIR
function Ent_ZfHnUGGqt2NKzEIR(p) {
  this.parent = p;
}
Ent_ZfHnUGGqt2NKzEIR.prototype = new lib.ObjectEntry();
Ent_ZfHnUGGqt2NKzEIR.prototype.keys = [];
Ent_ZfHnUGGqt2NKzEIR.prototype.values = [];
Ent_ZfHnUGGqt2NKzEIR.prototype.fields = [];
//Tbl_ZfHnUGGqt2NKzEIR
function Tbl_ZfHnUGGqt2NKzEIR(l) {
  this.libName = l;
  this.initParent();
}
Tbl_ZfHnUGGqt2NKzEIR.prototype = new lib.ObjectSingleton();
Tbl_ZfHnUGGqt2NKzEIR.prototype.entryCtor = Ent_ZfHnUGGqt2NKzEIR;
cs.objectSingletons["statistics page data"] = function(d) { return d.$ZfHnUGGqt2NKzEIR };
Tbl_ZfHnUGGqt2NKzEIR.prototype.selfCtor = Tbl_ZfHnUGGqt2NKzEIR;
Tbl_ZfHnUGGqt2NKzEIR.prototype.stableName = "ZfHnUGGqt2NKzEIR";
Tbl_ZfHnUGGqt2NKzEIR.prototype.entryKindName = "statistics page data";

// jsonimport
Ent_ZfHnUGGqt2NKzEIR.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
}
cs.registerGlobal("$ZfHnUGGqt2NKzEIR");
/* ACTION: straight page */
function a_xe5MyOI6QaiwpSVE(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xe5MyOI6QaiwpSVE$0;
  s.name = "straight page";
  s.$_ = undefined;
  s.$pic = undefined;
  s.$on_tapped = undefined;
  return s;
}
cs.registerPage("straight page", "xe5MyOI6QaiwpSVE", a_xe5MyOI6QaiwpSVE, false);

function a_xe5MyOI6QaiwpSVE$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "AmJRydJQF86befuw");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$k82eESmqAV63cSq6.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "WaHfbT5wscrAoP4e");
  null;
  } else {
  (s.pc = "Dxb5ChrVM02xOlkB");
  null;
  }
  var t_elseIf_2 = true;
  (s.pc = "nXAT4hMeQNjFK4K7");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "kH1ZTGBy42P4Tzfx");
  null;
  (s.pc = "sXnUA1ZFjrfnSe4u");
  lib.Box.push_box(s);
  (s.pc = "raftZcwk4fm6igRg");
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_xe5MyOI6QaiwpSVE$3);
  var t_call_4 = (ok1(s, /* straight */ s.d.$ZN3pVUS145shUZZV) && /* straight */ s.d.$ZN3pVUS145shUZZV.clone(t_resumeCtx_3));
  return a_xe5MyOI6QaiwpSVE$3;
  } else {
  (s.pc = "IRIpQjCTNLCQUc25");
  null;
  }
  return a_xe5MyOI6QaiwpSVE$2;
}
cs.registerStep(a_xe5MyOI6QaiwpSVE$0, 'a_xe5MyOI6QaiwpSVE$0');

function a_xe5MyOI6QaiwpSVE$3(s) {
  var t_pauseRes_5 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_5);
  (s.$pic = t_pauseRes_5);
  (s.pc = "F0VonuDee2ALujTU");
  s.rt.logObjectMutation(s.$pic);
  var t_resumeCtx_6 = s.rt.getBlockingResumeCtx(a_xe5MyOI6QaiwpSVE$4);
  (ok1(s, s.$pic) && s.$pic.resize(400, 700, t_resumeCtx_6));
  return a_xe5MyOI6QaiwpSVE$4;
}
cs.registerStep(a_xe5MyOI6QaiwpSVE$3, 'a_xe5MyOI6QaiwpSVE$3');

function a_xe5MyOI6QaiwpSVE$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_xe5MyOI6QaiwpSVE$2, 'a_xe5MyOI6QaiwpSVE$2');

function a_xe5MyOI6QaiwpSVE$4(s) {
  (s.pc = "YUqHY1Gc8jPYv5Dd");
  (ok1(s, s.$pic) && s.$pic.post_to_wall(s));
  (s.pc = "kgpAKSZa4y32QKD7");
  lib.Box.set_height_range(0, 300, s);
  (s.pc = "zjL4vwDZR6idpTBS");
  var t_lmbProxy_7 = s.libs.mkLambdaProxy;
  (s.$on_tapped = function(la0, la1) { return a_a_xe5MyOI6QaiwpSVE$5(t_lmbProxy_7(la0), la1) });
  (s.pc = "g2MuLt4wLySAqei4");
  var t_libcall_8 = s.libs["zuI2pzVcjyOExq4F"]["button"](s);
  return s.rt.enter(t_libcall_8.invoke(t_libcall_8, a_xe5MyOI6QaiwpSVE$6, "I am sitting straight", s.$on_tapped));
}
cs.registerStep(a_xe5MyOI6QaiwpSVE$4, 'a_xe5MyOI6QaiwpSVE$4');

function a_xe5MyOI6QaiwpSVE$6(s) {
  lib.Box.pop_box(s);
  s.rt.leave_render();
  return a_xe5MyOI6QaiwpSVE$2;
}
cs.registerStep(a_xe5MyOI6QaiwpSVE$6, 'a_xe5MyOI6QaiwpSVE$6');

/* ACTION: a_xe5MyOI6QaiwpSVE::lambda::5 */
function a_a_xe5MyOI6QaiwpSVE$5(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_xe5MyOI6QaiwpSVE$5$0;
  s.name = "straight page";
  return s;
}
cs.registerLambda("a_xe5MyOI6QaiwpSVE\u003a\u003alambda\u003a\u003a5", "a_xe5MyOI6QaiwpSVE$5", a_a_xe5MyOI6QaiwpSVE$5, true);

function a_a_xe5MyOI6QaiwpSVE$5$0(s) {
  (s.pc = "xB7On2EQBrhwKvM4");
  return s.rt.enter(a_rJD4TuS19UYYJE4S(s, a_a_xe5MyOI6QaiwpSVE$5$1));
}
cs.registerStep(a_a_xe5MyOI6QaiwpSVE$5$0, 'a_a_xe5MyOI6QaiwpSVE$5$0');

function a_a_xe5MyOI6QaiwpSVE$5$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "Blds12ZtUfZF5kAk");
  var t_resumeCtx_1 = s.rt.getBlockingResumeCtx(a_a_xe5MyOI6QaiwpSVE$5$2);
  lib.Wall.prompt("Wait while program calibrates...", t_resumeCtx_1);
  return a_a_xe5MyOI6QaiwpSVE$5$2;
}
cs.registerStep(a_a_xe5MyOI6QaiwpSVE$5$1, 'a_a_xe5MyOI6QaiwpSVE$5$1');

function a_a_xe5MyOI6QaiwpSVE$5$2(s) {
  (s.pc = "hUV0xDF51yzXmHyo");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "slouching page");
  return s.rt.leave();
}
cs.registerStep(a_a_xe5MyOI6QaiwpSVE$5$2, 'a_a_xe5MyOI6QaiwpSVE$5$2');

cs.registerArtResource("Sound", "$U4TW4hNHINP2BjrR", ".\u002fart\u002fl0_U4TW4hNHINP2BjrR");
/* ACTION: slouching page */
function a_l2BjvgDeAJbINJJW(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_l2BjvgDeAJbINJJW$0;
  s.name = "slouching page";
  s.$_ = undefined;
  s.$pic = undefined;
  s.$on_tapped = undefined;
  return s;
}
cs.registerPage("slouching page", "l2BjvgDeAJbINJJW", a_l2BjvgDeAJbINJJW, false);

function a_l2BjvgDeAJbINJJW$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "Zy7o8qQqpiazRMgP");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$k82eESmqAV63cSq6.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "x2Z7acvrSJn2FtJe");
  null;
  } else {
  (s.pc = "sN54SOX1BSGpUQwQ");
  null;
  }
  var t_elseIf_2 = true;
  (s.pc = "XwkkcueTZDNtjnRc");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "xeCyeruRh1Zl4jBy");
  lib.Box.push_box(s);
  (s.pc = "Uzr7jT05FZghYMO0");
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_l2BjvgDeAJbINJJW$3);
  var t_call_4 = (ok1(s, /* slouching */ s.d.$SugPLvW1420NTivB) && /* slouching */ s.d.$SugPLvW1420NTivB.clone(t_resumeCtx_3));
  return a_l2BjvgDeAJbINJJW$3;
  } else {
  (s.pc = "YWlsaJuSnXwnyNBF");
  null;
  }
  return a_l2BjvgDeAJbINJJW$2;
}
cs.registerStep(a_l2BjvgDeAJbINJJW$0, 'a_l2BjvgDeAJbINJJW$0');

function a_l2BjvgDeAJbINJJW$3(s) {
  var t_pauseRes_5 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_5);
  (s.$pic = t_pauseRes_5);
  (s.pc = "hX269x7NtmEt5GSA");
  s.rt.logObjectMutation(s.$pic);
  var t_resumeCtx_6 = s.rt.getBlockingResumeCtx(a_l2BjvgDeAJbINJJW$4);
  (ok1(s, s.$pic) && s.$pic.resize(400, 700, t_resumeCtx_6));
  return a_l2BjvgDeAJbINJJW$4;
}
cs.registerStep(a_l2BjvgDeAJbINJJW$3, 'a_l2BjvgDeAJbINJJW$3');

function a_l2BjvgDeAJbINJJW$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_l2BjvgDeAJbINJJW$2, 'a_l2BjvgDeAJbINJJW$2');

function a_l2BjvgDeAJbINJJW$4(s) {
  (s.pc = "clike0NRZDmw208C");
  (ok1(s, s.$pic) && s.$pic.post_to_wall(s));
  (s.pc = "uZzWJVhf7evzUc9B");
  lib.Box.set_height_range(0, 300, s);
  (s.pc = "X8wfaWcU5qZkboxC");
  var t_lmbProxy_7 = s.libs.mkLambdaProxy;
  (s.$on_tapped = function(la0, la1) { return a_a_l2BjvgDeAJbINJJW$5(t_lmbProxy_7(la0), la1) });
  (s.pc = "mVJF6d40jUKw2AKE");
  var t_libcall_8 = s.libs["zuI2pzVcjyOExq4F"]["button"](s);
  return s.rt.enter(t_libcall_8.invoke(t_libcall_8, a_l2BjvgDeAJbINJJW$6, "I am slouching", s.$on_tapped));
}
cs.registerStep(a_l2BjvgDeAJbINJJW$4, 'a_l2BjvgDeAJbINJJW$4');

function a_l2BjvgDeAJbINJJW$6(s) {
  lib.Box.pop_box(s);
  s.rt.leave_render();
  return a_l2BjvgDeAJbINJJW$2;
}
cs.registerStep(a_l2BjvgDeAJbINJJW$6, 'a_l2BjvgDeAJbINJJW$6');

/* ACTION: a_l2BjvgDeAJbINJJW::lambda::5 */
function a_a_l2BjvgDeAJbINJJW$5(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_l2BjvgDeAJbINJJW$5$0;
  s.name = "slouching page";
  return s;
}
cs.registerLambda("a_l2BjvgDeAJbINJJW\u003a\u003alambda\u003a\u003a5", "a_l2BjvgDeAJbINJJW$5", a_a_l2BjvgDeAJbINJJW$5, true);

function a_a_l2BjvgDeAJbINJJW$5$0(s) {
  (s.pc = "vyKS3IpQfK5OJxvj");
  return s.rt.enter(a_rJD4TuS19UYYJE4S(s, a_a_l2BjvgDeAJbINJJW$5$1));
}
cs.registerStep(a_a_l2BjvgDeAJbINJJW$5$0, 'a_a_l2BjvgDeAJbINJJW$5$0');

function a_a_l2BjvgDeAJbINJJW$5$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "lThWkydcJCo15fo3");
  var t_resumeCtx_1 = s.rt.getBlockingResumeCtx(a_a_l2BjvgDeAJbINJJW$5$2);
  lib.Wall.prompt("Wait while program calibrates...", t_resumeCtx_1);
  return a_a_l2BjvgDeAJbINJJW$5$2;
}
cs.registerStep(a_a_l2BjvgDeAJbINJJW$5$1, 'a_a_l2BjvgDeAJbINJJW$5$1');

function a_a_l2BjvgDeAJbINJJW$5$2(s) {
  (s.pc = "Ot0vcRBEn2iBhcIn");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "volume", 0.2);
  return s.rt.leave();
}
cs.registerStep(a_a_l2BjvgDeAJbINJJW$5$2, 'a_a_l2BjvgDeAJbINJJW$5$2');


//Ent_k82eESmqAV63cSq6
function Ent_k82eESmqAV63cSq6(p) {
  this.parent = p;
}
Ent_k82eESmqAV63cSq6.prototype = new lib.ObjectEntry();
Ent_k82eESmqAV63cSq6.prototype.keys = [];
Ent_k82eESmqAV63cSq6.prototype.values = [];
Ent_k82eESmqAV63cSq6.prototype.fields = [];
//Tbl_k82eESmqAV63cSq6
function Tbl_k82eESmqAV63cSq6(l) {
  this.libName = l;
  this.initParent();
}
Tbl_k82eESmqAV63cSq6.prototype = new lib.ObjectSingleton();
Tbl_k82eESmqAV63cSq6.prototype.entryCtor = Ent_k82eESmqAV63cSq6;
cs.objectSingletons["slouching page page data2"] = function(d) { return d.$k82eESmqAV63cSq6 };
Tbl_k82eESmqAV63cSq6.prototype.selfCtor = Tbl_k82eESmqAV63cSq6;
Tbl_k82eESmqAV63cSq6.prototype.stableName = "k82eESmqAV63cSq6";
Tbl_k82eESmqAV63cSq6.prototype.entryKindName = "slouching page page data2";

// jsonimport
Ent_k82eESmqAV63cSq6.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
}
cs.registerGlobal("$k82eESmqAV63cSq6");
(function () {
  var lib, bnd, resolve;
  var bnds = cs.libBindings = {};
  lib = libs["this"] = {};
  bnd = bnds["this"] = libs;
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "this");
    lib["Calibrate"] = cs.mkLibProxyFactory(bnd, "this", "Calibrate");
    lib["SlouchTest"] = cs.mkLibProxyFactory(bnd, "this", "SlouchTest");
    lib["Initialize"] = cs.mkLibProxyFactory(bnd, "this", "Initialize");
    lib["numberhandler"] = cs.mkLibProxyFactory(bnd, "this", "numberhandler");
    lib["volume"] = cs.mkLibProxyFactory(bnd, "this", "volume");
    lib["main"] = cs.mkLibProxyFactory(bnd, "this", "main");
    lib["title page"] = cs.mkLibProxyFactory(bnd, "this", "title page");
    lib["statistics"] = cs.mkLibProxyFactory(bnd, "this", "statistics");
    lib["slouching page"] = cs.mkLibProxyFactory(bnd, "this", "slouching page");
  lib = libs["zuI2pzVcjyOExq4F"] = {};
  bnd = bnds["zuI2pzVcjyOExq4F"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "zuI2pzVcjyOExq4F");
    lib["button"] = cs.mkLibProxyFactory(bnd, "zuI2pzVcjyOExq4F", "button");
    lib["input number"] = cs.mkLibProxyFactory(bnd, "zuI2pzVcjyOExq4F", "input number");
    lib["input number w\u002f range"] = cs.mkLibProxyFactory(bnd, "zuI2pzVcjyOExq4F", "input number w\u002f range");
  lib = libs["xRcx0cvWWP9S4Imz"] = {};
  bnd = bnds["xRcx0cvWWP9S4Imz"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "xRcx0cvWWP9S4Imz");
  bnd = bnds["zuI2pzVcjyOExq4F"];
  bnd["this$lib"] = "zuI2pzVcjyOExq4F";
  bnd = bnds["xRcx0cvWWP9S4Imz"];
  bnd["this$lib"] = "xRcx0cvWWP9S4Imz";
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
  if(!d.hasOwnProperty("$CiFkT3g2g9sF2fG4") || !d["$CiFkT3g2g9sF2fG4"]) d.$CiFkT3g2g9sF2fG4 = new Tbl_CiFkT3g2g9sF2fG4(d.libName);
  if(!d.hasOwnProperty("$f25bIZh8P0Uk0K1A") || !d["$f25bIZh8P0Uk0K1A"]) d.$f25bIZh8P0Uk0K1A = new Tbl_f25bIZh8P0Uk0K1A(d.libName);
  if(!d.hasOwnProperty("$TQOaQ4R6HcUdMAek") || !d["$TQOaQ4R6HcUdMAek"]) d.$TQOaQ4R6HcUdMAek = new Tbl_TQOaQ4R6HcUdMAek(d.libName);
  if(!d.hasOwnProperty("$Wi9qp1NRkv0XpRgG") || !d["$Wi9qp1NRkv0XpRgG"]) d.$Wi9qp1NRkv0XpRgG = new Tbl_Wi9qp1NRkv0XpRgG(d.libName);
  if(!d.hasOwnProperty("$KJT5L1lf8pdMJ6BK") || !d["$KJT5L1lf8pdMJ6BK"]) d.$KJT5L1lf8pdMJ6BK = new Tbl_KJT5L1lf8pdMJ6BK(d.libName);
  if(!d.hasOwnProperty("$ZfHnUGGqt2NKzEIR") || !d["$ZfHnUGGqt2NKzEIR"]) d.$ZfHnUGGqt2NKzEIR = new Tbl_ZfHnUGGqt2NKzEIR(d.libName);
  if(!d.hasOwnProperty("$k82eESmqAV63cSq6") || !d["$k82eESmqAV63cSq6"]) d.$k82eESmqAV63cSq6 = new Tbl_k82eESmqAV63cSq6(d.libName);

};

cs._initGlobals2 = function(d) {
d.$CiFkT3g2g9sF2fG4.name = "Calibration";d.$CiFkT3g2g9sF2fG4.linked_cloudtables = [];
d.$f25bIZh8P0Uk0K1A.name = "Settings";d.$f25bIZh8P0Uk0K1A.linked_cloudtables = [];
d.$TQOaQ4R6HcUdMAek.name = "numbers page data";d.$Wi9qp1NRkv0XpRgG.name = "volume page data";d.$KJT5L1lf8pdMJ6BK.name = "title page page data";d.$ZfHnUGGqt2NKzEIR.name = "statistics page data";d.$k82eESmqAV63cSq6.name = "slouching page page data2";};

cs._resetGlobals = function(d) {
  d.$CiFkT3g2g9sF2fG4 = undefined;
  d.$f25bIZh8P0Uk0K1A = undefined;
  d.$TQOaQ4R6HcUdMAek = undefined;
  d.$ZN3pVUS145shUZZV = undefined;
  d.$SugPLvW1420NTivB = undefined;
  d.$Wi9qp1NRkv0XpRgG = undefined;
  d.$KJT5L1lf8pdMJ6BK = undefined;
  d.$ZfHnUGGqt2NKzEIR = undefined;
  d.$U4TW4hNHINP2BjrR = undefined;
  d.$k82eESmqAV63cSq6 = undefined;
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "main";
cs.authorId = "oovd";
cs.scriptGuid = "4b2fc965-b516-4cae-15f3-1a15284607ab";
cs.hasLocalData = 1;
}),

// **************************************************************
"zuI2pzVcjyOExq4F": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "forms toby";
cs.scriptColor = "\u00239955bb";
cs.objectSingletons = {};
/* ACTION: button */
function a_button(previous, returnAddr, $text, $on_tapped) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_button$0;
  s.name = "button";
  s.$text = $text;
  s.$on_tapped = $on_tapped;
  s.$handler = undefined;
  return s;
}
cs.registerAction("button", "button", a_button, false);

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

function ok5(s, a0, a1, a2, a3, a4) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined || a4 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function a_button$0(s) {
  (s.pc = "BeVNPIv2BatLOg8h");
  lib.Box.push_box(s);
  (s.pc = "lCBx1FU8aK5Bq79r");
  lib.Box.set_margins(0.5, 0.5, 0.5, 0.5, s);
  (s.pc = "eAQT483O6pVvTl0u");
  lib.Box.set_padding(0.5, 1, 0.5, 1, s);
  (s.pc = "P0SG5IzV2sxMnysd");
  var t_call_0 = lib.Colors.foreground(s);
  (ok1(s, t_call_0) && lib.Box.set_border(t_call_0, 0.1, s));
  (s.pc = "x3sO2ZcJrezHe3kX");
  lib.Box.set_font_size(1.2, s);
  (s.pc = "k2pcA7icp5MU2rgL");
  var t_lmbv_1 = s.$on_tapped;
  var t_lmbProxy_2 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_button$1(t_lmbProxy_2(la0), la1, t_lmbv_1) });
  (s.pc = "veq2xNGD2p2kRPZ1");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  (s.pc = "EEPUP0nu9eFaj3nx");
  lib.Box.push_box(s);
  (s.pc = "clIc1IEhC7rO4Bea");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "Gscop3pSrsVr5VHt");
  lib.Box.set_vertical_align("center", s);
  (s.pc = "oehMaNCjES5Lh1kE");
  var t_call_3 = (ok1(s, s.$text) && lib.String_.to_lower_case(s.$text, s));
  (ok1(s, t_call_3) && lib.String_.post_to_wall(t_call_3, s));
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  return s.rt.leave();
}
cs.registerStep(a_button$0, 'a_button$0');

/* ACTION: a_button::lambda::1 */
function a_a_button$1(previous, returnAddr, $on_tapped) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_button$1$0;
  s.name = "button";
  s.$on_tapped = $on_tapped;
  return s;
}
cs.registerLambda("a_button\u003a\u003alambda\u003a\u003a1", "a_button$1", a_a_button$1, true);

function a_a_button$1$0(s) {
  (s.pc = "MQxNPwBN7QPWlcFZ");
  return s.rt.enter((ok1(s, s.$on_tapped) && s.$on_tapped(s, a_a_button$1$1)));
}
cs.registerStep(a_a_button$1$0, 'a_a_button$1$0');

function a_a_button$1$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_button$1$1, 'a_a_button$1$1');

/* ACTION: indentation */
function a_indentation(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_indentation$0;
  s.name = "indentation";
  s.result = undefined;
  return s;
}
cs.registerAction("indentation", "indentation", a_indentation, false);

function a_indentation$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "MlYnlJMVLG2RLagf");
  return s.rt.enter(a_narrowscreen(s, a_indentation$1));
}
cs.registerStep(a_indentation$0, 'a_indentation$0');

function a_indentation$1(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  ok1(s, t_actRes_1);
  if (t_actRes_1) {
  (s.pc = "fvUQIztqcBz1gYQv");
  (s.result = 0);
  } else {
  (s.pc = "dt0YYXQ04btlJrZQ");
  var t_call_2 = lib.Box.page_width(s);
  var t_infix_3 = (ok1(s, t_call_2) && (t_call_2 - 40));
  var t_infix_4 = (ok1(s, t_infix_3) && (t_infix_3 * 0.2));
  var t_infix_5 = (ok1(s, t_infix_4) && (10 + t_infix_4));
  (s.result = t_infix_5);
  }
  return s.rt.leave();
}
cs.registerStep(a_indentation$1, 'a_indentation$1');

/* ACTION: input number */
function a_inputnumber(previous, returnAddr, $label, $text, $changehandler) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_inputnumber$0;
  s.name = "input number";
  s.$label = $label;
  s.$text = $text;
  s.$changehandler = $changehandler;
  s.$errorcheck = undefined;
  s.$changed = undefined;
  s.$s = undefined;
  s.$error = undefined;
  s.$x = undefined;
  s.$t = undefined;
  return s;
}
cs.registerAction("input number", "inputnumber", a_inputnumber, false);

function a_inputnumber$0(s) {
  (s.pc = "wJCP8sQukTPlpnLv");
  var t_lmbProxy_0 = s.libs.mkLambdaProxy;
  (s.$errorcheck = function(la0, la1, la2) { return a_a_inputnumber$1(t_lmbProxy_0(la0), la1, la2) });
  (s.pc = "FZI2cM0Cm4gVf4Vg");
  var t_lmbv_1 = s.$changehandler;
  var t_lmbProxy_2 = s.libs.mkLambdaProxy;
  (s.$changed = function(la0, la1, la2) { return a_a_inputnumber$2(t_lmbProxy_2(la0), la1, la2, t_lmbv_1) });
  (s.pc = "ZHBhFk2XYX4sBT1J");
  return s.rt.enter(a_oWu4bWFVWgG65r4Hrh69VnB3(s, a_inputnumber$3, s.$label, s.$text, s.$errorcheck, s.$changed));
}
cs.registerStep(a_inputnumber$0, 'a_inputnumber$0');

function a_inputnumber$3(s) {
  return s.rt.leave();
}
cs.registerStep(a_inputnumber$3, 'a_inputnumber$3');

/* ACTION: a_inputnumber::lambda::1 */
function a_a_inputnumber$1(previous, returnAddr, $s) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_inputnumber$1$0;
  s.name = "input number";
  s.$s = $s;
  s.$x = undefined;
  s.result = undefined;
  return s;
}
cs.registerLambda("a_inputnumber\u003a\u003alambda\u003a\u003a1", "a_inputnumber$1", a_a_inputnumber$1, true);

function a_a_inputnumber$1$0(s) {
  (s.pc = "c26j93ykO4m2So60");
  var t_call_0 = (ok1(s, s.$s) && lib.String_.to_number(s.$s, s));
  (s.$x = t_call_0);
  var t_elseIf_1 = true;
  (s.pc = "qigndUatIEgwI4GN");
  true;
  if ((s.$x == undefined)) {
  (s.pc = "pV4aS5dTajuO4QyX");
  (s.result = "please enter a valid number.");
  } else {
  (s.pc = "sseXJOPgV4a4kIqw");
  (s.result = "");
  }
  return s.rt.leave();
}
cs.registerStep(a_a_inputnumber$1$0, 'a_a_inputnumber$1$0');

/* ACTION: a_inputnumber::lambda::2 */
function a_a_inputnumber$2(previous, returnAddr, $t, $changehandler) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_inputnumber$2$0;
  s.name = "input number";
  s.$changehandler = $changehandler;
  s.$t = $t;
  return s;
}
cs.registerLambda("a_inputnumber\u003a\u003alambda\u003a\u003a2", "a_inputnumber$2", a_a_inputnumber$2, true);

function a_a_inputnumber$2$0(s) {
  (s.pc = "At96ttBLnjKVKnSr");
  var t_call_0 = (ok1(s, s.$t) && lib.String_.to_number(s.$t, s));
  return s.rt.enter((ok1(s, s.$changehandler) && s.$changehandler(s, a_a_inputnumber$2$1, t_call_0)));
}
cs.registerStep(a_a_inputnumber$2$0, 'a_a_inputnumber$2$0');

function a_a_inputnumber$2$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_inputnumber$2$1, 'a_a_inputnumber$2$1');

/* ACTION: narrow screen */
function a_narrowscreen(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_narrowscreen$0;
  s.name = "narrow screen";
  s.result = undefined;
  return s;
}
cs.registerAction("narrow screen", "narrowscreen", a_narrowscreen, false);

function a_narrowscreen$0(s) {
  (s.pc = "xhsJ4s70sFRqW9JL");
  var t_call_0 = lib.Box.page_width(s);
  var t_infix_1 = (ok1(s, t_call_0) && (t_call_0 < 35));
  (s.result = t_infix_1);
  return s.rt.leave();
}
cs.registerStep(a_narrowscreen$0, 'a_narrowscreen$0');

/* ACTION: labeled content */
function a_labeledcontent(previous, returnAddr, $label, $content) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_labeledcontent$0;
  s.name = "labeled content";
  s.$label = $label;
  s.$content = $content;
  s.$indent = undefined;
  s.$pw = undefined;
  return s;
}
cs.registerAction("labeled content", "labeledcontent", a_labeledcontent, false);

function a_labeledcontent$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "x57fXUa20kusWpQR");
  var t_call_1 = lib.Boolean_.not((s.$label == undefined), s);
  var t_lazy_2 = t_call_1;
  if ((ok1(s, t_lazy_2) && t_lazy_2)) {
  var t_call_3 = (ok1(s, s.$label) && lib.String_.equals(s.$label, "", s));
  var t_call_4 = (ok1(s, t_call_3) && lib.Boolean_.not(t_call_3, s));
  (t_lazy_2 = t_call_4);
  }
  ok1(s, t_lazy_2);
  if (t_lazy_2) {
  (s.pc = "x1QPNytuF6aVimtI");
  lib.Box.push_box(s);
  (s.pc = "W3cfgIbzJtpKQu58");
  lib.Box.set_horizontal_stretch(1, s);
  (s.pc = "N3V9zJqTiYOZ09Y4");
  lib.Box.set_horizontal_align("left", s);
  var t_elseIf_5 = true;
  (s.pc = "MIXwy0Lrg4byv7v2");
  return s.rt.enter(a_narrowscreen(s, a_labeledcontent$3));
  } else {
  (s.pc = "CLcBNraLBuLvz6WE");
  return s.rt.enter(a_normalcontent(s, a_labeledcontent$8, s.$content));
  }
  return a_labeledcontent$2;
}
cs.registerStep(a_labeledcontent$0, 'a_labeledcontent$0');

function a_labeledcontent$3(s) {
  var t_actRes_6 = s.rt.returnedFrom.result;
  ok1(s, t_actRes_6);
  if (t_actRes_6) {
  (s.pc = "iLdCmyES0H44sYXl");
  lib.Box.use_vertical_layout(s);
  (s.pc = "x5C1zDmnt0g59AKK");
  lib.Box.set_margins(0.35, 0, 0, 0, s);
  } else {
  (s.pc = "JG4RsN69pDFxkHCs");
  lib.Box.use_horizontal_layout(s);
  }
  (s.pc = "jpuLtmhurwi9PgQH");
  return s.rt.enter(a_indentation(s, a_labeledcontent$5));
}
cs.registerStep(a_labeledcontent$3, 'a_labeledcontent$3');

function a_labeledcontent$8(s) {
  return a_labeledcontent$2;
}
cs.registerStep(a_labeledcontent$8, 'a_labeledcontent$8');

function a_labeledcontent$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_labeledcontent$2, 'a_labeledcontent$2');

function a_labeledcontent$5(s) {
  var t_actRes_7 = s.rt.returnedFrom.result;
  (s.$indent = t_actRes_7);
  (s.pc = "qIj8HVwd4WzOBmo0");
  lib.Box.push_box(s);
  (s.pc = "RpI2slWOhKGTeFzx");
  (ok1(s, s.$label) && lib.String_.post_to_wall(s.$label, s));
  (s.pc = "bQyiflPFSe4LG1PF");
  var t_call_8 = lib.Box.page_width(s);
  (s.$pw = t_call_8);
  (s.pc = "do30F2oLngCTQahg");
  var t_infix_9 = (ok1(s, s.$pw) && (s.$pw - 0.7));
  var t_infix_10 = (ok2(s, s.$indent, t_infix_9) && (s.$indent / t_infix_9));
  (ok1(s, t_infix_10) && lib.Box.set_horizontal_stretch(t_infix_10, s));
  (s.pc = "ZSt80PJbtHzVC9Xc");
  lib.Box.set_horizontal_align("right", s);
  (s.pc = "rwpwvOMJSurVrxXm");
  lib.Box.set_margins(0.2, 0, 0.2, 0.5, s);
  lib.Box.pop_box(s);
  (s.pc = "PcMSXcdzHFpXVs0c");
  lib.Box.push_box(s);
  var t_elseIf_11 = true;
  (s.pc = "PMVSXaDMx2Byxb4q");
  var t_call_12 = lib.Box.page_width(s);
  var t_infix_13 = (ok1(s, t_call_12) && (t_call_12 < 40));
  ok1(s, t_infix_13);
  if (t_infix_13) {
  (s.pc = "S08jbByW69nHCSvh");
  var t_call_14 = lib.Box.page_width(s);
  var t_infix_15 = (ok2(s, t_call_14, s.$indent) && (t_call_14 - s.$indent));
  (ok1(s, t_infix_15) && lib.Box.set_width_range(10, t_infix_15, s));
  (s.pc = "v6d9cE4Xn6LJLsIP");
  lib.Box.set_horizontal_stretch(1, s);
  } else {
  (s.pc = "r5cfsPE3NVyPphiI");
  lib.Box.set_horizontal_stretch(0, s);
  (s.pc = "xyhKvW904uX4eTbV");
  var t_call_16 = lib.Box.page_width(s);
  var t_infix_17 = (ok2(s, t_call_16, s.$indent) && (t_call_16 - s.$indent));
  (ok1(s, t_infix_17) && lib.Box.set_width_range(20, t_infix_17, s));
  }
  (s.pc = "d4tjdbWzbshKmjAb");
  lib.Box.push_box(s);
  (s.pc = "Bc2pIO5JfYnlxvd5");
  lib.Box.set_padding(0, 0.5, 0, 0.5, s);
  (s.pc = "Il02dBjaLo20CMA7");
  return s.rt.enter((ok1(s, s.$content) && s.$content(s, a_labeledcontent$7)));
}
cs.registerStep(a_labeledcontent$5, 'a_labeledcontent$5');

function a_labeledcontent$7(s) {
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  return a_labeledcontent$2;
}
cs.registerStep(a_labeledcontent$7, 'a_labeledcontent$7');

/* ACTION: normal content */
function a_normalcontent(previous, returnAddr, $content) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_normalcontent$0;
  s.name = "normal content";
  s.$content = $content;
  return s;
}
cs.registerAction("normal content", "normalcontent", a_normalcontent, false);

function a_normalcontent$0(s) {
  (s.pc = "muK7qjocorEy5bFp");
  lib.Box.push_box(s);
  var t_elseIf_0 = true;
  (s.pc = "PGjY9ijaM2Dqkz6u");
  var t_call_1 = lib.Box.page_width(s);
  var t_infix_2 = (ok1(s, t_call_1) && (t_call_1 < 40));
  ok1(s, t_infix_2);
  if (t_infix_2) {
  (s.pc = "HOwt6al4pB0a4b77");
  var t_call_3 = lib.Box.page_width(s);
  (ok1(s, t_call_3) && lib.Box.set_width_range(10, t_call_3, s));
  (s.pc = "JmPANVSMlr2ok7XQ");
  lib.Box.set_horizontal_stretch(1, s);
  } else {
  (s.pc = "xjNSS8T2YkmlTDA1");
  lib.Box.set_horizontal_stretch(0, s);
  (s.pc = "drzpEKoWynG0Wxut");
  var t_call_4 = lib.Box.page_width(s);
  (ok1(s, t_call_4) && lib.Box.set_width_range(20, t_call_4, s));
  }
  (s.pc = "sL9WHWbDfK264y7q");
  lib.Box.push_box(s);
  (s.pc = "xwjgvLJt7CmHAqYx");
  lib.Box.set_padding(0, 0.5, 0, 0.5, s);
  (s.pc = "WjbACCskO8bfp0L4");
  return s.rt.enter((ok1(s, s.$content) && s.$content(s, a_normalcontent$2)));
}
cs.registerStep(a_normalcontent$0, 'a_normalcontent$0');

function a_normalcontent$2(s) {
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  return s.rt.leave();
}
cs.registerStep(a_normalcontent$2, 'a_normalcontent$2');

/* ACTION: input text line w validator */
function a_oWu4bWFVWgG65r4Hrh69VnB3(previous, returnAddr, $label, $text, $errorcheck, $changehandler) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_oWu4bWFVWgG65r4Hrh69VnB3$0;
  s.name = "input text line w\u002f validator";
  s.$label = $label;
  s.$text = $text;
  s.$errorcheck = $errorcheck;
  s.$changehandler = $changehandler;
  s.$content = undefined;
  s.$error = undefined;
  s.$changed = undefined;
  s.$t = undefined;
  return s;
}
cs.registerAction("input text line w\u002f validator", "oWu4bWFVWgG65r4Hrh69VnB3", a_oWu4bWFVWgG65r4Hrh69VnB3, false);

function a_oWu4bWFVWgG65r4Hrh69VnB3$0(s) {
  (s.pc = "qWtL22bzMjpfKJYV");
  var t_lmbv_0 = s.$errorcheck;
  var t_lmbv_1 = s.$text;
  var t_lmbv_2 = s.$changed;
  var t_lmbv_3 = s.$changehandler;
  var t_lmbProxy_4 = s.libs.mkLambdaProxy;
  (s.$content = function(la0, la1) { return a_a_oWu4bWFVWgG65r4Hrh69VnB3$1(t_lmbProxy_4(la0), la1, t_lmbv_0, t_lmbv_1, t_lmbv_2, t_lmbv_3) });
  (s.pc = "x0k97z2hXiY322mO");
  return s.rt.enter(a_labeledcontent(s, a_oWu4bWFVWgG65r4Hrh69VnB3$2, s.$label, s.$content));
}
cs.registerStep(a_oWu4bWFVWgG65r4Hrh69VnB3$0, 'a_oWu4bWFVWgG65r4Hrh69VnB3$0');

function a_oWu4bWFVWgG65r4Hrh69VnB3$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_oWu4bWFVWgG65r4Hrh69VnB3$2, 'a_oWu4bWFVWgG65r4Hrh69VnB3$2');

/* ACTION: a_oWu4bWFVWgG65r4Hrh69VnB3::lambda::1 */
function a_a_oWu4bWFVWgG65r4Hrh69VnB3$1(previous, returnAddr, $errorcheck, $text, $changed, $changehandler) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$0;
  s.name = "input text line w\u002f validator";
  s.$errorcheck = $errorcheck;
  s.$text = $text;
  s.$changed = $changed;
  s.$t = undefined;
  s.$changehandler = $changehandler;
  s.$error = undefined;
  return s;
}
cs.registerLambda("a_oWu4bWFVWgG65r4Hrh69VnB3\u003a\u003alambda\u003a\u003a1", "a_oWu4bWFVWgG65r4Hrh69VnB3$1", a_a_oWu4bWFVWgG65r4Hrh69VnB3$1, true);

function a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$0(s) {
  (s.pc = "f80gXpCr25EE0tP5");
  lib.Box.push_box(s);
  (s.pc = "YDavaFuz8WaZCRWC");
  var t_call_0 = (ok1(s, s.$text) && s.$text._get(s));
  return s.rt.enter((ok1(s, s.$errorcheck) && s.$errorcheck(s, a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$1, t_call_0)));
}
cs.registerStep(a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$0, 'a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$0');

function a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$1(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  (s.$error = t_actRes_1);
  (s.pc = "pDpoejLevWzS8z0b");
  lib.Box.push_box(s);
  (s.pc = "stSGcB2mwmZoYFPm");
  var t_call_2 = lib.Colors.foreground(s);
  (ok1(s, t_call_2) && lib.Box.set_border(t_call_2, 0.1, s));
  (s.pc = "RLsisiY1kcQ36lrj");
  var t_lmbv_3 = s.$text;
  var t_lmbv_4 = s.$errorcheck;
  var t_lmbv_5 = s.$changehandler;
  var t_lmbProxy_6 = s.libs.mkLambdaProxy;
  (s.$changed = function(la0, la1, la2) { return a_a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$2(t_lmbProxy_6(la0), la1, la2, t_lmbv_3, t_lmbv_4, t_lmbv_5) });
  (s.pc = "x7T2lUz4YYgBaRD0");
  var t_call_7 = (ok1(s, s.$text) && s.$text._get(s));
  (ok2(s, t_call_7, s.$changed) && lib.Box.edit("textline", t_call_7, s.$changed, s));
  (s.pc = "XfjBHlqMy2xMp1PU");
  lib.Box.set_margins(0.2, 0.5, 0.2, 0, s);
  (s.pc = "znNNcFLuMrwlygkb");
  lib.Box.set_horizontal_stretch(1, s);
  lib.Box.pop_box(s);
  var t_elseIf_8 = true;
  (s.pc = "P9NfFHCmIjIAsrFp");
  var t_call_9 = (ok1(s, s.$error) && lib.String_.is_empty(s.$error, s));
  var t_call_10 = (ok1(s, t_call_9) && lib.Boolean_.not(t_call_9, s));
  ok1(s, t_call_10);
  if (t_call_10) {
  (s.pc = "x3HjnQ2qlUWV0mJX");
  var t_call_11 = lib.Colors.red(s);
  (ok1(s, t_call_11) && lib.Box.set_foreground(t_call_11, s));
  (s.pc = "i8JReBGCqZHMyNLW");
  var t_concat_12 = lib.String_.concatAny("\u21e7 ", s.$error);
  (ok1(s, t_concat_12) && lib.String_.post_to_wall(t_concat_12, s));
  } else {
  (s.pc = "UQoUcdpEvbZi5GNO");
  null;
  }
  lib.Box.pop_box(s);
  return s.rt.leave();
}
cs.registerStep(a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$1, 'a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$1');

/* ACTION: a_a_oWu4bWFVWgG65r4Hrh69VnB3$1::lambda::2 */
function a_a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$2(previous, returnAddr, $t, $text, $errorcheck, $changehandler) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$2$0;
  s.name = "a_oWu4bWFVWgG65r4Hrh69VnB3\u003a\u003alambda\u003a\u003a1";
  s.$text = $text;
  s.$t = $t;
  s.$errorcheck = $errorcheck;
  s.$changehandler = $changehandler;
  return s;
}
cs.registerLambda("a_a_oWu4bWFVWgG65r4Hrh69VnB3$1\u003a\u003alambda\u003a\u003a2", "a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$2", a_a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$2, true);

function a_a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$2$0(s) {
  (s.pc = "GEBkTEw75djEWxk1");
  (ok2(s, s.$text, s.$t) && s.$text._set(s.$t, s));
  var t_elseIf_0 = true;
  (s.pc = "vhOJcgr7W19mZVmU");
  return s.rt.enter((ok1(s, s.$errorcheck) && s.$errorcheck(s, a_a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$2$1, s.$t)));
}
cs.registerStep(a_a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$2$0, 'a_a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$2$0');

function a_a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$2$1(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  var t_call_2 = (ok1(s, t_actRes_1) && lib.String_.is_empty(t_actRes_1, s));
  ok1(s, t_call_2);
  if (t_call_2) {
  (s.pc = "NGbmrrFVzFOvhnVr");
  return s.rt.enter((ok1(s, s.$changehandler) && s.$changehandler(s, a_a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$2$3, s.$t)));
  } else {
  (s.pc = "xVLZc2o3erXmzOf6");
  null;
  }
  return a_a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$2$2;
}
cs.registerStep(a_a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$2$1, 'a_a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$2$1');

function a_a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$2$3(s) {
  return a_a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$2$2;
}
cs.registerStep(a_a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$2$3, 'a_a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$2$3');

function a_a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$2$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$2$2, 'a_a_a_oWu4bWFVWgG65r4Hrh69VnB3$1$2$2');

/* ACTION: input number w range */
function a_tGqxgzfeJBvVOWfT(previous, returnAddr, $label, $text, $changehandler, $lower_range, $upper_range) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_tGqxgzfeJBvVOWfT$0;
  s.name = "input number w\u002f range";
  s.$label = $label;
  s.$text = $text;
  s.$changehandler = $changehandler;
  s.$lower_range = $lower_range;
  s.$upper_range = $upper_range;
  s.$errorcheck = undefined;
  s.$changed = undefined;
  s.$s = undefined;
  s.$error = undefined;
  s.$x = undefined;
  s.$t = undefined;
  return s;
}
cs.registerAction("input number w\u002f range", "tGqxgzfeJBvVOWfT", a_tGqxgzfeJBvVOWfT, false);

function a_tGqxgzfeJBvVOWfT$0(s) {
  (s.pc = "xt28uJNQVKw3Ycr2");
  var t_lmbv_0 = s.$lower_range;
  var t_lmbv_1 = s.$upper_range;
  var t_lmbProxy_2 = s.libs.mkLambdaProxy;
  (s.$errorcheck = function(la0, la1, la2) { return a_a_tGqxgzfeJBvVOWfT$1(t_lmbProxy_2(la0), la1, la2, t_lmbv_0, t_lmbv_1) });
  (s.pc = "YwQQFCDIK3Z4Hg8y");
  var t_lmbv_3 = s.$changehandler;
  var t_lmbProxy_4 = s.libs.mkLambdaProxy;
  (s.$changed = function(la0, la1, la2) { return a_a_tGqxgzfeJBvVOWfT$2(t_lmbProxy_4(la0), la1, la2, t_lmbv_3) });
  (s.pc = "vbsdKBRToGZcqU9C");
  return s.rt.enter(a_oWu4bWFVWgG65r4Hrh69VnB3(s, a_tGqxgzfeJBvVOWfT$3, s.$label, s.$text, s.$errorcheck, s.$changed));
}
cs.registerStep(a_tGqxgzfeJBvVOWfT$0, 'a_tGqxgzfeJBvVOWfT$0');

function a_tGqxgzfeJBvVOWfT$3(s) {
  return s.rt.leave();
}
cs.registerStep(a_tGqxgzfeJBvVOWfT$3, 'a_tGqxgzfeJBvVOWfT$3');

/* ACTION: a_tGqxgzfeJBvVOWfT::lambda::1 */
function a_a_tGqxgzfeJBvVOWfT$1(previous, returnAddr, $s, $lower_range, $upper_range) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_tGqxgzfeJBvVOWfT$1$0;
  s.name = "input number w\u002f range";
  s.$s = $s;
  s.$x = undefined;
  s.$lower_range = $lower_range;
  s.$upper_range = $upper_range;
  s.result = undefined;
  return s;
}
cs.registerLambda("a_tGqxgzfeJBvVOWfT\u003a\u003alambda\u003a\u003a1", "a_tGqxgzfeJBvVOWfT$1", a_a_tGqxgzfeJBvVOWfT$1, true);

function a_a_tGqxgzfeJBvVOWfT$1$0(s) {
  (s.pc = "zQ3t8ZtDEAsQ9ah7");
  var t_call_0 = (ok1(s, s.$s) && lib.String_.to_number(s.$s, s));
  (s.$x = t_call_0);
  var t_elseIf_1 = true;
  (s.pc = "x4zvUEEpnr412FI1");
  var t_lazy_2 = (s.$x == undefined);
  if ((ok1(s, t_lazy_2) && (!t_lazy_2))) {
  var t_infix_3 = (ok2(s, s.$x, s.$lower_range) && (s.$x < s.$lower_range));
  (t_lazy_2 = t_infix_3);
  }
  var t_lazy_4 = t_lazy_2;
  if ((ok1(s, t_lazy_4) && (!t_lazy_4))) {
  var t_infix_5 = (ok2(s, s.$x, s.$upper_range) && (s.$x > s.$upper_range));
  (t_lazy_4 = t_infix_5);
  }
  ok1(s, t_lazy_4);
  if (t_lazy_4) {
  (s.pc = "OoiEh47YlvyR2Ydd");
  (s.result = "please enter a valid number.");
  } else {
  (s.pc = "ViscFCkuYYLYH2OU");
  (s.result = "");
  }
  return s.rt.leave();
}
cs.registerStep(a_a_tGqxgzfeJBvVOWfT$1$0, 'a_a_tGqxgzfeJBvVOWfT$1$0');

/* ACTION: a_tGqxgzfeJBvVOWfT::lambda::2 */
function a_a_tGqxgzfeJBvVOWfT$2(previous, returnAddr, $t, $changehandler) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_tGqxgzfeJBvVOWfT$2$0;
  s.name = "input number w\u002f range";
  s.$changehandler = $changehandler;
  s.$t = $t;
  return s;
}
cs.registerLambda("a_tGqxgzfeJBvVOWfT\u003a\u003alambda\u003a\u003a2", "a_tGqxgzfeJBvVOWfT$2", a_a_tGqxgzfeJBvVOWfT$2, true);

function a_a_tGqxgzfeJBvVOWfT$2$0(s) {
  (s.pc = "arlYnvTg1N4zUplM");
  var t_call_0 = (ok1(s, s.$t) && lib.String_.to_number(s.$t, s));
  return s.rt.enter((ok1(s, s.$changehandler) && s.$changehandler(s, a_a_tGqxgzfeJBvVOWfT$2$1, t_call_0)));
}
cs.registerStep(a_a_tGqxgzfeJBvVOWfT$2$0, 'a_a_tGqxgzfeJBvVOWfT$2$0');

function a_a_tGqxgzfeJBvVOWfT$2$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_tGqxgzfeJBvVOWfT$2$1, 'a_a_tGqxgzfeJBvVOWfT$2$1');

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
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.authorId = "oovd";
cs.scriptGuid = "4b2fc965-b516-4cae-15f3-1a15284607ab";
}),

// **************************************************************
"xRcx0cvWWP9S4Imz": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "theme";
cs.scriptColor = "\u00239955bb";
cs.objectSingletons = {};
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
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "title 1";
cs.authorId = "oovd";
cs.scriptGuid = "4b2fc965-b516-4cae-15f3-1a15284607ab";
})}
