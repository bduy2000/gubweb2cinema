!(function (t) {
  function e(e, i, n, s) {
    var o = e.text().split(i),
      r = "";
    o.length &&
      (t(o).each(function (t, e) {
        r += '<span class="' + n + (t + 1) + '">' + e + "</span>" + s;
      }),
      e.empty().append(r));
  }
  var i = {
    init: function () {
      return this.each(function () {
        e(t(this), "", "char", "");
      });
    },
    words: function () {
      return this.each(function () {
        e(t(this), " ", "word", " ");
      });
    },
    lines: function () {
      return this.each(function () {
        var i = "eefec303079ad17405c889e092e105b0";
        e(t(this).children("br").replaceWith(i).end(), i, "line", "");
      });
    },
  };
  t.fn.lettering = function (e) {
    return e && i[e]
      ? i[e].apply(this, [].slice.call(arguments, 1))
      : "letters" !== e && e
      ? (t.error("Method " + e + " does not exist on jQuery.lettering"), this)
      : i.init.apply(this, [].slice.call(arguments, 0));
  };
})(jQuery),
  (jQuery.easing.jswing = jQuery.easing.swing),
  jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (t, e, i, n, s) {
      return jQuery.easing[jQuery.easing.def](t, e, i, n, s);
    },
    easeInQuad: function (t, e, i, n, s) {
      return n * (e /= s) * e + i;
    },
    easeOutQuad: function (t, e, i, n, s) {
      return -n * (e /= s) * (e - 2) + i;
    },
    easeInOutQuad: function (t, e, i, n, s) {
      return (e /= s / 2) < 1
        ? (n / 2) * e * e + i
        : (-n / 2) * (--e * (e - 2) - 1) + i;
    },
    easeInCubic: function (t, e, i, n, s) {
      return n * (e /= s) * e * e + i;
    },
    easeOutCubic: function (t, e, i, n, s) {
      return n * ((e = e / s - 1) * e * e + 1) + i;
    },
    easeInOutCubic: function (t, e, i, n, s) {
      return (e /= s / 2) < 1
        ? (n / 2) * e * e * e + i
        : (n / 2) * ((e -= 2) * e * e + 2) + i;
    },
    easeInQuart: function (t, e, i, n, s) {
      return n * (e /= s) * e * e * e + i;
    },
    easeOutQuart: function (t, e, i, n, s) {
      return -n * ((e = e / s - 1) * e * e * e - 1) + i;
    },
    easeInOutQuart: function (t, e, i, n, s) {
      return (e /= s / 2) < 1
        ? (n / 2) * e * e * e * e + i
        : (-n / 2) * ((e -= 2) * e * e * e - 2) + i;
    },
    easeInQuint: function (t, e, i, n, s) {
      return n * (e /= s) * e * e * e * e + i;
    },
    easeOutQuint: function (t, e, i, n, s) {
      return n * ((e = e / s - 1) * e * e * e * e + 1) + i;
    },
    easeInOutQuint: function (t, e, i, n, s) {
      return (e /= s / 2) < 1
        ? (n / 2) * e * e * e * e * e + i
        : (n / 2) * ((e -= 2) * e * e * e * e + 2) + i;
    },
    easeInSine: function (t, e, i, n, s) {
      return -n * Math.cos((e / s) * (Math.PI / 2)) + n + i;
    },
    easeOutSine: function (t, e, i, n, s) {
      return n * Math.sin((e / s) * (Math.PI / 2)) + i;
    },
    easeInOutSine: function (t, e, i, n, s) {
      return (-n / 2) * (Math.cos((Math.PI * e) / s) - 1) + i;
    },
    easeInExpo: function (t, e, i, n, s) {
      return 0 == e ? i : n * Math.pow(2, 10 * (e / s - 1)) + i;
    },
    easeOutExpo: function (t, e, i, n, s) {
      return e == s ? i + n : n * (-Math.pow(2, (-10 * e) / s) + 1) + i;
    },
    easeInOutExpo: function (t, e, i, n, s) {
      return 0 == e
        ? i
        : e == s
        ? i + n
        : (e /= s / 2) < 1
        ? (n / 2) * Math.pow(2, 10 * (e - 1)) + i
        : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + i;
    },
    easeInCirc: function (t, e, i, n, s) {
      return -n * (Math.sqrt(1 - (e /= s) * e) - 1) + i;
    },
    easeOutCirc: function (t, e, i, n, s) {
      return n * Math.sqrt(1 - (e = e / s - 1) * e) + i;
    },
    easeInOutCirc: function (t, e, i, n, s) {
      return (e /= s / 2) < 1
        ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + i
        : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + i;
    },
    easeInElastic: function (t, e, i, n, s) {
      var o = 1.70158,
        r = 0,
        a = n;
      if (0 == e) return i;
      if (1 == (e /= s)) return i + n;
      if ((r || (r = 0.3 * s), a < Math.abs(n))) {
        a = n;
        var o = r / 4;
      } else var o = (r / (2 * Math.PI)) * Math.asin(n / a);
      return (
        -(
          a *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin((2 * (e * s - o) * Math.PI) / r)
        ) + i
      );
    },
    easeOutElastic: function (t, e, i, n, s) {
      var o = 1.70158,
        r = 0,
        a = n;
      if (0 == e) return i;
      if (1 == (e /= s)) return i + n;
      if ((r || (r = 0.3 * s), a < Math.abs(n))) {
        a = n;
        var o = r / 4;
      } else var o = (r / (2 * Math.PI)) * Math.asin(n / a);
      return (
        a * Math.pow(2, -10 * e) * Math.sin((2 * (e * s - o) * Math.PI) / r) +
        n +
        i
      );
    },
    easeInOutElastic: function (t, e, i, n, s) {
      var o = 1.70158,
        r = 0,
        a = n;
      if (0 == e) return i;
      if (2 == (e /= s / 2)) return i + n;
      if ((r || (r = 0.3 * s * 1.5), a < Math.abs(n))) {
        a = n;
        var o = r / 4;
      } else var o = (r / (2 * Math.PI)) * Math.asin(n / a);
      return 1 > e
        ? -0.5 *
            a *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin((2 * (e * s - o) * Math.PI) / r) +
            i
        : a *
            Math.pow(2, -10 * (e -= 1)) *
            Math.sin((2 * (e * s - o) * Math.PI) / r) *
            0.5 +
            n +
            i;
    },
    easeInBack: function (t, e, i, n, s, o) {
      return (
        void 0 == o && (o = 1.70158), n * (e /= s) * e * ((o + 1) * e - o) + i
      );
    },
    easeOutBack: function (t, e, i, n, s, o) {
      return (
        void 0 == o && (o = 1.70158),
        n * ((e = e / s - 1) * e * ((o + 1) * e + o) + 1) + i
      );
    },
    easeInOutBack: function (t, e, i, n, s, o) {
      return (
        void 0 == o && (o = 1.70158),
        (e /= s / 2) < 1
          ? (n / 2) * e * e * (((o *= 1.525) + 1) * e - o) + i
          : (n / 2) * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + i
      );
    },
    easeInBounce: function (t, e, i, n, s) {
      return n - jQuery.easing.easeOutBounce(t, s - e, 0, n, s) + i;
    },
    easeOutBounce: function (t, e, i, n, s) {
      return (e /= s) < 1 / 2.75
        ? 7.5625 * n * e * e + i
        : 2 / 2.75 > e
        ? n * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + i
        : 2.5 / 2.75 > e
        ? n * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + i
        : n * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + i;
    },
    easeInOutBounce: function (t, e, i, n, s) {
      return s / 2 > e
        ? 0.5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, s) + i
        : 0.5 * jQuery.easing.easeOutBounce(t, 2 * e - s, 0, n, s) +
            0.5 * n +
            i;
    },
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "object" == typeof exports
      ? (module.exports = t)
      : t(jQuery);
  })(function (t) {
    function e(e) {
      var r = e || window.event,
        a = h.call(arguments, 1),
        l = 0,
        c = 0,
        u = 0,
        f = 0;
      if (
        ((e = t.event.fix(r)),
        (e.type = "mousewheel"),
        "detail" in r && (u = -1 * r.detail),
        "wheelDelta" in r && (u = r.wheelDelta),
        "wheelDeltaY" in r && (u = r.wheelDeltaY),
        "wheelDeltaX" in r && (c = -1 * r.wheelDeltaX),
        "axis" in r && r.axis === r.HORIZONTAL_AXIS && ((c = -1 * u), (u = 0)),
        (l = 0 === u ? c : u),
        "deltaY" in r && ((u = -1 * r.deltaY), (l = u)),
        "deltaX" in r && ((c = r.deltaX), 0 === u && (l = -1 * c)),
        0 !== u || 0 !== c)
      ) {
        if (1 === r.deltaMode) {
          var d = t.data(this, "mousewheel-line-height");
          (l *= d), (u *= d), (c *= d);
        } else if (2 === r.deltaMode) {
          var p = t.data(this, "mousewheel-page-height");
          (l *= p), (u *= p), (c *= p);
        }
        return (
          (f = Math.max(Math.abs(u), Math.abs(c))),
          (!o || o > f) && ((o = f), n(r, f) && (o /= 40)),
          n(r, f) && ((l /= 40), (c /= 40), (u /= 40)),
          (l = Math[l >= 1 ? "floor" : "ceil"](l / o)),
          (c = Math[c >= 1 ? "floor" : "ceil"](c / o)),
          (u = Math[u >= 1 ? "floor" : "ceil"](u / o)),
          (e.deltaX = c),
          (e.deltaY = u),
          (e.deltaFactor = o),
          (e.deltaMode = 0),
          a.unshift(e, l, c, u),
          s && clearTimeout(s),
          (s = setTimeout(i, 200)),
          (t.event.dispatch || t.event.handle).apply(this, a)
        );
      }
    }
    function i() {
      o = null;
    }
    function n(t, e) {
      return (
        c.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
      );
    }
    var s,
      o,
      r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      a =
        "onwheel" in document || document.documentMode >= 9
          ? ["wheel"]
          : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      h = Array.prototype.slice;
    if (t.event.fixHooks)
      for (var l = r.length; l; ) t.event.fixHooks[r[--l]] = t.event.mouseHooks;
    var c = (t.event.special.mousewheel = {
      version: "3.1.9",
      setup: function () {
        if (this.addEventListener)
          for (var i = a.length; i; ) this.addEventListener(a[--i], e, !1);
        else this.onmousewheel = e;
        t.data(this, "mousewheel-line-height", c.getLineHeight(this)),
          t.data(this, "mousewheel-page-height", c.getPageHeight(this));
      },
      teardown: function () {
        if (this.removeEventListener)
          for (var t = a.length; t; ) this.removeEventListener(a[--t], e, !1);
        else this.onmousewheel = null;
      },
      getLineHeight: function (e) {
        return parseInt(
          t(e)
            ["offsetParent" in t.fn ? "offsetParent" : "parent"]()
            .css("fontSize"),
          10
        );
      },
      getPageHeight: function (e) {
        return t(e).height();
      },
      settings: { adjustOldDeltas: !0 },
    });
    t.fn.extend({
      mousewheel: function (t) {
        return t ? this.bind("mousewheel", t) : this.trigger("mousewheel");
      },
      unmousewheel: function (t) {
        return this.unbind("mousewheel", t);
      },
    });
  }),
  (function (t) {
    function e(t) {
      var e = t.data("_ARS_data");
      return (
        e ||
          ((e = { rotateUnits: "deg", scale: 1, rotate: 0 }),
          t.data("_ARS_data", e)),
        e
      );
    }
    function i(t, e) {
      t.css(
        "transform",
        "rotate(" +
          e.rotate +
          e.rotateUnits +
          ") scale(" +
          e.scale +
          "," +
          e.scale +
          ")"
      );
    }
    (t.fn.rotate = function (n) {
      var s,
        o = t(this),
        r = e(o);
      return "undefined" == typeof n
        ? r.rotate + r.rotateUnits
        : ((s = n.toString().match(/^(-?\d+(\.\d+)?)(.+)?$/)),
          s && (s[3] && (r.rotateUnits = s[3]), (r.rotate = s[1]), i(o, r)),
          this);
    }),
      (t.fn.scale = function (n) {
        var s = t(this),
          o = e(s);
        return "undefined" == typeof n
          ? o.scale
          : ((o.scale = n), i(s, o), this);
      });
    var n = t.fx.prototype.cur;
    (t.fx.prototype.cur = function () {
      return "rotate" == this.prop
        ? parseFloat(t(this.elem).rotate())
        : "scale" == this.prop
        ? parseFloat(t(this.elem).scale())
        : n.apply(this, arguments);
    }),
      (t.fx.step.rotate = function (i) {
        var n = e(t(i.elem));
        t(i.elem).rotate(i.now + n.rotateUnits);
      }),
      (t.fx.step.scale = function (e) {
        t(e.elem).scale(e.now);
      });
    var s = t.fn.animate;
    t.fn.animate = function (i) {
      if ("undefined" != typeof i.rotate) {
        var n,
          o,
          r = i.rotate.toString().match(/^(([+-]=)?(-?\d+(\.\d+)?))(.+)?$/);
        r && r[5] && ((n = t(this)), (o = e(n)), (o.rotateUnits = r[5])),
          (i.rotate = r[1]);
      }
      return s.apply(this, arguments);
    };
  })(jQuery),
  (window.Swipe = function (t, e) {
    if (!t) return null;
    (this.options = e || {}),
      (this.index = this.options.startSlide || 0),
      (this.speed = this.options.speed || 300),
      (this.callback = this.options.callback || function () {}),
      (this.delay = this.options.auto || 0),
      (this.container = t),
      (this.element = this.container.children[0]),
      (this.container.style.overflow = "hidden"),
      (this.element.style.listStyle = "none"),
      this.setup(),
      this.begin(),
      this.element.addEventListener &&
        (this.element.addEventListener("touchstart", this, !1),
        this.element.addEventListener("touchmove", this, !1),
        this.element.addEventListener("touchend", this, !1),
        this.element.addEventListener("webkitTransitionEnd", this, !1),
        this.element.addEventListener("msTransitionEnd", this, !1),
        this.element.addEventListener("oTransitionEnd", this, !1),
        this.element.addEventListener("transitionend", this, !1),
        window.addEventListener("resize", this, !1));
  }),
  (Swipe.prototype = {
    setup: function () {
      if (
        ((this.slides = this.element.children),
        (this.length = this.slides.length),
        this.length < 2)
      )
        return null;
      if (
        ((this.width = this.container.getBoundingClientRect().width),
        !this.width)
      )
        return null;
      (this.container.style.visibility = "hidden"),
        (this.element.style.width = this.slides.length * this.width + "px");
      for (var t = this.slides.length; t--; ) {
        var e = this.slides[t];
        (e.style.width = this.width + "px"),
          (e.style.display = "table-cell"),
          (e.style.verticalAlign = "top");
      }
      this.slide(this.index, 0), (this.container.style.visibility = "visible");
    },
    slide: function (t, e) {
      var i = this.element.style;
      void 0 == e && (e = this.speed),
        (i.webkitTransitionDuration =
          i.MozTransitionDuration =
          i.msTransitionDuration =
          i.OTransitionDuration =
          i.transitionDuration =
            e + "ms"),
        (i.MozTransform = i.webkitTransform =
          "translate3d(" + -(t * this.width) + "px,0,0)"),
        (i.msTransform = i.OTransform =
          "translateX(" + -(t * this.width) + "px)"),
        (this.index = t);
    },
    getPos: function () {
      return this.index;
    },
    prev: function (t) {
      (this.delay = t || 0),
        clearTimeout(this.interval),
        this.index && this.slide(this.index - 1, this.speed);
    },
    next: function (t) {
      (this.delay = t || 0),
        clearTimeout(this.interval),
        this.index < this.length - 1
          ? this.slide(this.index + 1, this.speed)
          : this.slide(0, this.speed);
    },
    begin: function () {
      var t = this;
      this.interval = this.delay
        ? setTimeout(function () {
            t.next(t.delay);
          }, this.delay)
        : 0;
    },
    stop: function () {
      (this.delay = 0), clearTimeout(this.interval);
    },
    resume: function () {
      (this.delay = this.options.auto || 0), this.begin();
    },
    handleEvent: function (t) {
      switch (t.type) {
        case "touchstart":
          this.onTouchStart(t);
          break;
        case "touchmove":
          this.onTouchMove(t);
          break;
        case "touchend":
          this.onTouchEnd(t);
          break;
        case "webkitTransitionEnd":
        case "msTransitionEnd":
        case "oTransitionEnd":
        case "transitionend":
          this.transitionEnd(t);
          break;
        case "resize":
          this.setup();
      }
    },
    transitionEnd: function (t) {
      this.delay && this.begin(),
        this.callback(t, this.index, this.slides[this.index]);
    },
    onTouchStart: function (t) {
      (this.start = {
        pageX: t.touches[0].pageX,
        pageY: t.touches[0].pageY,
        time: Number(new Date()),
      }),
        (this.isScrolling = void 0),
        (this.deltaX = 0),
        (this.element.style.MozTransitionDuration =
          this.element.style.webkitTransitionDuration =
            0);
    },
    onTouchMove: function (t) {
      t.touches.length > 1 ||
        (t.scale && 1 !== t.scale) ||
        ((this.deltaX = t.touches[0].pageX - this.start.pageX),
        "undefined" == typeof this.isScrolling &&
          (this.isScrolling = !!(
            this.isScrolling ||
            Math.abs(this.deltaX) <
              Math.abs(t.touches[0].pageY - this.start.pageY)
          )),
        this.isScrolling ||
          (t.preventDefault(),
          clearTimeout(this.interval),
          (this.deltaX =
            this.deltaX /
            ((!this.index && this.deltaX > 0) ||
            (this.index == this.length - 1 && this.deltaX < 0)
              ? Math.abs(this.deltaX) / this.width + 1
              : 1)),
          (this.element.style.MozTransform =
            this.element.style.webkitTransform =
              "translate3d(" +
              (this.deltaX - this.index * this.width) +
              "px,0,0)")));
    },
    onTouchEnd: function (t) {
      var e =
          (Number(new Date()) - this.start.time < 250 &&
            Math.abs(this.deltaX) > 20) ||
          Math.abs(this.deltaX) > this.width / 2,
        i =
          (!this.index && this.deltaX > 0) ||
          (this.index == this.length - 1 && this.deltaX < 0);
      this.isScrolling ||
        this.slide(
          this.index + (e && !i ? (this.deltaX < 0 ? 1 : -1) : 0),
          this.speed
        );
    },
  }),
  (function (t) {
    "use strict";
    var e = "draptouch-active";
    window.requestAnimationFrame ||
      (window.requestAnimationFrame = (function () {
        return (
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (t, e) {
            window.setTimeout(t, 1e3 / 60);
          }
        );
      })()),
      (t.support = t.support || {}),
      t.extend(t.support, { touch: "ontouchend" in document });
    var i = function () {
        return !1;
      },
      n = function (e, i) {
        return (
          (this.settings = i),
          (this.el = e),
          (this.$el = t(e)),
          this._initElements(),
          this
        );
      };
    (n.DATA_KEY = "draptouch"),
      (n.DEFAULTS = {
        cursor: "",
        decelerate: !0,
        triggerHardware: !1,
        threshold: 0,
        y: !0,
        x: !0,
        slowdown: 0.9,
        maxvelocity: 40,
        throttleFPS: 60,
        movingClass: {
          up: "draptouch-moving-up",
          down: "draptouch-moving-down",
          left: "draptouch-moving-left",
          right: "draptouch-moving-right",
        },
        deceleratingClass: {
          up: "draptouch-decelerating-up",
          down: "draptouch-decelerating-down",
          left: "draptouch-decelerating-left",
          right: "draptouch-decelerating-right",
        },
      }),
      (n.prototype.start = function (e) {
        (this.settings = t.extend(this.settings, e)),
          (this.velocity = e.velocity || this.velocity),
          (this.velocityY = e.velocityY || this.velocityY),
          (this.settings.decelerate = !1),
          this._move();
      }),
      (n.prototype.end = function () {
        this.settings.decelerate = !0;
      }),
      (n.prototype.stop = function () {
        (this.velocity = 0),
          (this.velocityY = 0),
          (this.settings.decelerate = !0),
          t.isFunction(this.settings.stopped) &&
            this.settings.stopped.call(this);
      }),
      (n.prototype.detach = function () {
        this._detachListeners(), this.$el.removeClass(e).css("cursor", "");
      }),
      (n.prototype.attach = function () {
        this.$el.hasClass(e) ||
          (this._attachListeners(this.$el),
          this.$el.addClass(e).css("cursor", this.settings.cursor));
      }),
      (n.prototype._initElements = function () {
        this.$el.addClass(e),
          t.extend(this, {
            xpos: null,
            prevXPos: !1,
            ypos: null,
            prevYPos: !1,
            mouseDown: !1,
            throttleTimeout: 1e3 / this.settings.throttleFPS,
            lastMove: null,
            elementFocused: null,
          }),
          (this.velocity = 0),
          (this.velocityY = 0),
          t(document)
            .mouseup(t.proxy(this._resetMouse, this))
            .click(t.proxy(this._resetMouse, this)),
          this._initEvents(),
          this.$el.css("cursor", this.settings.cursor),
          this.settings.triggerHardware &&
            this.$el.css({
              "-webkit-transform": "translate3d(0,0,0)",
              "-webkit-perspective": "1000",
              "-webkit-backface-visibility": "hidden",
            });
      }),
      (n.prototype._initEvents = function () {
        var e = this;
        (this.settings.events = {
          touchStart: function (t) {
            var i;
            e._useTarget(t.target, t) &&
              ((i = t.originalEvent.touches[0]),
              (e.threshold = e._threshold(t.target, t)),
              e._start(i.clientX, i.clientY),
              t.stopPropagation());
          },
          touchMove: function (t) {
            var i;
            e.mouseDown &&
              ((i = t.originalEvent.touches[0]),
              e._inputmove(i.clientX, i.clientY),
              t.preventDefault && t.preventDefault());
          },
          inputDown: function (t) {
            e._useTarget(t.target, t) &&
              ((e.threshold = e._threshold(t.target, t)),
              e._start(t.clientX, t.clientY),
              (e.elementFocused = t.target),
              "IMG" === t.target.nodeName && t.preventDefault(),
              t.stopPropagation());
          },
          inputEnd: function (t) {
            e._useTarget(t.target, t) &&
              (e._end(),
              (e.elementFocused = null),
              t.preventDefault && t.preventDefault());
          },
          inputMove: function (t) {
            e.mouseDown &&
              (e._inputmove(t.clientX, t.clientY),
              t.preventDefault && t.preventDefault());
          },
          scroll: function (i) {
            t.isFunction(e.settings.moved) &&
              e.settings.moved.call(e, e.settings),
              i.preventDefault && i.preventDefault();
          },
          inputClick: function (t) {
            return Math.abs(e.velocity) > 0 ? (t.preventDefault(), !1) : void 0;
          },
          dragStart: function (t) {
            return e._useTarget(t.target, t) && e.elementFocused ? !1 : void 0;
          },
        }),
          this._attachListeners(this.$el, this.settings);
      }),
      (n.prototype._inputmove = function (e, i) {
        {
          var n = this.$el;
          this.el;
        }
        if (
          (!this.lastMove ||
            new Date() >
              new Date(this.lastMove.getTime() + this.throttleTimeout)) &&
          ((this.lastMove = new Date()),
          this.mouseDown && (this.xpos || this.ypos))
        ) {
          var s = e - this.xpos,
            o = i - this.ypos;
          if (this.threshold > 0) {
            var r = Math.sqrt(s * s + o * o);
            if (this.threshold > r) return;
            this.threshold = 0;
          }
          this.elementFocused &&
            (t(this.elementFocused).blur(),
            (this.elementFocused = null),
            n.focus()),
            (this.settings.decelerate = !1),
            (this.velocity = this.velocityY = 0);
          var a = this.scrollLeft(),
            h = this.scrollTop();
          this.scrollLeft(this.settings.x ? a - s : a),
            this.scrollTop(this.settings.y ? h - o : h),
            (this.prevXPos = this.xpos),
            (this.prevYPos = this.ypos),
            (this.xpos = e),
            (this.ypos = i),
            this._calculateVelocities(),
            this._setMoveClasses(this.settings.movingClass),
            t.isFunction(this.settings.moved) &&
              this.settings.moved.call(this, this.settings);
        }
      }),
      (n.prototype._calculateVelocities = function () {
        (this.velocity = this._capVelocity(
          this.prevXPos - this.xpos,
          this.settings.maxvelocity
        )),
          (this.velocityY = this._capVelocity(
            this.prevYPos - this.ypos,
            this.settings.maxvelocity
          ));
      }),
      (n.prototype._end = function () {
        this.xpos &&
          this.prevXPos &&
          this.settings.decelerate === !1 &&
          ((this.settings.decelerate = !0),
          this._calculateVelocities(),
          (this.xpos = this.prevXPos = this.mouseDown = !1),
          this._move());
      }),
      (n.prototype._useTarget = function (e, i) {
        return t.isFunction(this.settings.filterTarget)
          ? this.settings.filterTarget.call(this, e, i) !== !1
          : !0;
      }),
      (n.prototype._threshold = function (e, i) {
        return t.isFunction(this.settings.threshold)
          ? this.settings.threshold.call(this, e, i)
          : this.settings.threshold;
      }),
      (n.prototype._start = function (t, e) {
        (this.mouseDown = !0),
          (this.velocity = this.prevXPos = 0),
          (this.velocityY = this.prevYPos = 0),
          (this.xpos = t),
          (this.ypos = e);
      }),
      (n.prototype._resetMouse = function () {
        (this.xpos = !1), (this.ypos = !1), (this.mouseDown = !1);
      }),
      (n.prototype._decelerateVelocity = function (t, e) {
        return 0 === Math.floor(Math.abs(t)) ? 0 : t * e;
      }),
      (n.prototype._capVelocity = function (t, e) {
        var i = t;
        return t > 0 ? t > e && (i = e) : 0 - e > t && (i = 0 - e), i;
      }),
      (n.prototype._setMoveClasses = function (t) {
        var e = this.settings,
          i = this.$el;
        i
          .removeClass(e.movingClass.up)
          .removeClass(e.movingClass.down)
          .removeClass(e.movingClass.left)
          .removeClass(e.movingClass.right)
          .removeClass(e.deceleratingClass.up)
          .removeClass(e.deceleratingClass.down)
          .removeClass(e.deceleratingClass.left)
          .removeClass(e.deceleratingClass.right),
          this.velocity > 0 && i.addClass(t.right),
          this.velocity < 0 && i.addClass(t.left),
          this.velocityY > 0 && i.addClass(t.down),
          this.velocityY < 0 && i.addClass(t.up);
      }),
      (n.prototype._move = function () {
        var e = (this.$el, this.el),
          i = this,
          n = i.settings;
        n.x && e.scrollWidth > 0
          ? (this.scrollLeft(this.scrollLeft() + this.velocity),
            Math.abs(this.velocity) > 0 &&
              (this.velocity = n.decelerate
                ? i._decelerateVelocity(this.velocity, n.slowdown)
                : this.velocity))
          : (this.velocity = 0),
          n.y && e.scrollHeight > 0
            ? (this.scrollTop(this.scrollTop() + this.velocityY),
              Math.abs(this.velocityY) > 0 &&
                (this.velocityY = n.decelerate
                  ? i._decelerateVelocity(this.velocityY, n.slowdown)
                  : this.velocityY))
            : (this.velocityY = 0),
          i._setMoveClasses(n.deceleratingClass),
          t.isFunction(n.moved) && n.moved.call(this, n),
          Math.abs(this.velocity) > 0 || Math.abs(this.velocityY) > 0
            ? this.moving ||
              ((this.moving = !0),
              window.requestAnimationFrame(function () {
                (i.moving = !1), i._move();
              }))
            : i.stop();
      }),
      (n.prototype._getScroller = function () {
        var e = this.$el;
        return (
          (this.$el.is("body") || this.$el.is("html")) && (e = t(window)), e
        );
      }),
      (n.prototype.scrollLeft = function (t) {
        var e = this._getScroller();
        return "number" != typeof t
          ? e.scrollLeft()
          : (e.scrollLeft(t), void (this.settings.scrollLeft = t));
      }),
      (n.prototype.scrollTop = function (t) {
        var e = this._getScroller();
        return "number" != typeof t
          ? e.scrollTop()
          : (e.scrollTop(t), void (this.settings.scrollTop = t));
      }),
      (n.prototype._attachListeners = function () {
        var e = this.$el,
          n = this.settings;
        t.support.touch &&
          e
            .bind("touchstart", n.events.touchStart)
            .bind("touchend", n.events.inputEnd)
            .bind("touchmove", n.events.touchMove),
          e
            .mousedown(n.events.inputDown)
            .mouseup(n.events.inputEnd)
            .mousemove(n.events.inputMove),
          e
            .click(n.events.inputClick)
            .scroll(n.events.scroll)
            .bind("selectstart", i)
            .bind("dragstart", n.events.dragStart);
      }),
      (n.prototype._detachListeners = function () {
        var e = this.$el,
          n = this.settings;
        t.support.touch &&
          e
            .unbind("touchstart", n.events.touchStart)
            .unbind("touchend", n.events.inputEnd)
            .unbind("touchmove", n.events.touchMove),
          e
            .unbind("mousedown", n.events.inputDown)
            .unbind("mouseup", n.events.inputEnd)
            .unbind("mousemove", n.events.inputMove),
          e
            .unbind("click", n.events.inputClick)
            .unbind("scroll", n.events.scroll)
            .unbind("selectstart", i)
            .unbind("dragstart", n.events.dragStart);
      }),
      (t.DrapTouch = n),
      (t.fn.draptouch = function (e, i) {
        return this.each(function () {
          var s = t(this),
            o = s.data(n.DATA_KEY),
            r = t.extend({}, n.DEFAULTS, s.data(), "object" == typeof e && e);
          o || s.data(n.DATA_KEY, (o = new n(this, r))),
            "string" == typeof e && o[e](i);
        });
      });
  })(window.jQuery || window.Zepto),
  (function (t) {
    "function" == typeof define && define.amd && define.amd.jQuery
      ? define(["jquery"], t)
      : t(jQuery);
  })(function (t) {
    "use strict";
    function e(e) {
      return (
        !e ||
          void 0 !== e.allowPageScroll ||
          (void 0 === e.swipe && void 0 === e.swipeStatus) ||
          (e.allowPageScroll = l),
        void 0 !== e.click && void 0 === e.tap && (e.tap = e.click),
        e || (e = {}),
        (e = t.extend({}, t.fn.swipe.defaults, e)),
        this.each(function () {
          var n = t(this),
            s = n.data(S);
          s || ((s = new i(this, e)), n.data(S, s));
        })
      );
    }
    function i(e, i) {
      function M(e) {
        if (!(lt() || t(e.target).closest(i.excludedElements, $t).length > 0)) {
          var n,
            s = e.originalEvent ? e.originalEvent : e,
            o = k ? s.touches[0] : s;
          return (
            (Nt = w),
            k ? (Xt = s.touches.length) : e.preventDefault(),
            (Pt = 0),
            (jt = null),
            (Qt = null),
            (At = 0),
            (Rt = 0),
            (Wt = 0),
            (Bt = 1),
            (Ht = 0),
            (Zt = pt()),
            (Yt = vt()),
            at(),
            !k || Xt === i.fingers || i.fingers === y || Y()
              ? (ut(0, o),
                (qt = xt()),
                2 == Xt &&
                  (ut(1, s.touches[1]),
                  (Rt = Wt = wt(Zt[0].start, Zt[1].start))),
                (i.swipeStatus || i.pinchStatus) && (n = P(s, Nt)))
              : (n = !1),
            n === !1
              ? ((Nt = T), P(s, Nt), n)
              : (i.hold &&
                  (te = setTimeout(
                    t.proxy(function () {
                      $t.trigger("hold", [s.target]),
                        i.hold && (n = i.hold.call($t, s, s.target));
                    }, this),
                    i.longTapThreshold
                  )),
                ct(!0),
                null)
          );
        }
      }
      function E(t) {
        var e = t.originalEvent ? t.originalEvent : t;
        if (Nt !== L && Nt !== T && !ht()) {
          var n,
            s = k ? e.touches[0] : e,
            o = ft(s);
          if (
            ((Ut = xt()),
            k && (Xt = e.touches.length),
            i.hold && clearTimeout(te),
            (Nt = C),
            2 == Xt &&
              (0 == Rt
                ? (ut(1, e.touches[1]),
                  (Rt = Wt = wt(Zt[0].start, Zt[1].start)))
                : (ft(e.touches[1]),
                  (Wt = wt(Zt[0].end, Zt[1].end)),
                  (Qt = Lt(Zt[0].end, Zt[1].end))),
              (Bt = Ct(Rt, Wt)),
              (Ht = Math.abs(Rt - Wt))),
            Xt === i.fingers || i.fingers === y || !k || Y())
          ) {
            if (
              ((jt = Ft(o.start, o.end)),
              H(t, jt),
              (Pt = Tt(o.start, o.end)),
              (At = bt()),
              gt(jt, Pt),
              (i.swipeStatus || i.pinchStatus) && (n = P(e, Nt)),
              !i.triggerOnTouchEnd || i.triggerOnTouchLeave)
            ) {
              var r = !0;
              if (i.triggerOnTouchLeave) {
                var a = St(this);
                r = Mt(o.end, a);
              }
              !i.triggerOnTouchEnd && r
                ? (Nt = I(C))
                : i.triggerOnTouchLeave && !r && (Nt = I(L)),
                (Nt == T || Nt == L) && P(e, Nt);
            }
          } else (Nt = T), P(e, Nt);
          n === !1 && ((Nt = T), P(e, Nt));
        }
      }
      function D(t) {
        var e = t.originalEvent;
        return k && e.touches.length > 0
          ? (rt(), !0)
          : (ht() && (Xt = Gt),
            (Ut = xt()),
            (At = bt()),
            R() || !A()
              ? ((Nt = T), P(e, Nt))
              : i.triggerOnTouchEnd || (0 == i.triggerOnTouchEnd && Nt === C)
              ? (t.preventDefault(), (Nt = L), P(e, Nt))
              : !i.triggerOnTouchEnd && V()
              ? ((Nt = L), j(e, Nt, d))
              : Nt === C && ((Nt = T), P(e, Nt)),
            ct(!1),
            null);
      }
      function _() {
        (Xt = 0),
          (Ut = 0),
          (qt = 0),
          (Rt = 0),
          (Wt = 0),
          (Bt = 1),
          at(),
          ct(!1);
      }
      function O(t) {
        var e = t.originalEvent;
        i.triggerOnTouchLeave && ((Nt = I(L)), P(e, Nt));
      }
      function z() {
        $t.unbind(Dt, M),
          $t.unbind(It, _),
          $t.unbind(_t, E),
          $t.unbind(Ot, D),
          zt && $t.unbind(zt, O),
          ct(!1);
      }
      function I(t) {
        var e = t,
          n = B(),
          s = A(),
          o = R();
        return (
          !n || o
            ? (e = T)
            : !s || t != C || (i.triggerOnTouchEnd && !i.triggerOnTouchLeave)
            ? !s && t == L && i.triggerOnTouchLeave && (e = T)
            : (e = L),
          e
        );
      }
      function P(t, e) {
        var i = void 0;
        return (
          Z() || X() || $() || Y()
            ? ((Z() || X()) && (i = j(t, e, u)),
              ($() || Y()) && i !== !1 && (i = j(t, e, f)))
            : st() && i !== !1
            ? (i = j(t, e, p))
            : ot() && i !== !1
            ? (i = j(t, e, g))
            : nt() && i !== !1 && (i = j(t, e, d)),
          e === T && _(t),
          e === L && (k ? 0 == t.touches.length && _(t) : _(t)),
          i
        );
      }
      function j(e, l, c) {
        var m = void 0;
        if (c == u) {
          if (
            ($t.trigger("swipeStatus", [
              l,
              jt || null,
              Pt || 0,
              At || 0,
              Xt,
              Zt,
            ]),
            i.swipeStatus &&
              ((m = i.swipeStatus.call(
                $t,
                e,
                l,
                jt || null,
                Pt || 0,
                At || 0,
                Xt,
                Zt
              )),
              m === !1))
          )
            return !1;
          if (l == L && N()) {
            if (
              ($t.trigger("swipe", [jt, Pt, At, Xt, Zt]),
              i.swipe &&
                ((m = i.swipe.call($t, e, jt, Pt, At, Xt, Zt)), m === !1))
            )
              return !1;
            switch (jt) {
              case n:
                $t.trigger("swipeLeft", [jt, Pt, At, Xt, Zt]),
                  i.swipeLeft &&
                    (m = i.swipeLeft.call($t, e, jt, Pt, At, Xt, Zt));
                break;
              case s:
                $t.trigger("swipeRight", [jt, Pt, At, Xt, Zt]),
                  i.swipeRight &&
                    (m = i.swipeRight.call($t, e, jt, Pt, At, Xt, Zt));
                break;
              case o:
                $t.trigger("swipeUp", [jt, Pt, At, Xt, Zt]),
                  i.swipeUp && (m = i.swipeUp.call($t, e, jt, Pt, At, Xt, Zt));
                break;
              case r:
                $t.trigger("swipeDown", [jt, Pt, At, Xt, Zt]),
                  i.swipeDown &&
                    (m = i.swipeDown.call($t, e, jt, Pt, At, Xt, Zt));
            }
          }
        }
        if (c == f) {
          if (
            ($t.trigger("pinchStatus", [
              l,
              Qt || null,
              Ht || 0,
              At || 0,
              Xt,
              Bt,
              Zt,
            ]),
            i.pinchStatus &&
              ((m = i.pinchStatus.call(
                $t,
                e,
                l,
                Qt || null,
                Ht || 0,
                At || 0,
                Xt,
                Bt,
                Zt
              )),
              m === !1))
          )
            return !1;
          if (l == L && Q())
            switch (Qt) {
              case a:
                $t.trigger("pinchIn", [
                  Qt || null,
                  Ht || 0,
                  At || 0,
                  Xt,
                  Bt,
                  Zt,
                ]),
                  i.pinchIn &&
                    (m = i.pinchIn.call(
                      $t,
                      e,
                      Qt || null,
                      Ht || 0,
                      At || 0,
                      Xt,
                      Bt,
                      Zt
                    ));
                break;
              case h:
                $t.trigger("pinchOut", [
                  Qt || null,
                  Ht || 0,
                  At || 0,
                  Xt,
                  Bt,
                  Zt,
                ]),
                  i.pinchOut &&
                    (m = i.pinchOut.call(
                      $t,
                      e,
                      Qt || null,
                      Ht || 0,
                      At || 0,
                      Xt,
                      Bt,
                      Zt
                    ));
            }
        }
        return (
          c == d
            ? (l === T || l === L) &&
              (clearTimeout(Kt),
              clearTimeout(te),
              G() && !tt()
                ? ((Jt = xt()),
                  (Kt = setTimeout(
                    t.proxy(function () {
                      (Jt = null),
                        $t.trigger("tap", [e.target]),
                        i.tap && (m = i.tap.call($t, e, e.target));
                    }, this),
                    i.doubleTapThreshold
                  )))
                : ((Jt = null),
                  $t.trigger("tap", [e.target]),
                  i.tap && (m = i.tap.call($t, e, e.target))))
            : c == p
            ? (l === T || l === L) &&
              (clearTimeout(Kt),
              (Jt = null),
              $t.trigger("doubletap", [e.target]),
              i.doubleTap && (m = i.doubleTap.call($t, e, e.target)))
            : c == g &&
              (l === T || l === L) &&
              (clearTimeout(Kt),
              (Jt = null),
              $t.trigger("longtap", [e.target]),
              i.longTap && (m = i.longTap.call($t, e, e.target))),
          m
        );
      }
      function A() {
        var t = !0;
        return null !== i.threshold && (t = Pt >= i.threshold), t;
      }
      function R() {
        var t = !1;
        return (
          null !== i.cancelThreshold &&
            null !== jt &&
            (t = mt(jt) - Pt >= i.cancelThreshold),
          t
        );
      }
      function W() {
        return null !== i.pinchThreshold ? Ht >= i.pinchThreshold : !0;
      }
      function B() {
        var t;
        return (t = i.maxTimeThreshold && At >= i.maxTimeThreshold ? !1 : !0);
      }
      function H(t, e) {
        if (i.preventDefaultEvents !== !1)
          if (i.allowPageScroll === l) t.preventDefault();
          else {
            var a = i.allowPageScroll === c;
            switch (e) {
              case n:
                ((i.swipeLeft && a) || (!a && i.allowPageScroll != m)) &&
                  t.preventDefault();
                break;
              case s:
                ((i.swipeRight && a) || (!a && i.allowPageScroll != m)) &&
                  t.preventDefault();
                break;
              case o:
                ((i.swipeUp && a) || (!a && i.allowPageScroll != v)) &&
                  t.preventDefault();
                break;
              case r:
                ((i.swipeDown && a) || (!a && i.allowPageScroll != v)) &&
                  t.preventDefault();
            }
          }
      }
      function Q() {
        var t = q(),
          e = U(),
          i = W();
        return t && e && i;
      }
      function Y() {
        return !!(i.pinchStatus || i.pinchIn || i.pinchOut);
      }
      function $() {
        return !(!Q() || !Y());
      }
      function N() {
        var t = B(),
          e = A(),
          i = q(),
          n = U(),
          s = R(),
          o = !s && n && i && e && t;
        return o;
      }
      function X() {
        return !!(
          i.swipe ||
          i.swipeStatus ||
          i.swipeLeft ||
          i.swipeRight ||
          i.swipeUp ||
          i.swipeDown
        );
      }
      function Z() {
        return !(!N() || !X());
      }
      function q() {
        return Xt === i.fingers || i.fingers === y || !k;
      }
      function U() {
        return 0 !== Zt[0].end.x;
      }
      function V() {
        return !!i.tap;
      }
      function G() {
        return !!i.doubleTap;
      }
      function J() {
        return !!i.longTap;
      }
      function K() {
        if (null == Jt) return !1;
        var t = xt();
        return G() && t - Jt <= i.doubleTapThreshold;
      }
      function tt() {
        return K();
      }
      function et() {
        return (1 === Xt || !k) && (isNaN(Pt) || Pt < i.threshold);
      }
      function it() {
        return At > i.longTapThreshold && b > Pt;
      }
      function nt() {
        return !(!et() || !V());
      }
      function st() {
        return !(!K() || !G());
      }
      function ot() {
        return !(!it() || !J());
      }
      function rt() {
        (Vt = xt()), (Gt = event.touches.length + 1);
      }
      function at() {
        (Vt = 0), (Gt = 0);
      }
      function ht() {
        var t = !1;
        if (Vt) {
          var e = xt() - Vt;
          e <= i.fingerReleaseThreshold && (t = !0);
        }
        return t;
      }
      function lt() {
        return !($t.data(S + "_intouch") !== !0);
      }
      function ct(t) {
        t === !0
          ? ($t.bind(_t, E), $t.bind(Ot, D), zt && $t.bind(zt, O))
          : ($t.unbind(_t, E, !1),
            $t.unbind(Ot, D, !1),
            zt && $t.unbind(zt, O, !1)),
          $t.data(S + "_intouch", t === !0);
      }
      function ut(t, e) {
        var i = void 0 !== e.identifier ? e.identifier : 0;
        return (
          (Zt[t].identifier = i),
          (Zt[t].start.x = Zt[t].end.x = e.pageX || e.clientX),
          (Zt[t].start.y = Zt[t].end.y = e.pageY || e.clientY),
          Zt[t]
        );
      }
      function ft(t) {
        var e = void 0 !== t.identifier ? t.identifier : 0,
          i = dt(e);
        return (
          (i.end.x = t.pageX || t.clientX), (i.end.y = t.pageY || t.clientY), i
        );
      }
      function dt(t) {
        for (var e = 0; e < Zt.length; e++)
          if (Zt[e].identifier == t) return Zt[e];
      }
      function pt() {
        for (var t = [], e = 0; 5 >= e; e++)
          t.push({ start: { x: 0, y: 0 }, end: { x: 0, y: 0 }, identifier: 0 });
        return t;
      }
      function gt(t, e) {
        (e = Math.max(e, mt(t))), (Yt[t].distance = e);
      }
      function mt(t) {
        return Yt[t] ? Yt[t].distance : void 0;
      }
      function vt() {
        var t = {};
        return (
          (t[n] = yt(n)), (t[s] = yt(s)), (t[o] = yt(o)), (t[r] = yt(r)), t
        );
      }
      function yt(t) {
        return { direction: t, distance: 0 };
      }
      function bt() {
        return Ut - qt;
      }
      function wt(t, e) {
        var i = Math.abs(t.x - e.x),
          n = Math.abs(t.y - e.y);
        return Math.round(Math.sqrt(i * i + n * n));
      }
      function Ct(t, e) {
        var i = (e / t) * 1;
        return i.toFixed(2);
      }
      function Lt() {
        return 1 > Bt ? h : a;
      }
      function Tt(t, e) {
        return Math.round(
          Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
        );
      }
      function kt(t, e) {
        var i = t.x - e.x,
          n = e.y - t.y,
          s = Math.atan2(n, i),
          o = Math.round((180 * s) / Math.PI);
        return 0 > o && (o = 360 - Math.abs(o)), o;
      }
      function Ft(t, e) {
        var i = kt(t, e);
        return 45 >= i && i >= 0
          ? n
          : 360 >= i && i >= 315
          ? n
          : i >= 135 && 225 >= i
          ? s
          : i > 45 && 135 > i
          ? r
          : o;
      }
      function xt() {
        var t = new Date();
        return t.getTime();
      }
      function St(e) {
        e = t(e);
        var i = e.offset(),
          n = {
            left: i.left,
            right: i.left + e.outerWidth(),
            top: i.top,
            bottom: i.top + e.outerHeight(),
          };
        return n;
      }
      function Mt(t, e) {
        return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom;
      }
      var Et = k || x || !i.fallbackToMouseEvents,
        Dt = Et
          ? x
            ? F
              ? "MSPointerDown"
              : "pointerdown"
            : "touchstart"
          : "mousedown",
        _t = Et
          ? x
            ? F
              ? "MSPointerMove"
              : "pointermove"
            : "touchmove"
          : "mousemove",
        Ot = Et
          ? x
            ? F
              ? "MSPointerUp"
              : "pointerup"
            : "touchend"
          : "mouseup",
        zt = Et ? null : "mouseleave",
        It = x ? (F ? "MSPointerCancel" : "pointercancel") : "touchcancel",
        Pt = 0,
        jt = null,
        At = 0,
        Rt = 0,
        Wt = 0,
        Bt = 1,
        Ht = 0,
        Qt = 0,
        Yt = null,
        $t = t(e),
        Nt = "start",
        Xt = 0,
        Zt = null,
        qt = 0,
        Ut = 0,
        Vt = 0,
        Gt = 0,
        Jt = 0,
        Kt = null,
        te = null;
      try {
        $t.bind(Dt, M), $t.bind(It, _);
      } catch (ee) {
        t.error("events not supported " + Dt + "," + It + " on jQuery.swipe");
      }
      (this.enable = function () {
        return $t.bind(Dt, M), $t.bind(It, _), $t;
      }),
        (this.disable = function () {
          return z(), $t;
        }),
        (this.destroy = function () {
          z(), $t.data(S, null), ($t = null);
        }),
        (this.option = function (e, n) {
          if (void 0 !== i[e]) {
            if (void 0 === n) return i[e];
            i[e] = n;
          } else
            t.error("Option " + e + " does not exist on jQuery.swipe.options");
          return null;
        });
    }
    var n = "left",
      s = "right",
      o = "up",
      r = "down",
      a = "in",
      h = "out",
      l = "none",
      c = "auto",
      u = "swipe",
      f = "pinch",
      d = "tap",
      p = "doubletap",
      g = "longtap",
      m = "horizontal",
      v = "vertical",
      y = "all",
      b = 10,
      w = "start",
      C = "move",
      L = "end",
      T = "cancel",
      k = "ontouchstart" in window,
      F = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
      x = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
      S = "TouchSwipe",
      M = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: !0,
        triggerOnTouchLeave: !1,
        allowPageScroll: "auto",
        fallbackToMouseEvents: !0,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe",
        preventDefaultEvents: !0,
      };
    (t.fn.swipe = function (i) {
      var n = t(this),
        s = n.data(S);
      if (s && "string" == typeof i) {
        if (s[i])
          return s[i].apply(this, Array.prototype.slice.call(arguments, 1));
        t.error("Method " + i + " does not exist on jQuery.swipe");
      } else if (!(s || ("object" != typeof i && i)))
        return e.apply(this, arguments);
      return n;
    }),
      (t.fn.swipe.defaults = M),
      (t.fn.swipe.phases = {
        PHASE_START: w,
        PHASE_MOVE: C,
        PHASE_END: L,
        PHASE_CANCEL: T,
      }),
      (t.fn.swipe.directions = {
        LEFT: n,
        RIGHT: s,
        UP: o,
        DOWN: r,
        IN: a,
        OUT: h,
      }),
      (t.fn.swipe.pageScroll = {
        NONE: l,
        HORIZONTAL: m,
        VERTICAL: v,
        AUTO: c,
      }),
      (t.fn.swipe.fingers = { ONE: 1, TWO: 2, THREE: 3, ALL: y });
  }),
  function () {
    "use strict";
    var t = function (t) {
      var e = function (e, i) {
          (this.el = t(e)),
            (this.zoomFactor = 1),
            (this.lastScale = 1),
            (this.offset = { x: 0, y: 0 }),
            (this.options = t.extend({}, this.defaults, i)),
            this.setupMarkup(),
            this.bindEvents(),
            this.update(),
            this.enable();
        },
        i = function (t, e) {
          return t + e;
        },
        n = function (t, e) {
          return t > e - 0.01 && e + 0.01 > t;
        };
      e.prototype = {
        defaults: {
          tapZoomFactor: 2,
          zoomOutFactor: 1.3,
          animationDuration: 300,
          animationInterval: 5,
          maxZoom: 10,
          minZoom: 0.2,
          lockDragAxis: !1,
          use2d: !0,
          zoomStartEventName: "pz_zoomstart",
          zoomEndEventName: "pz_zoomend",
          dragStartEventName: "pz_dragstart",
          dragEndEventName: "pz_dragend",
          doubleTapEventName: "pz_doubletap",
        },
        handleDragStart: function (t) {
          this.el.trigger(this.options.dragStartEventName),
            this.stopAnimation(),
            (this.lastDragPosition = !1),
            (this.hasInteraction = !0),
            this.handleDrag(t);
        },
        handleDrag: function (t) {
          if (this.zoomFactor > 1) {
            var e = this.getTouches(t)[0];
            this.drag(e, this.lastDragPosition),
              (this.offset = this.sanitizeOffset(this.offset)),
              (this.lastDragPosition = e);
          }
        },
        handleDragEnd: function () {
          this.el.trigger(this.options.dragEndEventName), this.end();
        },
        handleZoomStart: function (t) {
          this.el.trigger(this.options.zoomStartEventName),
            this.stopAnimation(),
            (this.lastScale = 1),
            (this.nthZoom = 0),
            (this.lastZoomCenter = !1),
            (this.hasInteraction = !0);
        },
        handleZoom: function (t, e) {
          var i = this.getTouchCenter(this.getTouches(t)),
            n = e / this.lastScale;
          (this.lastScale = e),
            (this.nthZoom += 1),
            this.nthZoom > 3 &&
              (this.scale(n, i), this.drag(i, this.lastZoomCenter)),
            (this.lastZoomCenter = i);
        },
        handleZoomEnd: function () {
          this.el.trigger(this.options.zoomEndEventName), this.end();
        },
        handleDoubleTap: function (t) {
          var e = this.getTouches(t)[0],
            i = this.zoomFactor > 1 ? 1 : this.options.tapZoomFactor,
            n = this.zoomFactor,
            s = function (t) {
              this.scaleTo(n + t * (i - n), e);
            }.bind(this);
          this.hasInteraction ||
            (n > i && (e = this.getCurrentZoomCenter()),
            this.animate(
              this.options.animationDuration,
              this.options.animationInterval,
              s,
              this.swing
            ),
            this.el.trigger(this.options.doubleTapEventName));
        },
        sanitizeOffset: function (t) {
          var e = (this.zoomFactor - 1) * this.getContainerX(),
            i = (this.zoomFactor - 1) * this.getContainerY(),
            n = Math.max(e, 0),
            s = Math.max(i, 0),
            o = Math.min(e, 0),
            r = Math.min(i, 0);
          return {
            x: Math.min(Math.max(t.x, o), n),
            y: Math.min(Math.max(t.y, r), s),
          };
        },
        scaleTo: function (t, e) {
          this.scale(t / this.zoomFactor, e);
        },
        scale: function (t, e) {
          (t = this.scaleZoomFactor(t)),
            this.addOffset({
              x: (t - 1) * (e.x + this.offset.x),
              y: (t - 1) * (e.y + this.offset.y),
            });
        },
        scaleZoomFactor: function (t) {
          var e = this.zoomFactor;
          return (
            (this.zoomFactor *= t),
            (this.zoomFactor = Math.min(
              this.options.maxZoom,
              Math.max(this.zoomFactor, this.options.minZoom)
            )),
            this.zoomFactor / e
          );
        },
        drag: function (t, e) {
          e &&
            this.addOffset(
              this.options.lockDragAxis
                ? Math.abs(t.x - e.x) > Math.abs(t.y - e.y)
                  ? {
                      x: -(t.x - e.x),
                      y: 0,
                    }
                  : { y: -(t.y - e.y), x: 0 }
                : { y: -(t.y - e.y), x: -(t.x - e.x) }
            );
        },
        getTouchCenter: function (t) {
          return this.getVectorAvg(t);
        },
        getVectorAvg: function (t) {
          return {
            x:
              t
                .map(function (t) {
                  return t.x;
                })
                .reduce(i) / t.length,
            y:
              t
                .map(function (t) {
                  return t.y;
                })
                .reduce(i) / t.length,
          };
        },
        addOffset: function (t) {
          this.offset = { x: this.offset.x + t.x, y: this.offset.y + t.y };
        },
        sanitize: function () {
          this.zoomFactor < this.options.zoomOutFactor
            ? this.zoomOutAnimation()
            : this.isInsaneOffset(this.offset) &&
              this.sanitizeOffsetAnimation();
        },
        isInsaneOffset: function (t) {
          var e = this.sanitizeOffset(t);
          return e.x !== t.x || e.y !== t.y;
        },
        sanitizeOffsetAnimation: function () {
          var t = this.sanitizeOffset(this.offset),
            e = { x: this.offset.x, y: this.offset.y },
            i = function (i) {
              (this.offset.x = e.x + i * (t.x - e.x)),
                (this.offset.y = e.y + i * (t.y - e.y)),
                this.update();
            }.bind(this);
          this.animate(
            this.options.animationDuration,
            this.options.animationInterval,
            i,
            this.swing
          );
        },
        zoomOutAnimation: function () {
          var t = this.zoomFactor,
            e = 1,
            i = this.getCurrentZoomCenter(),
            n = function (n) {
              this.scaleTo(t + n * (e - t), i);
            }.bind(this);
          this.animate(
            this.options.animationDuration,
            this.options.animationInterval,
            n,
            this.swing
          );
        },
        updateAspectRatio: function () {
          this.setContainerY(this.getContainerX() / this.getAspectRatio());
        },
        getInitialZoomFactor: function () {
          return this.container[0].offsetWidth / this.el[0].offsetWidth;
        },
        getAspectRatio: function () {
          return this.el[0].offsetWidth / this.el[0].offsetHeight;
        },
        getCurrentZoomCenter: function () {
          var t = this.container[0].offsetWidth * this.zoomFactor,
            e = this.offset.x,
            i = t - e - this.container[0].offsetWidth,
            n = e / i,
            s = (n * this.container[0].offsetWidth) / (n + 1),
            o = this.container[0].offsetHeight * this.zoomFactor,
            r = this.offset.y,
            a = o - r - this.container[0].offsetHeight,
            h = r / a,
            l = (h * this.container[0].offsetHeight) / (h + 1);
          return (
            0 === i && (s = this.container[0].offsetWidth),
            0 === a && (l = this.container[0].offsetHeight),
            { x: s, y: l }
          );
        },
        canDrag: function () {
          return !n(this.zoomFactor, 1);
        },
        getTouches: function (t) {
          var e = this.container.offset();
          return Array.prototype.slice.call(t.touches).map(function (t) {
            return { x: t.pageX - e.left, y: t.pageY - e.top };
          });
        },
        animate: function (t, e, i, n, s) {
          var o = new Date().getTime(),
            r = function () {
              if (this.inAnimation) {
                var a = new Date().getTime() - o,
                  h = a / t;
                a >= t
                  ? (i(1),
                    s && s(),
                    this.update(),
                    this.stopAnimation(),
                    this.update())
                  : (n && (h = n(h)), i(h), this.update(), setTimeout(r, e));
              }
            }.bind(this);
          (this.inAnimation = !0), r();
        },
        stopAnimation: function () {
          this.inAnimation = !1;
        },
        swing: function (t) {
          return -Math.cos(t * Math.PI) / 2 + 0.5;
        },
        getContainerX: function () {
          return this.container[0].offsetWidth;
        },
        getContainerY: function () {
          return this.container[0].offsetHeight;
        },
        setContainerY: function (t) {
          return this.container.height(t);
        },
        setupMarkup: function () {
          (this.container = t('<div class="pinch-zoom-container"></div>')),
            this.el.before(this.container),
            this.container.append(this.el),
            this.container.css({ overflow: "visible", position: "relative" }),
            this.el.css({
              "-webkit-transform-origin": "0% 0%",
              "-moz-transform-origin": "0% 0%",
              "-ms-transform-origin": "0% 0%",
              "-o-transform-origin": "0% 0%",
              "transform-origin": "0% 0%",
              position: "absolute",
            });
        },
        end: function () {
          (this.hasInteraction = !1), this.sanitize(), this.update();
        },
        bindEvents: function () {
          s(this.container.get(0), this),
            t(window).on("resize", this.update.bind(this)),
            t(this.el).find("img").on("load", this.update.bind(this));
        },
        update: function () {
          this.updatePlaned ||
            ((this.updatePlaned = !0),
            setTimeout(
              function () {
                (this.updatePlaned = !1), this.updateAspectRatio();
                var t = this.getInitialZoomFactor() * this.zoomFactor,
                  e = -this.offset.x / t,
                  i = -this.offset.y / t,
                  n =
                    "scale3d(" +
                    t +
                    ", " +
                    t +
                    ",1) translate3d(" +
                    e +
                    "px," +
                    i +
                    "px,0px)",
                  s =
                    "scale(" +
                    t +
                    ", " +
                    t +
                    ") translate(" +
                    e +
                    "px," +
                    i +
                    "px)",
                  o = function () {
                    this.clone && (this.clone.remove(), delete this.clone);
                  }.bind(this);
                !this.options.use2d || this.hasInteraction || this.inAnimation
                  ? ((this.is3d = !0),
                    o(),
                    this.el.css({
                      "-webkit-transform": n,
                      "-o-transform": s,
                      "-ms-transform": s,
                      "-moz-transform": s,
                      transform: n,
                    }))
                  : (this.is3d &&
                      ((this.clone = this.el.clone()),
                      this.clone.css("pointer-events", "none"),
                      this.clone.appendTo(this.container),
                      setTimeout(o, 200)),
                    this.el.css({
                      "-webkit-transform": s,
                      "-o-transform": s,
                      "-ms-transform": s,
                      "-moz-transform": s,
                      transform: s,
                    }),
                    (this.is3d = !1));
              }.bind(this),
              0
            ));
        },
        enable: function () {
          this.enabled = !0;
        },
        disable: function () {
          this.enabled = !1;
        },
      };
      var s = function (t, e) {
        var i = null,
          n = 0,
          s = null,
          o = null,
          r = function (t, n) {
            if (i !== t) {
              if (i && !t)
                switch (i) {
                  case "zoom":
                    e.handleZoomEnd(n);
                    break;
                  case "drag":
                    e.handleDragEnd(n);
                }
              switch (t) {
                case "zoom":
                  e.handleZoomStart(n);
                  break;
                case "drag":
                  e.handleDragStart(n);
              }
            }
            i = t;
          },
          a = function (t) {
            2 === n
              ? r("zoom")
              : 1 === n && e.canDrag()
              ? r("drag", t)
              : r(null, t);
          },
          h = function (t) {
            return Array.prototype.slice.call(t).map(function (t) {
              return { x: t.pageX, y: t.pageY };
            });
          },
          l = function (t, e) {
            var i, n;
            return (i = t.x - e.x), (n = t.y - e.y), Math.sqrt(i * i + n * n);
          },
          c = function (t, e) {
            var i = l(t[0], t[1]),
              n = l(e[0], e[1]);
            return n / i;
          },
          u = function (t) {
            t.stopPropagation(), t.preventDefault();
          },
          f = function (t) {
            var o = new Date().getTime();
            if ((n > 1 && (s = null), 300 > o - s))
              switch ((u(t), e.handleDoubleTap(t), i)) {
                case "zoom":
                  e.handleZoomEnd(t);
                  break;
                case "drag":
                  e.handleDragEnd(t);
              }
            1 === n && (s = o);
          },
          d = !0;
        t.addEventListener("touchstart", function (t) {
          e.enabled && ((d = !0), (n = t.touches.length), f(t));
        }),
          t.addEventListener("touchmove", function (t) {
            if (e.enabled) {
              if (d) a(t), i && u(t), (o = h(t.touches));
              else {
                switch (i) {
                  case "zoom":
                    e.handleZoom(t, c(o, h(t.touches)));
                    break;
                  case "drag":
                    e.handleDrag(t);
                }
                i && (u(t), e.update());
              }
              d = !1;
            }
          }),
          t.addEventListener("touchend", function (t) {
            e.enabled && ((n = t.touches.length), a(t));
          });
      };
      return e;
    };
    "undefined" != typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e);
        })
      : ((window.Pic = window.Pic || {}), (window.Pic.PinchZoom = t(window.$)));
  }.call(this),
  (function (t) {
    function e() {}
    function i(t) {
      function i(e) {
        e.prototype.option ||
          (e.prototype.option = function (e) {
            t.isPlainObject(e) &&
              (this.options = t.extend(!0, this.options, e));
          });
      }
      function s(e, i) {
        t.fn[e] = function (s) {
          if ("string" == typeof s) {
            for (
              var r = n.call(arguments, 1), a = 0, h = this.length;
              h > a;
              a++
            ) {
              var l = this[a],
                c = t.data(l, e);
              if (c)
                if (t.isFunction(c[s]) && "_" !== s.charAt(0)) {
                  var u = c[s].apply(c, r);
                  if (void 0 !== u) return u;
                } else o("no such method '" + s + "' for " + e + " instance");
              else
                o(
                  "cannot call methods on " +
                    e +
                    " prior to initialization; attempted to call '" +
                    s +
                    "'"
                );
            }
            return this;
          }
          return this.each(function () {
            var n = t.data(this, e);
            n
              ? (n.option(s), n._init())
              : ((n = new i(this, s)), t.data(this, e, n));
          });
        };
      }
      if (t) {
        var o =
          "undefined" == typeof console
            ? e
            : function (t) {
                console.error(t);
              };
        return (
          (t.bridget = function (t, e) {
            i(e), s(t, e);
          }),
          t.bridget
        );
      }
    }
    var n = Array.prototype.slice;
    "function" == typeof define && define.amd
      ? define("jquery-bridget/jquery.bridget", ["jquery"], i)
      : i(t.jQuery);
  })(window),
  (function (t) {
    function e(e) {
      var i = t.event;
      return (i.target = i.target || i.srcElement || e), i;
    }
    var i = document.documentElement,
      n = function () {};
    i.addEventListener
      ? (n = function (t, e, i) {
          t.addEventListener(e, i, !1);
        })
      : i.attachEvent &&
        (n = function (t, i, n) {
          (t[i + n] = n.handleEvent
            ? function () {
                var i = e(t);
                n.handleEvent.call(n, i);
              }
            : function () {
                var i = e(t);
                n.call(t, i);
              }),
            t.attachEvent("on" + i, t[i + n]);
        });
    var s = function () {};
    i.removeEventListener
      ? (s = function (t, e, i) {
          t.removeEventListener(e, i, !1);
        })
      : i.detachEvent &&
        (s = function (t, e, i) {
          t.detachEvent("on" + e, t[e + i]);
          try {
            delete t[e + i];
          } catch (n) {
            t[e + i] = void 0;
          }
        });
    var o = { bind: n, unbind: s };
    "function" == typeof define && define.amd
      ? define("eventie/eventie", o)
      : "object" == typeof exports
      ? (module.exports = o)
      : (t.eventie = o);
  })(this),
  (function (t) {
    function e(t) {
      "function" == typeof t && (e.isReady ? t() : o.push(t));
    }
    function i(t) {
      var i = "readystatechange" === t.type && "complete" !== s.readyState;
      if (!e.isReady && !i) {
        e.isReady = !0;
        for (var n = 0, r = o.length; r > n; n++) {
          var a = o[n];
          a();
        }
      }
    }
    function n(n) {
      return (
        n.bind(s, "DOMContentLoaded", i),
        n.bind(s, "readystatechange", i),
        n.bind(t, "load", i),
        e
      );
    }
    var s = t.document,
      o = [];
    (e.isReady = !1),
      "function" == typeof define && define.amd
        ? ((e.isReady = "function" == typeof requirejs),
          define("doc-ready/doc-ready", ["eventie/eventie"], n))
        : (t.docReady = n(t.eventie));
  })(this),
  function () {
    function t() {}
    function e(t, e) {
      for (var i = t.length; i--; ) if (t[i].listener === e) return i;
      return -1;
    }
    function i(t) {
      return function () {
        return this[t].apply(this, arguments);
      };
    }
    var n = t.prototype,
      s = this,
      o = s.EventEmitter;
    (n.getListeners = function (t) {
      var e,
        i,
        n = this._getEvents();
      if (t instanceof RegExp) {
        e = {};
        for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i]);
      } else e = n[t] || (n[t] = []);
      return e;
    }),
      (n.flattenListeners = function (t) {
        var e,
          i = [];
        for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
        return i;
      }),
      (n.getListenersAsObject = function (t) {
        var e,
          i = this.getListeners(t);
        return i instanceof Array && ((e = {}), (e[t] = i)), e || i;
      }),
      (n.addListener = function (t, i) {
        var n,
          s = this.getListenersAsObject(t),
          o = "object" == typeof i;
        for (n in s)
          s.hasOwnProperty(n) &&
            -1 === e(s[n], i) &&
            s[n].push(o ? i : { listener: i, once: !1 });
        return this;
      }),
      (n.on = i("addListener")),
      (n.addOnceListener = function (t, e) {
        return this.addListener(t, { listener: e, once: !0 });
      }),
      (n.once = i("addOnceListener")),
      (n.defineEvent = function (t) {
        return this.getListeners(t), this;
      }),
      (n.defineEvents = function (t) {
        for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
        return this;
      }),
      (n.removeListener = function (t, i) {
        var n,
          s,
          o = this.getListenersAsObject(t);
        for (s in o)
          o.hasOwnProperty(s) &&
            ((n = e(o[s], i)), -1 !== n && o[s].splice(n, 1));
        return this;
      }),
      (n.off = i("removeListener")),
      (n.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e);
      }),
      (n.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e);
      }),
      (n.manipulateListeners = function (t, e, i) {
        var n,
          s,
          o = t ? this.removeListener : this.addListener,
          r = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
          for (n = i.length; n--; ) o.call(this, e, i[n]);
        else
          for (n in e)
            e.hasOwnProperty(n) &&
              (s = e[n]) &&
              ("function" == typeof s
                ? o.call(this, n, s)
                : r.call(this, n, s));
        return this;
      }),
      (n.removeEvent = function (t) {
        var e,
          i = typeof t,
          n = this._getEvents();
        if ("string" === i) delete n[t];
        else if (t instanceof RegExp)
          for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
        else delete this._events;
        return this;
      }),
      (n.removeAllListeners = i("removeEvent")),
      (n.emitEvent = function (t, e) {
        var i,
          n,
          s,
          o,
          r = this.getListenersAsObject(t);
        for (s in r)
          if (r.hasOwnProperty(s))
            for (n = r[s].length; n--; )
              (i = r[s][n]),
                i.once === !0 && this.removeListener(t, i.listener),
                (o = i.listener.apply(this, e || [])),
                o === this._getOnceReturnValue() &&
                  this.removeListener(t, i.listener);
        return this;
      }),
      (n.trigger = i("emitEvent")),
      (n.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e);
      }),
      (n.setOnceReturnValue = function (t) {
        return (this._onceReturnValue = t), this;
      }),
      (n._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue")
          ? this._onceReturnValue
          : !0;
      }),
      (n._getEvents = function () {
        return this._events || (this._events = {});
      }),
      (t.noConflict = function () {
        return (s.EventEmitter = o), t;
      }),
      "function" == typeof define && define.amd
        ? define("eventEmitter/EventEmitter", [], function () {
            return t;
          })
        : "object" == typeof module && module.exports
        ? (module.exports = t)
        : (this.EventEmitter = t);
  }.call(this),
  (function (t) {
    function e(t) {
      if (t) {
        if ("string" == typeof n[t]) return t;
        t = t.charAt(0).toUpperCase() + t.slice(1);
        for (var e, s = 0, o = i.length; o > s; s++)
          if (((e = i[s] + t), "string" == typeof n[e])) return e;
      }
    }
    var i = "Webkit Moz ms Ms O".split(" "),
      n = document.documentElement.style;
    "function" == typeof define && define.amd
      ? define("get-style-property/get-style-property", [], function () {
          return e;
        })
      : "object" == typeof exports
      ? (module.exports = e)
      : (t.getStyleProperty = e);
  })(window),
  (function (t, e) {
    function i(t) {
      var e = parseFloat(t),
        i = -1 === t.indexOf("%") && !isNaN(e);
      return i && e;
    }
    function n() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0,
          i = a.length;
        i > e;
        e++
      ) {
        var n = a[e];
        t[n] = 0;
      }
      return t;
    }
    function s(t) {
      function e(t) {
        if (
          ("string" == typeof t && (t = document.querySelector(t)),
          t && "object" == typeof t && t.nodeType)
        ) {
          var e = r(t);
          if ("none" === e.display) return n();
          var o = {};
          (o.width = t.offsetWidth), (o.height = t.offsetHeight);
          for (
            var c = (o.isBorderBox = !(!l || !e[l] || "border-box" !== e[l])),
              u = 0,
              f = a.length;
            f > u;
            u++
          ) {
            var d = a[u],
              p = e[d];
            p = s(t, p);
            var g = parseFloat(p);
            o[d] = isNaN(g) ? 0 : g;
          }
          var m = o.paddingLeft + o.paddingRight,
            v = o.paddingTop + o.paddingBottom,
            y = o.marginLeft + o.marginRight,
            b = o.marginTop + o.marginBottom,
            w = o.borderLeftWidth + o.borderRightWidth,
            C = o.borderTopWidth + o.borderBottomWidth,
            L = c && h,
            T = i(e.width);
          T !== !1 && (o.width = T + (L ? 0 : m + w));
          var k = i(e.height);
          return (
            k !== !1 && (o.height = k + (L ? 0 : v + C)),
            (o.innerWidth = o.width - (m + w)),
            (o.innerHeight = o.height - (v + C)),
            (o.outerWidth = o.width + y),
            (o.outerHeight = o.height + b),
            o
          );
        }
      }
      function s(t, e) {
        if (o || -1 === e.indexOf("%")) return e;
        var i = t.style,
          n = i.left,
          s = t.runtimeStyle,
          r = s && s.left;
        return (
          r && (s.left = t.currentStyle.left),
          (i.left = e),
          (e = i.pixelLeft),
          (i.left = n),
          r && (s.left = r),
          e
        );
      }
      var h,
        l = t("boxSizing");
      return (
        (function () {
          if (l) {
            var t = document.createElement("div");
            (t.style.width = "200px"),
              (t.style.padding = "1px 2px 3px 4px"),
              (t.style.borderStyle = "solid"),
              (t.style.borderWidth = "1px 2px 3px 4px"),
              (t.style[l] = "border-box");
            var e = document.body || document.documentElement;
            e.appendChild(t);
            var n = r(t);
            (h = 200 === i(n.width)), e.removeChild(t);
          }
        })(),
        e
      );
    }
    var o = t.getComputedStyle,
      r = o
        ? function (t) {
            return o(t, null);
          }
        : function (t) {
            return t.currentStyle;
          },
      a = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ];
    "function" == typeof define && define.amd
      ? define(
          "get-size/get-size",
          ["get-style-property/get-style-property"],
          s
        )
      : "object" == typeof exports
      ? (module.exports = s(require("get-style-property")))
      : (t.getSize = s(t.getStyleProperty));
  })(window),
  (function (t, e) {
    function i(t, e) {
      return t[a](e);
    }
    function n(t) {
      if (!t.parentNode) {
        var e = document.createDocumentFragment();
        e.appendChild(t);
      }
    }
    function s(t, e) {
      n(t);
      for (
        var i = t.parentNode.querySelectorAll(e), s = 0, o = i.length;
        o > s;
        s++
      )
        if (i[s] === t) return !0;
      return !1;
    }
    function o(t, e) {
      return n(t), i(t, e);
    }
    var r,
      a = (function () {
        if (e.matchesSelector) return "matchesSelector";
        for (
          var t = ["webkit", "moz", "ms", "o"], i = 0, n = t.length;
          n > i;
          i++
        ) {
          var s = t[i],
            o = s + "MatchesSelector";
          if (e[o]) return o;
        }
      })();
    if (a) {
      var h = document.createElement("div"),
        l = i(h, "div");
      r = l ? i : o;
    } else r = s;
    "function" == typeof define && define.amd
      ? define("matches-selector/matches-selector", [], function () {
          return r;
        })
      : (window.matchesSelector = r);
  })(this, Element.prototype),
  (function (t) {
    function e(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function n(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    function s(t, s, o) {
      function a(t, e) {
        t &&
          ((this.element = t),
          (this.layout = e),
          (this.position = { x: 0, y: 0 }),
          this._create());
      }
      var h = o("transition"),
        l = o("transform"),
        c = h && l,
        u = !!o("perspective"),
        f = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "otransitionend",
          transition: "transitionend",
        }[h],
        d = [
          "transform",
          "transition",
          "transitionDuration",
          "transitionProperty",
        ],
        p = (function () {
          for (var t = {}, e = 0, i = d.length; i > e; e++) {
            var n = d[e],
              s = o(n);
            s && s !== n && (t[n] = s);
          }
          return t;
        })();
      e(a.prototype, t.prototype),
        (a.prototype._create = function () {
          (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
            this.css({ position: "absolute" });
        }),
        (a.prototype.handleEvent = function (t) {
          var e = "on" + t.type;
          this[e] && this[e](t);
        }),
        (a.prototype.getSize = function () {
          this.size = s(this.element);
        }),
        (a.prototype.css = function (t) {
          var e = this.element.style;
          for (var i in t) {
            var n = p[i] || i;
            e[n] = t[i];
          }
        }),
        (a.prototype.getPosition = function () {
          var t = r(this.element),
            e = this.layout.options,
            i = e.isOriginLeft,
            n = e.isOriginTop,
            s = parseInt(t[i ? "left" : "right"], 10),
            o = parseInt(t[n ? "top" : "bottom"], 10);
          (s = isNaN(s) ? 0 : s), (o = isNaN(o) ? 0 : o);
          var a = this.layout.size;
          (s -= i ? a.paddingLeft : a.paddingRight),
            (o -= n ? a.paddingTop : a.paddingBottom),
            (this.position.x = s),
            (this.position.y = o);
        }),
        (a.prototype.layoutPosition = function () {
          var t = this.layout.size,
            e = this.layout.options,
            i = {};
          e.isOriginLeft
            ? ((i.left = this.position.x + t.paddingLeft + "px"),
              (i.right = ""))
            : ((i.right = this.position.x + t.paddingRight + "px"),
              (i.left = "")),
            e.isOriginTop
              ? ((i.top = this.position.y + t.paddingTop + "px"),
                (i.bottom = ""))
              : ((i.bottom = this.position.y + t.paddingBottom + "px"),
                (i.top = "")),
            this.css(i),
            this.emitEvent("layout", [this]);
        });
      var g = u
        ? function (t, e) {
            return "translate3d(" + t + "px, " + e + "px, 0)";
          }
        : function (t, e) {
            return "translate(" + t + "px, " + e + "px)";
          };
      (a.prototype._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          n = this.position.y,
          s = parseInt(t, 10),
          o = parseInt(e, 10),
          r = s === this.position.x && o === this.position.y;
        if ((this.setPosition(t, e), r && !this.isTransitioning))
          return void this.layoutPosition();
        var a = t - i,
          h = e - n,
          l = {},
          c = this.layout.options;
        (a = c.isOriginLeft ? a : -a),
          (h = c.isOriginTop ? h : -h),
          (l.transform = g(a, h)),
          this.transition({
            to: l,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          });
      }),
        (a.prototype.goTo = function (t, e) {
          this.setPosition(t, e), this.layoutPosition();
        }),
        (a.prototype.moveTo = c ? a.prototype._transitionTo : a.prototype.goTo),
        (a.prototype.setPosition = function (t, e) {
          (this.position.x = parseInt(t, 10)),
            (this.position.y = parseInt(e, 10));
        }),
        (a.prototype._nonTransition = function (t) {
          this.css(t.to), t.isCleaning && this._removeStyles(t.to);
          for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
        }),
        (a.prototype._transition = function (t) {
          if (!parseFloat(this.layout.options.transitionDuration))
            return void this._nonTransition(t);
          var e = this._transn;
          for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
          for (i in t.to)
            (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
          if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null;
          }
          this.enableTransition(t.to),
            this.css(t.to),
            (this.isTransitioning = !0);
        });
      var m = l && n(l) + ",opacity";
      (a.prototype.enableTransition = function () {
        this.isTransitioning ||
          (this.css({
            transitionProperty: m,
            transitionDuration: this.layout.options.transitionDuration,
          }),
          this.element.addEventListener(f, this, !1));
      }),
        (a.prototype.transition =
          a.prototype[h ? "_transition" : "_nonTransition"]),
        (a.prototype.onwebkitTransitionEnd = function (t) {
          this.ontransitionend(t);
        }),
        (a.prototype.onotransitionend = function (t) {
          this.ontransitionend(t);
        });
      var v = {
        "-webkit-transform": "transform",
        "-moz-transform": "transform",
        "-o-transform": "transform",
      };
      (a.prototype.ontransitionend = function (t) {
        if (t.target === this.element) {
          var e = this._transn,
            n = v[t.propertyName] || t.propertyName;
          if (
            (delete e.ingProperties[n],
            i(e.ingProperties) && this.disableTransition(),
            n in e.clean &&
              ((this.element.style[t.propertyName] = ""), delete e.clean[n]),
            n in e.onEnd)
          ) {
            var s = e.onEnd[n];
            s.call(this), delete e.onEnd[n];
          }
          this.emitEvent("transitionEnd", [this]);
        }
      }),
        (a.prototype.disableTransition = function () {
          this.removeTransitionStyles(),
            this.element.removeEventListener(f, this, !1),
            (this.isTransitioning = !1);
        }),
        (a.prototype._removeStyles = function (t) {
          var e = {};
          for (var i in t) e[i] = "";
          this.css(e);
        });
      var y = { transitionProperty: "", transitionDuration: "" };
      return (
        (a.prototype.removeTransitionStyles = function () {
          this.css(y);
        }),
        (a.prototype.removeElem = function () {
          this.element.parentNode.removeChild(this.element),
            this.emitEvent("remove", [this]);
        }),
        (a.prototype.remove = function () {
          if (!h || !parseFloat(this.layout.options.transitionDuration))
            return void this.removeElem();
          var t = this;
          this.on("transitionEnd", function () {
            return t.removeElem(), !0;
          }),
            this.hide();
        }),
        (a.prototype.reveal = function () {
          delete this.isHidden, this.css({ display: "" });
          var t = this.layout.options;
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
          });
        }),
        (a.prototype.hide = function () {
          (this.isHidden = !0), this.css({ display: "" });
          var t = this.layout.options;
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: {
              opacity: function () {
                this.isHidden && this.css({ display: "none" });
              },
            },
          });
        }),
        (a.prototype.destroy = function () {
          this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: "",
          });
        }),
        a
      );
    }
    var o = t.getComputedStyle,
      r = o
        ? function (t) {
            return o(t, null);
          }
        : function (t) {
            return t.currentStyle;
          };
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          [
            "eventEmitter/EventEmitter",
            "get-size/get-size",
            "get-style-property/get-style-property",
          ],
          s
        )
      : ((t.Outlayer = {}),
        (t.Outlayer.Item = s(t.EventEmitter, t.getSize, t.getStyleProperty)));
  })(window),
  (function (t) {
    function e(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    function i(t) {
      return "[object Array]" === u.call(t);
    }
    function n(t) {
      var e = [];
      if (i(t)) e = t;
      else if (t && "number" == typeof t.length)
        for (var n = 0, s = t.length; s > n; n++) e.push(t[n]);
      else e.push(t);
      return e;
    }
    function s(t, e) {
      var i = d(e, t);
      -1 !== i && e.splice(i, 1);
    }
    function o(t) {
      return t
        .replace(/(.)([A-Z])/g, function (t, e, i) {
          return e + "-" + i;
        })
        .toLowerCase();
    }
    function r(i, r, u, d, p, g) {
      function m(t, i) {
        if (("string" == typeof t && (t = a.querySelector(t)), !t || !f(t)))
          return void (
            h && h.error("Bad " + this.constructor.namespace + " element: " + t)
          );
        (this.element = t),
          (this.options = e({}, this.constructor.defaults)),
          this.option(i);
        var n = ++v;
        (this.element.outlayerGUID = n),
          (y[n] = this),
          this._create(),
          this.options.isInitLayout && this.layout();
      }
      var v = 0,
        y = {};
      return (
        (m.namespace = "outlayer"),
        (m.Item = g),
        (m.defaults = {
          containerStyle: { position: "relative" },
          isInitLayout: !0,
          isOriginLeft: !0,
          isOriginTop: !0,
          isResizeBound: !0,
          isResizingContainer: !0,
          transitionDuration: "0.4s",
          hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
          visibleStyle: { opacity: 1, transform: "scale(1)" },
        }),
        e(m.prototype, u.prototype),
        (m.prototype.option = function (t) {
          e(this.options, t);
        }),
        (m.prototype._create = function () {
          this.reloadItems(),
            (this.stamps = []),
            this.stamp(this.options.stamp),
            e(this.element.style, this.options.containerStyle),
            this.options.isResizeBound && this.bindResize();
        }),
        (m.prototype.reloadItems = function () {
          this.items = this._itemize(this.element.children);
        }),
        (m.prototype._itemize = function (t) {
          for (
            var e = this._filterFindItemElements(t),
              i = this.constructor.Item,
              n = [],
              s = 0,
              o = e.length;
            o > s;
            s++
          ) {
            var r = e[s],
              a = new i(r, this);
            n.push(a);
          }
          return n;
        }),
        (m.prototype._filterFindItemElements = function (t) {
          t = n(t);
          for (
            var e = this.options.itemSelector, i = [], s = 0, o = t.length;
            o > s;
            s++
          ) {
            var r = t[s];
            if (f(r))
              if (e) {
                p(r, e) && i.push(r);
                for (
                  var a = r.querySelectorAll(e), h = 0, l = a.length;
                  l > h;
                  h++
                )
                  i.push(a[h]);
              } else i.push(r);
          }
          return i;
        }),
        (m.prototype.getItemElements = function () {
          for (var t = [], e = 0, i = this.items.length; i > e; e++)
            t.push(this.items[e].element);
          return t;
        }),
        (m.prototype.layout = function () {
          this._resetLayout(), this._manageStamps();
          var t =
            void 0 !== this.options.isLayoutInstant
              ? this.options.isLayoutInstant
              : !this._isLayoutInited;
          this.layoutItems(this.items, t), (this._isLayoutInited = !0);
        }),
        (m.prototype._init = m.prototype.layout),
        (m.prototype._resetLayout = function () {
          this.getSize();
        }),
        (m.prototype.getSize = function () {
          this.size = d(this.element);
        }),
        (m.prototype._getMeasurement = function (t, e) {
          var i,
            n = this.options[t];
          n
            ? ("string" == typeof n
                ? (i = this.element.querySelector(n))
                : f(n) && (i = n),
              (this[t] = i ? d(i)[e] : n))
            : (this[t] = 0);
        }),
        (m.prototype.layoutItems = function (t, e) {
          (t = this._getItemsForLayout(t)),
            this._layoutItems(t, e),
            this._postLayout();
        }),
        (m.prototype._getItemsForLayout = function (t) {
          for (var e = [], i = 0, n = t.length; n > i; i++) {
            var s = t[i];
            s.isIgnored || e.push(s);
          }
          return e;
        }),
        (m.prototype._layoutItems = function (t, e) {
          function i() {
            n.emitEvent("layoutComplete", [n, t]);
          }
          var n = this;
          if (!t || !t.length) return void i();
          this._itemsOn(t, "layout", i);
          for (var s = [], o = 0, r = t.length; r > o; o++) {
            var a = t[o],
              h = this._getItemLayoutPosition(a);
            (h.item = a), (h.isInstant = e || a.isLayoutInstant), s.push(h);
          }
          this._processLayoutQueue(s);
        }),
        (m.prototype._getItemLayoutPosition = function () {
          return { x: 0, y: 0 };
        }),
        (m.prototype._processLayoutQueue = function (t) {
          for (var e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            this._positionItem(n.item, n.x, n.y, n.isInstant);
          }
        }),
        (m.prototype._positionItem = function (t, e, i, n) {
          n ? t.goTo(e, i) : t.moveTo(e, i);
        }),
        (m.prototype._postLayout = function () {
          this.resizeContainer();
        }),
        (m.prototype.resizeContainer = function () {
          if (this.options.isResizingContainer) {
            var t = this._getContainerSize();
            t &&
              (this._setContainerMeasure(t.width, !0),
              this._setContainerMeasure(t.height, !1));
          }
        }),
        (m.prototype._getContainerSize = c),
        (m.prototype._setContainerMeasure = function (t, e) {
          if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox &&
              (t += e
                ? i.paddingLeft +
                  i.paddingRight +
                  i.borderLeftWidth +
                  i.borderRightWidth
                : i.paddingBottom +
                  i.paddingTop +
                  i.borderTopWidth +
                  i.borderBottomWidth),
              (t = Math.max(t, 0)),
              (this.element.style[e ? "width" : "height"] = t + "px");
          }
        }),
        (m.prototype._itemsOn = function (t, e, i) {
          function n() {
            return s++, s === o && i.call(r), !0;
          }
          for (
            var s = 0, o = t.length, r = this, a = 0, h = t.length;
            h > a;
            a++
          ) {
            var l = t[a];
            l.on(e, n);
          }
        }),
        (m.prototype.ignore = function (t) {
          var e = this.getItem(t);
          e && (e.isIgnored = !0);
        }),
        (m.prototype.unignore = function (t) {
          var e = this.getItem(t);
          e && delete e.isIgnored;
        }),
        (m.prototype.stamp = function (t) {
          if ((t = this._find(t))) {
            this.stamps = this.stamps.concat(t);
            for (var e = 0, i = t.length; i > e; e++) {
              var n = t[e];
              this.ignore(n);
            }
          }
        }),
        (m.prototype.unstamp = function (t) {
          if ((t = this._find(t)))
            for (var e = 0, i = t.length; i > e; e++) {
              var n = t[e];
              s(n, this.stamps), this.unignore(n);
            }
        }),
        (m.prototype._find = function (t) {
          return t
            ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
              (t = n(t)))
            : void 0;
        }),
        (m.prototype._manageStamps = function () {
          if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var t = 0, e = this.stamps.length; e > t; t++) {
              var i = this.stamps[t];
              this._manageStamp(i);
            }
          }
        }),
        (m.prototype._getBoundingRect = function () {
          var t = this.element.getBoundingClientRect(),
            e = this.size;
          this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
          };
        }),
        (m.prototype._manageStamp = c),
        (m.prototype._getElementOffset = function (t) {
          var e = t.getBoundingClientRect(),
            i = this._boundingRect,
            n = d(t),
            s = {
              left: e.left - i.left - n.marginLeft,
              top: e.top - i.top - n.marginTop,
              right: i.right - e.right - n.marginRight,
              bottom: i.bottom - e.bottom - n.marginBottom,
            };
          return s;
        }),
        (m.prototype.handleEvent = function (t) {
          var e = "on" + t.type;
          this[e] && this[e](t);
        }),
        (m.prototype.bindResize = function () {
          this.isResizeBound ||
            (i.bind(t, "resize", this), (this.isResizeBound = !0));
        }),
        (m.prototype.unbindResize = function () {
          this.isResizeBound && i.unbind(t, "resize", this),
            (this.isResizeBound = !1);
        }),
        (m.prototype.onresize = function () {
          function t() {
            e.resize(), delete e.resizeTimeout;
          }
          this.resizeTimeout && clearTimeout(this.resizeTimeout);
          var e = this;
          this.resizeTimeout = setTimeout(t, 100);
        }),
        (m.prototype.resize = function () {
          this.isResizeBound && this.needsResizeLayout() && this.layout();
        }),
        (m.prototype.needsResizeLayout = function () {
          var t = d(this.element),
            e = this.size && t;
          return e && t.innerWidth !== this.size.innerWidth;
        }),
        (m.prototype.addItems = function (t) {
          var e = this._itemize(t);
          return e.length && (this.items = this.items.concat(e)), e;
        }),
        (m.prototype.appended = function (t) {
          var e = this.addItems(t);
          e.length && (this.layoutItems(e, !0), this.reveal(e));
        }),
        (m.prototype.prepended = function (t) {
          var e = this._itemize(t);
          if (e.length) {
            var i = this.items.slice(0);
            (this.items = e.concat(i)),
              this._resetLayout(),
              this._manageStamps(),
              this.layoutItems(e, !0),
              this.reveal(e),
              this.layoutItems(i);
          }
        }),
        (m.prototype.reveal = function (t) {
          var e = t && t.length;
          if (e)
            for (var i = 0; e > i; i++) {
              var n = t[i];
              n.reveal();
            }
        }),
        (m.prototype.hide = function (t) {
          var e = t && t.length;
          if (e)
            for (var i = 0; e > i; i++) {
              var n = t[i];
              n.hide();
            }
        }),
        (m.prototype.getItem = function (t) {
          for (var e = 0, i = this.items.length; i > e; e++) {
            var n = this.items[e];
            if (n.element === t) return n;
          }
        }),
        (m.prototype.getItems = function (t) {
          if (t && t.length) {
            for (var e = [], i = 0, n = t.length; n > i; i++) {
              var s = t[i],
                o = this.getItem(s);
              o && e.push(o);
            }
            return e;
          }
        }),
        (m.prototype.remove = function (t) {
          t = n(t);
          var e = this.getItems(t);
          if (e && e.length) {
            this._itemsOn(e, "remove", function () {
              this.emitEvent("removeComplete", [this, e]);
            });
            for (var i = 0, o = e.length; o > i; i++) {
              var r = e[i];
              r.remove(), s(r, this.items);
            }
          }
        }),
        (m.prototype.destroy = function () {
          var t = this.element.style;
          (t.height = ""), (t.position = ""), (t.width = "");
          for (var e = 0, i = this.items.length; i > e; e++) {
            var n = this.items[e];
            n.destroy();
          }
          this.unbindResize(),
            delete this.element.outlayerGUID,
            l && l.removeData(this.element, this.constructor.namespace);
        }),
        (m.data = function (t) {
          var e = t && t.outlayerGUID;
          return e && y[e];
        }),
        (m.create = function (t, i) {
          function n() {
            m.apply(this, arguments);
          }
          return (
            Object.create
              ? (n.prototype = Object.create(m.prototype))
              : e(n.prototype, m.prototype),
            (n.prototype.constructor = n),
            (n.defaults = e({}, m.defaults)),
            e(n.defaults, i),
            (n.prototype.settings = {}),
            (n.namespace = t),
            (n.data = m.data),
            (n.Item = function () {
              g.apply(this, arguments);
            }),
            (n.Item.prototype = new g()),
            r(function () {
              for (
                var e = o(t),
                  i = a.querySelectorAll(".js-" + e),
                  s = "data-" + e + "-options",
                  r = 0,
                  c = i.length;
                c > r;
                r++
              ) {
                var u,
                  f = i[r],
                  d = f.getAttribute(s);
                try {
                  u = d && JSON.parse(d);
                } catch (p) {
                  h &&
                    h.error(
                      "Error parsing " +
                        s +
                        " on " +
                        f.nodeName.toLowerCase() +
                        (f.id ? "#" + f.id : "") +
                        ": " +
                        p
                    );
                  continue;
                }
                var g = new n(f, u);
                l && l.data(f, t, g);
              }
            }),
            l && l.bridget && l.bridget(t, n),
            n
          );
        }),
        (m.Item = g),
        m
      );
    }
    var a = t.document,
      h = t.console,
      l = t.jQuery,
      c = function () {},
      u = Object.prototype.toString,
      f =
        "object" == typeof HTMLElement
          ? function (t) {
              return t instanceof HTMLElement;
            }
          : function (t) {
              return (
                t &&
                "object" == typeof t &&
                1 === t.nodeType &&
                "string" == typeof t.nodeName
              );
            },
      d = Array.prototype.indexOf
        ? function (t, e) {
            return t.indexOf(e);
          }
        : function (t, e) {
            for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
            return -1;
          };
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "eventie/eventie",
            "doc-ready/doc-ready",
            "eventEmitter/EventEmitter",
            "get-size/get-size",
            "matches-selector/matches-selector",
            "./item",
          ],
          r
        )
      : (t.Outlayer = r(
          t.eventie,
          t.docReady,
          t.EventEmitter,
          t.getSize,
          t.matchesSelector,
          t.Outlayer.Item
        ));
  })(window),
  (function (t) {
    function e(t, e) {
      var n = t.create("masonry");
      return (
        (n.prototype._resetLayout = function () {
          this.getSize(),
            this._getMeasurement("columnWidth", "outerWidth"),
            this._getMeasurement("gutter", "outerWidth"),
            this.measureColumns();
          var t = this.cols;
          for (this.colYs = []; t--; ) this.colYs.push(0);
          this.maxY = 0;
        }),
        (n.prototype.measureColumns = function () {
          if ((this.getContainerWidth(), !this.columnWidth)) {
            var t = this.items[0],
              i = t && t.element;
            this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
          }
          (this.columnWidth += this.gutter),
            (this.cols = Math.floor(
              (this.containerWidth + this.gutter) / this.columnWidth
            )),
            (this.cols = Math.max(this.cols, 1));
        }),
        (n.prototype.getContainerWidth = function () {
          var t = this.options.isFitWidth
              ? this.element.parentNode
              : this.element,
            i = e(t);
          this.containerWidth = i && i.innerWidth;
        }),
        (n.prototype._getItemLayoutPosition = function (t) {
          t.getSize();
          var e = t.size.outerWidth % this.columnWidth,
            n = e && 1 > e ? "round" : "ceil",
            s = Math[n](t.size.outerWidth / this.columnWidth);
          s = Math.min(s, this.cols);
          for (
            var o = this._getColGroup(s),
              r = Math.min.apply(Math, o),
              a = i(o, r),
              h = { x: this.columnWidth * a, y: r },
              l = r + t.size.outerHeight,
              c = this.cols + 1 - o.length,
              u = 0;
            c > u;
            u++
          )
            this.colYs[a + u] = l;
          return h;
        }),
        (n.prototype._getColGroup = function (t) {
          if (2 > t) return this.colYs;
          for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
            var s = this.colYs.slice(n, n + t);
            e[n] = Math.max.apply(Math, s);
          }
          return e;
        }),
        (n.prototype._manageStamp = function (t) {
          var i = e(t),
            n = this._getElementOffset(t),
            s = this.options.isOriginLeft ? n.left : n.right,
            o = s + i.outerWidth,
            r = Math.floor(s / this.columnWidth);
          r = Math.max(0, r);
          var a = Math.floor(o / this.columnWidth);
          (a -= o % this.columnWidth ? 0 : 1), (a = Math.min(this.cols - 1, a));
          for (
            var h =
                (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight,
              l = r;
            a >= l;
            l++
          )
            this.colYs[l] = Math.max(h, this.colYs[l]);
        }),
        (n.prototype._getContainerSize = function () {
          this.maxY = Math.max.apply(Math, this.colYs);
          var t = { height: this.maxY };
          return (
            this.options.isFitWidth && (t.width = this._getContainerFitWidth()),
            t
          );
        }),
        (n.prototype._getContainerFitWidth = function () {
          for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
          return (this.cols - t) * this.columnWidth - this.gutter;
        }),
        (n.prototype.needsResizeLayout = function () {
          var t = this.containerWidth;
          return this.getContainerWidth(), t !== this.containerWidth;
        }),
        n
      );
    }
    var i = Array.prototype.indexOf
      ? function (t, e) {
          return t.indexOf(e);
        }
      : function (t, e) {
          for (var i = 0, n = t.length; n > i; i++) {
            var s = t[i];
            if (s === e) return i;
          }
          return -1;
        };
    "function" == typeof define && define.amd
      ? define(["outlayer/outlayer", "get-size/get-size"], e)
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window);
var Base = function () {};
(Base.extend = function (t, e) {
  "use strict";
  var i = Base.prototype.extend;
  Base._prototyping = !0;
  var n = new this();
  i.call(n, t), (n.base = function () {}), delete Base._prototyping;
  var s = n.constructor,
    o = (n.constructor = function () {
      if (!Base._prototyping)
        if (this._constructing || this.constructor == o)
          (this._constructing = !0),
            s.apply(this, arguments),
            delete this._constructing;
        else if (null !== arguments[0])
          return (arguments[0].extend || i).call(arguments[0], n);
    });
  return (
    (o.ancestor = this),
    (o.extend = this.extend),
    (o.forEach = this.forEach),
    (o.implement = this.implement),
    (o.prototype = n),
    (o.toString = this.toString),
    (o.valueOf = function (t) {
      return "object" == t ? o : s.valueOf();
    }),
    i.call(o, e),
    "function" == typeof o.init && o.init(),
    o
  );
}),
  (Base.prototype = {
    extend: function (t, e) {
      if (arguments.length > 1) {
        var i = this[t];
        if (
          i &&
          "function" == typeof e &&
          (!i.valueOf || i.valueOf() != e.valueOf()) &&
          /\bbase\b/.test(e)
        ) {
          var n = e.valueOf();
          (e = function () {
            var t = this.base || Base.prototype.base;
            this.base = i;
            var e = n.apply(this, arguments);
            return (this.base = t), e;
          }),
            (e.valueOf = function (t) {
              return "object" == t ? e : n;
            }),
            (e.toString = Base.toString);
        }
        this[t] = e;
      } else if (t) {
        var s = Base.prototype.extend;
        Base._prototyping ||
          "function" == typeof this ||
          (s = this.extend || s);
        for (
          var o = { toSource: null },
            r = ["constructor", "toString", "valueOf"],
            a = Base._prototyping ? 0 : 1;
          (h = r[a++]);

        )
          t[h] != o[h] && s.call(this, h, t[h]);
        for (var h in t) o[h] || s.call(this, h, t[h]);
      }
      return this;
    },
  }),
  (Base = Base.extend(
    {
      constructor: function () {
        this.extend(arguments[0]);
      },
    },
    {
      ancestor: Object,
      version: "1.1",
      forEach: function (t, e, i) {
        for (var n in t) void 0 === this.prototype[n] && e.call(i, t[n], n, t);
      },
      implement: function () {
        for (var t = 0; t < arguments.length; t++)
          "function" == typeof arguments[t]
            ? arguments[t](this.prototype)
            : this.prototype.extend(arguments[t]);
        return this;
      },
      toString: function () {
        return String(this.valueOf());
      },
    }
  ));
var FlipClock;
!(function (t) {
  "use strict";
  (FlipClock = function (t, e, i) {
    return (
      e instanceof Object && e instanceof Date == !1 && ((i = e), (e = 0)),
      new FlipClock.Factory(t, e, i)
    );
  }),
    (FlipClock.Lang = {}),
    (FlipClock.Base = Base.extend({
      buildDate: "2014-12-12",
      version: "0.7.7",
      constructor: function (e, i) {
        "object" != typeof e && (e = {}),
          "object" != typeof i && (i = {}),
          this.setOptions(t.extend(!0, {}, e, i));
      },
      callback: function (t) {
        if ("function" == typeof t) {
          for (var e = [], i = 1; i <= arguments.length; i++)
            arguments[i] && e.push(arguments[i]);
          t.apply(this, e);
        }
      },
      log: function (t) {
        window.console && console.log && console.log(t);
      },
      getOption: function (t) {
        return this[t] ? this[t] : !1;
      },
      getOptions: function () {
        return this;
      },
      setOption: function (t, e) {
        this[t] = e;
      },
      setOptions: function (t) {
        for (var e in t) "undefined" != typeof t[e] && this.setOption(e, t[e]);
      },
    }));
})(jQuery),
  (function (t) {
    "use strict";
    FlipClock.Face = FlipClock.Base.extend({
      autoStart: !0,
      dividers: [],
      factory: !1,
      lists: [],
      constructor: function (t, e) {
        (this.dividers = []),
          (this.lists = []),
          this.base(e),
          (this.factory = t);
      },
      build: function () {
        this.autoStart && this.start();
      },
      createDivider: function (e, i, n) {
        ("boolean" != typeof i && i) || ((n = i), (i = e));
        var s = [
          '<span class="' + this.factory.classes.dot + ' top"></span>',
          '<span class="' + this.factory.classes.dot + ' bottom"></span>',
        ].join("");
        n && (s = ""), (e = this.factory.localize(e));
        var o = [
            '<span class="' +
              this.factory.classes.divider +
              " " +
              (i ? i : "").toLowerCase() +
              '">',
            '<span class="' +
              this.factory.classes.label +
              '">' +
              (e ? e : "") +
              "</span>",
            s,
            "</span>",
          ],
          r = t(o.join(""));
        return this.dividers.push(r), r;
      },
      createList: function (t, e) {
        "object" == typeof t && ((e = t), (t = 0));
        var i = new FlipClock.List(this.factory, t, e);
        return this.lists.push(i), i;
      },
      reset: function () {
        (this.factory.time = new FlipClock.Time(
          this.factory,
          this.factory.original ? Math.round(this.factory.original) : 0,
          { minimumDigits: this.factory.minimumDigits }
        )),
          this.flip(this.factory.original, !1);
      },
      appendDigitToClock: function (t) {
        t.$el.append(!1);
      },
      addDigit: function (t) {
        var e = this.createList(t, {
          classes: {
            active: this.factory.classes.active,
            before: this.factory.classes.before,
            flip: this.factory.classes.flip,
          },
        });
        this.appendDigitToClock(e);
      },
      start: function () {},
      stop: function () {},
      autoIncrement: function () {
        this.factory.countdown ? this.decrement() : this.increment();
      },
      increment: function () {
        this.factory.time.addSecond();
      },
      decrement: function () {
        0 == this.factory.time.getTimeSeconds()
          ? this.factory.stop()
          : this.factory.time.subSecond();
      },
      flip: function (e, i) {
        var n = this;
        t.each(e, function (t, e) {
          var s = n.lists[t];
          s ? (i || e == s.digit || s.play(), s.select(e)) : n.addDigit(e);
        });
      },
    });
  })(jQuery),
  (function (t) {
    "use strict";
    FlipClock.Factory = FlipClock.Base.extend({
      animationRate: 1e3,
      autoStart: !0,
      callbacks: {
        destroy: !1,
        create: !1,
        init: !1,
        interval: !1,
        start: !1,
        stop: !1,
        reset: !1,
      },
      classes: {
        active: "flip-clock-active",
        before: "flip-clock-before",
        divider: "flip-clock-divider",
        dot: "flip-clock-dot",
        label: "flip-clock-label",
        flip: "flip",
        play: "play",
        wrapper: "flip-clock-wrapper",
      },
      clockFace: "HourlyCounter",
      countdown: !1,
      defaultClockFace: "HourlyCounter",
      defaultLanguage: "english",
      $el: !1,
      face: !0,
      lang: !1,
      language: "english",
      minimumDigits: 0,
      original: !1,
      running: !1,
      time: !1,
      timer: !1,
      $wrapper: !1,
      constructor: function (e, i, n) {
        n || (n = {}),
          (this.lists = []),
          (this.running = !1),
          this.base(n),
          (this.$el = t(e).addClass(this.classes.wrapper)),
          (this.$wrapper = this.$el),
          (this.original = i instanceof Date ? i : i ? Math.round(i) : 0),
          (this.time = new FlipClock.Time(this, this.original, {
            minimumDigits: this.minimumDigits,
            animationRate: this.animationRate,
          })),
          (this.timer = new FlipClock.Timer(this, n)),
          this.loadLanguage(this.language),
          this.loadClockFace(this.clockFace, n),
          this.autoStart && this.start();
      },
      loadClockFace: function (t, e) {
        var i,
          n = "Face",
          s = !1;
        return (
          (t = t.ucfirst() + n),
          this.face.stop && (this.stop(), (s = !0)),
          this.$el.html(""),
          (this.time.minimumDigits = this.minimumDigits),
          (i = FlipClock[t]
            ? new FlipClock[t](this, e)
            : new FlipClock[this.defaultClockFace + n](this, e)),
          i.build(),
          (this.face = i),
          s && this.start(),
          this.face
        );
      },
      loadLanguage: function (t) {
        var e;
        return (
          (e = FlipClock.Lang[t.ucfirst()]
            ? FlipClock.Lang[t.ucfirst()]
            : FlipClock.Lang[t]
            ? FlipClock.Lang[t]
            : FlipClock.Lang[this.defaultLanguage]),
          (this.lang = e)
        );
      },
      localize: function (t, e) {
        var i = this.lang;
        if (!t) return null;
        var n = t.toLowerCase();
        return "object" == typeof e && (i = e), i && i[n] ? i[n] : t;
      },
      start: function (t) {
        var e = this;
        e.running || (e.countdown && !(e.countdown && e.time.time > 0))
          ? e.log("Trying to start timer when countdown already at 0")
          : (e.face.start(e.time),
            e.timer.start(function () {
              e.flip(), "function" == typeof t && t();
            }));
      },
      stop: function (t) {
        this.face.stop(), this.timer.stop(t);
        for (var e in this.lists)
          this.lists.hasOwnProperty(e) && this.lists[e].stop();
      },
      reset: function (t) {
        this.timer.reset(t), this.face.reset();
      },
      setTime: function (t) {
        (this.time.time = t), this.flip(!0);
      },
      getTime: function (t) {
        return this.time;
      },
      setCountdown: function (t) {
        var e = this.running;
        (this.countdown = t ? !0 : !1), e && (this.stop(), this.start());
      },
      flip: function (t) {
        this.face.flip(!1, t);
      },
    });
  })(jQuery),
  (function (t) {
    "use strict";
    FlipClock.List = FlipClock.Base.extend({
      digit: 0,
      classes: {
        active: "flip-clock-active",
        before: "flip-clock-before",
        flip: "flip",
      },
      factory: !1,
      $el: !1,
      $obj: !1,
      items: [],
      lastDigit: 0,
      constructor: function (t, e, i) {
        (this.factory = t),
          (this.digit = e),
          (this.lastDigit = e),
          (this.$el = this.createList()),
          (this.$obj = this.$el),
          e > 0 && this.select(e),
          this.factory.$el.append(this.$el);
      },
      select: function (t) {
        if (
          ("undefined" == typeof t ? (t = this.digit) : (this.digit = t),
          this.digit != this.lastDigit)
        ) {
          var e = this.$el
            .find("." + this.classes.before)
            .removeClass(this.classes.before);
          this.$el
            .find("." + this.classes.active)
            .removeClass(this.classes.active)
            .addClass(this.classes.before),
            this.appendListItem(this.classes.active, this.digit),
            e.remove(),
            (this.lastDigit = this.digit);
        }
      },
      play: function () {
        this.$el.addClass(this.factory.classes.play);
      },
      stop: function () {
        var t = this;
        setTimeout(function () {
          t.$el.removeClass(t.factory.classes.play);
        }, this.factory.timer.interval);
      },
      createListItem: function (t, e) {
        return [
          '<li class="' + (t ? t : "") + '">',
          '<a href="#">',
          '<div class="up">',
          '<div class="shadow"></div>',
          '<div class="inn">' + (e ? e : "") + "</div>",
          "</div>",
          '<div class="down">',
          '<div class="shadow"></div>',
          '<div class="inn">' + (e ? e : "") + "</div>",
          "</div>",
          "</a>",
          "</li>",
        ].join("");
      },
      appendListItem: function (t, e) {
        var i = this.createListItem(t, e);
        this.$el.append(i);
      },
      createList: function () {
        var e = this.getPrevDigit() ? this.getPrevDigit() : this.digit,
          i = t(
            [
              '<ul class="' +
                this.classes.flip +
                " " +
                (this.factory.running ? this.factory.classes.play : "") +
                '">',
              this.createListItem(this.classes.before, e),
              this.createListItem(this.classes.active, this.digit),
              "</ul>",
            ].join("")
          );
        return i;
      },
      getNextDigit: function () {
        return 9 == this.digit ? 0 : this.digit + 1;
      },
      getPrevDigit: function () {
        return 0 == this.digit ? 9 : this.digit - 1;
      },
    });
  })(jQuery),
  (function (t) {
    "use strict";
    (String.prototype.ucfirst = function () {
      return this.substr(0, 1).toUpperCase() + this.substr(1);
    }),
      (t.fn.FlipClock = function (e, i) {
        return new FlipClock(t(this), e, i);
      }),
      (t.fn.flipClock = function (e, i) {
        return t.fn.FlipClock(e, i);
      });
  })(jQuery),
  (function (t) {
    "use strict";
    FlipClock.Time = FlipClock.Base.extend({
      time: 0,
      factory: !1,
      minimumDigits: 0,
      constructor: function (t, e, i) {
        "object" != typeof i && (i = {}),
          i.minimumDigits || (i.minimumDigits = t.minimumDigits),
          this.base(i),
          (this.factory = t),
          e && (this.time = e);
      },
      convertDigitsToArray: function (t) {
        var e = [];
        t = t.toString();
        for (var i = 0; i < t.length; i++) t[i].match(/^\d*$/g) && e.push(t[i]);
        return e;
      },
      digit: function (t) {
        var e = this.toString(),
          i = e.length;
        return e[i - t] ? e[i - t] : !1;
      },
      digitize: function (e) {
        var i = [];
        if (
          (t.each(e, function (t, e) {
            (e = e.toString()), 1 == e.length && (e = "0" + e);
            for (var n = 0; n < e.length; n++) i.push(e.charAt(n));
          }),
          i.length > this.minimumDigits && (this.minimumDigits = i.length),
          this.minimumDigits > i.length)
        )
          for (var n = i.length; n < this.minimumDigits; n++) i.unshift("0");
        return i;
      },
      getDateObject: function () {
        return this.time instanceof Date
          ? this.time
          : new Date(new Date().getTime() + 1e3 * this.getTimeSeconds());
      },
      getDayCounter: function (t) {
        var e = [this.getDays(), this.getHours(!0), this.getMinutes(!0)];
        return t && e.push(this.getSeconds(!0)), this.digitize(e);
      },
      getDays: function (t) {
        var e = this.getTimeSeconds() / 60 / 60 / 24;
        return t && (e %= 7), Math.floor(e);
      },
      getHourCounter: function () {
        var t = this.digitize([
          this.getHours(),
          this.getMinutes(!0),
          this.getSeconds(!0),
        ]);
        return t;
      },
      getHourly: function () {
        return this.getHourCounter();
      },
      getHours: function (t) {
        var e = this.getTimeSeconds() / 60 / 60;
        return t && (e %= 24), Math.floor(e);
      },
      getMilitaryTime: function (t, e) {
        "undefined" == typeof e && (e = !0), t || (t = this.getDateObject());
        var i = [t.getHours(), t.getMinutes()];
        return e === !0 && i.push(t.getSeconds()), this.digitize(i);
      },
      getMinutes: function (t) {
        var e = this.getTimeSeconds() / 60;
        return t && (e %= 60), Math.floor(e);
      },
      getMinuteCounter: function () {
        var t = this.digitize([this.getMinutes(), this.getSeconds(!0)]);
        return t;
      },
      getTimeSeconds: function (t) {
        return (
          t || (t = new Date()),
          this.time instanceof Date
            ? this.factory.countdown
              ? Math.max(this.time.getTime() / 1e3 - t.getTime() / 1e3, 0)
              : t.getTime() / 1e3 - this.time.getTime() / 1e3
            : this.time
        );
      },
      getTime: function (t, e) {
        "undefined" == typeof e && (e = !0),
          t || (t = this.getDateObject()),
          console.log(t);
        var i = t.getHours(),
          n = [i > 12 ? i - 12 : 0 === i ? 12 : i, t.getMinutes()];
        return e === !0 && n.push(t.getSeconds()), this.digitize(n);
      },
      getSeconds: function (t) {
        var e = this.getTimeSeconds();
        return t && (60 == e ? (e = 0) : (e %= 60)), Math.ceil(e);
      },
      getWeeks: function (t) {
        var e = this.getTimeSeconds() / 60 / 60 / 24 / 7;
        return t && (e %= 52), Math.floor(e);
      },
      removeLeadingZeros: function (e, i) {
        var n = 0,
          s = [];
        return (
          t.each(i, function (t, o) {
            e > t ? (n += parseInt(i[t], 10)) : s.push(i[t]);
          }),
          0 === n ? s : i
        );
      },
      addSeconds: function (t) {
        this.time instanceof Date
          ? this.time.setSeconds(this.time.getSeconds() + t)
          : (this.time += t);
      },
      addSecond: function () {
        this.addSeconds(1);
      },
      subSeconds: function (t) {
        this.time instanceof Date
          ? this.time.setSeconds(this.time.getSeconds() - t)
          : (this.time -= t);
      },
      subSecond: function () {
        this.subSeconds(1);
      },
      toString: function () {
        return this.getTimeSeconds().toString();
      },
    });
  })(jQuery),
  (function (t) {
    "use strict";
    FlipClock.Timer = FlipClock.Base.extend({
      callbacks: {
        destroy: !1,
        create: !1,
        init: !1,
        interval: !1,
        start: !1,
        stop: !1,
        reset: !1,
      },
      count: 0,
      factory: !1,
      interval: 1e3,
      animationRate: 1e3,
      constructor: function (t, e) {
        this.base(e),
          (this.factory = t),
          this.callback(this.callbacks.init),
          this.callback(this.callbacks.create);
      },
      getElapsed: function () {
        return this.count * this.interval;
      },
      getElapsedTime: function () {
        return new Date(this.time + this.getElapsed());
      },
      reset: function (t) {
        clearInterval(this.timer),
          (this.count = 0),
          this._setInterval(t),
          this.callback(this.callbacks.reset);
      },
      start: function (t) {
        (this.factory.running = !0),
          this._createTimer(t),
          this.callback(this.callbacks.start);
      },
      stop: function (t) {
        (this.factory.running = !1),
          this._clearInterval(t),
          this.callback(this.callbacks.stop),
          this.callback(t);
      },
      _clearInterval: function () {
        clearInterval(this.timer);
      },
      _createTimer: function (t) {
        this._setInterval(t);
      },
      _destroyTimer: function (t) {
        this._clearInterval(),
          (this.timer = !1),
          this.callback(t),
          this.callback(this.callbacks.destroy);
      },
      _interval: function (t) {
        this.callback(this.callbacks.interval), this.callback(t), this.count++;
      },
      _setInterval: function (t) {
        var e = this;
        e._interval(t),
          (e.timer = setInterval(function () {
            e._interval(t);
          }, this.interval));
      },
    });
  })(jQuery),
  (function (t) {
    FlipClock.TwentyFourHourClockFace = FlipClock.Face.extend({
      constructor: function (t, e) {
        this.base(t, e);
      },
      build: function (e) {
        var i = this,
          n = this.factory.$el.find("ul");
        this.factory.time.time ||
          ((this.factory.original = new Date()),
          (this.factory.time = new FlipClock.Time(
            this.factory,
            this.factory.original
          )));
        var e = e ? e : this.factory.time.getMilitaryTime(!1, this.showSeconds);
        e.length > n.length &&
          t.each(e, function (t, e) {
            i.createList(e);
          }),
          this.createDivider(),
          this.createDivider(),
          t(this.dividers[0]).insertBefore(
            this.lists[this.lists.length - 2].$el
          ),
          t(this.dividers[1]).insertBefore(
            this.lists[this.lists.length - 4].$el
          ),
          this.base();
      },
      flip: function (t, e) {
        this.autoIncrement(),
          (t = t ? t : this.factory.time.getMilitaryTime(!1, this.showSeconds)),
          this.base(t, e);
      },
    });
  })(jQuery),
  (function (t) {
    FlipClock.CounterFace = FlipClock.Face.extend({
      shouldAutoIncrement: !1,
      constructor: function (t, e) {
        "object" != typeof e && (e = {}),
          (t.autoStart = e.autoStart ? !0 : !1),
          e.autoStart && (this.shouldAutoIncrement = !0),
          (t.increment = function () {
            (t.countdown = !1), t.setTime(t.getTime().getTimeSeconds() + 1);
          }),
          (t.decrement = function () {
            t.countdown = !0;
            var e = t.getTime().getTimeSeconds();
            e > 0 && t.setTime(e - 1);
          }),
          (t.setValue = function (e) {
            t.setTime(e);
          }),
          (t.setCounter = function (e) {
            t.setTime(e);
          }),
          this.base(t, e);
      },
      build: function () {
        var e = this,
          i = this.factory.$el.find("ul"),
          n = this.factory.getTime().digitize([this.factory.getTime().time]);
        n.length > i.length &&
          t.each(n, function (t, i) {
            var n = e.createList(i);
            n.select(i);
          }),
          t.each(this.lists, function (t, e) {
            e.play();
          }),
          this.base();
      },
      flip: function (t, e) {
        this.shouldAutoIncrement && this.autoIncrement(),
          t ||
            (t = this.factory
              .getTime()
              .digitize([this.factory.getTime().time])),
          this.base(t, e);
      },
      reset: function () {
        (this.factory.time = new FlipClock.Time(
          this.factory,
          this.factory.original ? Math.round(this.factory.original) : 0
        )),
          this.flip();
      },
    });
  })(jQuery),
  (function (t) {
    FlipClock.DailyCounterFace = FlipClock.Face.extend({
      showSeconds: !0,
      constructor: function (t, e) {
        this.base(t, e);
      },
      build: function (e) {
        var i = this,
          n = this.factory.$el.find("ul"),
          s = 0;
        (e = e ? e : this.factory.time.getDayCounter(this.showSeconds)),
          e.length > n.length &&
            t.each(e, function (t, e) {
              i.createList(e);
            }),
          this.showSeconds
            ? t(this.createDivider("Seconds")).insertBefore(
                this.lists[this.lists.length - 2].$el
              )
            : (s = 2),
          t(this.createDivider("Minutes")).insertBefore(
            this.lists[this.lists.length - 4 + s].$el
          ),
          t(this.createDivider("Hours")).insertBefore(
            this.lists[this.lists.length - 6 + s].$el
          ),
          t(this.createDivider("Days", !0)).insertBefore(this.lists[0].$el),
          this.base();
      },
      flip: function (t, e) {
        t || (t = this.factory.time.getDayCounter(this.showSeconds)),
          this.autoIncrement(),
          this.base(t, e);
      },
    });
  })(jQuery),
  (function (t) {
    FlipClock.HourlyCounterFace = FlipClock.Face.extend({
      constructor: function (t, e) {
        this.base(t, e);
      },
      build: function (e, i) {
        var n = this,
          s = this.factory.$el.find("ul");
        (i = i ? i : this.factory.time.getHourCounter()),
          i.length > s.length &&
            t.each(i, function (t, e) {
              n.createList(e);
            }),
          t(this.createDivider("Seconds")).insertBefore(
            this.lists[this.lists.length - 2].$el
          ),
          t(this.createDivider("Minutes")).insertBefore(
            this.lists[this.lists.length - 4].$el
          ),
          e ||
            t(this.createDivider("Hours", !0)).insertBefore(this.lists[0].$el),
          this.base();
      },
      flip: function (t, e) {
        t || (t = this.factory.time.getHourCounter()),
          this.autoIncrement(),
          this.base(t, e);
      },
      appendDigitToClock: function (t) {
        this.base(t), this.dividers[0].insertAfter(this.dividers[0].next());
      },
    });
  })(jQuery),
  (function (t) {
    FlipClock.MinuteCounterFace = FlipClock.HourlyCounterFace.extend({
      clearExcessDigits: !1,
      constructor: function (t, e) {
        this.base(t, e);
      },
      build: function () {
        this.base(!0, this.factory.time.getMinuteCounter());
      },
      flip: function (t, e) {
        t || (t = this.factory.time.getMinuteCounter()), this.base(t, e);
      },
    });
  })(jQuery),
  (function (t) {
    FlipClock.TwelveHourClockFace = FlipClock.TwentyFourHourClockFace.extend({
      meridium: !1,
      meridiumText: "AM",
      build: function () {
        var e = this.factory.time.getTime(!1, this.showSeconds);
        this.base(e),
          (this.meridiumText = this.getMeridium()),
          (this.meridium = t(
            [
              '<ul class="flip-clock-meridium">',
              "<li>",
              '<a href="#">' + this.meridiumText + "</a>",
              "</li>",
              "</ul>",
            ].join("")
          )),
          this.meridium.insertAfter(this.lists[this.lists.length - 1].$el);
      },
      flip: function (t, e) {
        this.meridiumText != this.getMeridium() &&
          ((this.meridiumText = this.getMeridium()),
          this.meridium.find("a").html(this.meridiumText)),
          this.base(this.factory.time.getTime(!1, this.showSeconds), e);
      },
      getMeridium: function () {
        return new Date().getHours() >= 12 ? "PM" : "AM";
      },
      isPM: function () {
        return "PM" == this.getMeridium() ? !0 : !1;
      },
      isAM: function () {
        return "AM" == this.getMeridium() ? !0 : !1;
      },
    });
  })(jQuery),
  (function (t) {
    (FlipClock.Lang.Arabic = {
      years: "سنوات",
      months: "شهور",
      days: "أيام",
      hours: "ساعات",
      minutes: "دقائق",
      seconds: "ثواني",
    }),
      (FlipClock.Lang.ar = FlipClock.Lang.Arabic),
      (FlipClock.Lang["ar-ar"] = FlipClock.Lang.Arabic),
      (FlipClock.Lang.arabic = FlipClock.Lang.Arabic);
  })(jQuery),
  (function (t) {
    (FlipClock.Lang.Danish = {
      years: "År",
      months: "Måneder",
      days: "Dage",
      hours: "Timer",
      minutes: "Minutter",
      seconds: "Sekunder",
    }),
      (FlipClock.Lang.da = FlipClock.Lang.Danish),
      (FlipClock.Lang["da-dk"] = FlipClock.Lang.Danish),
      (FlipClock.Lang.danish = FlipClock.Lang.Danish);
  })(jQuery),
  (function (t) {
    (FlipClock.Lang.German = {
      years: "Jahre",
      months: "Monate",
      days: "Tage",
      hours: "Stunden",
      minutes: "Minuten",
      seconds: "Sekunden",
    }),
      (FlipClock.Lang.de = FlipClock.Lang.German),
      (FlipClock.Lang["de-de"] = FlipClock.Lang.German),
      (FlipClock.Lang.german = FlipClock.Lang.German);
  })(jQuery),
  (function (t) {
    (FlipClock.Lang.English = {
      years: "Years",
      months: "Months",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    }),
      (FlipClock.Lang.en = FlipClock.Lang.English),
      (FlipClock.Lang["en-us"] = FlipClock.Lang.English),
      (FlipClock.Lang.english = FlipClock.Lang.English);
  })(jQuery),
  (function (t) {
    (FlipClock.Lang.Spanish = {
      years: "A&#241;os",
      months: "Meses",
      days: "D&#205;as",
      hours: "Horas",
      minutes: "Minutos",
      seconds: "Segundo",
    }),
      (FlipClock.Lang.es = FlipClock.Lang.Spanish),
      (FlipClock.Lang["es-es"] = FlipClock.Lang.Spanish),
      (FlipClock.Lang.spanish = FlipClock.Lang.Spanish);
  })(jQuery),
  (function (t) {
    (FlipClock.Lang.Finnish = {
      years: "Vuotta",
      months: "Kuukautta",
      days: "Päivää",
      hours: "Tuntia",
      minutes: "Minuuttia",
      seconds: "Sekuntia",
    }),
      (FlipClock.Lang.fi = FlipClock.Lang.Finnish),
      (FlipClock.Lang["fi-fi"] = FlipClock.Lang.Finnish),
      (FlipClock.Lang.finnish = FlipClock.Lang.Finnish);
  })(jQuery),
  (function (t) {
    (FlipClock.Lang.French = {
      years: "Ans",
      months: "Mois",
      days: "Jours",
      hours: "Heures",
      minutes: "Minutes",
      seconds: "Secondes",
    }),
      (FlipClock.Lang.fr = FlipClock.Lang.French),
      (FlipClock.Lang["fr-ca"] = FlipClock.Lang.French),
      (FlipClock.Lang.french = FlipClock.Lang.French);
  })(jQuery),
  (function (t) {
    (FlipClock.Lang.Italian = {
      years: "Anni",
      months: "Mesi",
      days: "Giorni",
      hours: "Ore",
      minutes: "Minuti",
      seconds: "Secondi",
    }),
      (FlipClock.Lang.it = FlipClock.Lang.Italian),
      (FlipClock.Lang["it-it"] = FlipClock.Lang.Italian),
      (FlipClock.Lang.italian = FlipClock.Lang.Italian);
  })(jQuery),
  (function (t) {
    (FlipClock.Lang.Latvian = {
      years: "Gadi",
      months: "Mēneši",
      days: "Dienas",
      hours: "Stundas",
      minutes: "Minūtes",
      seconds: "Sekundes",
    }),
      (FlipClock.Lang.lv = FlipClock.Lang.Latvian),
      (FlipClock.Lang["lv-lv"] = FlipClock.Lang.Latvian),
      (FlipClock.Lang.latvian = FlipClock.Lang.Latvian);
  })(jQuery),
  (function (t) {
    (FlipClock.Lang.Dutch = {
      years: "Jaren",
      months: "Maanden",
      days: "Dagen",
      hours: "Uren",
      minutes: "Minuten",
      seconds: "Seconden",
    }),
      (FlipClock.Lang.nl = FlipClock.Lang.Dutch),
      (FlipClock.Lang["nl-be"] = FlipClock.Lang.Dutch),
      (FlipClock.Lang.dutch = FlipClock.Lang.Dutch);
  })(jQuery),
  (function (t) {
    (FlipClock.Lang.Norwegian = {
      years: "År",
      months: "Måneder",
      days: "Dager",
      hours: "Timer",
      minutes: "Minutter",
      seconds: "Sekunder",
    }),
      (FlipClock.Lang.no = FlipClock.Lang.Norwegian),
      (FlipClock.Lang.nb = FlipClock.Lang.Norwegian),
      (FlipClock.Lang["no-nb"] = FlipClock.Lang.Norwegian),
      (FlipClock.Lang.norwegian = FlipClock.Lang.Norwegian);
  })(jQuery),
  (function (t) {
    (FlipClock.Lang.Portuguese = {
      years: "Anos",
      months: "Meses",
      days: "Dias",
      hours: "Horas",
      minutes: "Minutos",
      seconds: "Segundos",
    }),
      (FlipClock.Lang.pt = FlipClock.Lang.Portuguese),
      (FlipClock.Lang["pt-br"] = FlipClock.Lang.Portuguese),
      (FlipClock.Lang.portuguese = FlipClock.Lang.Portuguese);
  })(jQuery),
  (function (t) {
    (FlipClock.Lang.Russian = {
      years: "лет",
      months: "месяцев",
      days: "дней",
      hours: "часов",
      minutes: "минут",
      seconds: "секунд",
    }),
      (FlipClock.Lang.ru = FlipClock.Lang.Russian),
      (FlipClock.Lang["ru-ru"] = FlipClock.Lang.Russian),
      (FlipClock.Lang.russian = FlipClock.Lang.Russian);
  })(jQuery),
  (function (t) {
    (FlipClock.Lang.Swedish = {
      years: "År",
      months: "Månader",
      days: "Dagar",
      hours: "Timmar",
      minutes: "Minuter",
      seconds: "Sekunder",
    }),
      (FlipClock.Lang.sv = FlipClock.Lang.Swedish),
      (FlipClock.Lang["sv-se"] = FlipClock.Lang.Swedish),
      (FlipClock.Lang.swedish = FlipClock.Lang.Swedish);
  })(jQuery),
  (function (t) {
    (FlipClock.Lang.Chinese = {
      years: "年",
      months: "月",
      days: "日",
      hours: "时",
      minutes: "分",
      seconds: "秒",
    }),
      (FlipClock.Lang.zh = FlipClock.Lang.Chinese),
      (FlipClock.Lang["zh-cn"] = FlipClock.Lang.Chinese),
      (FlipClock.Lang.chinese = FlipClock.Lang.Chinese);
  })(jQuery);
