function ResizeWindows() {
  var e,
    i,
    o =
      ($(window).height() > $(window).width(),
      $(window).height() <= $(window).width(),
      $(".bg-home img"),
      $(".bg-inner img"),
      $(window).width()),
    t = $(window).height(),
    n = t / o,
    a = 0.234375,
    s = 340 / 1920,
    r = 1e3 / 1920,
    d = 800 / 1920;
  if (
    (n > a ? ((i = t), (e = t / a)) : ((i = o * a), (e = o)),
    $("#about-page").length && (s = 0.234375),
    $(".album-pic-center").css({ height: t }),
    $(".container").css({ "min-height": t }),
    $(
      ".news-load, .schedule-load,.cinema-price-load, .news-tab-content, .about-section"
    ).css({ "min-height": t / 2 }),
    1100 >= o)
  )
    $(".nav-click").css({ display: "block", opacity: 1 }),
      $(".scroll-down").css({ top: t - 70 }),
      $(".navigation").css({ height: t - 166 }),
      $(".scrollB, .scrollT").getNiceScroll().remove(),
      $(".scrollB").css({
        height: "auto",
        width: "100%",
        "max-height": "inherit",
      }),
      $(
        ".flipoutx, .flipinx, .fadeinup, .fadeout, .fadeindown, .heightup, .hide"
      ).length &&
        $("div")
          .removeClass("flipoutx")
          .removeClass("flipinx")
          .removeClass("fadeinup")
          .removeClass("fadeindown")
          .removeClass("heightup")
          .removeClass("fadeout")
          .removeClass("hide")
          .removeClass("show"),
      $(".bg-home").css({ width: o, height: o * a }),
      $(".bg-inner").css({ width: o, height: o * s }),
      $(".promotion-slide").css({ width: "100%", "margin-left": 0 }),
      $(".news-list").css({ width: "100%", "margin-left": 0 }),
      $(".contact-info-content").css({ height: "auto" }),
      $(".contact-info-content .bg-cover").css({
        width: "100%",
        height: o * d,
      });
  else if (o > 1100) {
    if (
      ($(".nav-click").css({ display: "none", opacity: 0 }),
      $(".scroll-down, .go-top").css({ display: "none", opacity: 0 }),
      $(".navigation").css({ height: "auto" }),
      $(".bg-home").css({ width: o, height: o * a }),
      $(".bg-inner").css({ width: o, height: o * s }),
      $("#home-page").length)
    ) {
      var c = $(".slider-home").offset().top + o * a;
      $(".scroll-down-desktop").css({ top: c - 80 });
    }
    $(".promotion-slide").css({
      width: $(".promotion-wrap").width() - 116,
      "margin-left": 116,
    }),
      $(".news-list").css({
        width: $(".news-wrap").width() - 116,
        "margin-left": 116,
      }),
      $(".term-pop").css({ height: t - 60, "margin-top": -(t - 60) / 2 }),
      $(".scrollB").css({
        width: $(".term-pop").innerWidth() - 40,
        height: $(".term-pop").innerHeight() - 40,
      }),
      $(".contact-info-content, .contact-info-content .bg-cover").css({
        width: "100%",
        height: o * r,
      });
  }
  var h = $(".sub-tab li").length;
  $(".sub-tab li").each(function (e, i) {
    $(i).css({ "z-index": h - e });
  });
}
function Done() {
  ResizeWindows(),
    $("html, body").scrollTop(0),
    ContentLoad(),
    $(".loadicon").fadeOut(500, function () {
      $(".loadicon").remove(),
        $(".container").css({ opacity: 1 }),
        $(".language").addClass("show");
    });
}
var ua = navigator.userAgent,
  androidversion = parseFloat(ua.slice(ua.indexOf("Android") + 8)),
  isTouchDevice =
    "ontouchstart" in window ||
    (window.DocumentTouch && document instanceof DocumentTouch),
  isTouch = "ontouchstart" in window || window.navigator.msMaxTouchPoints,
  isDesktop = 0 == $(window).width() || isTouchDevice ? !1 : !0,
  isTouchIE =
    -1 != navigator.userAgent.toLowerCase().indexOf("msie") &&
    navigator.msMaxTouchPoints > 0,
  isIE11 = !!window.MSStream,
  isiPad = -1 != navigator.userAgent.indexOf("iPad"),
  isiPhone = -1 != navigator.userAgent.indexOf("iPhone"),
  isiPod = -1 != navigator.userAgent.indexOf("iPod"),
  isAndroid = -1 != navigator.userAgent.indexOf("Android"),
  isIE =
    -1 != navigator.userAgent.toLowerCase().indexOf("msie") &&
    0 != $(window).width(),
  isChrome = navigator.userAgent.toLowerCase().indexOf("chrome") > -1,
  isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  isSafari = navigator.userAgent.toLowerCase().indexOf("safari") > -1,
  IEMobile =
    "-ms-user-select" in document.documentElement.style &&
    navigator.userAgent.match(/IEMobile\/10\.0/),
  match = navigator.userAgent.match("MSIE (.)"),
  versions = match && match.length > 1 ? match[1] : "unknown",
  userAgent = navigator.userAgent.toLowerCase(),
  version = 0;
