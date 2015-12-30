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
  (s.pc = "PIpVnrTfAU3h4dda");
  null;
  }
  var t_elseIf_2 = true;
  (s.pc = "OpmYL9wfZJYiasDK");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "cWaFFHyC5IraTBoq");
  lib.Box.push_box(s);
  (s.pc = "xcWTlreD1bR2974K");
  lib.Box.set_font_size(2, s);
  (s.pc = "x4nbgAZGUti5XhE6");
  lib.Box.set_padding(0, 2, 0, 1, s);
  (s.pc = "B0H16724oMz6Y4uj");
  lib.String_.post_to_wall("Welcome to our slouch \u000adetection application. ", s);
  (s.pc = "eW42MpRGfbllnhPH");
  lib.String_.post_to_wall("We\u0027ll go through the \u000asimple process of \u000ainitialization\u002c allowing \u000ayou to choose a few \u000asettings.", s);
  (s.pc = "y8VGrVG2vmdEvEVQ");
  lib.String_.post_to_wall("It shouldn\u0027t take longer \u000athan a few minutes.", s);
  (s.pc = "mbC52x9z1hR4yUcZ");
  var t_lmbProxy_3 = s.libs.mkLambdaProxy;
  (s.$on_tapped = function(la0, la1) { return a_a_FVETTlo9qKL2BE8y$3(t_lmbProxy_3(la0), la1) });
  (s.pc = "WJ33bxr4qnyfE26D");
  var t_libcall_4 = s.libs["fgn27ltq44wmhwdo"]["button"](s);
  return s.rt.enter(t_libcall_4.invoke(t_libcall_4, a_FVETTlo9qKL2BE8y$4, "Ok\u002c let\u0027s start", s.$on_tapped));
  } else {
  (s.pc = "xg4YlWf4pknD7WEU");
  null;
  }
  return a_FVETTlo9qKL2BE8y$2;
}
cs.registerStep(a_FVETTlo9qKL2BE8y$0, 'a_FVETTlo9qKL2BE8y$0');

function a_FVETTlo9qKL2BE8y$4(s) {
  lib.Box.pop_box(s);
  s.rt.leave_render();
  return a_FVETTlo9qKL2BE8y$2;
}
cs.registerStep(a_FVETTlo9qKL2BE8y$4, 'a_FVETTlo9qKL2BE8y$4');

function a_FVETTlo9qKL2BE8y$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_FVETTlo9qKL2BE8y$2, 'a_FVETTlo9qKL2BE8y$2');

/* ACTION: a_FVETTlo9qKL2BE8y::lambda::3 */
function a_a_FVETTlo9qKL2BE8y$3(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_FVETTlo9qKL2BE8y$3$0;
  s.name = "title page";
  return s;
}
cs.registerLambda("a_FVETTlo9qKL2BE8y\u003a\u003alambda\u003a\u003a3", "a_FVETTlo9qKL2BE8y$3", a_a_FVETTlo9qKL2BE8y$3, true);

function a_a_FVETTlo9qKL2BE8y$3$0(s) {
  (s.pc = "tSc1CHQ5kIhXV8b1");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "volume");
  return s.rt.leave();
}
cs.registerStep(a_a_FVETTlo9qKL2BE8y$3$0, 'a_a_FVETTlo9qKL2BE8y$3$0');


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
  (s.pc = "UZYUNn5jnL3F407r");
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
  (s.pc = "xktLX0XMOxpLfk6X");
  null;
  }
  } else {
  (s.pc = "pbdoKEr50i2NS1YT");
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
  (s.pc = "GEDa7QIV3aJfFeYT");
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
  (s.pc = "xB14Jhvl5NSZn9zh");
  null;
  }
  } else {
  (s.pc = "bolH4aUdXG2iNGde");
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
  (s.pc = "QmdLaMgYtGVN2rTO");
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
  (s.pc = "l1XwrlGy54P7V6g8");
  null;
  }
  } else {
  (s.pc = "rPFYun6slBn5sZSf");
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
  } else {
  (s.pc = "Vg7WokHi9dFUvQex");
  null;
  }
  (s.pc = "JVfm2jCg4MIy4W4t");
  (s.$count = 0);
  return s.rt.leave();
}
cs.registerStep(a_T6y4C2cyUpaheCfR$0, 'a_T6y4C2cyUpaheCfR$0');

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
  (s.pc = "ugYVus8qrEIJHZoN");
  null;
  }
  var t_elseIf_2 = true;
  (s.pc = "CvmLTalKQgl5565D");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "FGTS628wuYop6w0i");
  lib.Box.push_box(s);
  (s.pc = "BFptfcMNxzhC4w44");
  lib.Box.set_font_size(2, s);
  (s.pc = "mQVQpOU3ljTxnXWX");
  lib.Box.set_padding(0, 2, 0, 1, s);
  (s.pc = "gCx8sZAMUHAwoonH");
  lib.String_.post_to_wall("You should now slouch. We will try to save your \u000aposition to compare it with your correct posture \u000alater.", s);
  (s.pc = "xdZQtm29pW2BuIy5");
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_NtvGfRrbuG4fzQH4$3);
  var t_call_4 = (ok1(s, /* slouching */ s.d.$lpvzsF7aqnl2s2wh) && /* slouching */ s.d.$lpvzsF7aqnl2s2wh.clone(t_resumeCtx_3));
  return a_NtvGfRrbuG4fzQH4$3;
  } else {
  (s.pc = "gg0EhLbZGkO55dqg");
  null;
  }
  return a_NtvGfRrbuG4fzQH4$2;
}
cs.registerStep(a_NtvGfRrbuG4fzQH4$0, 'a_NtvGfRrbuG4fzQH4$0');

function a_NtvGfRrbuG4fzQH4$3(s) {
  var t_pauseRes_5 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_5);
  (s.$pic = t_pauseRes_5);
  (s.pc = "GyBruazLbe7gXcHU");
  s.rt.logObjectMutation(s.$pic);
  var t_resumeCtx_6 = s.rt.getBlockingResumeCtx(a_NtvGfRrbuG4fzQH4$4);
  (ok1(s, s.$pic) && s.$pic.resize(200, 400, t_resumeCtx_6));
  return a_NtvGfRrbuG4fzQH4$4;
}
cs.registerStep(a_NtvGfRrbuG4fzQH4$3, 'a_NtvGfRrbuG4fzQH4$3');

