"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MovingPath = MovingPath;
var THREE = _interopRequireWildcard(require("three"));
var _default = require("../data/default");
var _fiber = require("@react-three/fiber");
var _drei = require("@react-three/drei");
var _macro = _interopRequireDefault(require("babel-plugin-glsl/macro"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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

  const from = params.from;
  const to = params.to;
  const earth_r = params.earth_r || _default.DefaultSettings.earth_r;
  let time = params.frameTime;
  let MovingDashMaterial = (0, _drei.shaderMaterial)({
    time
  },
  // vertex shader
  (0, _macro.default)`
            varying vec2 vUv;
            void main() {
                vUv = uv;
                vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
                gl_Position = projectionMatrix * modelViewPosition;
            }
            `,
  // fragment shader
  (0, _macro.default)`
            varying vec2 vUv;
            uniform float time;
            
            void main() {
                float dash = sin(vUv.x * 50. - time);
          
            if(dash<0.) discard;
        
            gl_FragColor = vec4( vUv.y,0.7,1.0,1.0 );
          }
        `);
  (0, _fiber.extend)({
    MovingDashMaterial
  });
  if (from && to) {
    // returns an arry of points of the curve
    function getCurve(p1, p2) {
      const v1 = new THREE.Vector3(p1.x, p1.y, p1.z);
      const v2 = new THREE.Vector3(p2.x, p2.y, p2.z);
      const points = [];
      for (let i = 0; i < 21; i++) {
        const p = new THREE.Vector3().lerpVectors(v1, v2, i / 20);
        p.normalize();
        p.multiplyScalar(earth_r + 0.1 * Math.sin(Math.PI * i / 20));
        points.push(p);
      }
      return points;
    }
    const path = new THREE.CatmullRomCurve3(getCurve(from, to));
    return /*#__PURE__*/React.createElement("mesh", null, /*#__PURE__*/React.createElement("tubeGeometry", {
      args: [path, 30, 0.013, 8, false]
    }), /*#__PURE__*/React.createElement("movingDashMaterial", {
      attach: "material",
      time: time
    }));
  } else {
    return null;
  }
}