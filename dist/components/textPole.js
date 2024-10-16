"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextPole = TextPole;
var THREE = _interopRequireWildcard(require("three"));
var _pole = require("../components/pole");
var _default = require("../data/default");
var _text3d = require("../components/text3d");
var _fiber = require("@react-three/fiber");
var _bold = _interopRequireDefault(require("../assets/fonts/bold.blob"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function TextPole(params) {
  /**
   * Create a pole with a 3d text(given text) at the end at the given
   * position(xyz) with the given link(optinal), text option(optional),
   * and given mouse events(optional)
   * 
   * --params--
   * dot: {
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
  const dot = params.dot;
  const text = params.text;
  const lengthFactor = params.length ? 4 / params.length : 4;
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

  // returns a point of the end of the pole
  // p1 should always be the center point of the earth
  function getLineEndPonit(p1, p2) {
    const v3 = new THREE.Vector3(p2.x + (p2.x - p1.x) / lengthFactor, p2.y + (p2.y - p1.y) / lengthFactor, p2.z + (p2.z - p1.z) / lengthFactor);
    return v3;
  }
  if (dot && text) {
    const center = _default.DefaultSettings.earth_center;
    const poleEnd = getLineEndPonit(center, dot);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_pole.Pole, {
      dot: dot,
      length: params.length ? params.length : 1
    }), /*#__PURE__*/React.createElement(_text3d.Text3d, {
      pos: poleEnd,
      text: text,
      textOption: textOption,
      rotate: rotate,
      mouseEnterEvent: enterEvent,
      mouseLeaveEvent: leaveEvent,
      mouseDownEvent: downEvent
    }));
  }
}