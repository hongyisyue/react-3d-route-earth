"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text3d = Text3d;
var THREE = _interopRequireWildcard(require("three"));
var _fiber = require("@react-three/fiber");
var _default = require("../data/default");
var _bold = _interopRequireDefault(require("../assets/fonts/bold.blob"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function Text3d(params) {
  /**
   * Create a 3d text at the given position(xyz) with
   * the given text, and given link(optinal), text option(optional)
   * 
   * --params--
   * pos: {
   *  x: number,
   *  y: number,
   *  z: number
   * }
   * text: string,
   * 
   * rotate[Optional]: number
   * textOption[Optional]: {
   *  font: useLoader(),
   *  size: number,
   *  height: number
   * }
   * mouseEnterEvent[Optional]: function()
   * mouseLeaveEvent[Optional]: function()
   * mouseDownEvent[Optional]: function(),
   */

  // position
  const position = params.pos;
  //NOTE: text Grometry cannot take in lower case letter
  const text = params.text;
  const rotate = params.rotate ?? 1;
  const font = (0, _fiber.useLoader)(THREE.FontLoader, _bold.default);
  const textOption = params.textOption || {
    font,
    ..._default.DefaultSettings.textOption
  };

  // mouse events
  const enterEvent = params.mouseEnterEvent;
  const leaveEvent = params.mouseLeaveEvent;
  const downEvent = params.mouseDownEvent;
  if (position && text) {
    return /*#__PURE__*/React.createElement("mesh", {
      onPointerEnter: enterEvent ?? null,
      onPointerLeave: leaveEvent ?? null,
      onPointerDown: downEvent ?? null,
      position: position,
      rotation: [0, -Math.PI / rotate, 0]
    }, /*#__PURE__*/React.createElement("textGeometry", {
      args: [text, textOption]
    }), /*#__PURE__*/React.createElement("meshBasicMaterial", {
      color: "#BFF8FF",
      side: THREE.DoubleSide
    }));
  }
}