function a_NtvGfRrbuG4fzQH4$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_NtvGfRrbuG4fzQH4$2, 'a_NtvGfRrbuG4fzQH4$2');

function a_NtvGfRrbuG4fzQH4$4(s) {
  (s.pc = "kPMp4sLzTJx4LjMR");
  (ok1(s, s.$pic) && s.$pic.post_to_wall(s));
  (s.pc = "xTjwdBGMwRElchuq");
  var t_lmbProxy_7 = s.libs.mkLambdaProxy;
  (s.$on_tapped = function(la0, la1) { return a_a_NtvGfRrbuG4fzQH4$5(t_lmbProxy_7(la0), la1) });
  (s.pc = "i2ziav82MTBfDIKs");
  var t_libcall_8 = s.libs["fgn27ltq44wmhwdo"]["button"](s);
  return s.rt.enter(t_libcall_8.invoke(t_libcall_8, a_NtvGfRrbuG4fzQH4$6, "I am slouching", s.$on_tapped));
}
cs.registerStep(a_NtvGfRrbuG4fzQH4$4, 'a_NtvGfRrbuG4fzQH4$4');

function a_NtvGfRrbuG4fzQH4$6(s) {
  lib.Box.pop_box(s);
  s.rt.leave_render();
  return a_NtvGfRrbuG4fzQH4$2;
}
cs.registerStep(a_NtvGfRrbuG4fzQH4$6, 'a_NtvGfRrbuG4fzQH4$6');

/* ACTION: a_NtvGfRrbuG4fzQH4::lambda::5 */
function a_a_NtvGfRrbuG4fzQH4$5(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_NtvGfRrbuG4fzQH4$5$0;
  s.name = "slouching page";
  return s;
}
cs.registerLambda("a_NtvGfRrbuG4fzQH4\u003a\u003alambda\u003a\u003a5", "a_NtvGfRrbuG4fzQH4$5", a_a_NtvGfRrbuG4fzQH4$5, true);

function a_a_NtvGfRrbuG4fzQH4$5$0(s) {
  (s.pc = "AHstOhbMt9s0QhTa");
  return s.rt.enter(a_DOuHZ2WTCQ18yDqu(s, a_a_NtvGfRrbuG4fzQH4$5$1));
}
cs.registerStep(a_a_NtvGfRrbuG4fzQH4$5$0, 'a_a_NtvGfRrbuG4fzQH4$5$0');

function a_a_NtvGfRrbuG4fzQH4$5$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "Ai8MedthIr9lgCoT");
  return s.rt.enter(a_eQ4FLHbtWAVqgGH4(s, a_a_NtvGfRrbuG4fzQH4$5$2, 1));
}
cs.registerStep(a_a_NtvGfRrbuG4fzQH4$5$1, 'a_a_NtvGfRrbuG4fzQH4$5$1');

function a_a_NtvGfRrbuG4fzQH4$5$2(s) {
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
  var t_resumeCtx_6 = s.rt.getBlockingResumeCtx(a_a_NtvGfRrbuG4fzQH4$5$5);
  lib.Wall.prompt("Wait while the program calibrates...", t_resumeCtx_6);
  return a_a_NtvGfRrbuG4fzQH4$5$5;
  } else {
  (s.pc = "POUd8FeGEgCAh2v1");
  null;
  }
  return a_a_NtvGfRrbuG4fzQH4$5$4;
}
cs.registerStep(a_a_NtvGfRrbuG4fzQH4$5$2, 'a_a_NtvGfRrbuG4fzQH4$5$2');

function a_a_NtvGfRrbuG4fzQH4$5$5(s) {
  (s.pc = "xzI14542fBEwKc1i");
  var t_libcall_7 = s.libs["qhQduCeJ2pUP9F58"]["write"](s);
  return s.rt.enter(t_libcall_7.invoke(t_libcall_7, a_a_NtvGfRrbuG4fzQH4$5$6, "\u007b1\u003b112\u003b-1\u007d"));
}
cs.registerStep(a_a_NtvGfRrbuG4fzQH4$5$5, 'a_a_NtvGfRrbuG4fzQH4$5$5');

function a_a_NtvGfRrbuG4fzQH4$5$4(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_NtvGfRrbuG4fzQH4$5$4, 'a_a_NtvGfRrbuG4fzQH4$5$4');

function a_a_NtvGfRrbuG4fzQH4$5$6(s) {
  var t_actRes_8 = s.rt.returnedFrom.result;
  t_actRes_8;
  (s.pc = "lQ8CDSdsAYVh0oZU");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "finish");
  return a_a_NtvGfRrbuG4fzQH4$5$4;
}
cs.registerStep(a_a_NtvGfRrbuG4fzQH4$5$6, 'a_a_NtvGfRrbuG4fzQH4$5$6');


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
  s.$snd = undefined;
  s.$changehandler = undefined;
  s.$x = undefined;
  s.$on_tapped = undefined;
  s.$on_tapped1 = undefined;
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
  (s.pc = "wyjy8lH9PpXAMlpn");
  null;
  }
  var t_elseIf_2 = true;
  (s.pc = "xALoATTOgLhV5Tms");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "I1cLdXpqnOw2wheU");
  lib.Box.push_box(s);
  (s.pc = "x04VmhWSczCOm2Ee");
  lib.Box.set_padding(0, 2, 0, 2, s);
  (s.pc = "Ci5lckrvb8E6Ip7p");
  var t_call_3 = (ok1(s, /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl) && /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl.row_at(0, s));
  var t_call_4 = (ok1(s, t_call_3) && lib.FieldRef.mk(t_call_3, "S09sBfHVWc2fE13c"))._ref(s);
  var t_libcall_5 = s.libs["fgn27ltq44wmhwdo"]["checkbox"](s);
  return s.rt.enter(t_libcall_5.invoke(t_libcall_5, a_fQZDWwFSna4kPDOQ$3, "Enable alarm", t_call_4));
  } else {
  (s.pc = "l4lc6lX624gcYDl1");
  null;
  }
  return a_fQZDWwFSna4kPDOQ$2;
}
cs.registerStep(a_fQZDWwFSna4kPDOQ$0, 'a_fQZDWwFSna4kPDOQ$0');

