"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Earth = Earth;
var _fiber = require("@react-three/fiber");
var _react = _interopRequireWildcard(require("react"));
var _drei = require("@react-three/drei");
var _earthMaterial = require("../components/earthMaterial");
var _cloudMaterial = require("../components/cloudMaterial");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function Earth(params) {
  /** refs */
  let cloudsRef = (0, _react.useRef)();
  let earthRef = (0, _react.useRef)();
  const content = params.content;
  const isEnter = params.isEnter;
  /** Animation */
  (0, _fiber.useFrame)(() => {
    if (!isEnter) {
      cloudsRef.current.rotation.y += 0.005;
    }
  });
  return /*#__PURE__*/_react.default.createElement("mesh", {
    ref: cloudsRef,
    position: [2, 0, 0]
  }, /*#__PURE__*/_react.default.createElement(_drei.TrackballControls, null), /*#__PURE__*/_react.default.createElement(_cloudMaterial.CloudMaterial, null), /*#__PURE__*/_react.default.createElement("mesh", {
    ref: earthRef,
    position: [0, 0, 0]
  }, /*#__PURE__*/_react.default.createElement(_earthMaterial.EarthMaterial, null), content));
}