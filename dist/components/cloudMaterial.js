"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloudMaterial = CloudMaterial;
var _react = _interopRequireDefault(require("react"));
var THREE = _interopRequireWildcard(require("three"));
var _default = require("../data/default");
var _fiber = require("@react-three/fiber");
var _k_earth_clouds = _interopRequireDefault(require("../assets/textures/8k_earth_clouds.jpg"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function CloudMaterial(params) {
  const r = params.earth_r || _default.DefaultSettings.earth_r;
  const horSegment = 64;
  const verSegment = 64;

  /** Textures */
  const [cloudsMap] = (0, _fiber.useLoader)(THREE.TextureLoader, [_k_earth_clouds.default]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("sphereGeometry", {
    args: [r + 0.05, horSegment, verSegment]
  }), /*#__PURE__*/_react.default.createElement("meshPhongMaterial", {
    map: cloudsMap,
    opacity: 0.45,
    depthWrite: true,
    transparent: true,
    side: THREE.DoubleSide
  }));
}