function a_fQZDWwFSna4kPDOQ$3(s) {
  var t_elseIf_6 = true;
  (s.pc = "ZaR3oBFSsWmfCcDP");
  var t_call_7 = (ok1(s, /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl) && /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl.row_at(0, s));
  if (t_call_7) {
  var t_recOp_8 = t_call_7.perform_get("S09sBfHVWc2fE13c", s);
  }
  var t_call_9 = (ok1(s, t_recOp_8) && lib.Boolean_.equals(t_recOp_8, true, s));
  ok1(s, t_call_9);
  if (t_call_9) {
  (s.pc = "B5mZ3YLt7LYL3wez");
  (s.$snd = /* alarm */ s.d.$wOARSK4PZpC75Eqh);
  (s.pc = "aqExhExICauotIS2");
  var t_lmbProxy_10 = s.libs.mkLambdaProxy;
  (s.$changehandler = function(la0, la1, la2) { return a_a_fQZDWwFSna4kPDOQ$6(t_lmbProxy_10(la0), la1, la2) });
  (s.pc = "GOUd3VVhPM79wx2b");
  var t_call_11 = (ok1(s, /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl) && /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl.row_at(0, s));
  var t_call_12 = (ok1(s, t_call_11) && lib.FieldRef.mk(t_call_11, "xGQOimxFj2lxgD1E"))._ref(s);
  var t_libcall_13 = s.libs["fgn27ltq44wmhwdo"]["input number"](s);
  return s.rt.enter(t_libcall_13.invoke(t_libcall_13, a_fQZDWwFSna4kPDOQ$7, "How loud would you like the alarm to be?", t_call_12, s.$changehandler));
  } else {
  (s.pc = "Cpff6kMSkaWtWVxm");
  null;
  }
  return a_fQZDWwFSna4kPDOQ$5;
}
cs.registerStep(a_fQZDWwFSna4kPDOQ$3, 'a_fQZDWwFSna4kPDOQ$3');

function a_fQZDWwFSna4kPDOQ$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_fQZDWwFSna4kPDOQ$2, 'a_fQZDWwFSna4kPDOQ$2');

function a_fQZDWwFSna4kPDOQ$7(s) {
  (s.pc = "phPdzcP3idQc2yez");
  var t_lmbv_14 = s.$snd;
  var t_lmbProxy_15 = s.libs.mkLambdaProxy;
  (s.$on_tapped = function(la0, la1) { return a_a_fQZDWwFSna4kPDOQ$8(t_lmbProxy_15(la0), la1, t_lmbv_14) });
  (s.pc = "L2ovKlfpc59T42fW");
  var t_libcall_16 = s.libs["fgn27ltq44wmhwdo"]["button"](s);
  return s.rt.enter(t_libcall_16.invoke(t_libcall_16, a_fQZDWwFSna4kPDOQ$9, "Change volume", s.$on_tapped));
}
cs.registerStep(a_fQZDWwFSna4kPDOQ$7, 'a_fQZDWwFSna4kPDOQ$7');

function a_fQZDWwFSna4kPDOQ$5(s) {
  (s.pc = "bPdS2fjJZAMJOyXY");
  var t_lmbProxy_17 = s.libs.mkLambdaProxy;
  (s.$on_tapped1 = function(la0, la1) { return a_a_fQZDWwFSna4kPDOQ$10(t_lmbProxy_17(la0), la1) });
  (s.pc = "S2K12RlPl2omxB3I");
  var t_libcall_18 = s.libs["fgn27ltq44wmhwdo"]["button"](s);
  return s.rt.enter(t_libcall_18.invoke(t_libcall_18, a_fQZDWwFSna4kPDOQ$11, "It\u0027s ok\u002c let\u0027s move on", s.$on_tapped1));
}
cs.registerStep(a_fQZDWwFSna4kPDOQ$5, 'a_fQZDWwFSna4kPDOQ$5');

function a_fQZDWwFSna4kPDOQ$9(s) {
  return a_fQZDWwFSna4kPDOQ$5;
}
cs.registerStep(a_fQZDWwFSna4kPDOQ$9, 'a_fQZDWwFSna4kPDOQ$9');

function a_fQZDWwFSna4kPDOQ$11(s) {
  lib.Box.pop_box(s);
  s.rt.leave_render();
  return a_fQZDWwFSna4kPDOQ$2;
}
cs.registerStep(a_fQZDWwFSna4kPDOQ$11, 'a_fQZDWwFSna4kPDOQ$11');

/* ACTION: a_fQZDWwFSna4kPDOQ::lambda::6 */
function a_a_fQZDWwFSna4kPDOQ$6(previous, returnAddr, $x) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_fQZDWwFSna4kPDOQ$6$0;
  s.name = "volume";
  return s;
}
cs.registerLambda("a_fQZDWwFSna4kPDOQ\u003a\u003alambda\u003a\u003a6", "a_fQZDWwFSna4kPDOQ$6", a_a_fQZDWwFSna4kPDOQ$6, true);

function a_a_fQZDWwFSna4kPDOQ$6$0(s) {
  (s.pc = "GNondXk2rjDQ8xWz");
  null;
  return s.rt.leave();
}
cs.registerStep(a_a_fQZDWwFSna4kPDOQ$6$0, 'a_a_fQZDWwFSna4kPDOQ$6$0');

