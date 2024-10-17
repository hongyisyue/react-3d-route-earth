"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Space = Space;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _drei = require("@react-three/drei");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Space(params) {
    var content = params.content;

    return _react2.default.createElement(
        "span",
        null,
        _react2.default.createElement("pointLight", { color: "#fff6e6", position: [-20, 20, 15], intensity: 2 }),
        _react2.default.createElement("pointLight", { color: "#fff6e6", position: [20, 0, -15], intensity: 2 }),
        _react2.default.createElement("pointLight", { color: "#fff6e6", position: [-20, -20, -15], intensity: 1 }),
        _react2.default.createElement("pointLight", { color: "#fff6e6", position: [20, 0, 15], intensity: 1 }),
        _react2.default.createElement(_drei.Stars, {
            radius: 300,
            depth: 60,
            count: 20000,
            factor: 7,
            saturation: 0,
            fade: true
        }),
        content
    );
}