"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EarthMaterial = EarthMaterial;
var _react = _interopRequireDefault(require("react"));
var _three = require("three");
var _default = require("../data/default");
var _fiber = require("@react-three/fiber");
var _k_earth_daymap = _interopRequireDefault(require("../assets/textures/8k_earth_daymap.jpg"));
var _k_earth_normal_map = _interopRequireDefault(require("../assets/textures/8k_earth_normal_map.jpg"));
var _k_earth_specular_map = _interopRequireDefault(require("../assets/textures/8k_earth_specular_map.jpg"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function EarthMaterial(params) {
  const r = params.earth_r || _default.DefaultSettings.earth_r;
  const horSegment = 64;
  const verSegment = 64;

  /** Textures */
  const [dayMap, normalMap, specularMap] = (0, _fiber.useLoader)(_three.TextureLoader, [_k_earth_daymap.default, _k_earth_normal_map.default, _k_earth_specular_map.default]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("sphereGeometry", {
    args: [r, horSegment, verSegment]
  }), /*#__PURE__*/_react.default.createElement("meshPhongMaterial", {
    specularMap: specularMap
  }), /*#__PURE__*/_react.default.createElement("meshStandardMaterial", {
    map: dayMap,
    normalMap: normalMap,
    metalness: 0.6,
    roughness: 0.5
  }));
}