(userAgent = userAgent.substring(userAgent.indexOf("safari/") + 7)),
  (userAgent = userAgent.substring(0, userAgent.indexOf("."))),
  (version = userAgent);
var Loadx = 0;
!(function (e) {
  Array.prototype.indexOf ||
    (Array.prototype.indexOf = function (e) {
      var i = this.length >>> 0,
        o = Number(arguments[1]) || 0;
      for (
        o = 0 > o ? Math.ceil(o) : Math.floor(o), 0 > o && (o += i);
        i > o;
        o++
      )
        if (o in this && this[o] === e) return o;
      return -1;
    });
  var i = (e(window).height(), e(window).width(), new Array()),
    o = 0,
    t = !1,
    n = "",
    a = "",
    s = "",
    r = "",
    d = 0,
    c = 0,
    h = {
      onComplete: function () {
        e("#qLoverlay").remove(), e("body .item-load").remove();
      },
      backgroundColor: "#fff",
      barColor: "#fff",
      barHeight: 1,
      percentage: !0,
      deepSearch: !0,
      completeAnimation: "fade",
      minimumTime: 500,
      onLoadComplete: function () {
        if ("grow" == h.completeAnimation) {
          var i = 100,
            o = new Date();
          o.getTime() - c < h.minimumTime &&
            (i = h.minimumTime - (o.getTime() - c)),
            e("#qLbar")
              .stop()
              .animate({ width: "100%" }, i, function () {
                e("#qLoverlay").fadeOut(200, function () {
                  h.onComplete(),
                    0 == Loadx && ((Loadx = 1), Done()),
                    ResizeWindows();
                });
              });
        }
      },
    },
    g = function () {
      var e = new Date();
      (c = e.getTime()), l(), p();
    },
    l = function () {
      n = e('<div class="item-load"></div>')
        .appendTo("body")
        .css({ display: "none", width: 0, height: 0, overflow: "hidden" });
      for (var o = 0; i.length > o; o++)
        e.ajax({
          url: i[o],
          type: "HEAD",
          success: function () {
            t || (d++, u(this.url));
          },
        });
    },
    u = function (i) {
      e("<img />")
        .attr("src", i)
        .bind("load", function () {
          f();
        })
        .appendTo(n);
    },
    f = function () {
      o++;
      var i = (o / d) * 100;
      e(s)
        .stop()
        .animate({ width: i + "%", minWidth: i + "%" }, 200),
        1 == h.percentage && e(r).text(Math.ceil(i) + "%"),
        o == d && m();
    },
    m = function () {
      e(n).remove(), h.onLoadComplete(), (t = !0);
    },
    p = function () {
      (a = e('<div id="qLoverlay"></div>')
        .css({
          width: "100%",
          height: "10px",
          position: "absolute",
          zIndex: 1e3,
          top: 0,
          left: 0,
        })
        .appendTo("body")),
        (s = e('<div id="qLbar"></div>')
          .css({
            height: h.barHeight + "px",
            backgroundColor: h.barColor,
            width: "0%",
            position: "absolute",
            top: "0px",
          })
          .appendTo(a)),
        1 == h.percentage &&
          (r = e('<div id="qLpercentage"></div>')
            .text("0%")
            .css({
              height: "1px",
              width: "1px",
              position: "absolute",
              fontSize: "0px",
              top: "50%",
              left: "50%",
              marginTop: "60px",
              textAlign: "center",
              marginLeft: "-60px",
              color: "#fff",
            })
            .appendTo(a));
    },
    w = function (o) {
      var t = "";
      if ("none" != e(o).css("background-image"))
        var t = e(o).css("background-image");
      else if (
        "undefined" != typeof e(o).attr("src") &&
        "img" == o.nodeName.toLowerCase()
      )
        var t = e(o).attr("src");
      if (-1 == t.indexOf("gradient")) {
        (t = t.replace(/url\(\"/g, "")),
          (t = t.replace(/url\(/g, "")),
          (t = t.replace(/\"\)/g, "")),
          (t = t.replace(/\)/g, ""));
        for (var n = t.split(", "), a = 0; a < n.length; a++)
          if (n[a].length > 0 && -1 == i.indexOf(n[a])) {
            var s = "";
            i.push(n[a] + s);
          }
      }
    };
  e.fn.queryLoader = function (i) {
    return (
      i && e.extend(h, i),
      this.each(function () {
        w(this),
          1 == h.deepSearch &&
            e(this)
              .find("*:not(script)")
              .each(function () {
                w(this);
              });
      }),
      g(),
      this
    );
  };
})(jQuery),
  $(document).ready(function () {
    ResizeWindows(),
      $("html, body").scrollTop(0),
      $("body").append(
        '<div class="loadicon" style="display:block"><span class="circle"></span></div>'
      ),
      $("body").queryLoader({
        barColor: "#fff",
        percentage: !0,
        barHeight: 1,
        completeAnimation: "grow",
        minimumTime: 100,
      }),
      setTimeout(function () {
        0 == Loadx && ((Loadx = 1), Done());
      }, 500);
  });
