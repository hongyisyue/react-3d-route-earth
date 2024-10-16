"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./App.css");
var _fiber = require("@react-three/fiber");
var _react = require("react");
var _main = require("./pages/main");
function App() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(_fiber.Canvas, null, /*#__PURE__*/React.createElement(_react.Suspense, {
    fallback: null
  }, /*#__PURE__*/React.createElement(_main.Main, null))));
}
var _default = exports.default = App;