/* ACTION: a_fQZDWwFSna4kPDOQ::lambda::8 */
function a_a_fQZDWwFSna4kPDOQ$8(previous, returnAddr, $snd) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_fQZDWwFSna4kPDOQ$8$0;
  s.name = "volume";
  s.$snd = $snd;
  return s;
}
cs.registerLambda("a_fQZDWwFSna4kPDOQ\u003a\u003alambda\u003a\u003a8", "a_fQZDWwFSna4kPDOQ$8", a_a_fQZDWwFSna4kPDOQ$8, true);

function a_a_fQZDWwFSna4kPDOQ$8$0(s) {
  (s.pc = "xSpn9FiNeJpoif6J");
  var t_call_0 = (ok1(s, /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl) && /* Settings table */ s.d.$BVGhpbmcyIHRhYmxl.row_at(0, s));
  if (t_call_0) {
  var t_recOp_1 = t_call_0.perform_get("xGQOimxFj2lxgD1E", s);
  }
  var t_call_2 = (ok1(s, t_recOp_1) && lib.String_.to_number(t_recOp_1, s));
  var t_infix_3 = (ok1(s, t_call_2) && (t_call_2 / 100));
  var t_resumeCtx_4 = s.rt.getBlockingResumeCtx(a_a_fQZDWwFSna4kPDOQ$8$2);
  (ok2(s, s.$snd, t_infix_3) && s.$snd.play_special(t_infix_3, 0, 0, t_resumeCtx_4));
  return a_a_fQZDWwFSna4kPDOQ$8$2;
}
cs.registerStep(a_a_fQZDWwFSna4kPDOQ$8$0, 'a_a_fQZDWwFSna4kPDOQ$8$0');

function a_a_fQZDWwFSna4kPDOQ$8$2(s) {
  (s.pc = "Xa2EQ0VCx8cpFf9v");
  null;
  return s.rt.leave();
}
cs.registerStep(a_a_fQZDWwFSna4kPDOQ$8$2, 'a_a_fQZDWwFSna4kPDOQ$8$2');

/* ACTION: a_fQZDWwFSna4kPDOQ::lambda::10 */
function a_a_fQZDWwFSna4kPDOQ$10(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_fQZDWwFSna4kPDOQ$10$0;
  s.name = "volume";
  return s;
}
cs.registerLambda("a_fQZDWwFSna4kPDOQ\u003a\u003alambda\u003a\u003a10", "a_fQZDWwFSna4kPDOQ$10", a_a_fQZDWwFSna4kPDOQ$10, true);

function a_a_fQZDWwFSna4kPDOQ$10$0(s) {
  (s.pc = "Q9ufeli2yT2u9DAN");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "straight page");
  return s.rt.leave();
}
cs.registerStep(a_a_fQZDWwFSna4kPDOQ$10$0, 'a_a_fQZDWwFSna4kPDOQ$10$0');


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
  (s.pc = "PpkkC4RcLGJtDjYF");
  null;
  }
  var t_elseIf_2 = true;
  (s.pc = "xWuqNrwb0OW5ooDo");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "Rh1ckZYEuUIeHrni");
  lib.Box.push_box(s);
  (s.pc = "O0sAkuQ3q7Jy8B72");
  lib.Box.set_font_size(2, s);
  (s.pc = "HCdW06z0WBqvjhoT");
  lib.Box.set_padding(0, 2, 0, 1, s);
  (s.pc = "rQfoq0jlk8oy8v3L");
  lib.String_.post_to_wall("You should now sit \u000astraight as you \u000anormally do.", s);
  (s.pc = "xDIL5rVR3RHfz0uX");
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_KQ8LaeTfpaMEiZQm$3);
  var t_call_4 = (ok1(s, /* straight */ s.d.$xy8Omp3E9EeBppJL) && /* straight */ s.d.$xy8Omp3E9EeBppJL.clone(t_resumeCtx_3));
  return a_KQ8LaeTfpaMEiZQm$3;
  } else {
  (s.pc = "khOsTYEPZiy2mT3s");
  null;
  }
  return a_KQ8LaeTfpaMEiZQm$2;
}
cs.registerStep(a_KQ8LaeTfpaMEiZQm$0, 'a_KQ8LaeTfpaMEiZQm$0');

function a_KQ8LaeTfpaMEiZQm$3(s) {
  var t_pauseRes_5 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_5);
  (s.$pic = t_pauseRes_5);
  (s.pc = "tVyJC2g5U60xUjeD");
  s.rt.logObjectMutation(s.$pic);
  var t_resumeCtx_6 = s.rt.getBlockingResumeCtx(a_KQ8LaeTfpaMEiZQm$4);
  (ok1(s, s.$pic) && s.$pic.resize(200, 400, t_resumeCtx_6));
  return a_KQ8LaeTfpaMEiZQm$4;
}
cs.registerStep(a_KQ8LaeTfpaMEiZQm$3, 'a_KQ8LaeTfpaMEiZQm$3');

function a_KQ8LaeTfpaMEiZQm$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_KQ8LaeTfpaMEiZQm$2, 'a_KQ8LaeTfpaMEiZQm$2');

function a_KQ8LaeTfpaMEiZQm$4(s) {
  (s.pc = "Xt4nX7OIXhQ9IX6s");
  (ok1(s, s.$pic) && s.$pic.post_to_wall(s));
  (s.pc = "QkBX5DCsGeV5QfB0");
  var t_lmbProxy_7 = s.libs.mkLambdaProxy;
  (s.$on_tapped = function(la0, la1) { return a_a_KQ8LaeTfpaMEiZQm$5(t_lmbProxy_7(la0), la1) });
  (s.pc = "TkbiBm4lNLbyfl1X");
  var t_libcall_8 = s.libs["fgn27ltq44wmhwdo"]["button"](s);
  return s.rt.enter(t_libcall_8.invoke(t_libcall_8, a_KQ8LaeTfpaMEiZQm$6, "I am sitting straight", s.$on_tapped));
}
cs.registerStep(a_KQ8LaeTfpaMEiZQm$4, 'a_KQ8LaeTfpaMEiZQm$4');

function a_KQ8LaeTfpaMEiZQm$6(s) {
  lib.Box.pop_box(s);
  s.rt.leave_render();
  return a_KQ8LaeTfpaMEiZQm$2;
}
cs.registerStep(a_KQ8LaeTfpaMEiZQm$6, 'a_KQ8LaeTfpaMEiZQm$6');

