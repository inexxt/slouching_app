var TDev;
if (!TDev) TDev = {};

TDev.precompiledScript = {
"this": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "Slouch App";
cs.scriptColor = "\u0023EEDC82";
cs.objectSingletons = {};
/* ACTION: title page */
function a_FVETTlo9qKL2BE8y(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_FVETTlo9qKL2BE8y$0;
  s.name = "title page";
  s.$_ = undefined;
  s.$on_tapped = undefined;
  s.$on_tapped2 = undefined;
  return s;
}
cs.registerPage("title page", "FVETTlo9qKL2BE8y", a_FVETTlo9qKL2BE8y, false);

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

function a_FVETTlo9qKL2BE8y$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "ZjwVWljphwi2ChIV");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$zaAJcuxErIoMhHvC.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "x2U0LvtL4Inp1obO");
  null;
  } else {
  (s.pc = "Gs1fJfmC70u763dR");
  null;
  }
  var t_elseIf_2 = true;
  (s.pc = "OpmYL9wfZJYiasDK");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "TX0oKSjofAH9hPUp");
  return s.rt.enter(a_Anh47Dm2O46bfmAy(s, a_FVETTlo9qKL2BE8y$3));
  } else {
  (s.pc = "Ye8LOnPMVsDXts3C");
  null;
  }
  return a_FVETTlo9qKL2BE8y$2;
}
cs.registerStep(a_FVETTlo9qKL2BE8y$0, 'a_FVETTlo9qKL2BE8y$0');

function a_FVETTlo9qKL2BE8y$3(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  (s.pc = "wtR61xmLkzZxAh1S");
  lib.String_.post_to_wall("", s);
  (s.pc = "cWaFFHyC5IraTBoq");
  lib.Box.push_box(s);
  (s.pc = "xcWTlreD1bR2974K");
  lib.Box.set_font_size(2, s);
  (s.pc = "x4nbgAZGUti5XhE6");
  lib.Box.set_padding(0, 2, 0, 1, s);
  (s.pc = "B0H16724oMz6Y4uj");
  lib.String_.post_to_wall("Welcome to our slouch\u000adetection application. ", s);
  var t_elseIf_4 = true;
  (s.pc = "tgQKgdhNLOUNnDhA");
  var t_val_5 = s.d.$$localpersistentvars.perform_get("$Nh4zi3XEYf4XHtYD", s);
  var t_infix_6 = (ok1(s, t_val_5) && (t_val_5 === 0));
  ok1(s, t_infix_6);
  if (t_infix_6) {
  (s.pc = "eW42MpRGfbllnhPH");
  lib.String_.post_to_wall("We\u0027ll go through the \u000asimple process of \u000ainitialization\u002c allowing \u000ayou to choose a few \u000asettings.", s);
  (s.pc = "y8VGrVG2vmdEvEVQ");
  lib.String_.post_to_wall("It shouldn\u0027t take longer \u000athan a few minutes.\u000a", s);
  } else {
  (s.pc = "r2D11HACPfy7qhvk");
  lib.String_.post_to_wall("You can either redo\u000athe setup or start the \u000aslouch detection.", s);
  }
  (s.pc = "mbC52x9z1hR4yUcZ");
  var t_lmbProxy_7 = s.libs.mkLambdaProxy;
  (s.$on_tapped = function(la0, la1) { return a_a_FVETTlo9qKL2BE8y$5(t_lmbProxy_7(la0), la1) });
  (s.pc = "WJ33bxr4qnyfE26D");
  var t_libcall_8 = s.libs["fgn27ltq44wmhwdo"]["button"](s);
  return s.rt.enter(t_libcall_8.invoke(t_libcall_8, a_FVETTlo9qKL2BE8y$6, "Start Setup", s.$on_tapped));
}
cs.registerStep(a_FVETTlo9qKL2BE8y$3, 'a_FVETTlo9qKL2BE8y$3');

function a_FVETTlo9qKL2BE8y$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_FVETTlo9qKL2BE8y$2, 'a_FVETTlo9qKL2BE8y$2');

function a_FVETTlo9qKL2BE8y$6(s) {
  var t_elseIf_9 = true;
  (s.pc = "nT64Rg7nAKNd8E3Y");
  var t_val_10 = s.d.$$localpersistentvars.perform_get("$Nh4zi3XEYf4XHtYD", s);
  var t_infix_11 = (ok1(s, t_val_10) && (t_val_10 === 1));
  ok1(s, t_infix_11);
  if (t_infix_11) {
  (s.pc = "xOFIfgjOipniuxZw");
  var t_lmbProxy_12 = s.libs.mkLambdaProxy;
  (s.$on_tapped2 = function(la0, la1) { return a_a_FVETTlo9qKL2BE8y$8(t_lmbProxy_12(la0), la1) });
  (s.pc = "jPRbrm2QVOcJ6pVa");
  var t_libcall_13 = s.libs["fgn27ltq44wmhwdo"]["button"](s);
  return s.rt.enter(t_libcall_13.invoke(t_libcall_13, a_FVETTlo9qKL2BE8y$9, "Detect Slouching", s.$on_tapped2));
  } else {
  (s.pc = "x4hW3m1a1wo3M8pe");
  null;
  }
  return a_FVETTlo9qKL2BE8y$7;
}
cs.registerStep(a_FVETTlo9qKL2BE8y$6, 'a_FVETTlo9qKL2BE8y$6');

function a_FVETTlo9qKL2BE8y$9(s) {
  return a_FVETTlo9qKL2BE8y$7;
}
cs.registerStep(a_FVETTlo9qKL2BE8y$9, 'a_FVETTlo9qKL2BE8y$9');

function a_FVETTlo9qKL2BE8y$7(s) {
  lib.Box.pop_box(s);
  s.rt.leave_render();
  return a_FVETTlo9qKL2BE8y$2;
}
cs.registerStep(a_FVETTlo9qKL2BE8y$7, 'a_FVETTlo9qKL2BE8y$7');

/* ACTION: a_FVETTlo9qKL2BE8y::lambda::5 */
function a_a_FVETTlo9qKL2BE8y$5(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_FVETTlo9qKL2BE8y$5$0;
  s.name = "title page";
  return s;
}
cs.registerLambda("a_FVETTlo9qKL2BE8y\u003a\u003alambda\u003a\u003a5", "a_FVETTlo9qKL2BE8y$5", a_a_FVETTlo9qKL2BE8y$5, true);

function a_a_FVETTlo9qKL2BE8y$5$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "tVGwyEnVvkEgfDvp");
  var t_libcall_1 = s.libs["qhQduCeJ2pUP9F58"]["is connected"](s);
  return s.rt.enter(t_libcall_1.invoke(t_libcall_1, a_a_FVETTlo9qKL2BE8y$5$1));
}
cs.registerStep(a_a_FVETTlo9qKL2BE8y$5$0, 'a_a_FVETTlo9qKL2BE8y$5$0');

function a_a_FVETTlo9qKL2BE8y$5$1(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  ok1(s, t_actRes_2);
  if (t_actRes_2) {
  (s.pc = "djBLK1RUqIF9tOOR");
  return s.rt.enter(a_KUkbThG4hJJCcn0l(s, a_a_FVETTlo9qKL2BE8y$5$3));
  } else {
  (s.pc = "gbK6A4vqd0tRIzkW");
  return s.rt.enter(a_KUkbThG4hJJCcn0l(s, a_a_FVETTlo9qKL2BE8y$5$4));
  }
  return a_a_FVETTlo9qKL2BE8y$5$2;
}
cs.registerStep(a_a_FVETTlo9qKL2BE8y$5$1, 'a_a_FVETTlo9qKL2BE8y$5$1');

function a_a_FVETTlo9qKL2BE8y$5$3(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  (s.pc = "NG8Sr0Gf9TMcLBI2");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "volume");
  return a_a_FVETTlo9qKL2BE8y$5$2;
}
cs.registerStep(a_a_FVETTlo9qKL2BE8y$5$3, 'a_a_FVETTlo9qKL2BE8y$5$3');

function a_a_FVETTlo9qKL2BE8y$5$4(s) {
  var t_actRes_4 = s.rt.returnedFrom.result;
  t_actRes_4;
  (s.pc = "tSc1CHQ5kIhXV8b1");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "connect", 0);
  return a_a_FVETTlo9qKL2BE8y$5$2;
}
cs.registerStep(a_a_FVETTlo9qKL2BE8y$5$4, 'a_a_FVETTlo9qKL2BE8y$5$4');

function a_a_FVETTlo9qKL2BE8y$5$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_FVETTlo9qKL2BE8y$5$2, 'a_a_FVETTlo9qKL2BE8y$5$2');

/* ACTION: a_FVETTlo9qKL2BE8y::lambda::8 */
function a_a_FVETTlo9qKL2BE8y$8(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_FVETTlo9qKL2BE8y$8$0;
  s.name = "title page";
  return s;
}
cs.registerLambda("a_FVETTlo9qKL2BE8y\u003a\u003alambda\u003a\u003a8", "a_FVETTlo9qKL2BE8y$8", a_a_FVETTlo9qKL2BE8y$8, true);

function a_a_FVETTlo9qKL2BE8y$8$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "COBJ0zjv2GYn3WRr");
  var t_libcall_1 = s.libs["qhQduCeJ2pUP9F58"]["is connected"](s);
  return s.rt.enter(t_libcall_1.invoke(t_libcall_1, a_a_FVETTlo9qKL2BE8y$8$1));
}
cs.registerStep(a_a_FVETTlo9qKL2BE8y$8$0, 'a_a_FVETTlo9qKL2BE8y$8$0');

function a_a_FVETTlo9qKL2BE8y$8$1(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  ok1(s, t_actRes_2);
  if (t_actRes_2) {
  (s.pc = "G05rDsEmyZONdT7w");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "detect");
  } else {
  (s.pc = "l0bPS66DhFLym3WQ");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "connect", 1);
  }
  return s.rt.leave();
}
cs.registerStep(a_a_FVETTlo9qKL2BE8y$8$1, 'a_a_FVETTlo9qKL2BE8y$8$1');


//Ent_zaAJcuxErIoMhHvC
function Ent_zaAJcuxErIoMhHvC(p) {
  this.parent = p;
}
Ent_zaAJcuxErIoMhHvC.prototype = new lib.ObjectEntry();
Ent_zaAJcuxErIoMhHvC.prototype.keys = [];
Ent_zaAJcuxErIoMhHvC.prototype.values = [];
Ent_zaAJcuxErIoMhHvC.prototype.fields = [];
//Tbl_zaAJcuxErIoMhHvC
function Tbl_zaAJcuxErIoMhHvC(l) {
  this.libName = l;
  this.initParent();
}
Tbl_zaAJcuxErIoMhHvC.prototype = new lib.ObjectSingleton();
Tbl_zaAJcuxErIoMhHvC.prototype.entryCtor = Ent_zaAJcuxErIoMhHvC;
cs.objectSingletons["title page page data"] = function(d) { return d.$zaAJcuxErIoMhHvC };
Tbl_zaAJcuxErIoMhHvC.prototype.selfCtor = Tbl_zaAJcuxErIoMhHvC;
Tbl_zaAJcuxErIoMhHvC.prototype.stableName = "zaAJcuxErIoMhHvC";
Tbl_zaAJcuxErIoMhHvC.prototype.entryKindName = "title page page data";

// jsonimport
Ent_zaAJcuxErIoMhHvC.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
}
cs.registerGlobal("$zaAJcuxErIoMhHvC");
/* ACTION: calibrate */
function a_eQ4FLHbtWAVqgGH4(previous, returnAddr, $straight_or_slouching) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_eQ4FLHbtWAVqgGH4$0;
  s.name = "calibrate";
  s.$straight_or_slouching = $straight_or_slouching;
  return s;
}
cs.registerAction("calibrate", "eQ4FLHbtWAVqgGH4", a_eQ4FLHbtWAVqgGH4, true);

function a_eQ4FLHbtWAVqgGH4$0(s) {
  (s.pc = "B4a4vErKQJSwT5ki");
  var t_call_0 = (ok2(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa, s.$straight_or_slouching) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(s.$straight_or_slouching, s));
  if (t_call_0) {
  t_call_0.perform_set("kQQGIvHZHJCQCvWN", /* x */ s.d.$kR4n2SgnCqZKNyic, s);
  }
  (s.pc = "Q9Q4M2OI52PTYrvL");
  var t_call_1 = (ok2(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa, s.$straight_or_slouching) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(s.$straight_or_slouching, s));
  if (t_call_1) {
  t_call_1.perform_set("NXMyz2ScpZ6wavJ2", /* y */ s.d.$eRnXXsodK421Weem, s);
  }
  (s.pc = "fhtFTcb83NM2kMT7");
  var t_call_2 = (ok2(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa, s.$straight_or_slouching) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(s.$straight_or_slouching, s));
  if (t_call_2) {
  t_call_2.perform_set("e0nNm1KqSrXWO3oW", /* z */ s.d.$MEl2eFcIp3EZlI6W, s);
  }
  return s.rt.leave();
}
cs.registerStep(a_eQ4FLHbtWAVqgGH4$0, 'a_eQ4FLHbtWAVqgGH4$0');

/* ACTION: detect slouch */
function a_T6y4C2cyUpaheCfR(previous, returnAddr, $x, $y, $z) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_T6y4C2cyUpaheCfR$0;
  s.name = "detect slouch";
  s.$x = $x;
  s.$y = $y;
  s.$z = $z;
  s.result = undefined;
  s.$count = undefined;
  return s;
}
cs.registerAction("detect slouch", "T6y4C2cyUpaheCfR", a_T6y4C2cyUpaheCfR, true);

