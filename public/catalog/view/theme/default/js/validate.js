function hideerror() {
  $(".formError").remove();
}
function hidemsg() {
  $(".contact-success").remove(), $(".register-success").remove();
}
function checkEmail(i) {
  var r = document.getElementById(i),
    l = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return l.test(r.value) ? !0 : !1;
}
function checkNull(i, r, l, s, v) {
  var d = $("#" + i).val();
  return "" == d || d == l
    ? ($("#error_" + i).length > 0
        ? $("#error_" + i).html(r)
        : $("#" + i).after(
            '<div class="nameformError parentFormfrm_contact formError" style="left: ' +
              s +
              "px; margin-top: " +
              v +
              'px; opacity: 0.8;"><div id="error_' +
              i +
              '" class="formErrorContent">' +
              r +
              '<br></div><div class="formErrorArrow"><div class="line10"></div><div class="line9"></div><div class="line8"></div><div class="line7"></div><div class="line6"></div><div class="line5"></div><div class="line4"></div><div class="line3n"></div><div class="line2n"></div><div class="line1"></div></div></div>'
          ),
      !1)
    : !0;
}
function checkMail(i, r, l, s, v) {
  return checkEmail(i)
    ? !0
    : ($("#error_" + i).length > 0
        ? $("#error_" + i).html(r)
        : $("#" + i).after(
            '<div class="nameformError parentFormfrm_contact formError" style="left: ' +
              s +
              "px; margin-top: " +
              v +
              'px; opacity: 0.8;"><div id="error_' +
              i +
              '" class="formErrorContent">' +
              r +
              '<br></div><div class="formErrorArrow"><div class="line10"></div><div class="line9"></div><div class="line8"></div><div class="line7"></div><div class="line6"></div><div class="line5"></div><div class="line4"></div><div class="line3n"></div><div class="line2n"></div><div class="line1"></div></div></div>'
          ),
      !1);
}
function checkCaptcha(i, r, l, s, v) {
  var d = $("#" + i).val(),
    e = $("#" + i + "_bk").val();
  return d != e
    ? ($("#error_" + i).length > 0
        ? $("#error_" + i).html(r)
        : $("#" + i).after(
            '<div class="nameformError parentFormfrm_contact formError" style="left: ' +
              s +
              "px; margin-top: " +
              v +
              'px; opacity: 0.8;"><div id="error_' +
              i +
              '" class="formErrorContent">' +
              r +
              '<br></div><div class="formErrorArrow"><div class="line10"></div><div class="line9"></div><div class="line8"></div><div class="line7"></div><div class="line6"></div><div class="line5"></div><div class="line4"></div><div class="line3n"></div><div class="line2n"></div><div class="line1"></div></div></div>'
          ),
      !1)
    : !0;
}
function checkNullTwo(i, r, l, s, v, d, e) {
  var n = $("#" + i).val(),
    a = $("#" + r).val();
  return "" == n || n == s || "" == a || a == v
    ? ($("#error_" + i).length > 0
        ? $("#error_" + i).html(l)
        : $("#" + i).after(
            '<div class="nameformError parentFormfrm_contact formError" style="left: ' +
              d +
              "px; margin-top: " +
              e +
              'px; opacity: 0.8;"><div id="error_' +
              i +
              '" class="formErrorContent">' +
              l +
              '<br></div><div class="formErrorArrow"><div class="line10"></div><div class="line9"></div><div class="line8"></div><div class="line7"></div><div class="line6"></div><div class="line5"></div><div class="line4"></div><div class="line3n"></div><div class="line2n"></div><div class="line1"></div></div></div>'
          ),
      !1)
    : !0;
}
