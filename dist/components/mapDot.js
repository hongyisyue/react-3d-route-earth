"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapDot = MapDot;
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
  const dot = params.dot;
  return /*#__PURE__*/React.createElement("mesh", {
    position: [dot.x, dot.y, dot.z]
  }, /*#__PURE__*/React.createElement("sphereBufferGeometry", {
    args: [dot.radius || 0.018, dot.horSegment || 32, dot.verSegment || 32]
  }), /*#__PURE__*/React.createElement("meshBasicMaterial", {
    color: "red"
  }));
}