function a_T6y4C2cyUpaheCfR$0(s) {
  (s.pc = "HuW2Q0bSfvA1zO9a");
  (s.$count = 0);
  var t_elseIf_0 = true;
  (s.pc = "NRLHoKR9N2yULeCY");
  var t_call_1 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(1, s));
  if (t_call_1) {
  var t_recOp_2 = t_call_1.perform_get("kQQGIvHZHJCQCvWN", s);
  }
  var t_call_3 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(0, s));
  if (t_call_3) {
  var t_recOp_4 = t_call_3.perform_get("kQQGIvHZHJCQCvWN", s);
  }
  var t_infix_5 = (ok2(s, t_recOp_2, t_recOp_4) && (t_recOp_2 > t_recOp_4));
  ok1(s, t_infix_5);
  if (t_infix_5) {
  (t_elseIf_0 = false);
  var t_elseIf_6 = true;
  (s.pc = "JTGRr44UnhTbZ18E");
  var t_call_7 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(1, s));
  if (t_call_7) {
  var t_recOp_8 = t_call_7.perform_get("kQQGIvHZHJCQCvWN", s);
  }
  var t_infix_9 = (ok2(s, s.$x, t_recOp_8) && (s.$x > t_recOp_8));
  var t_lazy_10 = t_infix_9;
  if ((ok1(s, t_lazy_10) && t_lazy_10)) {
  var t_call_11 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(0, s));
  if (t_call_11) {
  var t_recOp_12 = t_call_11.perform_get("kQQGIvHZHJCQCvWN", s);
  }
  var t_infix_13 = (ok1(s, t_recOp_12) && (t_recOp_12 + 100));
  var t_infix_14 = (ok2(s, s.$x, t_infix_13) && (s.$x > t_infix_13));
  (t_lazy_10 = t_infix_14);
  }
  ok1(s, t_lazy_10);
  if (t_lazy_10) {
  (s.pc = "lK2URe4PRz5Vbn2o");
  var t_infix_15 = (ok1(s, s.$count) && (s.$count + 1));
  (s.$count = t_infix_15);
  } else {
  (s.pc = "ltZ36aAwqwvbsYzV");
  null;
  }
  }
  if (t_elseIf_0) {
  (s.pc = "xugnjNEX37EzOjNe");
  var t_call_16 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(1, s));
  if (t_call_16) {
  var t_recOp_17 = t_call_16.perform_get("kQQGIvHZHJCQCvWN", s);
  }
  var t_call_18 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(0, s));
  if (t_call_18) {
  var t_recOp_19 = t_call_18.perform_get("kQQGIvHZHJCQCvWN", s);
  }
  var t_infix_20 = (ok2(s, t_recOp_17, t_recOp_19) && (t_recOp_17 < t_recOp_19));
  ok1(s, t_infix_20);
  if (t_infix_20) {
  var t_elseIf_21 = true;
  (s.pc = "xonEexe6C4TR1M4F");
  var t_call_22 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(1, s));
  if (t_call_22) {
  var t_recOp_23 = t_call_22.perform_get("kQQGIvHZHJCQCvWN", s);
  }
  var t_infix_24 = (ok2(s, s.$x, t_recOp_23) && (s.$x < t_recOp_23));
  var t_lazy_25 = t_infix_24;
  if ((ok1(s, t_lazy_25) && t_lazy_25)) {
  var t_call_26 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(0, s));
  if (t_call_26) {
  var t_recOp_27 = t_call_26.perform_get("kQQGIvHZHJCQCvWN", s);
  }
  var t_infix_28 = (ok1(s, t_recOp_27) && (t_recOp_27 - 100));
  var t_infix_29 = (ok2(s, s.$x, t_infix_28) && (s.$x < t_infix_28));
  (t_lazy_25 = t_infix_29);
  }
  ok1(s, t_lazy_25);
  if (t_lazy_25) {
  (s.pc = "vCQwwfIJgzbiMgH2");
  var t_infix_30 = (ok1(s, s.$count) && (s.$count + 1));
  (s.$count = t_infix_30);
  } else {
  (s.pc = "mCJ5w4fe3Uw4gnf9");
  null;
  }
  } else {
  (s.pc = "wLl4I529zAH27r60");
  null;
  }
  }
  var t_elseIf_31 = true;
  (s.pc = "nwv9Yf2ezSQYwp0P");
  var t_call_32 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(1, s));
  if (t_call_32) {
  var t_recOp_33 = t_call_32.perform_get("NXMyz2ScpZ6wavJ2", s);
  }
  var t_call_34 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(0, s));
  if (t_call_34) {
  var t_recOp_35 = t_call_34.perform_get("NXMyz2ScpZ6wavJ2", s);
  }
  var t_infix_36 = (ok2(s, t_recOp_33, t_recOp_35) && (t_recOp_33 > t_recOp_35));
  ok1(s, t_infix_36);
  if (t_infix_36) {
  (t_elseIf_31 = false);
  var t_elseIf_37 = true;
  (s.pc = "x3qEjT0O7jtMdeps");
  var t_call_38 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(1, s));
  if (t_call_38) {
  var t_recOp_39 = t_call_38.perform_get("NXMyz2ScpZ6wavJ2", s);
  }
  var t_infix_40 = (ok2(s, s.$y, t_recOp_39) && (s.$y > t_recOp_39));
  var t_lazy_41 = t_infix_40;
  if ((ok1(s, t_lazy_41) && t_lazy_41)) {
  var t_call_42 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(0, s));
  if (t_call_42) {
  var t_recOp_43 = t_call_42.perform_get("NXMyz2ScpZ6wavJ2", s);
  }
  var t_infix_44 = (ok1(s, t_recOp_43) && (t_recOp_43 + 100));
  var t_infix_45 = (ok2(s, s.$y, t_infix_44) && (s.$y > t_infix_44));
  (t_lazy_41 = t_infix_45);
  }
  ok1(s, t_lazy_41);
  if (t_lazy_41) {
  (s.pc = "vfwPPrD8OWwiowv4");
  var t_infix_46 = (ok1(s, s.$count) && (s.$count + 1));
  (s.$count = t_infix_46);
  } else {
  (s.pc = "fkJEQY5KHNA3HpIx");
  null;
  }
  }
  if (t_elseIf_31) {
  (s.pc = "vExJlz2NA565a4eb");
  var t_call_47 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(1, s));
  if (t_call_47) {
  var t_recOp_48 = t_call_47.perform_get("NXMyz2ScpZ6wavJ2", s);
  }
  var t_call_49 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(0, s));
  if (t_call_49) {
  var t_recOp_50 = t_call_49.perform_get("NXMyz2ScpZ6wavJ2", s);
  }
  var t_infix_51 = (ok2(s, t_recOp_48, t_recOp_50) && (t_recOp_48 < t_recOp_50));
  ok1(s, t_infix_51);
  if (t_infix_51) {
  var t_elseIf_52 = true;
  (s.pc = "U1EDj10M4IZ2295E");
  var t_call_53 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(1, s));
  if (t_call_53) {
  var t_recOp_54 = t_call_53.perform_get("NXMyz2ScpZ6wavJ2", s);
  }
  var t_infix_55 = (ok2(s, s.$y, t_recOp_54) && (s.$y < t_recOp_54));
  var t_lazy_56 = t_infix_55;
  if ((ok1(s, t_lazy_56) && t_lazy_56)) {
  var t_call_57 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(0, s));
  if (t_call_57) {
  var t_recOp_58 = t_call_57.perform_get("NXMyz2ScpZ6wavJ2", s);
  }
  var t_infix_59 = (ok1(s, t_recOp_58) && (t_recOp_58 - 100));
  var t_infix_60 = (ok2(s, s.$y, t_infix_59) && (s.$y < t_infix_59));
  (t_lazy_56 = t_infix_60);
  }
  ok1(s, t_lazy_56);
  if (t_lazy_56) {
  (s.pc = "x9P29KeG16iyyt2G");
  var t_infix_61 = (ok1(s, s.$count) && (s.$count + 1));
  (s.$count = t_infix_61);
  } else {
  (s.pc = "Yt8AHsuzR0Q6sX8X");
  null;
  }
  } else {
  (s.pc = "n9YOfjMw22RJxOVm");
  null;
  }
  }
  var t_elseIf_62 = true;
  (s.pc = "YRALozC28SesAjG9");
  var t_call_63 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(1, s));
  if (t_call_63) {
  var t_recOp_64 = t_call_63.perform_get("e0nNm1KqSrXWO3oW", s);
  }
  var t_call_65 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(0, s));
  if (t_call_65) {
  var t_recOp_66 = t_call_65.perform_get("e0nNm1KqSrXWO3oW", s);
  }
  var t_infix_67 = (ok2(s, t_recOp_64, t_recOp_66) && (t_recOp_64 > t_recOp_66));
  ok1(s, t_infix_67);
  if (t_infix_67) {
  (t_elseIf_62 = false);
  var t_elseIf_68 = true;
  (s.pc = "ZHjLYxmszgZ9IrB5");
  var t_call_69 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(1, s));
  if (t_call_69) {
  var t_recOp_70 = t_call_69.perform_get("e0nNm1KqSrXWO3oW", s);
  }
  var t_infix_71 = (ok2(s, s.$z, t_recOp_70) && (s.$z > t_recOp_70));
  var t_lazy_72 = t_infix_71;
  if ((ok1(s, t_lazy_72) && t_lazy_72)) {
  var t_call_73 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(0, s));
  if (t_call_73) {
  var t_recOp_74 = t_call_73.perform_get("e0nNm1KqSrXWO3oW", s);
  }
  var t_infix_75 = (ok1(s, t_recOp_74) && (t_recOp_74 + 100));
  var t_infix_76 = (ok2(s, s.$z, t_infix_75) && (s.$z > t_infix_75));
  (t_lazy_72 = t_infix_76);
  }
  ok1(s, t_lazy_72);
  if (t_lazy_72) {
  (s.pc = "uL79yJNq8b1dzkBh");
  var t_infix_77 = (ok1(s, s.$count) && (s.$count + 1));
  (s.$count = t_infix_77);
  } else {
  (s.pc = "xRTPrLwBXkTP6qw4");
  null;
  }
  }
  if (t_elseIf_62) {
  (s.pc = "EkQ9Ad5VNO2KFDCC");
  var t_call_78 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(1, s));
  if (t_call_78) {
  var t_recOp_79 = t_call_78.perform_get("e0nNm1KqSrXWO3oW", s);
  }
  var t_call_80 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(0, s));
  if (t_call_80) {
  var t_recOp_81 = t_call_80.perform_get("e0nNm1KqSrXWO3oW", s);
  }
  var t_infix_82 = (ok2(s, t_recOp_79, t_recOp_81) && (t_recOp_79 < t_recOp_81));
  ok1(s, t_infix_82);
  if (t_infix_82) {
  var t_elseIf_83 = true;
  (s.pc = "jITtSmBwJ9U7lZTg");
  var t_call_84 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(1, s));
  if (t_call_84) {
  var t_recOp_85 = t_call_84.perform_get("e0nNm1KqSrXWO3oW", s);
  }
  var t_infix_86 = (ok2(s, s.$z, t_recOp_85) && (s.$z < t_recOp_85));
  var t_lazy_87 = t_infix_86;
  if ((ok1(s, t_lazy_87) && t_lazy_87)) {
  var t_call_88 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(0, s));
  if (t_call_88) {
  var t_recOp_89 = t_call_88.perform_get("e0nNm1KqSrXWO3oW", s);
  }
  var t_infix_90 = (ok1(s, t_recOp_89) && (t_recOp_89 - 100));
  var t_infix_91 = (ok2(s, s.$z, t_infix_90) && (s.$z < t_infix_90));
  (t_lazy_87 = t_infix_91);
  }
  ok1(s, t_lazy_87);
  if (t_lazy_87) {
  (s.pc = "DVMSxONMbhs1j42v");
  var t_infix_92 = (ok1(s, s.$count) && (s.$count + 1));
  (s.$count = t_infix_92);
  } else {
  (s.pc = "n7ZM3jPgDCW8UJUC");
  null;
  }
  } else {
  (s.pc = "BXC766LeKMtj7x4i");
  null;
  }
  }
  var t_elseIf_93 = true;
  (s.pc = "xF9pf44cSBMQnPgi");
  var t_infix_94 = (ok1(s, s.$count) && (s.$count !== 0));
  ok1(s, t_infix_94);
  if (t_infix_94) {
  (s.pc = "X4yGWl69f45RM84L");
  lib.String_.post_to_wall("Slouching!", s);
  (s.pc = "l0UPFTzLEU2I7CqD");
  var t_call_95 = (ok1(s, /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl) && /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl.row_at(0, s));
  if (t_call_95) {
  var t_recOp_96 = t_call_95.perform_get("xGQOimxFj2lxgD1E", s);
  }
  var t_call_97 = (ok1(s, t_recOp_96) && lib.String_.to_number(t_recOp_96, s));
  var t_infix_98 = (ok1(s, t_call_97) && (t_call_97 / 100));
  var t_resumeCtx_99 = s.rt.getBlockingResumeCtx(a_T6y4C2cyUpaheCfR$48);
  (ok2(s, /* alarm */ s.d.$wOARSK4PZpC75Eqh, t_infix_98) && /* alarm */ s.d.$wOARSK4PZpC75Eqh.play_special(t_infix_98, 0, 0, t_resumeCtx_99));
  return a_T6y4C2cyUpaheCfR$48;
  } else {
  (s.pc = "y890GHUadHGdouPH");
  (s.result = false);
  }
  return a_T6y4C2cyUpaheCfR$46;
}
cs.registerStep(a_T6y4C2cyUpaheCfR$0, 'a_T6y4C2cyUpaheCfR$0');

function a_T6y4C2cyUpaheCfR$48(s) {
  (s.pc = "NfhCIqgJnx29zGh8");
  (s.result = true);
  return a_T6y4C2cyUpaheCfR$46;
}
cs.registerStep(a_T6y4C2cyUpaheCfR$48, 'a_T6y4C2cyUpaheCfR$48');

function a_T6y4C2cyUpaheCfR$46(s) {
  (s.pc = "JVfm2jCg4MIy4W4t");
  (s.$count = 0);
  return s.rt.leave();
}
cs.registerStep(a_T6y4C2cyUpaheCfR$46, 'a_T6y4C2cyUpaheCfR$46');

/* ACTION: slouching page */
function a_NtvGfRrbuG4fzQH4(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_NtvGfRrbuG4fzQH4$0;
  s.name = "slouching page";
  s.$_ = undefined;
  s.$pic = undefined;
  s.$on_tapped = undefined;
  return s;
}
cs.registerPage("slouching page", "NtvGfRrbuG4fzQH4", a_NtvGfRrbuG4fzQH4, false);

function a_NtvGfRrbuG4fzQH4$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "IcS7oRoNvGDx1lFS");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$xtwVQmvFVA4iHXY5.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "xWsP9hQBoKl2V2ds");
  null;
  } else {
  (s.pc = "ZiB1MdzPRq2RDCTX");
  null;
  }
  var t_elseIf_2 = true;
  (s.pc = "CvmLTalKQgl5565D");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "x4jQwMN2zyYWZoNp");
  return s.rt.enter(a_Anh47Dm2O46bfmAy(s, a_NtvGfRrbuG4fzQH4$3));
  } else {
  (s.pc = "gpSaLr8MPl3D2ib9");
  null;
  }
  return a_NtvGfRrbuG4fzQH4$2;
}
cs.registerStep(a_NtvGfRrbuG4fzQH4$0, 'a_NtvGfRrbuG4fzQH4$0');

function a_NtvGfRrbuG4fzQH4$3(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  (s.pc = "iMZ0y9bkdy8nXvIm");
  lib.String_.post_to_wall("", s);
  (s.pc = "FGTS628wuYop6w0i");
  lib.Box.push_box(s);
  (s.pc = "mQVQpOU3ljTxnXWX");
  lib.Box.set_padding(0, 2, 0, 1, s);
  (s.pc = "goUD3kiH2FaNlxBw");
  lib.Box.set_font_size(2, s);
  (s.pc = "gCx8sZAMUHAwoonH");
  lib.String_.post_to_wall("You should now slouch\u000ato a dangerous degree.", s);
  (s.pc = "xdZQtm29pW2BuIy5");
  var t_resumeCtx_4 = s.rt.getBlockingResumeCtx(a_NtvGfRrbuG4fzQH4$4);
  var t_call_5 = (ok1(s, /* slouching */ s.d.$lpvzsF7aqnl2s2wh) && /* slouching */ s.d.$lpvzsF7aqnl2s2wh.clone(t_resumeCtx_4));
  return a_NtvGfRrbuG4fzQH4$4;
}
cs.registerStep(a_NtvGfRrbuG4fzQH4$3, 'a_NtvGfRrbuG4fzQH4$3');

function a_NtvGfRrbuG4fzQH4$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_NtvGfRrbuG4fzQH4$2, 'a_NtvGfRrbuG4fzQH4$2');

function a_NtvGfRrbuG4fzQH4$4(s) {
  var t_pauseRes_6 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_6);
  (s.$pic = t_pauseRes_6);
  (s.pc = "GyBruazLbe7gXcHU");
  s.rt.logObjectMutation(s.$pic);
  var t_resumeCtx_7 = s.rt.getBlockingResumeCtx(a_NtvGfRrbuG4fzQH4$5);
  (ok1(s, s.$pic) && s.$pic.resize(200, 350, t_resumeCtx_7));
  return a_NtvGfRrbuG4fzQH4$5;
}
cs.registerStep(a_NtvGfRrbuG4fzQH4$4, 'a_NtvGfRrbuG4fzQH4$4');

function a_NtvGfRrbuG4fzQH4$5(s) {
  (s.pc = "kPMp4sLzTJx4LjMR");
  (ok1(s, s.$pic) && s.$pic.post_to_wall(s));
  (s.pc = "xTjwdBGMwRElchuq");
  var t_lmbProxy_8 = s.libs.mkLambdaProxy;
  (s.$on_tapped = function(la0, la1) { return a_a_NtvGfRrbuG4fzQH4$6(t_lmbProxy_8(la0), la1) });
  (s.pc = "i2ziav82MTBfDIKs");
  var t_libcall_9 = s.libs["fgn27ltq44wmhwdo"]["button"](s);
  return s.rt.enter(t_libcall_9.invoke(t_libcall_9, a_NtvGfRrbuG4fzQH4$7, "I am slouching", s.$on_tapped));
}
cs.registerStep(a_NtvGfRrbuG4fzQH4$5, 'a_NtvGfRrbuG4fzQH4$5');

function a_NtvGfRrbuG4fzQH4$7(s) {
  lib.Box.pop_box(s);
  s.rt.leave_render();
  return a_NtvGfRrbuG4fzQH4$2;
}
cs.registerStep(a_NtvGfRrbuG4fzQH4$7, 'a_NtvGfRrbuG4fzQH4$7');

/* ACTION: a_NtvGfRrbuG4fzQH4::lambda::6 */
function a_a_NtvGfRrbuG4fzQH4$6(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_NtvGfRrbuG4fzQH4$6$0;
  s.name = "slouching page";
  return s;
}
cs.registerLambda("a_NtvGfRrbuG4fzQH4\u003a\u003alambda\u003a\u003a6", "a_NtvGfRrbuG4fzQH4$6", a_a_NtvGfRrbuG4fzQH4$6, true);

function a_a_NtvGfRrbuG4fzQH4$6$0(s) {
  (s.pc = "AHstOhbMt9s0QhTa");
  return s.rt.enter(a_DOuHZ2WTCQ18yDqu(s, a_a_NtvGfRrbuG4fzQH4$6$1));
}
cs.registerStep(a_a_NtvGfRrbuG4fzQH4$6$0, 'a_a_NtvGfRrbuG4fzQH4$6$0');

function a_a_NtvGfRrbuG4fzQH4$6$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "Ai8MedthIr9lgCoT");
  return s.rt.enter(a_eQ4FLHbtWAVqgGH4(s, a_a_NtvGfRrbuG4fzQH4$6$2, 1));
}
cs.registerStep(a_a_NtvGfRrbuG4fzQH4$6$1, 'a_a_NtvGfRrbuG4fzQH4$6$1');

function a_a_NtvGfRrbuG4fzQH4$6$2(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  t_actRes_1;
  var t_elseIf_2 = true;
  (s.pc = "O7eyTfn8ll0SWBpc");
  var t_call_3 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(1, s));
  if (t_call_3) {
  var t_recOp_4 = t_call_3.perform_get("kQQGIvHZHJCQCvWN", s);
  }
  var t_infix_5 = (ok1(s, t_recOp_4) && (t_recOp_4 !== 0));
  ok1(s, t_infix_5);
  if (t_infix_5) {
  (s.pc = "pE7oxkfrqSPtZSBz");
  var t_resumeCtx_6 = s.rt.getBlockingResumeCtx(a_a_NtvGfRrbuG4fzQH4$6$5);
  lib.Wall.prompt("Wait while the program calibrates...", t_resumeCtx_6);
  return a_a_NtvGfRrbuG4fzQH4$6$5;
  } else {
  (s.pc = "tYsYAl4kirBSgbxJ");
  null;
  }
  return a_a_NtvGfRrbuG4fzQH4$6$4;
}
cs.registerStep(a_a_NtvGfRrbuG4fzQH4$6$2, 'a_a_NtvGfRrbuG4fzQH4$6$2');

function a_a_NtvGfRrbuG4fzQH4$6$5(s) {
  (s.pc = "xzI14542fBEwKc1i");
  var t_libcall_7 = s.libs["qhQduCeJ2pUP9F58"]["write"](s);
  return s.rt.enter(t_libcall_7.invoke(t_libcall_7, a_a_NtvGfRrbuG4fzQH4$6$6, "\u007b1\u003b112\u003b-1\u007d"));
}
cs.registerStep(a_a_NtvGfRrbuG4fzQH4$6$5, 'a_a_NtvGfRrbuG4fzQH4$6$5');

function a_a_NtvGfRrbuG4fzQH4$6$4(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_NtvGfRrbuG4fzQH4$6$4, 'a_a_NtvGfRrbuG4fzQH4$6$4');

function a_a_NtvGfRrbuG4fzQH4$6$6(s) {
  var t_actRes_8 = s.rt.returnedFrom.result;
  t_actRes_8;
  (s.pc = "xBewU4ydKCAryJrD");
  s.d.$$localpersistentvars.perform_set("$Nh4zi3XEYf4XHtYD", 1, s);
  s.rt.logDataWrite();
  (s.pc = "lQ8CDSdsAYVh0oZU");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "title page");
  return a_a_NtvGfRrbuG4fzQH4$6$4;
}
cs.registerStep(a_a_NtvGfRrbuG4fzQH4$6$6, 'a_a_NtvGfRrbuG4fzQH4$6$6');


//Ent_xtwVQmvFVA4iHXY5
function Ent_xtwVQmvFVA4iHXY5(p) {
  this.parent = p;
}
Ent_xtwVQmvFVA4iHXY5.prototype = new lib.ObjectEntry();
Ent_xtwVQmvFVA4iHXY5.prototype.keys = [];
Ent_xtwVQmvFVA4iHXY5.prototype.values = [];
Ent_xtwVQmvFVA4iHXY5.prototype.fields = [];
//Tbl_xtwVQmvFVA4iHXY5
function Tbl_xtwVQmvFVA4iHXY5(l) {
  this.libName = l;
  this.initParent();
}
Tbl_xtwVQmvFVA4iHXY5.prototype = new lib.ObjectSingleton();
Tbl_xtwVQmvFVA4iHXY5.prototype.entryCtor = Ent_xtwVQmvFVA4iHXY5;
cs.objectSingletons["slouching page page data"] = function(d) { return d.$xtwVQmvFVA4iHXY5 };
Tbl_xtwVQmvFVA4iHXY5.prototype.selfCtor = Tbl_xtwVQmvFVA4iHXY5;
Tbl_xtwVQmvFVA4iHXY5.prototype.stableName = "xtwVQmvFVA4iHXY5";
Tbl_xtwVQmvFVA4iHXY5.prototype.entryKindName = "slouching page page data";

// jsonimport
Ent_xtwVQmvFVA4iHXY5.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
}
cs.registerGlobal("$xtwVQmvFVA4iHXY5");
/* ACTION: volume */
function a_fQZDWwFSna4kPDOQ(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_fQZDWwFSna4kPDOQ$0;
  s.name = "volume";
  s.$_ = undefined;
  s.$snd2 = undefined;
  s.$changehandler = undefined;
  s.$x = undefined;
  s.$on_tapped = undefined;
  s.$on_tapped1 = undefined;
  s.$action = undefined;
  s.$text = undefined;
  return s;
}
cs.registerPage("volume", "fQZDWwFSna4kPDOQ", a_fQZDWwFSna4kPDOQ, false);

function a_fQZDWwFSna4kPDOQ$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "UB4jOnPmuzWjAHdA");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$zYQpTie1JMoia6F2.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "LvCMv9r6b4McQyVC");
  null;
  } else {
  (s.pc = "wruxTOVLryAV4h4y");
  null;
  }
  var t_elseIf_2 = true;
  (s.pc = "xALoATTOgLhV5Tms");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "G98JX29o7htSDsLn");
  return s.rt.enter(a_Anh47Dm2O46bfmAy(s, a_fQZDWwFSna4kPDOQ$3));
  } else {
  (s.pc = "jincqQTZq1uF8Y72");
  null;
  }
  return a_fQZDWwFSna4kPDOQ$2;
}
cs.registerStep(a_fQZDWwFSna4kPDOQ$0, 'a_fQZDWwFSna4kPDOQ$0');

function a_fQZDWwFSna4kPDOQ$3(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  (s.pc = "b6FXJim2SaK2S3Fy");
  lib.String_.post_to_wall("", s);
  (s.pc = "p5wI6YQdP2GhvLkL");
  lib.Box.push_box(s);
  (s.pc = "HWAax2WkoCaMTY4R");
  lib.Box.set_padding(0, 2, 0, 0.5, s);
  (s.pc = "s6KjTa11ffBhps9b");
  lib.Box.set_font_size(2, s);
  (s.pc = "QqHZRoXPuFWztYAq");
  var t_call_4 = (ok1(s, /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl) && /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl.row_at(0, s));
  var t_call_5 = (ok1(s, t_call_4) && lib.FieldRef.mk(t_call_4, "S09sBfHVWc2fE13c"))._ref(s);
  var t_libcall_6 = s.libs["fgn27ltq44wmhwdo"]["checkbox"](s);
  return s.rt.enter(t_libcall_6.invoke(t_libcall_6, a_fQZDWwFSna4kPDOQ$4, "Enable Alarm", t_call_5));
}
cs.registerStep(a_fQZDWwFSna4kPDOQ$3, 'a_fQZDWwFSna4kPDOQ$3');