/* ACTION: a_KQ8LaeTfpaMEiZQm::lambda::5 */
function a_a_KQ8LaeTfpaMEiZQm$5(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_KQ8LaeTfpaMEiZQm$5$0;
  s.name = "straight page";
  return s;
}
cs.registerLambda("a_KQ8LaeTfpaMEiZQm\u003a\u003alambda\u003a\u003a5", "a_KQ8LaeTfpaMEiZQm$5", a_a_KQ8LaeTfpaMEiZQm$5, true);

function a_a_KQ8LaeTfpaMEiZQm$5$0(s) {
  (s.pc = "hNKIfmV0gxr0Nvt2");
  return s.rt.enter(a_DOuHZ2WTCQ18yDqu(s, a_a_KQ8LaeTfpaMEiZQm$5$1));
}
cs.registerStep(a_a_KQ8LaeTfpaMEiZQm$5$0, 'a_a_KQ8LaeTfpaMEiZQm$5$0');

function a_a_KQ8LaeTfpaMEiZQm$5$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "xhMcUwOkTpa40tE1");
  return s.rt.enter(a_eQ4FLHbtWAVqgGH4(s, a_a_KQ8LaeTfpaMEiZQm$5$2, 0));
}
cs.registerStep(a_a_KQ8LaeTfpaMEiZQm$5$1, 'a_a_KQ8LaeTfpaMEiZQm$5$1');

function a_a_KQ8LaeTfpaMEiZQm$5$2(s) {
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
  var t_resumeCtx_6 = s.rt.getBlockingResumeCtx(a_a_KQ8LaeTfpaMEiZQm$5$5);
  lib.Wall.prompt("Wait while the program calibrates...", t_resumeCtx_6);
  return a_a_KQ8LaeTfpaMEiZQm$5$5;
  } else {
  (s.pc = "LVLYue91hXBaZ4yz");
  null;
  }
  return a_a_KQ8LaeTfpaMEiZQm$5$4;
}
cs.registerStep(a_a_KQ8LaeTfpaMEiZQm$5$2, 'a_a_KQ8LaeTfpaMEiZQm$5$2');

function a_a_KQ8LaeTfpaMEiZQm$5$5(s) {
  (s.pc = "hiLa6noCjqNX4W8z");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "slouching page");
  return a_a_KQ8LaeTfpaMEiZQm$5$4;
}
cs.registerStep(a_a_KQ8LaeTfpaMEiZQm$5$5, 'a_a_KQ8LaeTfpaMEiZQm$5$5');

function a_a_KQ8LaeTfpaMEiZQm$5$4(s) {
  (s.pc = "NyOUF9hhrzNGFAWP");
  null;
  return s.rt.leave();
}
cs.registerStep(a_a_KQ8LaeTfpaMEiZQm$5$4, 'a_a_KQ8LaeTfpaMEiZQm$5$4');


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
  (s.pc = "iOMCLPlMSunhghiN");
  return s.rt.enter(a_KUkbThG4hJJCcn0l(s, a_n0mZASkSqkRzzW42$1));
}
cs.registerStep(a_n0mZASkSqkRzzW42$0, 'a_n0mZASkSqkRzzW42$0');

function a_n0mZASkSqkRzzW42$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "IjPFd3Y22DPQSdov");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "title page");
  return s.rt.leave();
}
cs.registerStep(a_n0mZASkSqkRzzW42$1, 'a_n0mZASkSqkRzzW42$1');

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
  (s.pc = "LGz1HXsktJTjqA9D");
  null;
  }
  }
  } else {
  (s.pc = "tw3OBIOFIjJG4hl4");
  null;
  }
  }
  return a_DOuHZ2WTCQ18yDqu$1;
  }
  return s.rt.leave();
}
cs.registerStep(a_DOuHZ2WTCQ18yDqu$1, 'a_DOuHZ2WTCQ18yDqu$1');

/* ACTION: finish */
function a_nEh3E4Ti5dUlvlfY(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_nEh3E4Ti5dUlvlfY$0;
  s.name = "finish";
  s.$_ = undefined;
  s.$label = undefined;
  s.$on_tapped = undefined;
  s.$action = undefined;
  s.$text = undefined;
  s.$Strings = undefined;
  s.$counter = undefined;
  s.$StringToDisplay = undefined;
  s.$messageType = undefined;
  s.$x2 = undefined;
  s.$y2 = undefined;
  s.$z2 = undefined;
  s.$s = undefined;
  return s;
}
cs.registerPage("finish", "nEh3E4Ti5dUlvlfY", a_nEh3E4Ti5dUlvlfY, false);

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
  (s.pc = "xLLFlVNHRBGwFUmH");
  null;
  }
  var t_elseIf_2 = true;
  (s.pc = "JIZ8rPCaqpFD4lrX");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "jNRR462HltFYCDFA");
  lib.Box.push_box(s);
  (s.pc = "K5CaVIuNO8VBLBK0");
  lib.Box.set_font_size(2, s);
  (s.pc = "vd4WEtF2KpnF0mQI");
  lib.Box.set_padding(0, 2, 0, 1, s);
  (s.pc = "KulDZlUwLSlSx9XE");
  (s.$label = "");
  var t_elseIf_3 = true;
  (s.pc = "uh1bY2Hcc3KAoRcu");
  if (s.$_) {
  var t_recOp_4 = s.$_[("$button status")];
  }
  var t_call_5 = (ok1(s, t_recOp_4) && lib.Boolean_.equals(t_recOp_4, false, s));
  ok1(s, t_call_5);
  if (t_call_5) {
  (s.pc = "xzgYW2CdODdbKqdh");
  (s.$label = "Start slouch detection");
  } else {
  (s.pc = "mt0ZYtsUhDwATzPJ");
  (s.$label = "Stop slouch detection");
  }
  (s.pc = "IkqF2ymFdlA2isbF");
  lib.String_.post_to_wall("The setup is now finished\u002c please click the buttons \u000abelow to either start or stop the slouch detection.", s);
  (s.pc = "xt35oLcPpRAwA9c2");
  var t_lmbv_6 = s.$_;
  var t_lmbv_7 = s.$action;
  var t_lmbProxy_8 = s.libs.mkLambdaProxy;
  (s.$on_tapped = function(la0, la1) { return a_a_nEh3E4Ti5dUlvlfY$7(t_lmbProxy_8(la0), la1, t_lmbv_6, t_lmbv_7) });
  (s.pc = "xet3cqRHf5Da3YJj");
  var t_libcall_9 = s.libs["fgn27ltq44wmhwdo"]["button"](s);
  return s.rt.enter(t_libcall_9.invoke(t_libcall_9, a_nEh3E4Ti5dUlvlfY$8, s.$label, s.$on_tapped));
  } else {
  (s.pc = "BkzDLeUi7RWz65xA");
  null;
  }
  return a_nEh3E4Ti5dUlvlfY$4;
}
cs.registerStep(a_nEh3E4Ti5dUlvlfY$0, 'a_nEh3E4Ti5dUlvlfY$0');

