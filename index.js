"use strict";
var _slicedToArray = (function() {
  function a(b, c) {
    var e = [],
      f = !0,
      g = !1,
      h = void 0;
    try {
      for (
        var k, j = b[Symbol.iterator]();
        !(f = (k = j.next()).done) && (e.push(k.value), !(c && e.length === c));
        f = !0
      );
    } catch (l) {
      (g = !0), (h = l);
    } finally {
      try {
        !f && j["return"] && j["return"]();
      } finally {
        if (g) throw h;
      }
    }
    return e;
  }
  return function(b, c) {
    if (Array.isArray(b)) return b;
    if (Symbol.iterator in Object(b)) return a(b, c);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
})();
function _toConsumableArray(a) {
  if (Array.isArray(a)) {
    for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
    return c;
  }
  return Array.from(a);
}
module.exports = function(a) {
  var e = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 4,
    f = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : 4,
    g = Math.pow(10, e - Math.floor(Math.log(Math.abs(a)) / Math.LN10) - 1),
    h = Math.round(a * g) / g;
  if (
    (1 <= h && Math.ceil(Math.log10(h)) <= f) ||
    (1 > h && Math.ceil(Math.log10(1 / h)) <= f)
  )
    return h;
  var _atFig$toExponential$ = h.toExponential(e - 1).split("e"),
    _atFig$toExponential$2 = _slicedToArray(_atFig$toExponential$, 2),
    b = _atFig$toExponential$2[0],
    _atFig$toExponential$3 = _atFig$toExponential$2[1],
    c = _atFig$toExponential$3 === void 0 ? "" : _atFig$toExponential$3;
  return (
    b +
    "x10" +
    []
      .concat(_toConsumableArray(c))
      .map(function(j) {
        return (
          "\u2070\xB9\xB2\xB3\u2074\u2075\u2076\u2077\u2078\u2079"[j] ||
          ("-" === j ? "\u207B" : "")
        );
      })
      .join("")
  );
};
