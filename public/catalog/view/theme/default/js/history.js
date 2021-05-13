!(function (window) {
  function emptyFunction() {}
  function parseURL(e, t, n) {
    var r =
      /(?:([\w0-9]+:))?(?:\/\/(?:[^@]*@)?([^\/:\?#]+)(?::([0-9]+))?)?([^\?#]*)(?:(\?[^#]+)|\?)?(?:(#.*))?/;
    if (null == e || "" === e || t)
      (e = t ? e : windowLocation.href),
        (!isSupportHistoryAPI || n) &&
          ((e = e.replace(/^[^#]*/, "") || "#"),
          (e =
            windowLocation.protocol.replace(/:.*$|$/, ":") +
            "//" +
            windowLocation.host +
            settings.basepath +
            e.replace(new RegExp("^#[/]?(?:" + settings.type + ")?"), "")));
    else {
      var i = parseURL(),
        o = i._pathname,
        a = i._protocol;
      (e = "" + e),
        (e = /^(?:[\w0-9]+\:)?\/\//.test(e)
          ? 0 === e.indexOf("/")
            ? a + e
            : e
          : a +
            "//" +
            i._host +
            (0 === e.indexOf("/")
              ? e
              : 0 === e.indexOf("?")
              ? o + e
              : 0 === e.indexOf("#")
              ? o + i._search + e
              : o.replace(/[^\/]+$/g, "") + e));
    }
    anchorElement.href = e;
    var s = r.exec(anchorElement.href),
      c = s[2] + (s[3] ? ":" + s[3] : ""),
      l = s[4] || "/",
      u = s[5] || "",
      p = "#" === s[6] ? "" : s[6] || "",
      d = l + u + p,
      h =
        l.replace(new RegExp("^" + settings.basepath, "i"), settings.type) + u;
    return {
      _href: s[1] + "//" + c + d,
      _protocol: s[1],
      _host: c,
      _hostname: s[2],
      _port: s[3] || "",
      _pathname: l,
      _search: u,
      _hash: p,
      _relative: d,
      _nohash: h,
      _special: h + p,
    };
  }
  function storageInitialize() {
    var e;
    try {
      (e = window.sessionStorage),
        e.setItem(sessionStorageKey + "t", "1"),
        e.removeItem(sessionStorageKey + "t");
    } catch (t) {
      e = {
        getItem: function (e) {
          var t = document.cookie.split(e + "=");
          return (t.length > 1 && t.pop().split(";").shift()) || "null";
        },
        setItem: function (e, t) {
          var n = {};
          (n[windowLocation.href] = historyObject.state) &&
            (document.cookie = e + "=" + JSON.stringify(n));
        },
      };
    }
    try {
      stateStorage = JSON.parse(e.getItem(sessionStorageKey)) || {};
    } catch (t) {
      stateStorage = {};
    }
    addEvent(
      eventNamePrefix + "unload",
      function () {
        e.setItem(sessionStorageKey, JSON.stringify(stateStorage));
      },
      !1
    );
  }
  function redefineProperty(e, t, n, r) {
    n = n || { set: emptyFunction };
    var i = !n.set,
      o = !n.get,
      a = {
        configurable: !0,
        set: function () {
          i = 1;
        },
        get: function () {
          o = 1;
        },
      };
    try {
      defineProperty(e, t, a), (e[t] = e[t]), defineProperty(e, t, n);
    } catch (s) {}
    if (!i || !o)
      if (
        (e.__defineGetter__ &&
          (e.__defineGetter__(t, a.get),
          e.__defineSetter__(t, a.set),
          (e[t] = e[t]),
          n.get && e.__defineGetter__(t, n.get),
          n.set && e.__defineSetter__(t, n.set)),
        (i && o) || e !== window)
      ) {
        if (!i || !o)
          try {
            try {
              var c = Object.create(e);
              defineProperty(Object.getPrototypeOf(c) === e ? c : e, t, n);
              for (var l in e)
                "function" == typeof e[l] && (c[l] = e[l].bind(e));
              try {
                r.call(c, c, e);
              } catch (s) {}
              e = c;
            } catch (s) {
              defineProperty(e.constructor.prototype, t, n);
            }
          } catch (s) {
            return !1;
          }
      } else {
        try {
          var u = e[t];
          e[t] = null;
        } catch (s) {}
        if ("execScript" in window)
          window.execScript("Public " + t, "VBScript");
        else
          try {
            defineProperty(e, t, { value: emptyFunction });
          } catch (s) {}
        e[t] = u;
      }
    return e;
  }
  function prepareDescriptorsForObject(e, t, n) {
    return (
      (n = n || {}),
      (e = e === locationDescriptors ? windowLocation : e),
      (n.set =
        n.set ||
        function (n) {
          e[t] = n;
        }),
      (n.get =
        n.get ||
        function () {
          return e[t];
        }),
      n
    );
  }
  function addEventListener(e, t, n) {
    e in eventsList
      ? eventsList[e].push(t)
      : arguments.length > 3
      ? addEvent(e, t, n, arguments[3])
      : addEvent(e, t, n);
  }
  function removeEventListener(e, t, n) {
    var r = eventsList[e];
    if (r) {
      for (var i = r.length; --i; )
        if (r[i] === t) {
          r.splice(i, 1);
          break;
        }
    } else removeEvent(e, t, n);
  }
  function dispatchEvent(e, t) {
    var n = ("" + ("string" == typeof e ? e : e.type)).replace(/^on/, ""),
      r = eventsList[n];
    if (r) {
      if (((t = "string" == typeof e ? t : e), null == t.target))
        for (
          var i = ["target", "currentTarget", "srcElement", "type"];
          (e = i.pop());

        )
          t = redefineProperty(t, e, {
            get:
              "type" === e
                ? function () {
                    return n;
                  }
                : function () {
                    return window;
                  },
          });
      (
        ("popstate" === n ? window.onpopstate : window.onhashchange) ||
        emptyFunction
      ).call(window, t);
      for (var o = 0, a = r.length; a > o; o++) r[o].call(window, t);
      return !0;
    }
    return dispatch(e, t);
  }
  function firePopState() {
    var e = document.createEvent
      ? document.createEvent("Event")
      : document.createEventObject();
    e.initEvent ? e.initEvent("popstate", !1, !1) : (e.type = "popstate"),
      (e.state = historyObject.state),
      dispatchEvent(e);
  }
  function fireInitialState() {
    isFireInitialState && ((isFireInitialState = !1), firePopState());
  }
  function changeState(e, t, n, r) {
    if (!isSupportHistoryAPI) {
      var i = parseURL(t);
      i._relative !== parseURL()._relative &&
        ((lastURL = r),
        n
          ? windowLocation.replace("#" + i._special)
          : (windowLocation.hash = i._special));
    }
    !isSupportStateObjectInHistory &&
      e &&
      (stateStorage[windowLocation.href] = e),
      (isFireInitialState = !1);
  }
  function onHashChange(e) {
    var t = lastURL;
    if (((lastURL = windowLocation.href), t)) {
      checkUrlForPopState !== windowLocation.href && firePopState(),
        (e = e || window.event);
      var n = parseURL(lastURL, !0),
        r = parseURL();
      e.oldURL || ((e.oldURL = n._href), (e.newURL = r._href)),
        n._hash !== r._hash && dispatchEvent(e);
    }
  }
  function onLoad(e) {
    setTimeout(function () {
      addEvent(
        "popstate",
        function (e) {
          (checkUrlForPopState = windowLocation.href),
            isSupportStateObjectInHistory ||
              (e = redefineProperty(e, "state", {
                get: function () {
                  return historyObject.state;
                },
              })),
            dispatchEvent(e);
        },
        !1
      );
    }, 0),
      !isSupportHistoryAPI &&
        e !== !0 &&
        historyObject.location &&
        (scrollToAnchorId(historyObject.location.hash), fireInitialState());
  }
  function anchorTarget(e) {
    for (; e; ) {
      if ("A" === e.nodeName) return e;
      e = e.parentNode;
    }
  }
  function onAnchorClick(e) {
    var t = e || window.event,
      n = anchorTarget(t.target || t.srcElement),
      r = "defaultPrevented" in t ? t.defaultPrevented : t.returnValue === !1;
    if (n && "A" === n.nodeName && !r) {
      var i = parseURL(),
        o = parseURL(n.getAttribute("href", 2)),
        a = i._href.split("#").shift() === o._href.split("#").shift();
      a &&
        o._hash &&
        (i._hash !== o._hash && (historyObject.location.hash = o._hash),
        scrollToAnchorId(o._hash),
        t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
    }
  }
  function scrollToAnchorId(e) {
    var t = document.getElementById((e = (e || "").replace(/^#/, "")));
    if (t && t.id === e && "A" === t.nodeName) {
      var n = t.getBoundingClientRect();
      window.scrollTo(
        documentElement.scrollLeft || 0,
        n.top +
          (documentElement.scrollTop || 0) -
          (documentElement.clientTop || 0)
      );
    }
  }
  function initialize() {
    var e = document.getElementsByTagName("script"),
      t = (e[e.length - 1] || {}).src || "",
      n = -1 !== t.indexOf("?") ? t.split("?").pop() : "";
    n.replace(/(\w+)(?:=([^&]*))?/g, function (e, t, n) {
      settings[t] = (n || ("basepath" === t ? "/" : "")).replace(
        /^(0|false)$/,
        ""
      );
    }),
      ie6DriverStart(),
      addEvent(eventNamePrefix + "hashchange", onHashChange, !1);
    var r = [
      locationDescriptors,
      locationObject,
      eventsDescriptors,
      window,
      historyDescriptors,
      historyObject,
    ];
    isSupportStateObjectInHistory && delete historyDescriptors.state;
    for (var i = 0; i < r.length; i += 2)
      for (var o in r[i])
        if (r[i].hasOwnProperty(o))
          if ("function" == typeof r[i][o]) r[i + 1][o] = r[i][o];
          else {
            var a = prepareDescriptorsForObject(r[i], o, r[i][o]);
            if (
              !redefineProperty(r[i + 1], o, a, function (e, t) {
                t === historyObject &&
                  (window.history = historyObject = r[i + 1] = e);
              })
            )
              return (
                removeEvent(eventNamePrefix + "hashchange", onHashChange, !1),
                !1
              );
            r[i + 1] === window &&
              (eventsList[o] = eventsList[o.substr(2)] = []);
          }
    return (
      settings.redirect && historyObject.redirect(),
      !isSupportStateObjectInHistory && JSON && storageInitialize(),
      isSupportHistoryAPI ||
        document[addEventListenerName](
          eventNamePrefix + "click",
          onAnchorClick,
          !1
        ),
      "complete" === document.readyState
        ? onLoad(!0)
        : (isSupportHistoryAPI ||
            parseURL()._relative === settings.basepath ||
            (isFireInitialState = !0),
          addEvent(eventNamePrefix + "load", onLoad, !1)),
      !0
    );
  }
  function ie6DriverStart() {
    function createVBObjects(e) {
      var t = [],
        n = "VBHistoryClass" + new Date().getTime() + msie++,
        r = ["Class " + n];
      for (var i in e)
        if (e.hasOwnProperty(i)) {
          var o = e[i];
          o && (o.get || o.set)
            ? (o.get &&
                r.push(
                  "Public " +
                    ("_" === i ? "Default " : "") +
                    "Property Get [" +
                    i +
                    "]",
                  "Call VBCVal([(accessors)].[" +
                    i +
                    "].get.call(me),[" +
                    i +
                    "])",
                  "End Property"
                ),
              o.set &&
                r.push(
                  "Public Property Let [" + i + "](val)",
                  (o =
                    "Call [(accessors)].[" +
                    i +
                    "].set.call(me,val)\nEnd Property"),
                  "Public Property Set [" + i + "](val)",
                  o
                ))
            : (t.push(i), r.push("Public [" + i + "]"));
        }
      r.push(
        "Private [(accessors)]",
        "Private Sub Class_Initialize()",
        "Set [(accessors)]=" + n + "FactoryJS()",
        "End Sub",
        "End Class",
        "Function " + n + "Factory()",
        "Set " + n + "Factory=New " + n,
        "End Function"
      ),
        window.execScript(r.join("\n"), "VBScript"),
        (window[n + "FactoryJS"] = function () {
          return e;
        });
      for (var a = window[n + "Factory"](), s = 0; s < t.length; s++)
        a[t[s]] = e[t[s]];
      return a;
    }
    function quote(e) {
      var t =
          /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        n = {
          "\b": "\\b",
          "	": "\\t",
          "\n": "\\n",
          "\f": "\\f",
          "\r": "\\r",
          '"': '\\"',
          "\\": "\\\\",
        };
      return t.test(e)
        ? '"' +
            e.replace(t, function (e) {
              return e in n
                ? n[e]
                : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
            }) +
            '"'
        : '"' + e + '"';
    }
    var msie = window.eval && eval("/*@cc_on 1;@*/");
    if (msie && !(+(/msie (\d+)/i.exec(navigator.userAgent) || [, 8])[1] > 7)) {
      var originalChangeState = changeState,
        originalRedefineProperty = redefineProperty,
        currentHref = parseURL()._href,
        iFrame = document.createElement("iframe");
      (iFrame.src = "javascript:true;"),
        (iFrame = documentElement.firstChild.appendChild(iFrame).contentWindow),
        window.execScript(
          "Public history\nFunction VBCVal(o,r) If IsObject(o) Then Set r=o Else r=o End If End Function",
          "VBScript"
        ),
        (locationObject = { _: { get: locationDescriptors.toString } }),
        (historyObject = {
          back: windowHistory.back,
          forward: windowHistory.forward,
          go: windowHistory.go,
          emulate: null,
          _: {
            get: function () {
              return "[object History]";
            },
          },
        }),
        (JSON = {
          parse: function (e) {
            try {
              return new Function("", "return " + e)();
            } catch (t) {
              return null;
            }
          },
          stringify: function (e) {
            var t = (typeof e).charCodeAt(2);
            return 114 === t
              ? quote(e)
              : 109 === t
              ? isFinite(e)
                ? String(e)
                : "null"
              : 111 === t || 108 === t
              ? String(e)
              : 106 === t
              ? e
                ? (function (t) {
                    var n = t ? "[" : "{";
                    if (t)
                      for (var r = 0; r < e.length; r++)
                        n += (0 == r ? "" : ",") + JSON.stringify(e[r]);
                    else
                      for (var i in e)
                        e.hasOwnProperty(i) &&
                          (n +=
                            (1 == n.length ? "" : ",") +
                            quote(i) +
                            ":" +
                            JSON.stringify(e[i]));
                    return n + (t ? "]" : "}");
                  })("[object Array]" === Object.prototype.toString.call(e))
                : "null"
              : "void 0";
          },
        }),
        (changeState = function (e, t, n, r, i) {
          var o = iFrame.document,
            a = parseURL(t);
          return (
            (isFireInitialState = !1),
            a._relative !== parseURL()._relative || i
              ? ((lastURL = r),
                n
                  ? iFrame.lfirst
                    ? (history.back(), changeState(e, a._href, 0, r, 1))
                    : windowLocation.replace("#" + a._special)
                  : (a._href != currentHref || i) &&
                    (iFrame.lfirst ||
                      ((iFrame.lfirst = 1),
                      changeState(e, currentHref, 0, r, 1)),
                    o.open(),
                    o.write(
                      '<script>lfirst=1;parent.location.hash="' +
                        a._special.replace(/"/g, '\\"') +
                        '";</script>'
                    ),
                    o.close()),
                void (!i && e && (stateStorage[windowLocation.href] = e)))
              : void (e && (stateStorage[windowLocation.href] = e))
          );
        }),
        (redefineProperty = function (e, t, n, r) {
          return (
            originalRedefineProperty.apply(this, arguments) ||
              (e === locationObject
                ? (locationObject[t] = n)
                : e === historyObject
                ? ((historyObject[t] = n),
                  "state" === t &&
                    ((locationObject = createVBObjects(locationObject)),
                    (window.history = historyObject =
                      createVBObjects(historyObject))))
                : (e[t] = n.get && n.get())),
            e
          );
        });
      var interval = setInterval(function () {
        var e = parseURL()._href;
        if (e != currentHref) {
          var t = document.createEventObject();
          (t.oldURL = currentHref),
            (t.newURL = currentHref = e),
            (t.type = "hashchange"),
            onHashChange(t);
        }
      }, 100);
      window.JSON = JSON;
    }
  }
  if (window.history) {
    var document = window.document,
      documentElement = document.documentElement,
      Object = window.Object,
      JSON = window.JSON,
      windowLocation = window.location,
      windowHistory = window.history,
      historyObject = windowHistory,
      historyPushState = windowHistory.pushState,
      historyReplaceState = windowHistory.replaceState,
      isSupportHistoryAPI = !!historyPushState,
      isSupportStateObjectInHistory = "state" in windowHistory,
      defineProperty = Object.defineProperty,
      locationObject = redefineProperty({}, "t")
        ? {}
        : document.createElement("a"),
      eventNamePrefix = "",
      addEventListenerName = window.addEventListener
        ? "addEventListener"
        : (eventNamePrefix = "on") && "attachEvent",
      removeEventListenerName = window.removeEventListener
        ? "removeEventListener"
        : "detachEvent",
      dispatchEventName = window.dispatchEvent ? "dispatchEvent" : "fireEvent",
      addEvent = window[addEventListenerName],
      removeEvent = window[removeEventListenerName],
      dispatch = window[dispatchEventName],
      settings = { basepath: "/", redirect: 0, type: "/" },
      sessionStorageKey = "__historyAPI__",
      anchorElement = document.createElement("a"),
      lastURL = windowLocation.href,
      checkUrlForPopState = "",
      isFireInitialState = !1,
      stateStorage = {},
      eventsList = {},
      lastTitle = document.title,
      eventsDescriptors = { onhashchange: null, onpopstate: null },
      fastFixChrome = function (e, t) {
        var n = window.history !== windowHistory;
        n && (window.history = windowHistory),
          e.apply(windowHistory, t),
          n && (window.history = historyObject);
      },
      historyDescriptors = {
        redirect: function (e, t) {
          if (
            ((settings.basepath = t = null == t ? settings.basepath : t),
            (settings.type = e = null == e ? settings.type : e),
            window.top == window.self)
          ) {
            var n = parseURL(null, !1, !0)._relative,
              r = windowLocation.pathname + windowLocation.search;
            isSupportHistoryAPI
              ? ((r = r.replace(/([^\/])$/, "$1/")),
                n != t &&
                  new RegExp("^" + t + "$", "i").test(r) &&
                  windowLocation.replace(n))
              : r != t &&
                ((r = r.replace(/([^\/])\?/, "$1/?")),
                new RegExp("^" + t, "i").test(r) &&
                  windowLocation.replace(
                    t +
                      "#" +
                      r.replace(new RegExp("^" + t, "i"), e) +
                      windowLocation.hash
                  ));
          }
        },
        pushState: function (e, t, n) {
          var r = document.title;
          null != lastTitle && (document.title = lastTitle),
            historyPushState && fastFixChrome(historyPushState, arguments),
            changeState(e, n),
            (document.title = r),
            (lastTitle = t);
        },
        replaceState: function (e, t, n) {
          var r = document.title;
          null != lastTitle && (document.title = lastTitle),
            delete stateStorage[windowLocation.href],
            historyReplaceState &&
              fastFixChrome(historyReplaceState, arguments),
            changeState(e, n, !0),
            (document.title = r),
            (lastTitle = t);
        },
        location: {
          set: function (e) {
            window.location = e;
          },
          get: function () {
            return isSupportHistoryAPI ? windowLocation : locationObject;
          },
        },
        state: {
          get: function () {
            return stateStorage[windowLocation.href] || null;
          },
        },
      },
      locationDescriptors = {
        assign: function (e) {
          0 === ("" + e).indexOf("#")
            ? changeState(null, e)
            : windowLocation.assign(e);
        },
        reload: function () {
          windowLocation.reload();
        },
        replace: function (e) {
          0 === ("" + e).indexOf("#")
            ? changeState(null, e, !0)
            : windowLocation.replace(e);
        },
        toString: function () {
          return this.href;
        },
        href: {
          get: function () {
            return parseURL()._href;
          },
        },
        protocol: null,
        host: null,
        hostname: null,
        port: null,
        pathname: {
          get: function () {
            return parseURL()._pathname;
          },
        },
        search: {
          get: function () {
            return parseURL()._search;
          },
        },
        hash: {
          set: function (e) {
            changeState(null, ("" + e).replace(/^(#|)/, "#"), !1, lastURL);
          },
          get: function () {
            return parseURL()._hash;
          },
        },
      };
    initialize() &&
      ((historyObject.emulate = !isSupportHistoryAPI),
      (window[addEventListenerName] = addEventListener),
      (window[removeEventListenerName] = removeEventListener),
      (window[dispatchEventName] = dispatchEvent));
  }
})(window);