function a_nEh3E4Ti5dUlvlfY$8(s) {
  (s.pc = "KP2Ftmz87goH09y4");
  if (s.$_) {
  var t_recOp_10 = s.$_[("$text to display")];
  }
  var t_call_11 = (ok1(s, t_recOp_10) && lib.String_.split(t_recOp_10, "\u003b", s));
  s.rt.markAllocated(t_call_11);
  (s.$Strings = t_call_11);
  (s.pc = "racU6KpnDuejPJqr");
  (s.$counter = 0);
  (s.pc = "NKcgbhTxWvRH02i2");
  (s.$StringToDisplay = "");
  (s.pc = "mswc2UkPlgg22xHU");
  (s.$messageType = "");
  (s.pc = "cKAeBnWSM9houMOe");
  (s.$x2 = 0);
  (s.pc = "t7K48nX6BcKhkrJV");
  (s.$y2 = 0);
  (s.pc = "fcRLiAhMDcHkKBez");
  (s.$z2 = 0);
  (s.pc = "Zpz2eqvaRBOt7U3t");
  s.t_collArr_12 = (ok1(s, s.$Strings) && s.$Strings.get_enumerator());
  s.t_idx_13 = 0;
  return a_nEh3E4Ti5dUlvlfY$10;
}
cs.registerStep(a_nEh3E4Ti5dUlvlfY$8, 'a_nEh3E4Ti5dUlvlfY$8');

function a_nEh3E4Ti5dUlvlfY$4(s) {
  return s.rt.leave();
}
cs.registerStep(a_nEh3E4Ti5dUlvlfY$4, 'a_nEh3E4Ti5dUlvlfY$4');

function a_nEh3E4Ti5dUlvlfY$10(s) {
  if ((s.t_idx_13 < (s.t_collArr_12.length))) {
  (s.$s = s.t_collArr_12[(s.t_idx_13)]);
  (s.t_idx_13++);
  (s.pc = "abqLEFpHErdUaMve");
  var t_infix_14 = (ok1(s, s.$counter) && (s.$counter + 1));
  (s.$counter = t_infix_14);
  var t_elseIf_15 = true;
  (s.pc = "OboPll8hL7HFp4ER");
  var t_infix_16 = (ok1(s, s.$counter) && (s.$counter === 2));
  ok1(s, t_infix_16);
  if (t_infix_16) {
  (t_elseIf_15 = false);
  (s.pc = "GHS2eoZyFM2rtim4");
  (s.$messageType = s.$s);
  }
  if (t_elseIf_15) {
  (s.pc = "MHUzkIRywUKRRDRp");
  var t_call_17 = (ok1(s, s.$messageType) && lib.String_.equals(s.$messageType, "112", s));
  ok1(s, t_call_17);
  if (t_call_17) {
  var t_elseIf_18 = true;
  (s.pc = "UTfA5hPAxu4Tb1Zg");
  var t_infix_19 = (ok1(s, s.$counter) && (s.$counter === 3));
  ok1(s, t_infix_19);
  if (t_infix_19) {
  (t_elseIf_18 = false);
  (s.pc = "v47VSi2AaN3jFFAV");
  var t_concat_20 = lib.String_.concatAny("X\u003a ", s.$StringToDisplay);
  var t_concat_21 = lib.String_.concatAny(t_concat_20, s.$s);
  var t_concat_22 = lib.String_.concatAny(t_concat_21, "\u000aY\u003a ");
  (s.$StringToDisplay = t_concat_22);
  (s.pc = "xVYsaf3AaEhBrgh7");
  var t_call_23 = (ok1(s, s.$s) && lib.String_.to_number(s.$s, s));
  (s.$x2 = t_call_23);
  }
  if (t_elseIf_18) {
  (s.pc = "R5ct2bi4ieATNl1B");
  var t_infix_24 = (ok1(s, s.$counter) && (s.$counter === 4));
  ok1(s, t_infix_24);
  if (t_infix_24) {
  (t_elseIf_18 = false);
  (s.pc = "UHA6EoQFHvxf4Ulv");
  var t_concat_25 = lib.String_.concatAny(s.$StringToDisplay, s.$s);
  var t_concat_26 = lib.String_.concatAny(t_concat_25, "\u000aZ\u003a ");
  (s.$StringToDisplay = t_concat_26);
  (s.pc = "x9n3JGWtI4mI1J4I");
  var t_call_27 = (ok1(s, s.$s) && lib.String_.to_number(s.$s, s));
  (s.$y2 = t_call_27);
  }
  }
  if (t_elseIf_18) {
  (s.pc = "rX7hcgVHADeAV8ru");
  var t_infix_28 = (ok1(s, s.$counter) && (s.$counter === 5));
  ok1(s, t_infix_28);
  if (t_infix_28) {
  (s.pc = "hNkgsWULhYfcUM5C");
  var t_concat_29 = lib.String_.concatAny(s.$StringToDisplay, s.$s);
  (s.$StringToDisplay = t_concat_29);
  (s.pc = "vDuD9qu1BK4ztSJK");
  var t_call_30 = (ok1(s, s.$s) && lib.String_.to_number(s.$s, s));
  (s.$z2 = t_call_30);
  } else {
  (s.pc = "e4BCr4N2kzHxxhG9");
  null;
  }
  }
  } else {
  (s.pc = "xAqiMJIQTPqUuALH");
  null;
  }
  }
  return a_nEh3E4Ti5dUlvlfY$10;
  }
  (s.pc = "zy9M6MJBzJ2NQ4J7");
  return s.rt.enter(a_T6y4C2cyUpaheCfR(s, a_nEh3E4Ti5dUlvlfY$20, s.$x2, s.$y2, s.$z2));
}
cs.registerStep(a_nEh3E4Ti5dUlvlfY$10, 'a_nEh3E4Ti5dUlvlfY$10');

