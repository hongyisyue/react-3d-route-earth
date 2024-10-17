"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pole = Pole;

var _three = require("three");

var THREE = _interopRequireWildcard(_three);

var _default = require("../data/default");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

    var dot = params.dot;
    var lengthFactor = params.length ? 4 / params.length : 4;
    var center = _default.DefaultSettings.earth_center;

    if (dot) {
        // returns a point of the end of the pole
        // p1 should always be the center point of the earth
        var getLineEndPonit = function getLineEndPonit(p1, p2) {
            var v3 = new THREE.Vector3(p2.x + (p2.x - p1.x) / lengthFactor, p2.y + (p2.y - p1.y) / lengthFactor, p2.z + (p2.z - p1.z) / lengthFactor);

            return v3;
        };

        var poleEnd = getLineEndPonit(center, dot);
        var pole = new THREE.LineCurve3(center, poleEnd);

        return React.createElement(
            "mesh",
            null,
            React.createElement("tubeGeometry", { args: [pole, 30, 0.013, 8, false] }),
            React.createElement("meshBasicMaterial", { color: "#BFF8FF" })
        );
    }
}