function a_fQZDWwFSna4kPDOQ$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_fQZDWwFSna4kPDOQ$2, 'a_fQZDWwFSna4kPDOQ$2');

function a_fQZDWwFSna4kPDOQ$4(s) {
  var t_elseIf_7 = true;
  (s.pc = "Jb479ESuIbMJZzmz");
  var t_call_8 = (ok1(s, /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl) && /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl.row_at(0, s));
  if (t_call_8) {
  var t_recOp_9 = t_call_8.perform_get("S09sBfHVWc2fE13c", s);
  }
  var t_call_10 = (ok1(s, t_recOp_9) && lib.Boolean_.equals(t_recOp_9, true, s));
  ok1(s, t_call_10);
  if (t_call_10) {
  (s.pc = "Ny64vWH1mm7ow1R9");
  (s.$snd2 = /* alarm */ s.d.$wOARSK4PZpC75Eqh);
  (s.pc = "tsuL5wLcTW3JuoBz");
  var t_lmbProxy_11 = s.libs.mkLambdaProxy;
  (s.$changehandler = function(la0, la1, la2) { return a_a_fQZDWwFSna4kPDOQ$7(t_lmbProxy_11(la0), la1, la2) });
  (s.pc = "YitM7U2VHPWVGx1I");
  var t_call_12 = (ok1(s, /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl) && /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl.row_at(0, s));
  var t_call_13 = (ok1(s, t_call_12) && lib.FieldRef.mk(t_call_12, "xGQOimxFj2lxgD1E"))._ref(s);
  var t_libcall_14 = s.libs["fgn27ltq44wmhwdo"]["input number"](s);
  return s.rt.enter(t_libcall_14.invoke(t_libcall_14, a_fQZDWwFSna4kPDOQ$8, "How loud would you like\u000athe alarm to be? \u00280-100\u0029", t_call_13, s.$changehandler));
  } else {
  (s.pc = "a24Zn0inNERCcc2U");
  null;
  }
  return a_fQZDWwFSna4kPDOQ$6;
}
cs.registerStep(a_fQZDWwFSna4kPDOQ$4, 'a_fQZDWwFSna4kPDOQ$4');

function a_fQZDWwFSna4kPDOQ$8(s) {
  (s.pc = "WJt0joEkutNV4eUE");
  lib.String_.post_to_wall("  ", s);
  (s.pc = "BaPtfXRE9ZsM2sa5");
  var t_lmbv_15 = s.$snd2;
  var t_lmbProxy_16 = s.libs.mkLambdaProxy;
  (s.$on_tapped = function(la0, la1) { return a_a_fQZDWwFSna4kPDOQ$9(t_lmbProxy_16(la0), la1, t_lmbv_15) });
  (s.pc = "Hox4oCXYSQRUerT3");
  var t_libcall_17 = s.libs["fgn27ltq44wmhwdo"]["button"](s);
  return s.rt.enter(t_libcall_17.invoke(t_libcall_17, a_fQZDWwFSna4kPDOQ$10, "Change volume", s.$on_tapped));
}
cs.registerStep(a_fQZDWwFSna4kPDOQ$8, 'a_fQZDWwFSna4kPDOQ$8');

function a_fQZDWwFSna4kPDOQ$6(s) {
  (s.pc = "ywesNpShgBvu3zHm");
  lib.String_.post_to_wall("  ", s);
  (s.pc = "DxDXsE7nIhGRiO7s");
  var t_lmbv_18 = s.$action;
  var t_lmbProxy_19 = s.libs.mkLambdaProxy;
  (s.$on_tapped1 = function(la0, la1) { return a_a_fQZDWwFSna4kPDOQ$11(t_lmbProxy_19(la0), la1, t_lmbv_18) });
  (s.pc = "xR9qz4wVwoxElw3Q");
  var t_libcall_20 = s.libs["fgn27ltq44wmhwdo"]["button"](s);
  return s.rt.enter(t_libcall_20.invoke(t_libcall_20, a_fQZDWwFSna4kPDOQ$12, "OK\u002c Let\u0027s Move On", s.$on_tapped1));
}
cs.registerStep(a_fQZDWwFSna4kPDOQ$6, 'a_fQZDWwFSna4kPDOQ$6');

function a_fQZDWwFSna4kPDOQ$10(s) {
  return a_fQZDWwFSna4kPDOQ$6;
}
cs.registerStep(a_fQZDWwFSna4kPDOQ$10, 'a_fQZDWwFSna4kPDOQ$10');

function a_fQZDWwFSna4kPDOQ$12(s) {
  lib.Box.pop_box(s);
  s.rt.leave_render();
  return a_fQZDWwFSna4kPDOQ$2;
}
cs.registerStep(a_fQZDWwFSna4kPDOQ$12, 'a_fQZDWwFSna4kPDOQ$12');

/* ACTION: a_fQZDWwFSna4kPDOQ::lambda::7 */
function a_a_fQZDWwFSna4kPDOQ$7(previous, returnAddr, $x) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_fQZDWwFSna4kPDOQ$7$0;
  s.name = "volume";
  return s;
}
cs.registerLambda("a_fQZDWwFSna4kPDOQ\u003a\u003alambda\u003a\u003a7", "a_fQZDWwFSna4kPDOQ$7", a_a_fQZDWwFSna4kPDOQ$7, true);

function a_a_fQZDWwFSna4kPDOQ$7$0(s) {
  (s.pc = "G212fXt6wdjfs8ez");
  null;
  return s.rt.leave();
}
cs.registerStep(a_a_fQZDWwFSna4kPDOQ$7$0, 'a_a_fQZDWwFSna4kPDOQ$7$0');

/* ACTION: a_fQZDWwFSna4kPDOQ::lambda::9 */
function a_a_fQZDWwFSna4kPDOQ$9(previous, returnAddr, $snd2) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_fQZDWwFSna4kPDOQ$9$0;
  s.name = "volume";
  s.$snd2 = $snd2;
  return s;
}
cs.registerLambda("a_fQZDWwFSna4kPDOQ\u003a\u003alambda\u003a\u003a9", "a_fQZDWwFSna4kPDOQ$9", a_a_fQZDWwFSna4kPDOQ$9, true);

function a_a_fQZDWwFSna4kPDOQ$9$0(s) {
  (s.pc = "miRXE2Vx1MWVdXOD");
  var t_call_0 = (ok1(s, /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl) && /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl.row_at(0, s));
  if (t_call_0) {
  var t_recOp_1 = t_call_0.perform_get("xGQOimxFj2lxgD1E", s);
  }
  var t_call_2 = (ok1(s, t_recOp_1) && lib.String_.to_number(t_recOp_1, s));
  var t_infix_3 = (ok1(s, t_call_2) && (t_call_2 / 100));
  var t_resumeCtx_4 = s.rt.getBlockingResumeCtx(a_a_fQZDWwFSna4kPDOQ$9$2);
  (ok2(s, s.$snd2, t_infix_3) && s.$snd2.play_special(t_infix_3, 0, 0, t_resumeCtx_4));
  return a_a_fQZDWwFSna4kPDOQ$9$2;
}
cs.registerStep(a_a_fQZDWwFSna4kPDOQ$9$0, 'a_a_fQZDWwFSna4kPDOQ$9$0');

function a_a_fQZDWwFSna4kPDOQ$9$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_fQZDWwFSna4kPDOQ$9$2, 'a_a_fQZDWwFSna4kPDOQ$9$2');

/* ACTION: a_fQZDWwFSna4kPDOQ::lambda::11 */
function a_a_fQZDWwFSna4kPDOQ$11(previous, returnAddr, $action) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_fQZDWwFSna4kPDOQ$11$0;
  s.name = "volume";
  s.$action = $action;
  s.$text = undefined;
  return s;
}
cs.registerLambda("a_fQZDWwFSna4kPDOQ\u003a\u003alambda\u003a\u003a11", "a_fQZDWwFSna4kPDOQ$11", a_a_fQZDWwFSna4kPDOQ$11, true);

function a_a_fQZDWwFSna4kPDOQ$11$0(s) {
  (s.pc = "xS5w2Kv9bqb8h9aw");
  var t_lmbProxy_0 = s.libs.mkLambdaProxy;
  (s.$action = function(la0, la1, la2) { return a_a_a_fQZDWwFSna4kPDOQ$11$1(t_lmbProxy_0(la0), la1, la2) });
  (s.pc = "x47fss4rS1kQbbCq");
  var t_libcall_1 = s.libs["qhQduCeJ2pUP9F58"]["subscribe"](s);
  return s.rt.enter(t_libcall_1.invoke(t_libcall_1, a_a_fQZDWwFSna4kPDOQ$11$2, "\u007d\u007b", s.$action));
}
cs.registerStep(a_a_fQZDWwFSna4kPDOQ$11$0, 'a_a_fQZDWwFSna4kPDOQ$11$0');

function a_a_fQZDWwFSna4kPDOQ$11$2(s) {
  (s.pc = "LSjGCC6AJX0miKrJ");
  var t_libcall_2 = s.libs["qhQduCeJ2pUP9F58"]["write"](s);
  return s.rt.enter(t_libcall_2.invoke(t_libcall_2, a_a_fQZDWwFSna4kPDOQ$11$3, "\u007b1\u003b112\u003b100\u007d"));
}
cs.registerStep(a_a_fQZDWwFSna4kPDOQ$11$2, 'a_a_fQZDWwFSna4kPDOQ$11$2');

function a_a_fQZDWwFSna4kPDOQ$11$3(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  (s.pc = "PuSnV4gde8IisHMO");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "straight page");
  return s.rt.leave();
}
cs.registerStep(a_a_fQZDWwFSna4kPDOQ$11$3, 'a_a_fQZDWwFSna4kPDOQ$11$3');

/* ACTION: a_a_fQZDWwFSna4kPDOQ$11::lambda::1 */
function a_a_a_fQZDWwFSna4kPDOQ$11$1(previous, returnAddr, $text) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_fQZDWwFSna4kPDOQ$11$1$0;
  s.name = "a_fQZDWwFSna4kPDOQ\u003a\u003alambda\u003a\u003a11";
  s.$text = $text;
  return s;
}
cs.registerLambda("a_a_fQZDWwFSna4kPDOQ$11\u003a\u003alambda\u003a\u003a1", "a_a_fQZDWwFSna4kPDOQ$11$1", a_a_a_fQZDWwFSna4kPDOQ$11$1, true);

function a_a_a_fQZDWwFSna4kPDOQ$11$1$0(s) {
  (s.pc = "z6lYyt5nueiLeoxN");
  (/* text to display */ s.d.$xHdizJ8cAYKEGmEh = s.$text);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_a_a_fQZDWwFSna4kPDOQ$11$1$0, 'a_a_a_fQZDWwFSna4kPDOQ$11$1$0');


//Ent_zYQpTie1JMoia6F2
function Ent_zYQpTie1JMoia6F2(p) {
  this.parent = p;
}
Ent_zYQpTie1JMoia6F2.prototype = new lib.ObjectEntry();
Ent_zYQpTie1JMoia6F2.prototype.keys = [];
Ent_zYQpTie1JMoia6F2.prototype.values = [];
Ent_zYQpTie1JMoia6F2.prototype.fields = [];
//Tbl_zYQpTie1JMoia6F2
function Tbl_zYQpTie1JMoia6F2(l) {
  this.libName = l;
  this.initParent();
}
Tbl_zYQpTie1JMoia6F2.prototype = new lib.ObjectSingleton();
Tbl_zYQpTie1JMoia6F2.prototype.entryCtor = Ent_zYQpTie1JMoia6F2;
cs.objectSingletons["volume page data"] = function(d) { return d.$zYQpTie1JMoia6F2 };
Tbl_zYQpTie1JMoia6F2.prototype.selfCtor = Tbl_zYQpTie1JMoia6F2;
Tbl_zYQpTie1JMoia6F2.prototype.stableName = "zYQpTie1JMoia6F2";
Tbl_zYQpTie1JMoia6F2.prototype.entryKindName = "volume page data";

// jsonimport
Ent_zYQpTie1JMoia6F2.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
}
cs.registerGlobal("$zYQpTie1JMoia6F2");
/* ACTION: straight page */
function a_KQ8LaeTfpaMEiZQm(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_KQ8LaeTfpaMEiZQm$0;
  s.name = "straight page";
  s.$_ = undefined;
  s.$pic = undefined;
  s.$on_tapped = undefined;
  return s;
}
cs.registerPage("straight page", "KQ8LaeTfpaMEiZQm", a_KQ8LaeTfpaMEiZQm, false);

function a_KQ8LaeTfpaMEiZQm$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "xuMLosMN0VZExQBV");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$JNdvdEjRj3dVBrK6.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "mQe904UG8lwPQ6Ik");
  null;
  } else {
  (s.pc = "xJYkf7852BRz62im");
  null;
  }
  var t_elseIf_2 = true;
  (s.pc = "xWuqNrwb0OW5ooDo");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "KRJdXi37AJlIWrLQ");
  return s.rt.enter(a_Anh47Dm2O46bfmAy(s, a_KQ8LaeTfpaMEiZQm$3));
  } else {
  (s.pc = "xQER5esKXfVS2RX8");
  null;
  }
  return a_KQ8LaeTfpaMEiZQm$2;
}
cs.registerStep(a_KQ8LaeTfpaMEiZQm$0, 'a_KQ8LaeTfpaMEiZQm$0');

function a_KQ8LaeTfpaMEiZQm$3(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  (s.pc = "Ku0Pi48kSWY0pi4w");
  lib.String_.post_to_wall("", s);
  (s.pc = "Rh1ckZYEuUIeHrni");
  lib.Box.push_box(s);
  (s.pc = "HCdW06z0WBqvjhoT");
  lib.Box.set_padding(0, 2, 0, 1, s);
  (s.pc = "HvFbnxeFhPGQtHrI");
  lib.Box.set_font_size(2, s);
  (s.pc = "rQfoq0jlk8oy8v3L");
  lib.String_.post_to_wall("You should sit straight\u000aas you normally do.", s);
  (s.pc = "xDIL5rVR3RHfz0uX");
  var t_resumeCtx_4 = s.rt.getBlockingResumeCtx(a_KQ8LaeTfpaMEiZQm$4);
  var t_call_5 = (ok1(s, /* straight */ s.d.$xy8Omp3E9EeBppJL) && /* straight */ s.d.$xy8Omp3E9EeBppJL.clone(t_resumeCtx_4));
  return a_KQ8LaeTfpaMEiZQm$4;
}
cs.registerStep(a_KQ8LaeTfpaMEiZQm$3, 'a_KQ8LaeTfpaMEiZQm$3');

function a_KQ8LaeTfpaMEiZQm$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_KQ8LaeTfpaMEiZQm$2, 'a_KQ8LaeTfpaMEiZQm$2');

function a_KQ8LaeTfpaMEiZQm$4(s) {
  var t_pauseRes_6 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_6);
  (s.$pic = t_pauseRes_6);
  (s.pc = "tVyJC2g5U60xUjeD");
  s.rt.logObjectMutation(s.$pic);
  var t_resumeCtx_7 = s.rt.getBlockingResumeCtx(a_KQ8LaeTfpaMEiZQm$5);
  (ok1(s, s.$pic) && s.$pic.resize(200, 350, t_resumeCtx_7));
  return a_KQ8LaeTfpaMEiZQm$5;
}
cs.registerStep(a_KQ8LaeTfpaMEiZQm$4, 'a_KQ8LaeTfpaMEiZQm$4');

function a_KQ8LaeTfpaMEiZQm$5(s) {
  (s.pc = "Xt4nX7OIXhQ9IX6s");
  (ok1(s, s.$pic) && s.$pic.post_to_wall(s));
  (s.pc = "QkBX5DCsGeV5QfB0");
  var t_lmbProxy_8 = s.libs.mkLambdaProxy;
  (s.$on_tapped = function(la0, la1) { return a_a_KQ8LaeTfpaMEiZQm$6(t_lmbProxy_8(la0), la1) });
  (s.pc = "TkbiBm4lNLbyfl1X");
  var t_libcall_9 = s.libs["fgn27ltq44wmhwdo"]["button"](s);
  return s.rt.enter(t_libcall_9.invoke(t_libcall_9, a_KQ8LaeTfpaMEiZQm$7, "I am sitting straight", s.$on_tapped));
}
cs.registerStep(a_KQ8LaeTfpaMEiZQm$5, 'a_KQ8LaeTfpaMEiZQm$5');

function a_KQ8LaeTfpaMEiZQm$7(s) {
  lib.Box.pop_box(s);
  s.rt.leave_render();
  return a_KQ8LaeTfpaMEiZQm$2;
}
cs.registerStep(a_KQ8LaeTfpaMEiZQm$7, 'a_KQ8LaeTfpaMEiZQm$7');

/* ACTION: a_KQ8LaeTfpaMEiZQm::lambda::6 */
function a_a_KQ8LaeTfpaMEiZQm$6(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_KQ8LaeTfpaMEiZQm$6$0;
  s.name = "straight page";
  return s;
}
cs.registerLambda("a_KQ8LaeTfpaMEiZQm\u003a\u003alambda\u003a\u003a6", "a_KQ8LaeTfpaMEiZQm$6", a_a_KQ8LaeTfpaMEiZQm$6, true);

function a_a_KQ8LaeTfpaMEiZQm$6$0(s) {
  (s.pc = "hNKIfmV0gxr0Nvt2");
  return s.rt.enter(a_DOuHZ2WTCQ18yDqu(s, a_a_KQ8LaeTfpaMEiZQm$6$1));
}
cs.registerStep(a_a_KQ8LaeTfpaMEiZQm$6$0, 'a_a_KQ8LaeTfpaMEiZQm$6$0');

function a_a_KQ8LaeTfpaMEiZQm$6$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "xhMcUwOkTpa40tE1");
  return s.rt.enter(a_eQ4FLHbtWAVqgGH4(s, a_a_KQ8LaeTfpaMEiZQm$6$2, 0));
}
cs.registerStep(a_a_KQ8LaeTfpaMEiZQm$6$1, 'a_a_KQ8LaeTfpaMEiZQm$6$1');

function a_a_KQ8LaeTfpaMEiZQm$6$2(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  t_actRes_1;
  var t_elseIf_2 = true;
  (s.pc = "xv1VOpQLr7lv32UI");
  var t_call_3 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(0, s));
  if (t_call_3) {
  var t_recOp_4 = t_call_3.perform_get("kQQGIvHZHJCQCvWN", s);
  }
  var t_infix_5 = (ok1(s, t_recOp_4) && (t_recOp_4 !== 0));
  ok1(s, t_infix_5);
  if (t_infix_5) {
  (s.pc = "kwFAG10Rv4YKso1N");
  var t_resumeCtx_6 = s.rt.getBlockingResumeCtx(a_a_KQ8LaeTfpaMEiZQm$6$5);
  lib.Wall.prompt("Wait while the program calibrates...", t_resumeCtx_6);
  return a_a_KQ8LaeTfpaMEiZQm$6$5;
  } else {
  (s.pc = "rkChMylzT8YppWkY");
  null;
  }
  return a_a_KQ8LaeTfpaMEiZQm$6$4;
}
cs.registerStep(a_a_KQ8LaeTfpaMEiZQm$6$2, 'a_a_KQ8LaeTfpaMEiZQm$6$2');

function a_a_KQ8LaeTfpaMEiZQm$6$5(s) {
  (s.pc = "hiLa6noCjqNX4W8z");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "slouching page");
  return a_a_KQ8LaeTfpaMEiZQm$6$4;
}
cs.registerStep(a_a_KQ8LaeTfpaMEiZQm$6$5, 'a_a_KQ8LaeTfpaMEiZQm$6$5');

function a_a_KQ8LaeTfpaMEiZQm$6$4(s) {
  (s.pc = "NyOUF9hhrzNGFAWP");
  null;
  return s.rt.leave();
}
cs.registerStep(a_a_KQ8LaeTfpaMEiZQm$6$4, 'a_a_KQ8LaeTfpaMEiZQm$6$4');


