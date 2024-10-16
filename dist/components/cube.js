"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cube = Cube;
var _react = _interopRequireWildcard(require("react"));
var _fiber = require("@react-three/fiber");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function Cube(params) {
  /**
   * Create a 3d cubd at the given position with the
   * given spec. Wrap with the given material.
   * 
   * --params--
   * position: [number, number, number] (x, y, z)
   * spec: [number, number, number] (w, l, h)
   * material: THREE texture
   * mouseDownEvent: function()
   */
  const ref = (0, _react.useRef)();
  const [isEnter, setEnter] = (0, _react.useState)(false);
  const position = params.pos;
  const spec = params.spec || [1, 1, 1];
  const material = params.material;
  const mouseDownEvent = params.mouseDownEvent;

  /** Animation */
  (0, _fiber.useFrame)(() => {
    if (!isEnter) {
      ref.current.rotation.x += 0.005;
      ref.current.rotation.y += 0.005;
    }
  });
  if (ref && position) {
    return /*#__PURE__*/_react.default.createElement("mesh", {
      ref: ref,
      position: position,
      onPointerEnter: e => {
        setEnter(true);
      },
      onPointerLeave: e => {
        setEnter(false);
      },
      onPointerDown: mouseDownEvent ?? null
    }, /*#__PURE__*/_react.default.createElement("boxBufferGeometry", {
      args: spec
    }), /*#__PURE__*/_react.default.createElement("meshBasicMaterial", {
      map: material,
      metalness: 0.6,
      roughness: 0.5
    }));
  }
}