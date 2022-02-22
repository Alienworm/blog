/*!
 * DrawSVGPlugin 3.6.1
 * https://greensock.com
 *
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
  "use strict";

  function i() {
    return "undefined" != typeof window
  }

  function j() {
    return a || i() && (a = window.gsap) && a.registerPlugin && a
  }

  function m(e) {
    return Math.round(1e4 * e) / 1e4
  }

  function n(e) {
    return parseFloat(e) || 0
  }

  function o(e, t) {
    var r = n(e);
    return ~e.indexOf("%") ? r / 100 * t : r
  }

  function p(e, t) {
    return n(e.getAttribute(t))
  }

  function r(e, t, r, i, o, s) {
    return P(Math.pow((n(r) - n(e)) * o, 2) + Math.pow((n(i) - n(t)) * s, 2))
  }

  function s(e) {
    return console.warn(e)
  }

  function t(e) {
    return "non-scaling-stroke" === e.getAttribute("vector-effect")
  }

  function w() {
    return String.fromCharCode.apply(null, arguments)
  }

  function A(e) {
    if (!(e = v(e)[0])) return 0;
    var n, i, o, a, f, d, h, w = e.tagName.toLowerCase(),
      l = e.style,
      u = 1,
      c = 1;
    t(e) && (c = e.getScreenCTM(), u = P(c.a * c.a + c.b * c.b), c = P(c.d * c.d + c.c * c.c));
    try {
      i = e.getBBox()
    } catch (e) {
      s("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
    }
    var g = i || {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      _ = g.x,
      y = g.y,
      x = g.width,
      m = g.height;
    if (i && (x || m) || !k[w] || (x = p(e, k[w][0]), m = p(e, k[w][1]), "rect" !== w && "line" !== w && (x *= 2, m *= 2), "line" === w && (_ = p(e, "x1"), y = p(e, "y1"), x = Math.abs(x - _), m = Math.abs(m - y))), "path" === w) a = l.strokeDasharray, l.strokeDasharray = "none", n = e.getTotalLength() || 0, u !== c && s("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), n *= (u + c) / 2, l.strokeDasharray = a;
    else if ("rect" === w) n = 2 * x * u + 2 * m * c;
    else if ("line" === w) n = r(_, y, _ + x, y + m, u, c);
    else if ("polyline" === w || "polygon" === w)
      for (o = e.getAttribute("points").match(b) || [], "polygon" === w && o.push(o[0], o[1]), n = 0, f = 2; f < o.length; f += 2) n += r(o[f - 2], o[f - 1], o[f], o[f + 1], u, c) || 0;
    else "circle" !== w && "ellipse" !== w || (d = x / 2 * u, h = m / 2 * c, n = Math.PI * (3 * (d + h) - P((3 * d + h) * (d + 3 * h))));
    return n || 0
  }

  function B(e, t) {
    if (!(e = v(e)[0])) return [0, 0];
    t = t || A(e) + 1;
    var r = d.getComputedStyle(e),
      i = r.strokeDasharray || "",
      o = n(r.strokeDashoffset),
      s = i.indexOf(",");
    return s < 0 && (s = i.indexOf(" ")), t < (i = s < 0 ? t : n(i.substr(0, s))) && (i = t), [-o || 0, i - o || 0]
  }

  function C() {
    i() && (d = window, l = a = j(), v = a.utils.toArray, h = -1 !== ((d.navigator || {}).userAgent || "").indexOf("Edge"))
  }
  var a, v, d, h, l, b = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    k = {
      rect: ["width", "height"],
      circle: ["r", "r"],
      ellipse: ["rx", "ry"],
      line: ["x2", "y2"]
    },
    P = Math.sqrt,
    f = "DrawSVGPlugin",
    u = w(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109), //greensock.com
    c = function(e) {
      // for (var t = 0 === (window ? window.location.href : "").indexOf(w(102, 105, 108, 101, 58, 47, 47)) || -1 !== e.indexOf(w(108, 111, 99, 97, 108, 104, 111, 115, 116)) || -1 !== e.indexOf(w(49, 50, 55, 46, 48, 32, 48, 46, 49)), n = [u, w(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), w(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), w(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), w(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112), w(112, 101, 110, 115, 46, 99, 108, 111, 117, 100), w(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), w(99, 100, 112, 110, 46, 105, 111), w(112, 101, 110, 115, 46, 105, 111), w(103, 97, 110, 110, 111, 110, 46, 116, 118), w(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), w(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), w(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), w(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), w(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), w(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), w(112, 108, 110, 107, 114, 46, 99, 111), w(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), w(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), w(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), w(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), w(99, 115, 98, 46, 97, 112, 112), w(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), w(99, 111, 100, 105, 101, 114, 46, 105, 111), w(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), w(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109), w(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109), w(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)], r = n.length; - 1 < --r;)
      //     if (-1 !== e.indexOf(n[r])) return !0;
      // return t && window && window.console && console.log(w(87, 65, 82, 78, 73, 78, 71, 58, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + f + w(32, 105, 115, 32, 114, 117, 110, 110, 105, 110, 103, 32, 108, 111, 99, 97, 108, 108, 121, 44, 32, 98, 117, 116, 32, 105, 116, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 111, 110, 32, 97, 32, 108, 105, 118, 101, 32, 100, 111, 109, 97, 105, 110, 32, 98, 101, 99, 97, 117, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 98, 101, 110, 101, 102, 105, 116, 32, 111, 102, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 46, 32, 80, 108, 101, 97, 115, 101, 32, 115, 105, 103, 110, 32, 117, 112, 32, 97, 116, 32, 104, 116, 116, 112, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98, 47, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 100, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 39, 114, 101, 97, 108, 39, 32, 118, 101, 114, 115, 105, 111, 110, 32, 102, 114, 111, 109, 32, 121, 111, 117, 114, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 97, 99, 99, 111, 117, 110, 116, 32, 119, 104, 105, 99, 104, 32, 104, 97, 115, 32, 110, 111, 32, 115, 117, 99, 104, 32, 108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 115, 46, 32, 84, 104, 101, 32, 102, 105, 108, 101, 32, 121, 111, 117, 39, 114, 101, 32, 117, 115, 105, 110, 103, 32, 119, 97, 115, 32, 108, 105, 107, 101, 108, 121, 32, 100, 111, 119, 110, 108, 111, 97, 100, 101, 100, 32, 102, 114, 111, 109, 32, 101, 108, 115, 101, 119, 104, 101, 114, 101, 32, 111, 110, 32, 116, 104, 101, 32, 119, 101, 98, 32, 97, 110, 100, 32, 105, 115, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 117, 115, 101, 32, 111, 114, 32, 111, 110, 32, 115, 105, 116, 101, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 46)), t || !(window.location.href = "https://" + u + w(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47) + "?plugin=" + f + "&source=codepen")
      return true;
    }(window ? window.location.host : ""),
    g = {
      version: "3.6.1",
      name: "drawSVG",
      register: function register(e) {
        a = e, C()
      },
      init: function init(e, r) {
        if (!e.getBBox) return !1;
        l || C();
        var i, s, a, f = A(e);
        return this._style = e.style, this._target = e, r + "" == "true" ? r = "0 100%" : r ? -1 === (r + "").indexOf(" ") && (r = "0 " + r) : r = "0 0", s = function _parse(e, t, n) {
          var r, i, s = e.indexOf(" ");
          return i = s < 0 ? (r = void 0 !== n ? n + "" : e, e) : (r = e.substr(0, s), e.substr(s + 1)), r = o(r, t), (i = o(i, t)) < r ? [i, r] : [r, i]
        }(r, f, (i = B(e, f))[0]), this._length = m(f), this._dash = m(i[1] - i[0]), this._offset = m(-i[0]), this._dashPT = this.add(this, "_dash", this._dash, m(s[1] - s[0])), this._offsetPT = this.add(this, "_offset", this._offset, m(-s[0])), h && (a = d.getComputedStyle(e)).strokeLinecap !== a.strokeLinejoin && (s = n(a.strokeMiterlimit), this.add(e.style, "strokeMiterlimit", s, s + .01)), this._live = t(e) || ~(r + "").indexOf("live"), this._nowrap = ~(r + "").indexOf("nowrap"), this._props.push("drawSVG"), c
      },
      render: function render(e, t) {
        var n, r, i, o, s = t._pt,
          a = t._style;
        if (s) {
          for (t._live && (n = A(t._target)) !== t._length && (r = n / t._length, t._length = n, t._offsetPT && (t._offsetPT.s *= r, t._offsetPT.c *= r), t._dashPT ? (t._dashPT.s *= r, t._dashPT.c *= r) : t._dash *= r); s;) s.r(e, s.d), s = s._next;
          i = t._dash || e && 1 !== e && 1e-4 || 0, n = t._length - i + .1, o = t._offset, i && o && i + Math.abs(o % t._length) > t._length - .2 && (o += o < 0 ? .1 : -.1) && (n += .1), a.strokeDashoffset = i ? o : o + .001, a.strokeDasharray = n < .2 ? "none" : i ? i + "px," + (t._nowrap ? 999999 : n) + "px" : "0px, 999999px"
        }
      },
      getLength: A,
      getPosition: B
    };
  j() && a.registerPlugin(g), e.DrawSVGPlugin = g, e.default = g;
  if (typeof(window) === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    })
  } else {
    delete e.default
  }
});