//Ent_JNdvdEjRj3dVBrK6
function Ent_JNdvdEjRj3dVBrK6(p) {
  this.parent = p;
}
Ent_JNdvdEjRj3dVBrK6.prototype = new lib.ObjectEntry();
Ent_JNdvdEjRj3dVBrK6.prototype.keys = [];
Ent_JNdvdEjRj3dVBrK6.prototype.values = [];
Ent_JNdvdEjRj3dVBrK6.prototype.fields = [];
//Tbl_JNdvdEjRj3dVBrK6
function Tbl_JNdvdEjRj3dVBrK6(l) {
  this.libName = l;
  this.initParent();
}
Tbl_JNdvdEjRj3dVBrK6.prototype = new lib.ObjectSingleton();
Tbl_JNdvdEjRj3dVBrK6.prototype.entryCtor = Ent_JNdvdEjRj3dVBrK6;
cs.objectSingletons["straight page page data"] = function(d) { return d.$JNdvdEjRj3dVBrK6 };
Tbl_JNdvdEjRj3dVBrK6.prototype.selfCtor = Tbl_JNdvdEjRj3dVBrK6;
Tbl_JNdvdEjRj3dVBrK6.prototype.stableName = "JNdvdEjRj3dVBrK6";
Tbl_JNdvdEjRj3dVBrK6.prototype.entryKindName = "straight page page data";

// jsonimport
Ent_JNdvdEjRj3dVBrK6.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
}
cs.registerGlobal("$JNdvdEjRj3dVBrK6");

//Ent_BVGhpbmcgdGFibGUa
function Ent_BVGhpbmcgdGFibGUa(p) {
  this.parent = p;
}
Ent_BVGhpbmcgdGFibGUa.prototype = new lib.CloudTableEntry();
Ent_BVGhpbmcgdGFibGUa.prototype.keys = [];
Ent_BVGhpbmcgdGFibGUa.prototype.values = ["kQQGIvHZHJCQCvWN", "NXMyz2ScpZ6wavJ2", "e0nNm1KqSrXWO3oW"];
Ent_BVGhpbmcgdGFibGUa.prototype.fields = ["kQQGIvHZHJCQCvWN", "NXMyz2ScpZ6wavJ2", "e0nNm1KqSrXWO3oW"];
Ent_BVGhpbmcgdGFibGUa.prototype["kQQGIvHZHJCQCvWN_realname"] = "x";
Ent_BVGhpbmcgdGFibGUa.prototype["NXMyz2ScpZ6wavJ2_realname"] = "y";
Ent_BVGhpbmcgdGFibGUa.prototype["e0nNm1KqSrXWO3oW_realname"] = "z";
//Tbl_BVGhpbmcgdGFibGUa
function Tbl_BVGhpbmcgdGFibGUa(l) {
  this.libName = l;
  this.initParent();
}
Tbl_BVGhpbmcgdGFibGUa.prototype = new lib.CloudTableSingleton();
Tbl_BVGhpbmcgdGFibGUa.prototype.entryCtor = Ent_BVGhpbmcgdGFibGUa;
cs.objectSingletons["Calibration"] = function(d) { return d.$BVGhpbmcgdGFibGUa };
Tbl_BVGhpbmcgdGFibGUa.prototype.selfCtor = Tbl_BVGhpbmcgdGFibGUa;
Tbl_BVGhpbmcgdGFibGUa.prototype.stableName = "BVGhpbmcgdGFibGUa";
Tbl_BVGhpbmcgdGFibGUa.prototype.entryKindName = "Calibration";
Tbl_BVGhpbmcgdGFibGUa.prototype.cloudtype = "BVGhpbmcgdGFibGUa\u0028\u0029";
Tbl_BVGhpbmcgdGFibGUa.prototype.key_cloudtypes = [];
Tbl_BVGhpbmcgdGFibGUa.prototype.value_cloudtypes = ["kQQGIvHZHJCQCvWN\u002cdouble\u005bBVGhpbmcgdGFibGUa\u0028\u0029\u005d", "NXMyz2ScpZ6wavJ2\u002cdouble\u005bBVGhpbmcgdGFibGUa\u0028\u0029\u005d", "e0nNm1KqSrXWO3oW\u002cdouble\u005bBVGhpbmcgdGFibGUa\u0028\u0029\u005d"];
Tbl_BVGhpbmcgdGFibGUa.prototype.localsession = true;

// jsonimport
Ent_BVGhpbmcgdGFibGUa.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
  this.perform_set("kQQGIvHZHJCQCvWN", ctx.importNumber(json, "x"), s);
  this.perform_set("NXMyz2ScpZ6wavJ2", ctx.importNumber(json, "y"), s);
  this.perform_set("e0nNm1KqSrXWO3oW", ctx.importNumber(json, "z"), s);
}
cs.registerGlobal("$BVGhpbmcgdGFibGUa");

//Ent_BVGhpbmcyIHRhYmxl
function Ent_BVGhpbmcyIHRhYmxl(p) {
  this.parent = p;
}
Ent_BVGhpbmcyIHRhYmxl.prototype = new lib.CloudTableEntry();
Ent_BVGhpbmcyIHRhYmxl.prototype.keys = [];
Ent_BVGhpbmcyIHRhYmxl.prototype.values = ["xGQOimxFj2lxgD1E", "H9wfT2ZfftlwJy2d", "aNYFLEp4F6KDOX8c", "OLyXSAQK3mbP1Zd6", "BqDFvTJmwuTq7p6Y", "S09sBfHVWc2fE13c", "xZxuwSZ8C0GOz7Pu"];
Ent_BVGhpbmcyIHRhYmxl.prototype.fields = ["xGQOimxFj2lxgD1E", "H9wfT2ZfftlwJy2d", "aNYFLEp4F6KDOX8c", "OLyXSAQK3mbP1Zd6", "BqDFvTJmwuTq7p6Y", "S09sBfHVWc2fE13c", "xZxuwSZ8C0GOz7Pu"];
Ent_BVGhpbmcyIHRhYmxl.prototype["xGQOimxFj2lxgD1E_realname"] = "Volume";
Ent_BVGhpbmcyIHRhYmxl.prototype["H9wfT2ZfftlwJy2d_realname"] = "SMS1";
Ent_BVGhpbmcyIHRhYmxl.prototype["aNYFLEp4F6KDOX8c_realname"] = "SMS2";
Ent_BVGhpbmcyIHRhYmxl.prototype["OLyXSAQK3mbP1Zd6_realname"] = "SMS3";
Ent_BVGhpbmcyIHRhYmxl.prototype["BqDFvTJmwuTq7p6Y_realname"] = "Message";
Ent_BVGhpbmcyIHRhYmxl.prototype["S09sBfHVWc2fE13c_realname"] = "Alarm On\u002fOff";
Ent_BVGhpbmcyIHRhYmxl.prototype["xZxuwSZ8C0GOz7Pu_realname"] = "SMS On\u002fOff";
//Tbl_BVGhpbmcyIHRhYmxl
function Tbl_BVGhpbmcyIHRhYmxl(l) {
  this.libName = l;
  this.initParent();
}
Tbl_BVGhpbmcyIHRhYmxl.prototype = new lib.CloudTableSingleton();
Tbl_BVGhpbmcyIHRhYmxl.prototype.entryCtor = Ent_BVGhpbmcyIHRhYmxl;
cs.objectSingletons["Settings"] = function(d) { return d.$BVGhpbmcyIHRhYmxl };
Tbl_BVGhpbmcyIHRhYmxl.prototype.selfCtor = Tbl_BVGhpbmcyIHRhYmxl;
Tbl_BVGhpbmcyIHRhYmxl.prototype.stableName = "BVGhpbmcyIHRhYmxl";
Tbl_BVGhpbmcyIHRhYmxl.prototype.entryKindName = "Settings";
Tbl_BVGhpbmcyIHRhYmxl.prototype.cloudtype = "BVGhpbmcyIHRhYmxl\u0028\u0029";
Tbl_BVGhpbmcyIHRhYmxl.prototype.key_cloudtypes = [];
Tbl_BVGhpbmcyIHRhYmxl.prototype.value_cloudtypes = ["xGQOimxFj2lxgD1E\u002cstring\u005bBVGhpbmcyIHRhYmxl\u0028\u0029\u005d", "H9wfT2ZfftlwJy2d\u002cstring\u005bBVGhpbmcyIHRhYmxl\u0028\u0029\u005d", "aNYFLEp4F6KDOX8c\u002cstring\u005bBVGhpbmcyIHRhYmxl\u0028\u0029\u005d", "OLyXSAQK3mbP1Zd6\u002cstring\u005bBVGhpbmcyIHRhYmxl\u0028\u0029\u005d", "BqDFvTJmwuTq7p6Y\u002cstring\u005bBVGhpbmcyIHRhYmxl\u0028\u0029\u005d", "S09sBfHVWc2fE13c\u002cboolean\u005bBVGhpbmcyIHRhYmxl\u0028\u0029\u005d", "xZxuwSZ8C0GOz7Pu\u002cboolean\u005bBVGhpbmcyIHRhYmxl\u0028\u0029\u005d"];
Tbl_BVGhpbmcyIHRhYmxl.prototype.localsession = true;

// jsonimport
Ent_BVGhpbmcyIHRhYmxl.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
  this.perform_set("xGQOimxFj2lxgD1E", ctx.importString(json, "Volume"), s);
  this.perform_set("H9wfT2ZfftlwJy2d", ctx.importString(json, "SMS1"), s);
  this.perform_set("aNYFLEp4F6KDOX8c", ctx.importString(json, "SMS2"), s);
  this.perform_set("OLyXSAQK3mbP1Zd6", ctx.importString(json, "SMS3"), s);
  this.perform_set("BqDFvTJmwuTq7p6Y", ctx.importString(json, "Message"), s);
  this.perform_set("S09sBfHVWc2fE13c", ctx.importBoolean(json, "Alarm On\u002fOff"), s);
  this.perform_set("xZxuwSZ8C0GOz7Pu", ctx.importBoolean(json, "SMS On\u002fOff"), s);
}
cs.registerGlobal("$BVGhpbmcyIHRhYmxl");
cs.registerArtResource("Sound", "$wOARSK4PZpC75Eqh", ".\u002fart\u002fl0_wOARSK4PZpC75Eqh");
cs.registerArtResource("Picture", "$lpvzsF7aqnl2s2wh", ".\u002fart\u002fl0_lpvzsF7aqnl2s2wh");
cs.registerArtResource("Picture", "$xy8Omp3E9EeBppJL", ".\u002fart\u002fl0_xy8Omp3E9EeBppJL");
/* ACTION: initialize */
function a_KUkbThG4hJJCcn0l(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_KUkbThG4hJJCcn0l$0;
  s.name = "initialize";
  return s;
}
cs.registerAction("initialize", "KUkbThG4hJJCcn0l", a_KUkbThG4hJJCcn0l, true);

function a_KUkbThG4hJJCcn0l$0(s) {
  (s.pc = "x98CVA0HCwUXnddC");
  s.d.$$localpersistentvars.perform_set("$Nh4zi3XEYf4XHtYD", 0, s);
  s.rt.logDataWrite();
  (s.pc = "A0qtUHZMu5FVegs0");
  s.rt.logObjectMutation(/* Calibration table */ s.d.$BVGhpbmcgdGFibGUa);
  (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.clear(s));
  (s.pc = "CQpETgjxgkqwR8V0");
  return a_KUkbThG4hJJCcn0l$1;
}
cs.registerStep(a_KUkbThG4hJJCcn0l$0, 'a_KUkbThG4hJJCcn0l$0');

function a_KUkbThG4hJJCcn0l$1(s) {
  var t_call_0 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.count(s));
  var t_infix_1 = (ok1(s, t_call_0) && (t_call_0 !== 2));
  if (t_infix_1) {
  var t_elseIf_2 = true;
  (s.pc = "pEZ7iJBFCQ46nYsM");
  var t_call_3 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.count(s));
  var t_infix_4 = (ok1(s, t_call_3) && (t_call_3 > 2));
  ok1(s, t_infix_4);
  if (t_infix_4) {
  (s.pc = "lovevCu8QSndptUt");
  var t_call_5 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.count(s));
  var t_infix_6 = (ok1(s, t_call_5) && (t_call_5 - 1));
  var t_call_7 = (ok2(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa, t_infix_6) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.row_at(t_infix_6, s));
  s.rt.logObjectMutation(t_call_7);
  (ok1(s, t_call_7) && t_call_7.delete_row(s));
  } else {
  (s.pc = "ka90nlmV75C6evCG");
  var t_call_8 = (ok1(s, /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa) && /* Calibration table */ s.d.$BVGhpbmcgdGFibGUa.add_row(s));
  t_call_8;
  }
  return a_KUkbThG4hJJCcn0l$1;
  }
  (s.pc = "ki0unlAAI3CHJo9R");
  return a_KUkbThG4hJJCcn0l$4;
}
cs.registerStep(a_KUkbThG4hJJCcn0l$1, 'a_KUkbThG4hJJCcn0l$1');

function a_KUkbThG4hJJCcn0l$4(s) {
  var t_call_9 = (ok1(s, /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl) && /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl.count(s));
  var t_infix_10 = (ok1(s, t_call_9) && (t_call_9 !== 1));
  if (t_infix_10) {
  var t_elseIf_11 = true;
  (s.pc = "Mvh43403p7tEm4Ut");
  var t_call_12 = (ok1(s, /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl) && /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl.count(s));
  var t_infix_13 = (ok1(s, t_call_12) && (t_call_12 > 1));
  ok1(s, t_infix_13);
  if (t_infix_13) {
  (s.pc = "YHUnumQfMukFW83i");
  var t_call_14 = (ok1(s, /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl) && /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl.count(s));
  var t_infix_15 = (ok1(s, t_call_14) && (t_call_14 - 1));
  var t_call_16 = (ok2(s, /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl, t_infix_15) && /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl.row_at(t_infix_15, s));
  s.rt.logObjectMutation(t_call_16);
  (ok1(s, t_call_16) && t_call_16.delete_row(s));
  } else {
  (s.pc = "q8YnRcoqVemBPRgC");
  var t_call_17 = (ok1(s, /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl) && /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl.add_row(s));
  t_call_17;
  }
  return a_KUkbThG4hJJCcn0l$4;
  }
  (s.pc = "cODAWsAh1QZ6xbzN");
  var t_call_18 = (ok1(s, /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl) && /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl.row_at(0, s));
  if (t_call_18) {
  t_call_18.perform_set("xZxuwSZ8C0GOz7Pu", false, s);
  }
  (s.pc = "xCKv8XuQPEhlJxiY");
  var t_call_19 = (ok1(s, /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl) && /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl.row_at(0, s));
  if (t_call_19) {
  t_call_19.perform_set("S09sBfHVWc2fE13c", false, s);
  }
  (s.pc = "dE2phgJg4T4W9fG5");
  var t_call_20 = (ok1(s, /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl) && /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl.row_at(0, s));
  if (t_call_20) {
  t_call_20.perform_set("BqDFvTJmwuTq7p6Y", "The person\u0027s back is slouching!", s);
  }
  (s.pc = "xVRJsYCRB0OFwWf5");
  var t_call_21 = (ok1(s, /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl) && /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl.row_at(0, s));
  if (t_call_21) {
  t_call_21.perform_set("xGQOimxFj2lxgD1E", "50", s);
  }
  return s.rt.leave();
}
cs.registerStep(a_KUkbThG4hJJCcn0l$4, 'a_KUkbThG4hJJCcn0l$4');

/* ACTION: main */
function a_n0mZASkSqkRzzW42(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_n0mZASkSqkRzzW42$0;
  s.name = "main";
  return s;
}
cs.registerAction("main", "n0mZASkSqkRzzW42", a_n0mZASkSqkRzzW42, true);

function a_n0mZASkSqkRzzW42$0(s) {
  (s.pc = "IjPFd3Y22DPQSdov");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "title page");
  return s.rt.leave();
}
cs.registerStep(a_n0mZASkSqkRzzW42$0, 'a_n0mZASkSqkRzzW42$0');

/* ACTION: get readings */
function a_DOuHZ2WTCQ18yDqu(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_DOuHZ2WTCQ18yDqu$0;
  s.name = "get readings";
  s.$Strings = undefined;
  s.$counter = undefined;
  s.$StringToDisplay = undefined;
  s.$messageType = undefined;
  s.$s = undefined;
  return s;
}
cs.registerAction("get readings", "DOuHZ2WTCQ18yDqu", a_DOuHZ2WTCQ18yDqu, true);

function a_DOuHZ2WTCQ18yDqu$0(s) {
  (s.pc = "UBzSeNt3E2jkVGGc");
  var t_call_0 = (ok1(s, /* text to display */ s.d.$xHdizJ8cAYKEGmEh) && lib.String_.split(/* text to display */ s.d.$xHdizJ8cAYKEGmEh, "\u003b", s));
  s.rt.markAllocated(t_call_0);
  (s.$Strings = t_call_0);
  (s.pc = "CUlNewCb7UNJmCmL");
  (s.$counter = 0);
  (s.pc = "x7hby1M0JjWwWrCX");
  (s.$StringToDisplay = "");
  (s.pc = "OHD56sIe5Q4q43al");
  (s.$messageType = "");
  (s.pc = "VqVr8AaEBVBvNhr7");
  s.t_collArr_1 = (ok1(s, s.$Strings) && s.$Strings.get_enumerator());
  s.t_idx_2 = 0;
  return a_DOuHZ2WTCQ18yDqu$1;
}
cs.registerStep(a_DOuHZ2WTCQ18yDqu$0, 'a_DOuHZ2WTCQ18yDqu$0');

function a_DOuHZ2WTCQ18yDqu$1(s) {
  if ((s.t_idx_2 < (s.t_collArr_1.length))) {
  (s.$s = s.t_collArr_1[(s.t_idx_2)]);
  (s.t_idx_2++);
  (s.pc = "pOBBoAsYdZqpSQim");
  var t_infix_3 = (ok1(s, s.$counter) && (s.$counter + 1));
  (s.$counter = t_infix_3);
  var t_elseIf_4 = true;
  (s.pc = "x9WOAEIN26kNGMXg");
  var t_infix_5 = (ok1(s, s.$counter) && (s.$counter === 2));
  ok1(s, t_infix_5);
  if (t_infix_5) {
  (t_elseIf_4 = false);
  (s.pc = "HWoi2v2KctxYHZ6L");
  (s.$messageType = s.$s);
  }
  if (t_elseIf_4) {
  (s.pc = "MhXZSlN3szYbxd27");
  var t_call_6 = (ok1(s, s.$messageType) && lib.String_.equals(s.$messageType, "112", s));
  ok1(s, t_call_6);
  if (t_call_6) {
  var t_elseIf_7 = true;
  (s.pc = "wwdDbWlSNSt7DT2H");
  var t_infix_8 = (ok1(s, s.$counter) && (s.$counter === 3));
  ok1(s, t_infix_8);
  if (t_infix_8) {
  (t_elseIf_7 = false);
  (s.pc = "xhfcrcOgKSgdaf2D");
  var t_concat_9 = lib.String_.concatAny("X\u003a ", s.$StringToDisplay);
  var t_concat_10 = lib.String_.concatAny(t_concat_9, s.$s);
  var t_concat_11 = lib.String_.concatAny(t_concat_10, "\u000aY\u003a ");
  (s.$StringToDisplay = t_concat_11);
  (s.pc = "zIBN7UICIhIwv0EA");
  var t_call_12 = (ok1(s, s.$s) && lib.String_.to_number(s.$s, s));
  (/* x */ s.d.$kR4n2SgnCqZKNyic = t_call_12);
  s.rt.logDataWrite();
  }
  if (t_elseIf_7) {
  (s.pc = "dFLRWceEYFfROjit");
  var t_infix_13 = (ok1(s, s.$counter) && (s.$counter === 4));
  ok1(s, t_infix_13);
  if (t_infix_13) {
  (t_elseIf_7 = false);
  (s.pc = "xwYbRFip2rnvDsBk");
  var t_concat_14 = lib.String_.concatAny(s.$StringToDisplay, s.$s);
  var t_concat_15 = lib.String_.concatAny(t_concat_14, "\u000aZ\u003a ");
  (s.$StringToDisplay = t_concat_15);
  (s.pc = "F9HySBEJbxVf2sJl");
  var t_call_16 = (ok1(s, s.$s) && lib.String_.to_number(s.$s, s));
  (/* y */ s.d.$eRnXXsodK421Weem = t_call_16);
  s.rt.logDataWrite();
  }
  }
  if (t_elseIf_7) {
  (s.pc = "xDqcK19Btds7rOmT");
  var t_infix_17 = (ok1(s, s.$counter) && (s.$counter === 5));
  ok1(s, t_infix_17);
  if (t_infix_17) {
  (s.pc = "xwRjHdR4qhMLUhnQ");
  var t_concat_18 = lib.String_.concatAny(s.$StringToDisplay, s.$s);
  (s.$StringToDisplay = t_concat_18);
  (s.pc = "esIe2qLqBAgzeNRa");
  var t_call_19 = (ok1(s, s.$s) && lib.String_.to_number(s.$s, s));
  (/* z */ s.d.$MEl2eFcIp3EZlI6W = t_call_19);
  s.rt.logDataWrite();
  } else {
  (s.pc = "hI7lI0rccGGPEYhB");
  null;
  }
  }
  } else {
  (s.pc = "ysxo0XB9mIF4487t");
  null;
  }
  }
  return a_DOuHZ2WTCQ18yDqu$1;
  }
  return s.rt.leave();
}
cs.registerStep(a_DOuHZ2WTCQ18yDqu$1, 'a_DOuHZ2WTCQ18yDqu$1');

