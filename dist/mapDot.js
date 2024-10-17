"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MapDot = MapDot;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MapDot(params) {
    /**
     * Given a dot that has x, y, z asix values,
     * create a red dot(pin) in the 3d space
     * 
     * --params--
     * dot: {
     *  x: number,
     *  y: number,
     *  z: number,
     *  radius: number,
     *  horSegment: number.
     *  verSegment: number
     * }
     */
    var dot = params.dot;
    return _react2.default.createElement(
        "mesh",
        { position: [dot.x, dot.y, dot.z] },
        _react2.default.createElement("sphereBufferGeometry", { args: [dot.radius || 0.018, dot.horSegment || 32, dot.verSegment || 32] }),
        _react2.default.createElement("meshBasicMaterial", { color: "red" })
    );
}