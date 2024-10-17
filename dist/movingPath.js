"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(["\n            varying vec2 vUv;\n            void main() {\n                vUv = uv;\n                vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);\n                gl_Position = projectionMatrix * modelViewPosition;\n            }\n            "], ["\n            varying vec2 vUv;\n            void main() {\n                vUv = uv;\n                vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);\n                gl_Position = projectionMatrix * modelViewPosition;\n            }\n            "]),
    _templateObject2 = _taggedTemplateLiteral(["\n            varying vec2 vUv;\n            uniform float time;\n            \n            void main() {\n                float dash = sin(vUv.x * 50. - time);\n          \n            if(dash<0.) discard;\n        \n            gl_FragColor = vec4( vUv.y,0.7,1.0,1.0 );\n          }\n        "], ["\n            varying vec2 vUv;\n            uniform float time;\n            \n            void main() {\n                float dash = sin(vUv.x * 50. - time);\n          \n            if(dash<0.) discard;\n        \n            gl_FragColor = vec4( vUv.y,0.7,1.0,1.0 );\n          }\n        "]);

exports.MovingPath = MovingPath;

var _three = require("three");

var THREE = _interopRequireWildcard(_three);

var _default = require("../data/default");

var _fiber = require("@react-three/fiber");

var _drei = require("@react-three/drei");

var _macro = require("babel-plugin-glsl/macro");

var _macro2 = _interopRequireDefault(_macro);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function MovingPath(params) {
    /**
     * Given 2 xyz points, "from" and "to", 
     * create a flight path from "from" to "to"
     * 
     * 
     * --params--
     * from: {
     *  x: number,
     *  y: number,
     *  z: number,
     * }
     * 
     * to: {
     *  x: number,
     *  y: number,
     *  z: number,
     * }
     * 
     * time: number
     * earth_r: number
     */

    var from = params.from;
    var to = params.to;
    var earth_r = params.earth_r || _default.DefaultSettings.earth_r;
    var time = params.frameTime;

    var MovingDashMaterial = (0, _drei.shaderMaterial)({ time: time },
    // vertex shader
    (0, _macro2.default)(_templateObject),
    // fragment shader
    (0, _macro2.default)(_templateObject2));
    (0, _fiber.extend)({ MovingDashMaterial: MovingDashMaterial });

    if (from && to) {
        // returns an arry of points of the curve
        var getCurve = function getCurve(p1, p2) {
            var v1 = new THREE.Vector3(p1.x, p1.y, p1.z);
            var v2 = new THREE.Vector3(p2.x, p2.y, p2.z);

            var points = [];
            for (var i = 0; i < 21; i++) {
                var p = new THREE.Vector3().lerpVectors(v1, v2, i / 20);
                p.normalize();
                p.multiplyScalar(earth_r + 0.1 * Math.sin(Math.PI * i / 20));
                points.push(p);
            }

            return points;
        };

        var path = new THREE.CatmullRomCurve3(getCurve(from, to));
        return React.createElement(
            "mesh",
            null,
            React.createElement("tubeGeometry", { args: [path, 30, 0.013, 8, false] }),
            React.createElement("movingDashMaterial", {
                attach: "material",
                time: time
            })
        );
    } else {
        return null;
    }
}