/* ACTION: connect */
function a_x0VH5sgMd2YbZ4Ai(previous, returnAddr, $disconnected) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_x0VH5sgMd2YbZ4Ai$0;
  s.name = "connect";
  s.$_ = undefined;
  s.$disconnected = $disconnected;
  s.$on_tapped2 = undefined;
  s.$device = undefined;
  s.$handler = undefined;
  s.$disconnect = undefined;
  return s;
}
cs.registerPage("connect", "x0VH5sgMd2YbZ4Ai", a_x0VH5sgMd2YbZ4Ai, false);

function a_x0VH5sgMd2YbZ4Ai$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "xs72tnb0snNHw4Hd");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$BICBuYW1lICAa.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "IM4Bueuc9okvyn4e");
  null;
  } else {
  (s.pc = "lqzKs02VjJv48RPa");
  null;
  }
  var t_elseIf_2 = true;
  (s.pc = "IBKPwbTdvFOeObCH");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "XWcGNIPDANdRoaVi");
  return s.rt.enter(a_Anh47Dm2O46bfmAy(s, a_x0VH5sgMd2YbZ4Ai$3));
  } else {
  (s.pc = "xSJS34Ey5al94TiY");
  null;
  }
  return a_x0VH5sgMd2YbZ4Ai$2;
}
cs.registerStep(a_x0VH5sgMd2YbZ4Ai$0, 'a_x0VH5sgMd2YbZ4Ai$0');

function a_x0VH5sgMd2YbZ4Ai$3(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  (s.pc = "hX8qSk5XP4I2WV8z");
  lib.String_.post_to_wall("", s);
  (s.pc = "hyJyQNPk54DuEbWY");
  lib.Box.push_box(s);
  (s.pc = "gagpmbCNOKjIw73L");
  lib.Box.set_font_size(2, s);
  (s.pc = "sq2GEJC0vz2pBqIs");
  var t_lmbv_4 = s.$_;
  var t_lmbProxy_5 = s.libs.mkLambdaProxy;
  (s.$on_tapped2 = function(la0, la1) { return a_a_x0VH5sgMd2YbZ4Ai$4(t_lmbProxy_5(la0), la1, t_lmbv_4) });
  (s.pc = "R6Y1cjt9px7Kxhf2");
  var t_libcall_6 = s.libs["fgn27ltq44wmhwdo"]["button"](s);
  return s.rt.enter(t_libcall_6.invoke(t_libcall_6, a_x0VH5sgMd2YbZ4Ai$5, "List Paired Devices", s.$on_tapped2));
}
cs.registerStep(a_x0VH5sgMd2YbZ4Ai$3, 'a_x0VH5sgMd2YbZ4Ai$3');

function a_x0VH5sgMd2YbZ4Ai$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_x0VH5sgMd2YbZ4Ai$2, 'a_x0VH5sgMd2YbZ4Ai$2');

function a_x0VH5sgMd2YbZ4Ai$5(s) {
  var t_elseIf_7 = true;
  (s.pc = "zznh9YbJfuuc73lS");
  if (s.$_) {
  var t_recOp_8 = s.$_[("$devices")];
  }
  var t_call_9 = lib.Boolean_.not((t_recOp_8 == undefined), s);
  ok1(s, t_call_9);
  if (t_call_9) {
  (s.pc = "qHZVcjodP9aSCvHF");
  if (s.$_) {
  var t_recOp_10 = s.$_[("$devices")];
  }
  s.t_collArr_11 = (ok1(s, t_recOp_10) && t_recOp_10.get_enumerator());
  s.t_idx_12 = 0;
  return a_x0VH5sgMd2YbZ4Ai$9;
  } else {
  (s.pc = "xuHgZOc4Hkb6K4cO");
  null;
  }
  return a_x0VH5sgMd2YbZ4Ai$7;
}
cs.registerStep(a_x0VH5sgMd2YbZ4Ai$5, 'a_x0VH5sgMd2YbZ4Ai$5');

function a_x0VH5sgMd2YbZ4Ai$9(s) {
  if ((s.t_idx_12 < (s.t_collArr_11.length))) {
  (s.$device = s.t_collArr_11[(s.t_idx_12)]);
  (s.t_idx_12++);
  (s.pc = "OOWF4j3nIRM36CS1");
  lib.Box.push_box(s);
  (s.pc = "LAeU23yaeRtERxzI");
  lib.Box.push_box(s);
  (s.pc = "sry3OOH0J0EeuetJ");
  var t_libcall_13 = s.libs["HBblsCdmtisDn1bE"]["normal"](s);
  return s.rt.enter(t_libcall_13.invoke(t_libcall_13, a_x0VH5sgMd2YbZ4Ai$11));
  }
  return a_x0VH5sgMd2YbZ4Ai$7;
}
cs.registerStep(a_x0VH5sgMd2YbZ4Ai$9, 'a_x0VH5sgMd2YbZ4Ai$9');

function a_x0VH5sgMd2YbZ4Ai$7(s) {
  (s.pc = "UqMWll7aA9R2F3K8");
  var t_call_23 = lib.Colors.white(s);
  (ok1(s, t_call_23) && lib.Box.set_background(t_call_23, s));
  (s.pc = "zYxY61A0aVcfKWin");
  lib.Box.set_width(21, s);
  lib.Box.pop_box(s);
  (s.pc = "GQKj8FEYaAkHqyct");
  null;
  s.rt.leave_render();
  return a_x0VH5sgMd2YbZ4Ai$2;
}
cs.registerStep(a_x0VH5sgMd2YbZ4Ai$7, 'a_x0VH5sgMd2YbZ4Ai$7');

function a_x0VH5sgMd2YbZ4Ai$11(s) {
  var t_actRes_14 = s.rt.returnedFrom.result;
  t_actRes_14;
  (s.pc = "TqxJX4FuchodKpW8");
  if (s.$device) {
  var t_recOp_15 = s.$device[("$name")];
  }
  (ok1(s, t_recOp_15) && lib.String_.post_to_wall(t_recOp_15, s));
  lib.Box.pop_box(s);
  (s.pc = "tTe9SZ0Kdc8uWd1d");
  lib.Box.push_box(s);
  (s.pc = "x1irzeaePBonnLhb");
  var t_libcall_16 = s.libs["HBblsCdmtisDn1bE"]["subtle"](s);
  return s.rt.enter(t_libcall_16.invoke(t_libcall_16, a_x0VH5sgMd2YbZ4Ai$13));
}
cs.registerStep(a_x0VH5sgMd2YbZ4Ai$11, 'a_x0VH5sgMd2YbZ4Ai$11');

function a_x0VH5sgMd2YbZ4Ai$13(s) {
  var t_actRes_17 = s.rt.returnedFrom.result;
  t_actRes_17;
  (s.pc = "C3FVmQVFrdfEIaaz");
  if (s.$device) {
  var t_recOp_18 = s.$device[("$address")];
  }
  (ok1(s, t_recOp_18) && lib.String_.post_to_wall(t_recOp_18, s));
  lib.Box.pop_box(s);
  (s.pc = "lpqqElK3vSjjMtl8");
  var t_lmbv_19 = s.$device;
  var t_lmbv_20 = s.$disconnect;
  var t_lmbv_21 = s.$disconnected;
  var t_lmbProxy_22 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_x0VH5sgMd2YbZ4Ai$15(t_lmbProxy_22(la0), la1, t_lmbv_19, t_lmbv_20, t_lmbv_21) });
  (s.pc = "XC7TkUg6JHNvHCND");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  lib.Box.pop_box(s);
  return a_x0VH5sgMd2YbZ4Ai$9;
}
cs.registerStep(a_x0VH5sgMd2YbZ4Ai$13, 'a_x0VH5sgMd2YbZ4Ai$13');

/* ACTION: a_x0VH5sgMd2YbZ4Ai::lambda::4 */
function a_a_x0VH5sgMd2YbZ4Ai$4(previous, returnAddr, $_) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_x0VH5sgMd2YbZ4Ai$4$0;
  s.name = "connect";
  s.$_ = $_;
  return s;
}
cs.registerLambda("a_x0VH5sgMd2YbZ4Ai\u003a\u003alambda\u003a\u003a4", "a_x0VH5sgMd2YbZ4Ai$4", a_a_x0VH5sgMd2YbZ4Ai$4, true);

function a_a_x0VH5sgMd2YbZ4Ai$4$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "l4AF299cJque2GGQ");
  var t_libcall_1 = s.libs["qhQduCeJ2pUP9F58"]["is enabled"](s);
  return s.rt.enter(t_libcall_1.invoke(t_libcall_1, a_a_x0VH5sgMd2YbZ4Ai$4$1));
}
cs.registerStep(a_a_x0VH5sgMd2YbZ4Ai$4$0, 'a_a_x0VH5sgMd2YbZ4Ai$4$0');

function a_a_x0VH5sgMd2YbZ4Ai$4$1(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  var t_call_3 = (ok1(s, t_actRes_2) && lib.Boolean_.not(t_actRes_2, s));
  ok1(s, t_call_3);
  if (t_call_3) {
  (s.pc = "BkOyIQyldvT1X8Zd");
  var t_resumeCtx_4 = s.rt.getBlockingResumeCtx(a_a_x0VH5sgMd2YbZ4Ai$4$3);
  lib.Wall.prompt("Bluetooth not enabled", t_resumeCtx_4);
  return a_a_x0VH5sgMd2YbZ4Ai$4$3;
  } else {
  (s.pc = "MdZXn9CmJw5zaeAm");
  return s.rt.enter(a_q0J60uRXaUyuAfGX(s, a_a_x0VH5sgMd2YbZ4Ai$4$4, s.$_));
  }
  return a_a_x0VH5sgMd2YbZ4Ai$4$2;
}
cs.registerStep(a_a_x0VH5sgMd2YbZ4Ai$4$1, 'a_a_x0VH5sgMd2YbZ4Ai$4$1');

function a_a_x0VH5sgMd2YbZ4Ai$4$3(s) {
  (s.pc = "iULw3gB9TYZa5rsm");
  var t_call_5 = lib.Wall.pop_page(s);
  t_call_5;
  return a_a_x0VH5sgMd2YbZ4Ai$4$2;
}
cs.registerStep(a_a_x0VH5sgMd2YbZ4Ai$4$3, 'a_a_x0VH5sgMd2YbZ4Ai$4$3');

function a_a_x0VH5sgMd2YbZ4Ai$4$4(s) {
  var t_actRes_6 = s.rt.returnedFrom.result;
  t_actRes_6;
  return a_a_x0VH5sgMd2YbZ4Ai$4$2;
}
cs.registerStep(a_a_x0VH5sgMd2YbZ4Ai$4$4, 'a_a_x0VH5sgMd2YbZ4Ai$4$4');

function a_a_x0VH5sgMd2YbZ4Ai$4$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_x0VH5sgMd2YbZ4Ai$4$2, 'a_a_x0VH5sgMd2YbZ4Ai$4$2');

/* ACTION: a_x0VH5sgMd2YbZ4Ai::lambda::15 */
function a_a_x0VH5sgMd2YbZ4Ai$15(previous, returnAddr, $device, $disconnect, $disconnected) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_x0VH5sgMd2YbZ4Ai$15$0;
  s.name = "connect";
  s.$device = $device;
  s.$disconnect = $disconnect;
  s.$disconnected = $disconnected;
  return s;
}
cs.registerLambda("a_x0VH5sgMd2YbZ4Ai\u003a\u003alambda\u003a\u003a15", "a_x0VH5sgMd2YbZ4Ai$15", a_a_x0VH5sgMd2YbZ4Ai$15, true);

function a_a_x0VH5sgMd2YbZ4Ai$15$0(s) {
  (s.pc = "NwjQhzgXjqmbdrwV");
  var t_lmbProxy_0 = s.libs.mkLambdaProxy;
  (s.$disconnect = function(la0, la1) { return a_a_a_x0VH5sgMd2YbZ4Ai$15$1(t_lmbProxy_0(la0), la1) });
  (s.pc = "A3GHbTOazFk9K2xM");
  if (s.$device) {
  var t_recOp_1 = s.$device[("$address")];
  }
  var t_libcall_2 = s.libs["qhQduCeJ2pUP9F58"]["connect"](s);
  return s.rt.enter(t_libcall_2.invoke(t_libcall_2, a_a_x0VH5sgMd2YbZ4Ai$15$3, t_recOp_1, s.$disconnect));
}
cs.registerStep(a_a_x0VH5sgMd2YbZ4Ai$15$0, 'a_a_x0VH5sgMd2YbZ4Ai$15$0');

function a_a_x0VH5sgMd2YbZ4Ai$15$3(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  var t_elseIf_4 = true;
  (s.pc = "xiz6OPgp2c6nG5j4");
  var t_infix_5 = (ok1(s, s.$disconnected) && (s.$disconnected === 1));
  ok1(s, t_infix_5);
  if (t_infix_5) {
  (s.pc = "xc4v10sY9yPh6JqS");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "detect");
  } else {
  (s.pc = "xehRCFRvAFZt4m2D");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "volume");
  }
  return s.rt.leave();
}
cs.registerStep(a_a_x0VH5sgMd2YbZ4Ai$15$3, 'a_a_x0VH5sgMd2YbZ4Ai$15$3');

/* ACTION: a_a_x0VH5sgMd2YbZ4Ai$15::lambda::1 */
function a_a_a_x0VH5sgMd2YbZ4Ai$15$1(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_x0VH5sgMd2YbZ4Ai$15$1$0;
  s.name = "a_x0VH5sgMd2YbZ4Ai\u003a\u003alambda\u003a\u003a15";
  return s;
}
cs.registerLambda("a_a_x0VH5sgMd2YbZ4Ai$15\u003a\u003alambda\u003a\u003a1", "a_a_x0VH5sgMd2YbZ4Ai$15$1", a_a_a_x0VH5sgMd2YbZ4Ai$15$1, true);

function a_a_a_x0VH5sgMd2YbZ4Ai$15$1$0(s) {
  (s.pc = "CSfF4XOrkyQ2yF9O");
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_a_a_x0VH5sgMd2YbZ4Ai$15$1$1);
  lib.Wall.prompt("Unable To Connect!", t_resumeCtx_0);
  return a_a_a_x0VH5sgMd2YbZ4Ai$15$1$1;
}
cs.registerStep(a_a_a_x0VH5sgMd2YbZ4Ai$15$1$0, 'a_a_a_x0VH5sgMd2YbZ4Ai$15$1$0');

function a_a_a_x0VH5sgMd2YbZ4Ai$15$1$1(s) {
  (s.pc = "SJofSPnWkpw0eCZl");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "connect", 1);
  return s.rt.leave();
}
cs.registerStep(a_a_a_x0VH5sgMd2YbZ4Ai$15$1$1, 'a_a_a_x0VH5sgMd2YbZ4Ai$15$1$1');


//Ent_BICBuYW1lICAa
function Ent_BICBuYW1lICAa(p) {
  this.parent = p;
}
Ent_BICBuYW1lICAa.prototype = new lib.ObjectEntry();
Ent_BICBuYW1lICAa.prototype.keys = [];
Ent_BICBuYW1lICAa.prototype.values = ["$text", "$logger", "$devices"];
Ent_BICBuYW1lICAa.prototype.fields = ["$text", "$logger", "$devices"];
Ent_BICBuYW1lICAa.prototype["$text_realname"] = "text";
Ent_BICBuYW1lICAa.prototype["$logger_realname"] = "logger";
Ent_BICBuYW1lICAa.prototype["$devices_realname"] = "devices";
Ent_BICBuYW1lICAa.prototype["$text"] = "";
//Tbl_BICBuYW1lICAa
function Tbl_BICBuYW1lICAa(l) {
  this.libName = l;
  this.initParent();
}
Tbl_BICBuYW1lICAa.prototype = new lib.ObjectSingleton();
Tbl_BICBuYW1lICAa.prototype.entryCtor = Ent_BICBuYW1lICAa;
cs.objectSingletons["connect page data"] = function(d) { return d.$BICBuYW1lICAa };
Tbl_BICBuYW1lICAa.prototype.selfCtor = Tbl_BICBuYW1lICAa;
Tbl_BICBuYW1lICAa.prototype.stableName = "BICBuYW1lICAa";
Tbl_BICBuYW1lICAa.prototype.entryKindName = "connect page data";

// jsonimport
Ent_BICBuYW1lICAa.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
  this.perform_set("$text", ctx.importString(json, "text"), s);
  this.perform_set("$devices", ctx.importCollection(json, this.perform_get("$devices",s),"devices", s.rt.getLibRecordSingleton("qhQduCeJ2pUP9F58", "BLE Device")), s);
}
cs.registerGlobal("$BICBuYW1lICAa");
/* ACTION: update devices */
function a_q0J60uRXaUyuAfGX(previous, returnAddr, $_) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_q0J60uRXaUyuAfGX$0;
  s.name = "update devices";
  s.$_ = $_;
  return s;
}
cs.registerAction("update devices", "q0J60uRXaUyuAfGX", a_q0J60uRXaUyuAfGX, true);

function a_q0J60uRXaUyuAfGX$0(s) {
  (s.pc = "qM1iBvGxomEJ5ETh");
  var t_libcall_0 = s.libs["qhQduCeJ2pUP9F58"]["list"](s);
  return s.rt.enter(t_libcall_0.invoke(t_libcall_0, a_q0J60uRXaUyuAfGX$1));
}
cs.registerStep(a_q0J60uRXaUyuAfGX$0, 'a_q0J60uRXaUyuAfGX$0');

function a_q0J60uRXaUyuAfGX$1(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  if (s.$_) {
  s.$_.perform_set("$devices", t_actRes_1, s);
  }
  return s.rt.leave();
}
cs.registerStep(a_q0J60uRXaUyuAfGX$1, 'a_q0J60uRXaUyuAfGX$1');

/* ACTION: detect */
function a_nEh3E4Ti5dUlvlfY(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_nEh3E4Ti5dUlvlfY$0;
  s.name = "detect";
  s.$_ = undefined;
  s.$previous = undefined;
  s.$slouch_time = undefined;
  s.$label = undefined;
  s.$on_tapped = undefined;
  s.$action = undefined;
  s.$text = undefined;
  s.$Strings = undefined;
  s.$counter = undefined;
  s.$StringToDisplay = undefined;
  s.$messageType = undefined;
  s.$x = undefined;
  s.$y = undefined;
  s.$z = undefined;
  s.$s = undefined;
  s.$on_tapped2 = undefined;
  return s;
}
cs.registerPage("detect", "nEh3E4Ti5dUlvlfY", a_nEh3E4Ti5dUlvlfY, false);

