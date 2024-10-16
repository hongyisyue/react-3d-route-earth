"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pole = Pole;
var THREE = _interopRequireWildcard(require("three"));
var _default = require("../data/default");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function Pole(params) {
  /**
   * Create a white pole that goes through
   * the center of the sphere and the given xyz point
   * 
   * --params--
   * dot: {
   *  x: number,
   *  y: number,
   *  z: number
   * }
   * 
   * length: number
   * length = 0, 0.5, 1, 1.5, 2, 3 ...
   * when length is 1, the actual length is 1/4 of 
   * the distance from center to 'dot'
   */

  const dot = params.dot;
  const lengthFactor = params.length ? 4 / params.length : 4;
  const center = _default.DefaultSettings.earth_center;
  if (dot) {
    // returns a point of the end of the pole
    // p1 should always be the center point of the earth
    function getLineEndPonit(p1, p2) {
      const v3 = new THREE.Vector3(p2.x + (p2.x - p1.x) / lengthFactor, p2.y + (p2.y - p1.y) / lengthFactor, p2.z + (p2.z - p1.z) / lengthFactor);
      return v3;
    }
    const poleEnd = getLineEndPonit(center, dot);
    const pole = new THREE.LineCurve3(center, poleEnd);
    return /*#__PURE__*/React.createElement("mesh", null, /*#__PURE__*/React.createElement("tubeGeometry", {
      args: [pole, 30, 0.013, 8, false]
    }), /*#__PURE__*/React.createElement("meshBasicMaterial", {
      color: "#BFF8FF"
    }));
  }
}