function a_nEh3E4Ti5dUlvlfY$20(s) {
  var t_actRes_31 = s.rt.returnedFrom.result;
  t_actRes_31;
  (s.pc = "k2gR3fRCFMM8U17y");
  null;
  (s.pc = "kKAmOPcd35tTz08A");
  null;
  lib.Box.pop_box(s);
  s.rt.leave_render();
  return a_nEh3E4Ti5dUlvlfY$4;
}
cs.registerStep(a_nEh3E4Ti5dUlvlfY$20, 'a_nEh3E4Ti5dUlvlfY$20');

/* ACTION: a_nEh3E4Ti5dUlvlfY::lambda::7 */
function a_a_nEh3E4Ti5dUlvlfY$7(previous, returnAddr, $_, $action) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_nEh3E4Ti5dUlvlfY$7$0;
  s.name = "finish";
  s.$_ = $_;
  s.$action = $action;
  s.$text = undefined;
  return s;
}
cs.registerLambda("a_nEh3E4Ti5dUlvlfY\u003a\u003alambda\u003a\u003a7", "a_nEh3E4Ti5dUlvlfY$7", a_a_nEh3E4Ti5dUlvlfY$7, true);

function a_a_nEh3E4Ti5dUlvlfY$7$0(s) {
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
  (s.$action = function(la0, la1, la2) { return a_a_a_nEh3E4Ti5dUlvlfY$7$4(t_lmbProxy_4(la0), la1, la2, t_lmbv_3) });
  (s.pc = "lA1BbjoAGNL4LlLu");
  var t_libcall_5 = s.libs["qhQduCeJ2pUP9F58"]["subscribe"](s);
  return s.rt.enter(t_libcall_5.invoke(t_libcall_5, a_a_nEh3E4Ti5dUlvlfY$7$5, "\u007d\u007b", s.$action));
  } else {
  (s.pc = "W628evl3ljSITMg6");
  if (s.$_) {
  s.$_.perform_set("$button status", false, s);
  }
  (s.pc = "pwPGsenYKUjaRbft");
  var t_libcall_8 = s.libs["qhQduCeJ2pUP9F58"]["write"](s);
  return s.rt.enter(t_libcall_8.invoke(t_libcall_8, a_a_nEh3E4Ti5dUlvlfY$7$8, "\u007b1\u003b112\u003b-1\u007d"));
  }
  return a_a_nEh3E4Ti5dUlvlfY$7$2;
}
cs.registerStep(a_a_nEh3E4Ti5dUlvlfY$7$0, 'a_a_nEh3E4Ti5dUlvlfY$7$0');

function a_a_nEh3E4Ti5dUlvlfY$7$5(s) {
  (s.pc = "qBschTvu647zP83a");
  var t_libcall_6 = s.libs["qhQduCeJ2pUP9F58"]["write"](s);
  return s.rt.enter(t_libcall_6.invoke(t_libcall_6, a_a_nEh3E4Ti5dUlvlfY$7$6, "\u007b1\u003b112\u003b100\u007d"));
}
cs.registerStep(a_a_nEh3E4Ti5dUlvlfY$7$5, 'a_a_nEh3E4Ti5dUlvlfY$7$5');

function a_a_nEh3E4Ti5dUlvlfY$7$8(s) {
  var t_actRes_9 = s.rt.returnedFrom.result;
  t_actRes_9;
  return a_a_nEh3E4Ti5dUlvlfY$7$2;
}
cs.registerStep(a_a_nEh3E4Ti5dUlvlfY$7$8, 'a_a_nEh3E4Ti5dUlvlfY$7$8');

function a_a_nEh3E4Ti5dUlvlfY$7$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_nEh3E4Ti5dUlvlfY$7$2, 'a_a_nEh3E4Ti5dUlvlfY$7$2');

function a_a_nEh3E4Ti5dUlvlfY$7$6(s) {
  var t_actRes_7 = s.rt.returnedFrom.result;
  t_actRes_7;
  return a_a_nEh3E4Ti5dUlvlfY$7$2;
}
cs.registerStep(a_a_nEh3E4Ti5dUlvlfY$7$6, 'a_a_nEh3E4Ti5dUlvlfY$7$6');

/* ACTION: a_a_nEh3E4Ti5dUlvlfY$7::lambda::4 */
function a_a_a_nEh3E4Ti5dUlvlfY$7$4(previous, returnAddr, $text, $_) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_nEh3E4Ti5dUlvlfY$7$4$0;
  s.name = "a_nEh3E4Ti5dUlvlfY\u003a\u003alambda\u003a\u003a7";
  s.$_ = $_;
  s.$text = $text;
  return s;
}
cs.registerLambda("a_a_nEh3E4Ti5dUlvlfY$7\u003a\u003alambda\u003a\u003a4", "a_a_nEh3E4Ti5dUlvlfY$7$4", a_a_a_nEh3E4Ti5dUlvlfY$7$4, true);