function a_nEh3E4Ti5dUlvlfY$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "gFeogPEnA4KiTl8P");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$xpO6fzyjaha74O2R.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "OmC68XlAIjr3pMv3");
  if (s.$_) {
  s.$_.perform_set("$button status", false, s);
  }
  (s.pc = "sqQU4VOFaj5eevpH");
  if (s.$_) {
  s.$_.perform_set("$text to display", "", s);
  }
  } else {
  (s.pc = "xLXBfMo4uDxxlPUo");
  null;
  }
  var t_elseIf_2 = true;
  (s.pc = "JIZ8rPCaqpFD4lrX");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "B7ZmORYqoV2Irl3Z");
  return s.rt.enter(a_Anh47Dm2O46bfmAy(s, a_nEh3E4Ti5dUlvlfY$5));
  } else {
  (s.pc = "xZ1EcMJnXrC23Hzz");
  null;
  }
  return a_nEh3E4Ti5dUlvlfY$4;
}
cs.registerStep(a_nEh3E4Ti5dUlvlfY$0, 'a_nEh3E4Ti5dUlvlfY$0');

function a_nEh3E4Ti5dUlvlfY$5(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  (s.pc = "siuWbclEwynHwgmK");
  lib.String_.post_to_wall("", s);
  (s.pc = "vJJ204W4SMMKLhWs");
  (s.$previous = false);
  (s.pc = "YbJi2FHJFVTqZuwt");
  var t_call_4 = lib.Create.Collection_of(s, lib.DateTime);
  s.rt.markAllocated(t_call_4);
  (s.$slouch_time = t_call_4);
  (s.pc = "jNRR462HltFYCDFA");
  lib.Box.push_box(s);
  (s.pc = "vd4WEtF2KpnF0mQI");
  lib.Box.set_padding(0, 2, 0, 1, s);
  (s.pc = "VRnPTNxYmxrNiyDu");
  lib.Box.set_font_size(2, s);
  (s.pc = "KulDZlUwLSlSx9XE");
  (s.$label = "");
  var t_elseIf_5 = true;
  (s.pc = "uh1bY2Hcc3KAoRcu");
  if (s.$_) {
  var t_recOp_6 = s.$_[("$button status")];
  }
  var t_call_7 = (ok1(s, t_recOp_6) && lib.Boolean_.equals(t_recOp_6, false, s));
  ok1(s, t_call_7);
  if (t_call_7) {
  (s.pc = "xzgYW2CdODdbKqdh");
  (s.$label = "Start slouch detection");
  } else {
  (s.pc = "mt0ZYtsUhDwATzPJ");
  (s.$label = "Stop slouch detection");
  }
  (s.pc = "IkqF2ymFdlA2isbF");
  lib.String_.post_to_wall("The setup is finished\u002c\u000aplease click the buttons \u000abelow to either start or \u000astop the slouch \u000adetection.", s);
  (s.pc = "PNq9cC7fXju6mo37");
  lib.String_.post_to_wall("  ", s);
  (s.pc = "xt35oLcPpRAwA9c2");
  var t_lmbv_8 = s.$_;
  var t_lmbv_9 = s.$action;
  var t_lmbProxy_10 = s.libs.mkLambdaProxy;
  (s.$on_tapped = function(la0, la1) { return a_a_nEh3E4Ti5dUlvlfY$8(t_lmbProxy_10(la0), la1, t_lmbv_8, t_lmbv_9) });
  (s.pc = "xet3cqRHf5Da3YJj");
  var t_libcall_11 = s.libs["fgn27ltq44wmhwdo"]["button"](s);
  return s.rt.enter(t_libcall_11.invoke(t_libcall_11, a_nEh3E4Ti5dUlvlfY$9, s.$label, s.$on_tapped));
}
cs.registerStep(a_nEh3E4Ti5dUlvlfY$5, 'a_nEh3E4Ti5dUlvlfY$5');

function a_nEh3E4Ti5dUlvlfY$4(s) {
  return s.rt.leave();
}
cs.registerStep(a_nEh3E4Ti5dUlvlfY$4, 'a_nEh3E4Ti5dUlvlfY$4');

function a_nEh3E4Ti5dUlvlfY$9(s) {
  (s.pc = "KP2Ftmz87goH09y4");
  if (s.$_) {
  var t_recOp_12 = s.$_[("$text to display")];
  }
  var t_call_13 = (ok1(s, t_recOp_12) && lib.String_.split(t_recOp_12, "\u003b", s));
  s.rt.markAllocated(t_call_13);
  (s.$Strings = t_call_13);
  (s.pc = "racU6KpnDuejPJqr");
  (s.$counter = 0);
  (s.pc = "NKcgbhTxWvRH02i2");
  (s.$StringToDisplay = "");
  (s.pc = "mswc2UkPlgg22xHU");
  (s.$messageType = "");
  (s.pc = "cKAeBnWSM9houMOe");
  (s.$x = 0);
  (s.pc = "t7K48nX6BcKhkrJV");
  (s.$y = 0);
  (s.pc = "fcRLiAhMDcHkKBez");
  (s.$z = 0);
  (s.pc = "Zpz2eqvaRBOt7U3t");
  s.t_collArr_14 = (ok1(s, s.$Strings) && s.$Strings.get_enumerator());
  s.t_idx_15 = 0;
  return a_nEh3E4Ti5dUlvlfY$11;
}
cs.registerStep(a_nEh3E4Ti5dUlvlfY$9, 'a_nEh3E4Ti5dUlvlfY$9');

function a_nEh3E4Ti5dUlvlfY$11(s) {
  if ((s.t_idx_15 < (s.t_collArr_14.length))) {
  (s.$s = s.t_collArr_14[(s.t_idx_15)]);
  (s.t_idx_15++);
  (s.pc = "abqLEFpHErdUaMve");
  var t_infix_16 = (ok1(s, s.$counter) && (s.$counter + 1));
  (s.$counter = t_infix_16);
  var t_elseIf_17 = true;
  (s.pc = "OboPll8hL7HFp4ER");
  var t_infix_18 = (ok1(s, s.$counter) && (s.$counter === 2));
  ok1(s, t_infix_18);
  if (t_infix_18) {
  (t_elseIf_17 = false);
  (s.pc = "GHS2eoZyFM2rtim4");
  (s.$messageType = s.$s);
  }
  if (t_elseIf_17) {
  (s.pc = "MHUzkIRywUKRRDRp");
  var t_call_19 = (ok1(s, s.$messageType) && lib.String_.equals(s.$messageType, "112", s));
  ok1(s, t_call_19);
  if (t_call_19) {
  var t_elseIf_20 = true;
  (s.pc = "UTfA5hPAxu4Tb1Zg");
  var t_infix_21 = (ok1(s, s.$counter) && (s.$counter === 3));
  ok1(s, t_infix_21);
  if (t_infix_21) {
  (t_elseIf_20 = false);
  (s.pc = "v47VSi2AaN3jFFAV");
  var t_concat_22 = lib.String_.concatAny("X\u003a ", s.$StringToDisplay);
  var t_concat_23 = lib.String_.concatAny(t_concat_22, s.$s);
  var t_concat_24 = lib.String_.concatAny(t_concat_23, "\u000aY\u003a ");
  (s.$StringToDisplay = t_concat_24);
  (s.pc = "xVYsaf3AaEhBrgh7");
  var t_call_25 = (ok1(s, s.$s) && lib.String_.to_number(s.$s, s));
  (s.$x = t_call_25);
  }
  if (t_elseIf_20) {
  (s.pc = "R5ct2bi4ieATNl1B");
  var t_infix_26 = (ok1(s, s.$counter) && (s.$counter === 4));
  ok1(s, t_infix_26);
  if (t_infix_26) {
  (t_elseIf_20 = false);
  (s.pc = "UHA6EoQFHvxf4Ulv");
  var t_concat_27 = lib.String_.concatAny(s.$StringToDisplay, s.$s);
  var t_concat_28 = lib.String_.concatAny(t_concat_27, "\u000aZ\u003a ");
  (s.$StringToDisplay = t_concat_28);
  (s.pc = "x9n3JGWtI4mI1J4I");
  var t_call_29 = (ok1(s, s.$s) && lib.String_.to_number(s.$s, s));
  (s.$y = t_call_29);
  }
  }
  if (t_elseIf_20) {
  (s.pc = "rX7hcgVHADeAV8ru");
  var t_infix_30 = (ok1(s, s.$counter) && (s.$counter === 5));
  ok1(s, t_infix_30);
  if (t_infix_30) {
  (s.pc = "hNkgsWULhYfcUM5C");
  var t_concat_31 = lib.String_.concatAny(s.$StringToDisplay, s.$s);
  (s.$StringToDisplay = t_concat_31);
  (s.pc = "vDuD9qu1BK4ztSJK");
  var t_call_32 = (ok1(s, s.$s) && lib.String_.to_number(s.$s, s));
  (s.$z = t_call_32);
  } else {
  (s.pc = "B9RdBP2ym0RLRAr4");
  null;
  }
  }
  } else {
  (s.pc = "v5me8HJC4hYbslFd");
  null;
  }
  }
  return a_nEh3E4Ti5dUlvlfY$11;
  }
  (s.pc = "QHdeVE80ew38NuTR");
  lib.Box.push_box(s);
  (s.pc = "AL432sg4Yjvb5BPC");
  var t_libcall_33 = s.libs["xW4DV1D84fqL86zF"]["stretch and center"](s);
  return s.rt.enter(t_libcall_33.invoke(t_libcall_33, a_nEh3E4Ti5dUlvlfY$21));
}
cs.registerStep(a_nEh3E4Ti5dUlvlfY$11, 'a_nEh3E4Ti5dUlvlfY$11');

function a_nEh3E4Ti5dUlvlfY$21(s) {
  (s.pc = "xMHcal0FDgMGoudl");
  lib.Box.set_height(5, s);
  (s.pc = "xFwmGwdvc7j1Swf6");
  lib.Box.set_font_size(3, s);
  (s.pc = "KJxMFeCId01cPu2Y");
  lib.Box.set_font_weight("bold", s);
  (s.pc = "i3QnMZDs4JYjPZaX");
  var t_call_34 = lib.Colors.red(s);
  (ok1(s, t_call_34) && lib.Box.set_foreground(t_call_34, s));
  var t_elseIf_35 = true;
  (s.pc = "zulYKzKCSJQK6mzD");
  if (s.$_) {
  var t_recOp_36 = s.$_[("$button status")];
  }
  var t_call_37 = (ok1(s, t_recOp_36) && lib.Boolean_.equals(t_recOp_36, true, s));
  ok1(s, t_call_37);
  if (t_call_37) {
  var t_elseIf_38 = true;
  (s.pc = "DGMYwhKclW8YcQmD");
  return s.rt.enter(a_T6y4C2cyUpaheCfR(s, a_nEh3E4Ti5dUlvlfY$24, s.$x, s.$y, s.$z));
  } else {
  (s.pc = "yTCeRgE9OrpuUbDR");
  null;
  }
  return a_nEh3E4Ti5dUlvlfY$23;
}
cs.registerStep(a_nEh3E4Ti5dUlvlfY$21, 'a_nEh3E4Ti5dUlvlfY$21');

function a_nEh3E4Ti5dUlvlfY$24(s) {
  var t_actRes_39 = s.rt.returnedFrom.result;
  ok1(s, t_actRes_39);
  if (t_actRes_39) {
  var t_elseIf_40 = true;
  (s.pc = "xfl4Qdw4en5pRvWY");
  var t_call_41 = (ok1(s, s.$previous) && lib.Boolean_.not(s.$previous, s));
  ok1(s, t_call_41);
  if (t_call_41) {
  (s.pc = "AArczPbEJN02pqmu");
  var t_call_42 = lib.Time.now(s);
  s.rt.logObjectMutation(s.$slouch_time);
  (ok2(s, s.$slouch_time, t_call_42) && s.$slouch_time.add(t_call_42, s));
  (s.pc = "zY4pJvITYSGZgc6U");
  (s.$previous = true);
  } else {
  (s.pc = "xhm7kp2wI5BogRSC");
  null;
  }
  } else {
  (s.pc = "dmj2hNl52hRFjZba");
  (s.$previous = false);
  }
  return a_nEh3E4Ti5dUlvlfY$23;
}
cs.registerStep(a_nEh3E4Ti5dUlvlfY$24, 'a_nEh3E4Ti5dUlvlfY$24');

function a_nEh3E4Ti5dUlvlfY$23(s) {
  lib.Box.pop_box(s);
  (s.pc = "xztuI8G7NaJsvOcT");
  var t_lmbProxy_43 = s.libs.mkLambdaProxy;
  (s.$on_tapped2 = function(la0, la1) { return a_a_nEh3E4Ti5dUlvlfY$27(t_lmbProxy_43(la0), la1) });
  (s.pc = "x6TXQIhtlzdHU853");
  var t_libcall_44 = s.libs["fgn27ltq44wmhwdo"]["button"](s);
  return s.rt.enter(t_libcall_44.invoke(t_libcall_44, a_nEh3E4Ti5dUlvlfY$28, "return", s.$on_tapped2));
}
cs.registerStep(a_nEh3E4Ti5dUlvlfY$23, 'a_nEh3E4Ti5dUlvlfY$23');

function a_nEh3E4Ti5dUlvlfY$28(s) {
  lib.Box.pop_box(s);
  s.rt.leave_render();
  return a_nEh3E4Ti5dUlvlfY$4;
}
cs.registerStep(a_nEh3E4Ti5dUlvlfY$28, 'a_nEh3E4Ti5dUlvlfY$28');

/* ACTION: a_nEh3E4Ti5dUlvlfY::lambda::8 */
function a_a_nEh3E4Ti5dUlvlfY$8(previous, returnAddr, $_, $action) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_nEh3E4Ti5dUlvlfY$8$0;
  s.name = "detect";
  s.$_ = $_;
  s.$action = $action;
  s.$text = undefined;
  return s;
}
cs.registerLambda("a_nEh3E4Ti5dUlvlfY\u003a\u003alambda\u003a\u003a8", "a_nEh3E4Ti5dUlvlfY$8", a_a_nEh3E4Ti5dUlvlfY$8, true);

function a_a_nEh3E4Ti5dUlvlfY$8$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "TZoaLgSsRpxtTp59");
  if (s.$_) {
  var t_recOp_1 = s.$_[("$button status")];
  }
  var t_call_2 = (ok1(s, t_recOp_1) && lib.Boolean_.equals(t_recOp_1, false, s));
  ok1(s, t_call_2);
  if (t_call_2) {
  (s.pc = "R4n2KTl4D4ppwO7E");
  if (s.$_) {
  s.$_.perform_set("$button status", true, s);
  }
  (s.pc = "MUUz2YcIup9YNZE3");
  var t_lmbv_3 = s.$_;
  var t_lmbProxy_4 = s.libs.mkLambdaProxy;
  (s.$action = function(la0, la1, la2) { return a_a_a_nEh3E4Ti5dUlvlfY$8$4(t_lmbProxy_4(la0), la1, la2, t_lmbv_3) });
  (s.pc = "lA1BbjoAGNL4LlLu");
  var t_libcall_5 = s.libs["qhQduCeJ2pUP9F58"]["subscribe"](s);
  return s.rt.enter(t_libcall_5.invoke(t_libcall_5, a_a_nEh3E4Ti5dUlvlfY$8$5, "\u007d\u007b", s.$action));
  } else {
  (s.pc = "W628evl3ljSITMg6");
  if (s.$_) {
  s.$_.perform_set("$button status", false, s);
  }
  (s.pc = "pwPGsenYKUjaRbft");
  var t_libcall_8 = s.libs["qhQduCeJ2pUP9F58"]["write"](s);
  return s.rt.enter(t_libcall_8.invoke(t_libcall_8, a_a_nEh3E4Ti5dUlvlfY$8$8, "\u007b1\u003b112\u003b-1\u007d"));
  }
  return a_a_nEh3E4Ti5dUlvlfY$8$2;
}
cs.registerStep(a_a_nEh3E4Ti5dUlvlfY$8$0, 'a_a_nEh3E4Ti5dUlvlfY$8$0');

function a_a_nEh3E4Ti5dUlvlfY$8$5(s) {
  (s.pc = "qBschTvu647zP83a");
  var t_libcall_6 = s.libs["qhQduCeJ2pUP9F58"]["write"](s);
  return s.rt.enter(t_libcall_6.invoke(t_libcall_6, a_a_nEh3E4Ti5dUlvlfY$8$6, "\u007b1\u003b112\u003b100\u007d"));
}
cs.registerStep(a_a_nEh3E4Ti5dUlvlfY$8$5, 'a_a_nEh3E4Ti5dUlvlfY$8$5');

function a_a_nEh3E4Ti5dUlvlfY$8$8(s) {
  var t_actRes_9 = s.rt.returnedFrom.result;
  t_actRes_9;
  return a_a_nEh3E4Ti5dUlvlfY$8$2;
}
cs.registerStep(a_a_nEh3E4Ti5dUlvlfY$8$8, 'a_a_nEh3E4Ti5dUlvlfY$8$8');

function a_a_nEh3E4Ti5dUlvlfY$8$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_nEh3E4Ti5dUlvlfY$8$2, 'a_a_nEh3E4Ti5dUlvlfY$8$2');

function a_a_nEh3E4Ti5dUlvlfY$8$6(s) {
  var t_actRes_7 = s.rt.returnedFrom.result;
  t_actRes_7;
  return a_a_nEh3E4Ti5dUlvlfY$8$2;
}
cs.registerStep(a_a_nEh3E4Ti5dUlvlfY$8$6, 'a_a_nEh3E4Ti5dUlvlfY$8$6');

/* ACTION: a_nEh3E4Ti5dUlvlfY::lambda::27 */
function a_a_nEh3E4Ti5dUlvlfY$27(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_nEh3E4Ti5dUlvlfY$27$0;
  s.name = "detect";
  return s;
}
cs.registerLambda("a_nEh3E4Ti5dUlvlfY\u003a\u003alambda\u003a\u003a27", "a_nEh3E4Ti5dUlvlfY$27", a_a_nEh3E4Ti5dUlvlfY$27, true);

function a_a_nEh3E4Ti5dUlvlfY$27$0(s) {
  (s.pc = "IODhXMr79t4z2bFG");
  var t_libcall_0 = s.libs["qhQduCeJ2pUP9F58"]["write"](s);
  return s.rt.enter(t_libcall_0.invoke(t_libcall_0, a_a_nEh3E4Ti5dUlvlfY$27$1, "\u007b1\u003b112\u003b-1\u007d"));
}
cs.registerStep(a_a_nEh3E4Ti5dUlvlfY$27$0, 'a_a_nEh3E4Ti5dUlvlfY$27$0');

function a_a_nEh3E4Ti5dUlvlfY$27$1(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  t_actRes_1;
  (s.pc = "Qxp90sI2ahS69AWT");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "title page");
  return s.rt.leave();
}
cs.registerStep(a_a_nEh3E4Ti5dUlvlfY$27$1, 'a_a_nEh3E4Ti5dUlvlfY$27$1');

/* ACTION: a_a_nEh3E4Ti5dUlvlfY$8::lambda::4 */
function a_a_a_nEh3E4Ti5dUlvlfY$8$4(previous, returnAddr, $text, $_) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_nEh3E4Ti5dUlvlfY$8$4$0;
  s.name = "a_nEh3E4Ti5dUlvlfY\u003a\u003alambda\u003a\u003a8";
  s.$_ = $_;
  s.$text = $text;
  return s;
}
cs.registerLambda("a_a_nEh3E4Ti5dUlvlfY$8\u003a\u003alambda\u003a\u003a4", "a_a_nEh3E4Ti5dUlvlfY$8$4", a_a_a_nEh3E4Ti5dUlvlfY$8$4, true);

function a_a_a_nEh3E4Ti5dUlvlfY$8$4$0(s) {
  (s.pc = "JSGvUht4FEKGAtYd");
  if (s.$_) {
  s.$_.perform_set("$text to display", s.$text, s);
  }
  return s.rt.leave();
}
cs.registerStep(a_a_a_nEh3E4Ti5dUlvlfY$8$4$0, 'a_a_a_nEh3E4Ti5dUlvlfY$8$4$0');


