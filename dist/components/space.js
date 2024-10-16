"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Space = Space;
var _react = _interopRequireDefault(require("react"));
var _drei = require("@react-three/drei");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Space(params) {
  const content = params.content;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("pointLight", {
    color: "#fff6e6",
    position: [-20, 20, 15],
    intensity: 2
  }), /*#__PURE__*/_react.default.createElement("pointLight", {
    color: "#fff6e6",
    position: [20, 0, -15],
    intensity: 2
  }), /*#__PURE__*/_react.default.createElement("pointLight", {
    color: "#fff6e6",
    position: [-20, -20, -15],
    intensity: 1
  }), /*#__PURE__*/_react.default.createElement("pointLight", {
    color: "#fff6e6",
    position: [20, 0, 15],
    intensity: 1
  }), /*#__PURE__*/_react.default.createElement(_drei.Stars, {
    radius: 300,
    depth: 60,
    count: 20000,
    factor: 7,
    saturation: 0,
    fade: true
  }), content);
}