function a_a_a_nEh3E4Ti5dUlvlfY$7$4$0(s) {
  (s.pc = "JSGvUht4FEKGAtYd");
  if (s.$_) {
  s.$_.perform_set("$text to display", s.$text, s);
  }
  return s.rt.leave();
}
cs.registerStep(a_a_a_nEh3E4Ti5dUlvlfY$7$4$0, 'a_a_a_nEh3E4Ti5dUlvlfY$7$4$0');


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
cs.objectSingletons["finish page data2"] = function(d) { return d.$xpO6fzyjaha74O2R };
Tbl_xpO6fzyjaha74O2R.prototype.selfCtor = Tbl_xpO6fzyjaha74O2R;
Tbl_xpO6fzyjaha74O2R.prototype.stableName = "xpO6fzyjaha74O2R";
Tbl_xpO6fzyjaha74O2R.prototype.entryKindName = "finish page data2";

// jsonimport
Ent_xpO6fzyjaha74O2R.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
  this.perform_set("$button status", ctx.importBoolean(json, "button status"), s);
  this.perform_set("$text to display", ctx.importString(json, "text to display"), s);
}
cs.registerGlobal("$xpO6fzyjaha74O2R");
(function () {
  var lib, bnd, resolve;
  var bnds = cs.libBindings = {};
  lib = libs["this"] = {};
  bnd = bnds["this"] = libs;
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "this");
    lib["main"] = cs.mkLibProxyFactory(bnd, "this", "main");
  lib = libs["x3O0aWPuU5QxB2CM"] = {};
  bnd = bnds["x3O0aWPuU5QxB2CM"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "x3O0aWPuU5QxB2CM");
  lib = libs["Xz9tL2KDduN9qXKm"] = {};
  bnd = bnds["Xz9tL2KDduN9qXKm"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "Xz9tL2KDduN9qXKm");
  lib = libs["xW4DV1D84fqL86zF"] = {};
  bnd = bnds["xW4DV1D84fqL86zF"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "xW4DV1D84fqL86zF");
  lib = libs["fgn27ltq44wmhwdo"] = {};
  bnd = bnds["fgn27ltq44wmhwdo"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "fgn27ltq44wmhwdo");
    lib["button"] = cs.mkLibProxyFactory(bnd, "fgn27ltq44wmhwdo", "button");
    lib["checkbox"] = cs.mkLibProxyFactory(bnd, "fgn27ltq44wmhwdo", "checkbox");
    lib["input number"] = cs.mkLibProxyFactory(bnd, "fgn27ltq44wmhwdo", "input number");
  lib = libs["qhQduCeJ2pUP9F58"] = {};
  bnd = bnds["qhQduCeJ2pUP9F58"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "qhQduCeJ2pUP9F58");
    lib["write"] = cs.mkLibProxyFactory(bnd, "qhQduCeJ2pUP9F58", "write");
    lib["subscribe"] = cs.mkLibProxyFactory(bnd, "qhQduCeJ2pUP9F58", "subscribe");
  bnd = bnds["x3O0aWPuU5QxB2CM"];
  bnd["this$lib"] = "x3O0aWPuU5QxB2CM";
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
  if(!d.hasOwnProperty("$xHdizJ8cAYKEGmEh")) d.$xHdizJ8cAYKEGmEh = "";
  if(!d.hasOwnProperty("$xpO6fzyjaha74O2R") || !d["$xpO6fzyjaha74O2R"]) d.$xpO6fzyjaha74O2R = new Tbl_xpO6fzyjaha74O2R(d.libName);
  if(!d.hasOwnProperty("$kR4n2SgnCqZKNyic")) d.$kR4n2SgnCqZKNyic = 0;
  if(!d.hasOwnProperty("$eRnXXsodK421Weem")) d.$eRnXXsodK421Weem = 0;
  if(!d.hasOwnProperty("$MEl2eFcIp3EZlI6W")) d.$MEl2eFcIp3EZlI6W = 0;

};

cs._initGlobals2 = function(d) {
d.$zaAJcuxErIoMhHvC.name = "title page page data";d.$xtwVQmvFVA4iHXY5.name = "slouching page page data";d.$zYQpTie1JMoia6F2.name = "volume page data";d.$JNdvdEjRj3dVBrK6.name = "straight page page data";d.$BVGhpbmcgdGFibGUa.name = "Calibration";d.$BVGhpbmcgdGFibGUa.linked_cloudtables = [];
d.$BVGhpbmcyIHRhYmxl.name = "Settings";d.$BVGhpbmcyIHRhYmxl.linked_cloudtables = [];
d.$xpO6fzyjaha74O2R.name = "finish page data2";};

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
  d.$xHdizJ8cAYKEGmEh = "";
  d.$xpO6fzyjaha74O2R = undefined;
  d.$kR4n2SgnCqZKNyic = 0;
  d.$eRnXXsodK421Weem = 0;
  d.$MEl2eFcIp3EZlI6W = 0;
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "main";
cs.authorId = "oovd";
cs.scriptGuid = "149f0c51-15ff-47e9-52be-3a8cf38d05d0";
cs.hasLocalData = 1;
}),

// **************************************************************
"x3O0aWPuU5QxB2CM": (function (cs) {
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
cs.scriptGuid = "149f0c51-15ff-47e9-52be-3a8cf38d05d0";
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
cs.authorId = "oovd";
cs.scriptGuid = "149f0c51-15ff-47e9-52be-3a8cf38d05d0";
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
cs.authorId = "oovd";
cs.scriptGuid = "149f0c51-15ff-47e9-52be-3a8cf38d05d0";
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
  (s.pc = "sW1QtXYSNmGtVz2L");
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
  (s.pc = "tslU8UM0C2o4M4ML");
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

cs.authorId = "oovd";
cs.scriptGuid = "149f0c51-15ff-47e9-52be-3a8cf38d05d0";
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
  (s.pc = "Q2qLPXrbKZE2LxS6");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_VDkfW4zJy8vXPjEH$0, 'a_VDkfW4zJy8vXPjEH$0');

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
  d.$xDUuDYIkRer7brW1 = undefined;
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "write";
cs.authorId = "oovd";
cs.scriptGuid = "149f0c51-15ff-47e9-52be-3a8cf38d05d0";
})}