//Ent_xpO6fzyjaha74O2R
function Ent_xpO6fzyjaha74O2R(p) {
  this.parent = p;
}
Ent_xpO6fzyjaha74O2R.prototype = new lib.ObjectEntry();
Ent_xpO6fzyjaha74O2R.prototype.keys = [];
Ent_xpO6fzyjaha74O2R.prototype.values = ["$button status", "$text to display"];
Ent_xpO6fzyjaha74O2R.prototype.fields = ["$button status", "$text to display"];
Ent_xpO6fzyjaha74O2R.prototype["$button status_realname"] = "button status";
Ent_xpO6fzyjaha74O2R.prototype["$text to display_realname"] = "text to display";
Ent_xpO6fzyjaha74O2R.prototype["$button status"] = false;
Ent_xpO6fzyjaha74O2R.prototype["$text to display"] = "";
//Tbl_xpO6fzyjaha74O2R
function Tbl_xpO6fzyjaha74O2R(l) {
  this.libName = l;
  this.initParent();
}
Tbl_xpO6fzyjaha74O2R.prototype = new lib.ObjectSingleton();
Tbl_xpO6fzyjaha74O2R.prototype.entryCtor = Ent_xpO6fzyjaha74O2R;
cs.objectSingletons["detect page data"] = function(d) { return d.$xpO6fzyjaha74O2R };
Tbl_xpO6fzyjaha74O2R.prototype.selfCtor = Tbl_xpO6fzyjaha74O2R;
Tbl_xpO6fzyjaha74O2R.prototype.stableName = "xpO6fzyjaha74O2R";
Tbl_xpO6fzyjaha74O2R.prototype.entryKindName = "detect page data";

// jsonimport
Ent_xpO6fzyjaha74O2R.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
  this.perform_set("$button status", ctx.importBoolean(json, "button status"), s);
  this.perform_set("$text to display", ctx.importString(json, "text to display"), s);
}
cs.registerGlobal("$xpO6fzyjaha74O2R");
cs.registerGlobal("$Nh4zi3XEYf4XHtYD");
/* ACTION: big title */
function a_Anh47Dm2O46bfmAy(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_Anh47Dm2O46bfmAy$0;
  s.name = "big title";
  return s;
}
cs.registerAction("big title", "Anh47Dm2O46bfmAy", a_Anh47Dm2O46bfmAy, true);

function a_Anh47Dm2O46bfmAy$0(s) {
  (s.pc = "XZ1sFukHwvC3anjq");
  lib.Box.push_box(s);
  (s.pc = "ckU5h4mQNwOXy7qR");
  var t_call_0 = lib.Colors.foreground(s);
  (ok1(s, t_call_0) && lib.Box.set_border(t_call_0, 0.1, s));
  (s.pc = "vlGBV14e2ErroakO");
  var t_libcall_1 = s.libs["HBblsCdmtisDn1bE"]["title 1"](s);
  return s.rt.enter(t_libcall_1.invoke(t_libcall_1, a_Anh47Dm2O46bfmAy$1));
}
cs.registerStep(a_Anh47Dm2O46bfmAy$0, 'a_Anh47Dm2O46bfmAy$0');

function a_Anh47Dm2O46bfmAy$1(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  t_actRes_2;
  (s.pc = "x4jrHQT1mbLIqKFR");
  lib.Box.set_height(3, s);
  (s.pc = "iv09HSGDT6X2noBn");
  var t_libcall_3 = s.libs["xW4DV1D84fqL86zF"]["stretch and center"](s);
  return s.rt.enter(t_libcall_3.invoke(t_libcall_3, a_Anh47Dm2O46bfmAy$2));
}
cs.registerStep(a_Anh47Dm2O46bfmAy$1, 'a_Anh47Dm2O46bfmAy$1');

function a_Anh47Dm2O46bfmAy$2(s) {
  (s.pc = "RsPooqhpgl5PwGGK");
  lib.String_.post_to_wall("Slouch App\u000a", s);
  lib.Box.pop_box(s);
  return s.rt.leave();
}
cs.registerStep(a_Anh47Dm2O46bfmAy$2, 'a_Anh47Dm2O46bfmAy$2');

(function () {
  var lib, bnd, resolve;
  var bnds = cs.libBindings = {};
  lib = libs["this"] = {};
  bnd = bnds["this"] = libs;
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "this");
    lib["main"] = cs.mkLibProxyFactory(bnd, "this", "main");
    lib["detect"] = cs.mkLibProxyFactory(bnd, "this", "detect");
  lib = libs["HBblsCdmtisDn1bE"] = {};
  bnd = bnds["HBblsCdmtisDn1bE"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "HBblsCdmtisDn1bE");
    lib["title 1"] = cs.mkLibProxyFactory(bnd, "HBblsCdmtisDn1bE", "title 1");
    lib["subtle"] = cs.mkLibProxyFactory(bnd, "HBblsCdmtisDn1bE", "subtle");
    lib["normal"] = cs.mkLibProxyFactory(bnd, "HBblsCdmtisDn1bE", "normal");
  lib = libs["Xz9tL2KDduN9qXKm"] = {};
  bnd = bnds["Xz9tL2KDduN9qXKm"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "Xz9tL2KDduN9qXKm");
  lib = libs["xW4DV1D84fqL86zF"] = {};
  bnd = bnds["xW4DV1D84fqL86zF"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "xW4DV1D84fqL86zF");
    lib["stretch and center"] = cs.mkLibProxyFactory(bnd, "xW4DV1D84fqL86zF", "stretch and center");
  lib = libs["fgn27ltq44wmhwdo"] = {};
  bnd = bnds["fgn27ltq44wmhwdo"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "fgn27ltq44wmhwdo");
    lib["button"] = cs.mkLibProxyFactory(bnd, "fgn27ltq44wmhwdo", "button");
    lib["checkbox"] = cs.mkLibProxyFactory(bnd, "fgn27ltq44wmhwdo", "checkbox");
    lib["input number"] = cs.mkLibProxyFactory(bnd, "fgn27ltq44wmhwdo", "input number");
  lib = libs["qhQduCeJ2pUP9F58"] = {};
  bnd = bnds["qhQduCeJ2pUP9F58"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "qhQduCeJ2pUP9F58");
    lib["connect"] = cs.mkLibProxyFactory(bnd, "qhQduCeJ2pUP9F58", "connect");
    lib["write"] = cs.mkLibProxyFactory(bnd, "qhQduCeJ2pUP9F58", "write");
    lib["subscribe"] = cs.mkLibProxyFactory(bnd, "qhQduCeJ2pUP9F58", "subscribe");
    lib["list"] = cs.mkLibProxyFactory(bnd, "qhQduCeJ2pUP9F58", "list");
    lib["is connected"] = cs.mkLibProxyFactory(bnd, "qhQduCeJ2pUP9F58", "is connected");
    lib["is enabled"] = cs.mkLibProxyFactory(bnd, "qhQduCeJ2pUP9F58", "is enabled");
  bnd = bnds["HBblsCdmtisDn1bE"];
  bnd["this$lib"] = "HBblsCdmtisDn1bE";
  bnd = bnds["Xz9tL2KDduN9qXKm"];
  bnd["this$lib"] = "Xz9tL2KDduN9qXKm";
  bnd = bnds["xW4DV1D84fqL86zF"];
  bnd["this$lib"] = "xW4DV1D84fqL86zF";
  bnd = bnds["fgn27ltq44wmhwdo"];
  bnd["this$lib"] = "fgn27ltq44wmhwdo";
  bnd = bnds["qhQduCeJ2pUP9F58"];
  bnd["this$lib"] = "qhQduCeJ2pUP9F58";
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
  if(!d.hasOwnProperty("$zaAJcuxErIoMhHvC") || !d["$zaAJcuxErIoMhHvC"]) d.$zaAJcuxErIoMhHvC = new Tbl_zaAJcuxErIoMhHvC(d.libName);
  if(!d.hasOwnProperty("$xtwVQmvFVA4iHXY5") || !d["$xtwVQmvFVA4iHXY5"]) d.$xtwVQmvFVA4iHXY5 = new Tbl_xtwVQmvFVA4iHXY5(d.libName);
  if(!d.hasOwnProperty("$zYQpTie1JMoia6F2") || !d["$zYQpTie1JMoia6F2"]) d.$zYQpTie1JMoia6F2 = new Tbl_zYQpTie1JMoia6F2(d.libName);
  if(!d.hasOwnProperty("$JNdvdEjRj3dVBrK6") || !d["$JNdvdEjRj3dVBrK6"]) d.$JNdvdEjRj3dVBrK6 = new Tbl_JNdvdEjRj3dVBrK6(d.libName);
  if(!d.hasOwnProperty("$BVGhpbmcgdGFibGUa") || !d["$BVGhpbmcgdGFibGUa"]) d.$BVGhpbmcgdGFibGUa = new Tbl_BVGhpbmcgdGFibGUa(d.libName);
  if(!d.hasOwnProperty("$BVGhpbmcyIHRhYmxl") || !d["$BVGhpbmcyIHRhYmxl"]) d.$BVGhpbmcyIHRhYmxl = new Tbl_BVGhpbmcyIHRhYmxl(d.libName);
  if(!d.hasOwnProperty("$BICBuYW1lICAa") || !d["$BICBuYW1lICAa"]) d.$BICBuYW1lICAa = new Tbl_BICBuYW1lICAa(d.libName);
  if(!d.hasOwnProperty("$xHdizJ8cAYKEGmEh")) d.$xHdizJ8cAYKEGmEh = "";
  if(!d.hasOwnProperty("$xpO6fzyjaha74O2R") || !d["$xpO6fzyjaha74O2R"]) d.$xpO6fzyjaha74O2R = new Tbl_xpO6fzyjaha74O2R(d.libName);
  if(!d.hasOwnProperty("$kR4n2SgnCqZKNyic")) d.$kR4n2SgnCqZKNyic = 0;
  if(!d.hasOwnProperty("$eRnXXsodK421Weem")) d.$eRnXXsodK421Weem = 0;
  if(!d.hasOwnProperty("$MEl2eFcIp3EZlI6W")) d.$MEl2eFcIp3EZlI6W = 0;
  if(!d.hasOwnProperty("$Nh4zi3XEYf4XHtYD")) d.$Nh4zi3XEYf4XHtYD = 0;

  d.$$localpersistentvars = new lib.PersistentVars(rt);
  d.$$localpersistentvars.localsession = true;
  d.$$localpersistentvars.libName = d.libName;
  d.$$localpersistentvars.names = ["$Nh4zi3XEYf4XHtYD"]; 
  d.$$localpersistentvars.cloudtypes = ["Nh4zi3XEYf4XHtYD\u002cdouble\u005bglobal\u005b\u005d\u005d"]; 
};

cs._initGlobals2 = function(d) {
d.$zaAJcuxErIoMhHvC.name = "title page page data";d.$xtwVQmvFVA4iHXY5.name = "slouching page page data";d.$zYQpTie1JMoia6F2.name = "volume page data";d.$JNdvdEjRj3dVBrK6.name = "straight page page data";d.$BVGhpbmcgdGFibGUa.name = "Calibration";d.$BVGhpbmcgdGFibGUa.linked_cloudtables = [];
d.$BVGhpbmcyIHRhYmxl.name = "Settings";d.$BVGhpbmcyIHRhYmxl.linked_cloudtables = [];
d.$BICBuYW1lICAa.name = "connect page data";d.$xpO6fzyjaha74O2R.name = "detect page data";};

cs._resetGlobals = function(d) {
  d.$zaAJcuxErIoMhHvC = undefined;
  d.$xtwVQmvFVA4iHXY5 = undefined;
  d.$zYQpTie1JMoia6F2 = undefined;
  d.$JNdvdEjRj3dVBrK6 = undefined;
  d.$BVGhpbmcgdGFibGUa = undefined;
  d.$BVGhpbmcyIHRhYmxl = undefined;
  d.$wOARSK4PZpC75Eqh = undefined;
  d.$lpvzsF7aqnl2s2wh = undefined;
  d.$xy8Omp3E9EeBppJL = undefined;
  d.$BICBuYW1lICAa = undefined;
  d.$xHdizJ8cAYKEGmEh = "";
  d.$xpO6fzyjaha74O2R = undefined;
  d.$kR4n2SgnCqZKNyic = 0;
  d.$eRnXXsodK421Weem = 0;
  d.$MEl2eFcIp3EZlI6W = 0;
  d.$$localpersistentvars = undefined;
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "main";
cs.authorId = "zqwwb";
cs.scriptGuid = "9953da58-04ba-4995-d98f-10ccc3dedc56";
cs.hasLocalData = 1;
}),

// **************************************************************
"HBblsCdmtisDn1bE": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "theme";
cs.scriptColor = "\u00239955bb";
cs.objectSingletons = {};
/* ACTION: title 1 */
function a_title1(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_title1$0;
  s.name = "title 1";
  s.$m = undefined;
  s.$font_size = undefined;
  return s;
}
cs.registerAction("title 1", "title1", a_title1, true);

function ok1(s, a0) {
  return (a0 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function a_title1$0(s) {
  (s.pc = "1.61");
  (s.$m = 0.5);
  (s.pc = "1.64");
  (s.$font_size = 2);
  (s.pc = "1.67");
  var t_call_0 = lib.Colors.foreground(s);
  return s.rt.enter(a_paragraph(s, a_title1$1, s.$m, s.$font_size, t_call_0));
}
cs.registerStep(a_title1$0, 'a_title1$0');

function a_title1$1(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  t_actRes_1;
  return s.rt.leave();
}
cs.registerStep(a_title1$1, 'a_title1$1');

/* ACTION: paragraph */
function a_paragraph(previous, returnAddr, $margins, $font_size, $foreground) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_paragraph$0;
  s.name = "paragraph";
  s.$margins = $margins;
  s.$font_size = $font_size;
  s.$foreground = $foreground;
  return s;
}
cs.registerAction("paragraph", "paragraph", a_paragraph, true);

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

function a_paragraph$0(s) {
  (s.pc = "1.b0");
  (ok4(s, s.$margins, s.$margins, s.$margins, s.$margins) && lib.Box.set_margins(s.$margins, s.$margins, s.$margins, s.$margins, s));
  (s.pc = "1.b3");
  (ok1(s, s.$font_size) && lib.Box.set_font_size(s.$font_size, s));
  (s.pc = "1.b6");
  lib.Box.set_text_wrapping(true, 15, s);
  (s.pc = "1.b9");
  (ok1(s, s.$foreground) && lib.Box.set_foreground(s.$foreground, s));
  var t_elseIf_0 = true;
  (s.pc = "1.bc");
  var t_val_1 = s.d.$$localpersistentvars.perform_get("$rightaligned", s);
  ok1(s, t_val_1);
  if (t_val_1) {
  (s.pc = "1.bg0");
  lib.Box.set_horizontal_alignment(0, 1, s);
  } else {
  (s.pc = "1.bh0");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_paragraph$0, 'a_paragraph$0');

/* ACTION: subtle */
function a_subtle(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_subtle$0;
  s.name = "subtle";
  s.$m = undefined;
  s.$font_size = undefined;
  return s;
}
cs.registerAction("subtle", "subtle", a_subtle, true);

function a_subtle$0(s) {
  (s.pc = "1.q1");
  (s.$m = 0.5);
  (s.pc = "1.q4");
  (s.$font_size = 1);
  (s.pc = "1.q7");
  var t_call_0 = lib.Colors.subtle(s);
  return s.rt.enter(a_paragraph(s, a_subtle$1, s.$m, s.$font_size, t_call_0));
}
cs.registerStep(a_subtle$0, 'a_subtle$0');

function a_subtle$1(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  t_actRes_1;
  return s.rt.leave();
}
cs.registerStep(a_subtle$1, 'a_subtle$1');

/* ACTION: normal */
function a_normal(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_normal$0;
  s.name = "normal";
  s.$m = undefined;
  s.$font_size = undefined;
  return s;
}
cs.registerAction("normal", "normal", a_normal, true);

function a_normal$0(s) {
  (s.pc = "1.v1");
  (s.$m = 0.5);
  (s.pc = "1.v4");
  (s.$font_size = 1);
  (s.pc = "1.v7");
  var t_call_0 = lib.Colors.foreground(s);
  return s.rt.enter(a_paragraph(s, a_normal$1, s.$m, s.$font_size, t_call_0));
}
cs.registerStep(a_normal$0, 'a_normal$0');

function a_normal$1(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  t_actRes_1;
  return s.rt.leave();
}
cs.registerStep(a_normal$1, 'a_normal$1');

cs.registerGlobal("$rightaligned");
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
  if(!d.hasOwnProperty("$rightaligned")) d.$rightaligned = false;

  d.$$localpersistentvars = new lib.PersistentVars(rt);
  d.$$localpersistentvars.localsession = true;
  d.$$localpersistentvars.libName = d.libName;
  d.$$localpersistentvars.names = ["$rightaligned"]; 
  d.$$localpersistentvars.cloudtypes = ["rightaligned\u002cboolean\u005bglobal\u005b\u005d\u005d"]; 
};

cs._initGlobals2 = function(d) {
};

cs._resetGlobals = function(d) {
  d.$$localpersistentvars = undefined;
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "title 1";
cs.authorId = "zqwwb";
cs.scriptGuid = "9953da58-04ba-4995-d98f-10ccc3dedc56";
cs.hasLocalData = 1;
}),

// **************************************************************
"Xz9tL2KDduN9qXKm": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "widgets";
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

cs.mainActionName = "picture";
cs.authorId = "zqwwb";
cs.scriptGuid = "9953da58-04ba-4995-d98f-10ccc3dedc56";
cs.hasLocalData = 1;
}),

// **************************************************************
"xW4DV1D84fqL86zF": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "layout";
cs.scriptColor = "\u00239955bb";
cs.objectSingletons = {};
/* ACTION: stretch and center */
function a_fADj2RlGhi2LmT1rCUpyRpxM(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_fADj2RlGhi2LmT1rCUpyRpxM$0;
  s.name = "stretch and center";
  return s;
}
cs.registerAction("stretch and center", "fADj2RlGhi2LmT1rCUpyRpxM", a_fADj2RlGhi2LmT1rCUpyRpxM, false);

function ok1(s, a0) {
  return (a0 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok2(s, a0, a1) {
  return (a0 == undefined || a1 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function a_fADj2RlGhi2LmT1rCUpyRpxM$0(s) {
  (s.pc = "3.b1");
  lib.Box.set_horizontal_stretch(1, s);
  (s.pc = "3.b4");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "3.b7");
  lib.Box.set_vertical_stretch(1, s);
  (s.pc = "3.ba");
  lib.Box.set_vertical_align("center", s);
  return s.rt.leave();
}
cs.registerStep(a_fADj2RlGhi2LmT1rCUpyRpxM$0, 'a_fADj2RlGhi2LmT1rCUpyRpxM$0');

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

cs.mainActionName = "stretch and center";
cs.authorId = "zqwwb";
cs.scriptGuid = "9953da58-04ba-4995-d98f-10ccc3dedc56";
cs.hasLocalData = 1;
}),

// **************************************************************
"fgn27ltq44wmhwdo": (function (cs) {
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

/* ACTION: checkbox */
function a_checkbox(previous, returnAddr, $text, $checked) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_checkbox$0;
  s.name = "checkbox";
  s.$text = $text;
  s.$checked = $checked;
  s.$handler = undefined;
  return s;
}
cs.registerAction("checkbox", "checkbox", a_checkbox, false);

function a_checkbox$0(s) {
  (s.pc = "UoY0M75Nvw5HC4z0");
  lib.Box.push_box(s);
  (s.pc = "xxuX34412T2wy2JH");
  lib.Box.use_horizontal_layout(s);
  (s.pc = "W9sbimcI2hu89mZW");
  lib.Box.set_horizontal_align("left", s);
  (s.pc = "NJ5RvCBtJTVuhxnC");
  lib.Box.set_horizontal_stretch(1, s);
  (s.pc = "YDqkFsXsBQ1P2gab");
  lib.Box.set_margins(0, 0.5, 0.5, 0.5, s);
  (s.pc = "x0esfrqmUhgMoq5J");
  lib.Box.push_box(s);
  (s.pc = "TUeyyCVT9kSjkRck");
  lib.Box.use_overlay_layout(s);
  (s.pc = "oUlb2Pz62JEqMOO2");
  lib.Box.push_box(s);
  (s.pc = "enlqc8RC7GumM4AS");
  lib.Box.set_margins(0, 0, 0, 0.2, s);
  (s.pc = "FQsLjirTzTFYq98S");
  lib.Box.set_font_size(2, s);
  var t_elseIf_0 = true;
  (s.pc = "M1UL7gPi16Yr6jMW");
  var t_call_1 = (ok1(s, s.$checked) && s.$checked._get(s));
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.pc = "xHL19Tt7RLJEtSUO");
  var t_call_2 = lib.Colors.accent(s);
  (ok1(s, t_call_2) && lib.Box.set_foreground(t_call_2, s));
  } else {
  (s.pc = "iCJYrucmP1In4Z5B");
  var t_call_3 = lib.Colors.transparent(s);
  (ok1(s, t_call_3) && lib.Box.set_foreground(t_call_3, s));
  }
  (s.pc = "QIItRGSCbXYUMs99");
  lib.String_.post_to_wall("\u2713", s);
  lib.Box.pop_box(s);
  (s.pc = "xyHv2ocxtMyF4hKQ");
  lib.Box.push_box(s);
  (s.pc = "xg5oEvPL1XIyhcCs");
  lib.Box.set_width(1.5, s);
  (s.pc = "w5iCnvFn6AY2F2nc");
  lib.Box.set_height(1.5, s);
  (s.pc = "rQhcUYKpXBHnHgIY");
  var t_call_4 = lib.Colors.foreground(s);
  (ok1(s, t_call_4) && lib.Box.set_border(t_call_4, 0.1, s));
  (s.pc = "Tf1ACluswhZ92NeO");
  lib.String_.post_to_wall("", s);
  (s.pc = "OHLhaRAMgSmPXJ8f");
  var t_lmbv_5 = s.$checked;
  var t_lmbProxy_6 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_checkbox$2(t_lmbProxy_6(la0), la1, t_lmbv_5) });
  (s.pc = "TNQpvE84RafK2Ltq");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  (s.pc = "WgHL5wANnTOxjU52");
  lib.Box.push_box(s);
  (s.pc = "KhPy4XoFkMHMWmFt");
  lib.Box.set_margins(0, 0, 0, 0.3, s);
  (s.pc = "BjD0JSTq6ttAus60");
  (ok1(s, s.$text) && lib.String_.post_to_wall(s.$text, s));
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  return s.rt.leave();
}
cs.registerStep(a_checkbox$0, 'a_checkbox$0');

/* ACTION: a_checkbox::lambda::2 */
function a_a_checkbox$2(previous, returnAddr, $checked) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_checkbox$2$0;
  s.name = "checkbox";
  s.$checked = $checked;
  return s;
}
cs.registerLambda("a_checkbox\u003a\u003alambda\u003a\u003a2", "a_checkbox$2", a_a_checkbox$2, true);

function a_a_checkbox$2$0(s) {
  (s.pc = "btd149gNJDgR4jtP");
  var t_call_0 = (ok1(s, s.$checked) && s.$checked._get(s));
  var t_call_1 = (ok1(s, t_call_0) && lib.Boolean_.not(t_call_0, s));
  (ok2(s, s.$checked, t_call_1) && s.$checked._set(t_call_1, s));
  return s.rt.leave();
}
cs.registerStep(a_a_checkbox$2$0, 'a_a_checkbox$2$0');

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
  (s.pc = "tfV4J2kpXILh4rHx");
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
  (s.pc = "xnRM5FJ3o4i0l2eB");
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

cs.authorId = "zqwwb";
cs.scriptGuid = "9953da58-04ba-4995-d98f-10ccc3dedc56";
cs.hasLocalData = 1;
}),

// **************************************************************
"qhQduCeJ2pUP9F58": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "cordova bluetoothserial";
cs.scriptColor = "\u0023e3256b";
cs.objectSingletons = {};
/* ACTION: init */
function a_VDkfW4zJy8vXPjEH(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_VDkfW4zJy8vXPjEH$0;
  s.name = "init";
  return s;
}
cs.registerAction("init", "VDkfW4zJy8vXPjEH", a_VDkfW4zJy8vXPjEH, false);

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

function a_VDkfW4zJy8vXPjEH$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "z48qahJ0Vmwzgs6W");
  true;
  if ((/* logger */ s.d.$xDUuDYIkRer7brW1 == undefined)) {
  (s.pc = "gmLWdzakL5jCE6II");
  lib.App.import_("cordova", "com.megster.cordova.bluetoothserial", "\u002a", s);
  (s.pc = "x0gqpzMafE4NX1uN");
  var t_call_1 = lib.App.create_logger("btserial", s);
  (/* logger */ s.d.$xDUuDYIkRer7brW1 = t_call_1);
  s.rt.logDataWrite();
  } else {
  (s.pc = "SPoE1GxIrX9cvax7");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_VDkfW4zJy8vXPjEH$0, 'a_VDkfW4zJy8vXPjEH$0');

/* ACTION: connect */
function a_eHDGpMQvRNAEJWp1(previous, returnAddr, $mac_address_or_uuid, $disconnect) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_eHDGpMQvRNAEJWp1$0;
  s.name = "connect";
  s.$mac_address_or_uuid = $mac_address_or_uuid;
  s.$disconnect = $disconnect;
  s.$logger = undefined;
  return s;
}
cs.registerAction("connect", "eHDGpMQvRNAEJWp1", a_eHDGpMQvRNAEJWp1, true);

function a_eHDGpMQvRNAEJWp1$0(s) {
  (s.pc = "U2yTgHR1s6D4aA6X");
  return s.rt.enter(a_VDkfW4zJy8vXPjEH(s, a_eHDGpMQvRNAEJWp1$1));
}
cs.registerStep(a_eHDGpMQvRNAEJWp1$0, 'a_eHDGpMQvRNAEJWp1$0');

function a_eHDGpMQvRNAEJWp1$1(s) {
  (s.pc = "Jpb41SLdBVj7BRR0");
  (s.$logger = /* logger */ s.d.$xDUuDYIkRer7brW1);
  (s.pc = "I9MVHfrcfB2ll7LZ");
  (ok1(s, s.$logger) && s.$logger.debug("connecting...", s));
  (s.pc = "jleBjp9DgiZoul36");
  var t_resumeCtx_0 = s.rt.getAwaitResumeCtx(a_eHDGpMQvRNAEJWp1$2);
  (function(_resumeCtx){
   var s = _resumeCtx.stackframe;
   function resume() { _saveResults(); _resumeCtx.resume() }
   s.localResume = resume;
  function _saveResults() {
  }
  var mac_address_or_uuid = s.$mac_address_or_uuid;
  var disconnect = s.$disconnect;
  var logger = s.$logger;
  var rt = s.rt;
  function _userCode() {

bluetoothSerial.connect(mac_address_or_uuid, 
lib.protect(s, function() { resume() }), 
lib.protect(s, function(err) { 
  logger.error("disconnected: " + err) 
  lib.queueAction(s, disconnect, [])
})
);

  }
  s.rt.runInlineJavascript(_userCode);
})(t_resumeCtx_0);
  return a_eHDGpMQvRNAEJWp1$2;
}
cs.registerStep(a_eHDGpMQvRNAEJWp1$1, 'a_eHDGpMQvRNAEJWp1$1');

function a_eHDGpMQvRNAEJWp1$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_eHDGpMQvRNAEJWp1$2, 'a_eHDGpMQvRNAEJWp1$2');

/* ACTION: write */
function a_xy7HQEYKAeSGtdoY(previous, returnAddr, $msg) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xy7HQEYKAeSGtdoY$0;
  s.name = "write";
  s.$msg = $msg;
  s.result = undefined;
  return s;
}
cs.registerAction("write", "xy7HQEYKAeSGtdoY", a_xy7HQEYKAeSGtdoY, true);

function a_xy7HQEYKAeSGtdoY$0(s) {
  if (s.previous.needsPicker) {
  s.rt.pickParameters(a_xy7HQEYKAeSGtdoY$4, lib.RTValue.mkPicker(lib.String_.picker(), "", "msg", "$msg"));
  return a_xy7HQEYKAeSGtdoY$4;
  }
  return a_xy7HQEYKAeSGtdoY$3;
}
cs.registerStep(a_xy7HQEYKAeSGtdoY$0, 'a_xy7HQEYKAeSGtdoY$0');

function a_xy7HQEYKAeSGtdoY$4(s) {
  return a_xy7HQEYKAeSGtdoY$3;
}
cs.registerStep(a_xy7HQEYKAeSGtdoY$4, 'a_xy7HQEYKAeSGtdoY$4');

function a_xy7HQEYKAeSGtdoY$3(s) {
  (s.pc = "xHmqQKKHkBDx74IF");
  return s.rt.enter(a_VDkfW4zJy8vXPjEH(s, a_xy7HQEYKAeSGtdoY$1));
}
cs.registerStep(a_xy7HQEYKAeSGtdoY$3, 'a_xy7HQEYKAeSGtdoY$3');

function a_xy7HQEYKAeSGtdoY$1(s) {
  (s.pc = "pxgq4M92vJ2ct0Cd");
  var t_resumeCtx_0 = s.rt.getAwaitResumeCtx(a_xy7HQEYKAeSGtdoY$2);
  (function(_resumeCtx){
   var s = _resumeCtx.stackframe;
   function resume() { _saveResults(); _resumeCtx.resume() }
   s.localResume = resume;
  function _saveResults() {
    s.result = success;
  }
  var msg = s.$msg;
  var success = s.result;
  var rt = s.rt;
  function _userCode() {

bluetoothSerial.write(msg, 
lib.protect(s, function() { 
  success = true
  resume() }), 
lib.protect(s, function(err) { 
  logger.error("write error: " + err);     
  success = false
  resume(); })
);

  }
  s.rt.runInlineJavascript(_userCode);
})(t_resumeCtx_0);
  return a_xy7HQEYKAeSGtdoY$2;
}
cs.registerStep(a_xy7HQEYKAeSGtdoY$1, 'a_xy7HQEYKAeSGtdoY$1');

function a_xy7HQEYKAeSGtdoY$2(s) {
  if (s.previous.needsPicker) {
  s.rt.displayResult("success", s.result)
  }
  return s.rt.leave();
}
cs.registerStep(a_xy7HQEYKAeSGtdoY$2, 'a_xy7HQEYKAeSGtdoY$2');

/* ACTION: subscribe */
function a_ySitjnF4rBu7qCpR(previous, returnAddr, $delimiter, $action) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_ySitjnF4rBu7qCpR$0;
  s.name = "subscribe";
  s.$delimiter = $delimiter;
  s.$action = $action;
  return s;
}
cs.registerAction("subscribe", "ySitjnF4rBu7qCpR", a_ySitjnF4rBu7qCpR, false);

function a_ySitjnF4rBu7qCpR$0(s) {
  (s.pc = "grvFme8J1aPbv3N2");
  return s.rt.enter(a_VDkfW4zJy8vXPjEH(s, a_ySitjnF4rBu7qCpR$1));
}
cs.registerStep(a_ySitjnF4rBu7qCpR$0, 'a_ySitjnF4rBu7qCpR$0');

function a_ySitjnF4rBu7qCpR$1(s) {
  (s.pc = "TSgu8kmAiABuViq6");
  (function(s){
  function _saveResults() {
  }
  var delimiter = s.$delimiter;
  var action = s.$action;
  var rt = s.rt;
  function _userCode() {

bluetoothSerial.subscribe(delimiter, 
function(txt) { 
  lib.queueAction(s, action, [txt]);
}, 
function(err) { 
  logger.error("subscribe error: " + err);     
}
);

  }
  s.rt.runInlineJavascript(_userCode);
  _saveResults();
})(s);
  return s.rt.leave();
}
cs.registerStep(a_ySitjnF4rBu7qCpR$1, 'a_ySitjnF4rBu7qCpR$1');


//Ent_Generated315
function Ent_Generated315(p) {
  this.parent = p;
}
Ent_Generated315.prototype = new lib.ObjectEntry();
Ent_Generated315.prototype.keys = [];
Ent_Generated315.prototype.values = ["$class", "$id", "$address", "$name", "$rssi", "$uuid"];
Ent_Generated315.prototype.fields = ["$class", "$id", "$address", "$name", "$rssi", "$uuid"];
Ent_Generated315.prototype["$class_realname"] = "class";
Ent_Generated315.prototype["$id_realname"] = "id";
Ent_Generated315.prototype["$address_realname"] = "address";
Ent_Generated315.prototype["$name_realname"] = "name";
Ent_Generated315.prototype["$rssi_realname"] = "rssi";
Ent_Generated315.prototype["$uuid_realname"] = "uuid";
Ent_Generated315.prototype["$class"] = 0;
Ent_Generated315.prototype["$id"] = "";
Ent_Generated315.prototype["$address"] = "";
Ent_Generated315.prototype["$name"] = "";
Ent_Generated315.prototype["$rssi"] = "";
Ent_Generated315.prototype["$uuid"] = "";
//Tbl_Generated315
function Tbl_Generated315(l) {
  this.libName = l;
  this.initParent();
}
Tbl_Generated315.prototype = new lib.ObjectSingleton();
Tbl_Generated315.prototype.entryCtor = Ent_Generated315;
cs.objectSingletons["BLE Device"] = function(d) { return d.$Generated315 };
Tbl_Generated315.prototype.selfCtor = Tbl_Generated315;
Tbl_Generated315.prototype.stableName = "Generated315";
Tbl_Generated315.prototype.entryKindName = "BLE Device";

// jsonimport
Ent_Generated315.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
  this.perform_set("$class", ctx.importNumber(json, "class"), s);
  this.perform_set("$id", ctx.importString(json, "id"), s);
  this.perform_set("$address", ctx.importString(json, "address"), s);
  this.perform_set("$name", ctx.importString(json, "name"), s);
  this.perform_set("$rssi", ctx.importString(json, "rssi"), s);
  this.perform_set("$uuid", ctx.importString(json, "uuid"), s);
}
cs.registerGlobal("$Generated315");
/* ACTION: list */
function a_yg8gO5EjvqoXGSy7(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_yg8gO5EjvqoXGSy7$0;
  s.name = "list";
  s.result = undefined;
  s.$logger = undefined;
  return s;
}
cs.registerAction("list", "yg8gO5EjvqoXGSy7", a_yg8gO5EjvqoXGSy7, true);

function a_yg8gO5EjvqoXGSy7$0(s) {
  (s.pc = "xqFHPcCEhlFTm0Qd");
  return s.rt.enter(a_VDkfW4zJy8vXPjEH(s, a_yg8gO5EjvqoXGSy7$1));
}
cs.registerStep(a_yg8gO5EjvqoXGSy7$0, 'a_yg8gO5EjvqoXGSy7$0');

function a_yg8gO5EjvqoXGSy7$1(s) {
  (s.pc = "xF44vjMTqQbEAz9D");
  (s.$logger = /* logger */ s.d.$xDUuDYIkRer7brW1);
  (s.pc = "na3RzdC4NUZJeGp1");
  var t_call_0 = (ok1(s, /* BLE Device */ s.d.$Generated315) && /* BLE Device */ s.d.$Generated315.create_collection(s));
  (s.result = t_call_0);
  (s.pc = "SiKB2qPGm6tWHmPQ");
  (ok1(s, s.$logger) && s.$logger.debug("listing devices...", s));
  (s.pc = "XZqXemNQYxI6M0j9");
  var t_resumeCtx_1 = s.rt.getAwaitResumeCtx(a_yg8gO5EjvqoXGSy7$2);
  (function(_resumeCtx){
   var s = _resumeCtx.stackframe;
   function resume() { _saveResults(); _resumeCtx.resume() }
   s.localResume = resume;
  function _saveResults() {
    s.result = devices;
  }
  var devices = s.result;
  var logger = s.$logger;
  var rt = s.rt;
  function _userCode() {

bluetoothSerial.list( 
lib.protect(s, function(ls) { 
  devices.from_json(lib.wrapJson(ls),s)
  resume(); }), 
lib.protect(s, function(err) { 
  logger.error("list error: " + err);     
  resume(); })
);

  }
  s.rt.runInlineJavascript(_userCode);
})(t_resumeCtx_1);
  return a_yg8gO5EjvqoXGSy7$2;
}
cs.registerStep(a_yg8gO5EjvqoXGSy7$1, 'a_yg8gO5EjvqoXGSy7$1');

function a_yg8gO5EjvqoXGSy7$2(s) {
  if (s.previous.needsPicker) {
  s.rt.displayResult("devices", s.result)
  }
  return s.rt.leave();
}
cs.registerStep(a_yg8gO5EjvqoXGSy7$2, 'a_yg8gO5EjvqoXGSy7$2');

/* ACTION: is connected */
function a_oRqqbYVpGBvzCCgn(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_oRqqbYVpGBvzCCgn$0;
  s.name = "is connected";
  s.result = undefined;
  return s;
}
cs.registerAction("is connected", "oRqqbYVpGBvzCCgn", a_oRqqbYVpGBvzCCgn, true);

function a_oRqqbYVpGBvzCCgn$0(s) {
  (s.pc = "i63M7A19OL74mC2m");
  return s.rt.enter(a_VDkfW4zJy8vXPjEH(s, a_oRqqbYVpGBvzCCgn$1));
}
cs.registerStep(a_oRqqbYVpGBvzCCgn$0, 'a_oRqqbYVpGBvzCCgn$0');

function a_oRqqbYVpGBvzCCgn$1(s) {
  (s.pc = "qPenNyfTQTTYt6Ni");
  var t_resumeCtx_0 = s.rt.getAwaitResumeCtx(a_oRqqbYVpGBvzCCgn$2);
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

bluetoothSerial.isConnected( 
lib.protect(s, function() { 
  res = true
  resume() }), 
lib.protect(s, function(err) { 
  res = false
  resume(); })
);

  }
  s.rt.runInlineJavascript(_userCode);
})(t_resumeCtx_0);
  return a_oRqqbYVpGBvzCCgn$2;
}
cs.registerStep(a_oRqqbYVpGBvzCCgn$1, 'a_oRqqbYVpGBvzCCgn$1');

function a_oRqqbYVpGBvzCCgn$2(s) {
  if (s.previous.needsPicker) {
  s.rt.displayResult("res", s.result)
  }
  return s.rt.leave();
}
cs.registerStep(a_oRqqbYVpGBvzCCgn$2, 'a_oRqqbYVpGBvzCCgn$2');

/* ACTION: is enabled */
function a_B8BkCqcEohb7CzNj(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_B8BkCqcEohb7CzNj$0;
  s.name = "is enabled";
  s.result = undefined;
  return s;
}
cs.registerAction("is enabled", "B8BkCqcEohb7CzNj", a_B8BkCqcEohb7CzNj, true);

function a_B8BkCqcEohb7CzNj$0(s) {
  (s.pc = "BjoL4yZkTyTuMjIo");
  return s.rt.enter(a_VDkfW4zJy8vXPjEH(s, a_B8BkCqcEohb7CzNj$1));
}
cs.registerStep(a_B8BkCqcEohb7CzNj$0, 'a_B8BkCqcEohb7CzNj$0');

function a_B8BkCqcEohb7CzNj$1(s) {
  (s.pc = "YRED2ca5OPZ5uBBN");
  var t_resumeCtx_0 = s.rt.getAwaitResumeCtx(a_B8BkCqcEohb7CzNj$2);
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

bluetoothSerial.isEnabled( 
lib.protect(s, function() { 
  res = true
  resume() }), 
lib.protect(s, function(err) { 
  res = false
  resume(); })
);

  }
  s.rt.runInlineJavascript(_userCode);
})(t_resumeCtx_0);
  return a_B8BkCqcEohb7CzNj$2;
}
cs.registerStep(a_B8BkCqcEohb7CzNj$1, 'a_B8BkCqcEohb7CzNj$1');

function a_B8BkCqcEohb7CzNj$2(s) {
  if (s.previous.needsPicker) {
  s.rt.displayResult("res", s.result)
  }
  return s.rt.leave();
}
cs.registerStep(a_B8BkCqcEohb7CzNj$2, 'a_B8BkCqcEohb7CzNj$2');

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
  if(!d.hasOwnProperty("$Generated315") || !d["$Generated315"]) d.$Generated315 = new Tbl_Generated315(d.libName);

};

cs._initGlobals2 = function(d) {
d.$Generated315.name = "BLE Device";};

cs._resetGlobals = function(d) {
  d.$xDUuDYIkRer7brW1 = undefined;
  d.$Generated315 = undefined;
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "write";
cs.authorId = "zqwwb";
cs.scriptGuid = "9953da58-04ba-4995-d98f-10ccc3dedc56";
cs.hasLocalData = 1;
})}
