"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Main = Main;
var _fiber = require("@react-three/fiber");
var _react = _interopRequireWildcard(require("react"));
var _three = require("three");
var _locations = require("../data/locations");
var _mapDot = require("../components/mapDot");
var _movingPath = require("../components/movingPath");
var _textPole = require("../components/textPole");
var _cube = require("../components/cube");
var _default = require("../data/default");
var _earth = require("../components/earth");
var _space = require("../components/space");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function Main(params) {
  const [isEnter, setEnter] = (0, _react.useState)(false);
  const [time, setTime] = (0, _react.useState)(0.0);
  const earth_r = _default.DefaultSettings.earth_r || 1.6;

  /** Locations */
  const beijing_xyz = (0, _locations.geoToXYZ)(earth_r, _locations.MyLocations.beijing);
  const vancouver_xyz = (0, _locations.geoToXYZ)(earth_r, _locations.MyLocations.vancouver);
  const toronto_xyz = (0, _locations.geoToXYZ)(earth_r, _locations.MyLocations.toronto);
  const la_xyz = (0, _locations.geoToXYZ)(earth_r, _locations.MyLocations.la);
  const tokyo_xyz = (0, _locations.geoToXYZ)(earth_r, _locations.MyLocations.tokyo);
  const cancun_xyz = (0, _locations.geoToXYZ)(earth_r, _locations.MyLocations.cancun);
  const berlin_xyz = (0, _locations.geoToXYZ)(earth_r, _locations.MyLocations.berlin);
  const dubai_xyz = (0, _locations.geoToXYZ)(earth_r, _locations.MyLocations.dubai);

  /** Animation */
  (0, _fiber.useFrame)(() => {
    setTime(time + 0.2);
  });
  return /*#__PURE__*/_react.default.createElement(_space.Space, {
    content: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_earth.Earth, {
      isEnter: isEnter,
      content: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_mapDot.MapDot, {
        dot: beijing_xyz
      }), /*#__PURE__*/_react.default.createElement(_textPole.TextPole, {
        dot: beijing_xyz,
        text: 'BEIJING',
        rotate: 1.2,
        mouseEnterEvent: e => setEnter(true),
        mouseLeaveEvent: e => setEnter(false),
        mouseDownEvent: e => {
          window.open("https://www.google.com/maps/place/Xiamen,+Fujian,+China/@24.4788776,117.7973602,11z/data=!3m1!4b1!4m6!3m5!1s0x34148379e5bfeb27:0x28a0670a9668d056!8m2!3d24.4795099!4d118.0894799!16zL20vMDEyNmMz?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D");
        }
      }), /*#__PURE__*/_react.default.createElement(_mapDot.MapDot, {
        dot: tokyo_xyz
      }), /*#__PURE__*/_react.default.createElement(_textPole.TextPole, {
        dot: tokyo_xyz,
        text: 'TOKYO',
        rotate: 1.2,
        mouseEnterEvent: e => setEnter(true),
        mouseLeaveEvent: e => setEnter(false)
      }), /*#__PURE__*/_react.default.createElement(_movingPath.MovingPath, {
        from: beijing_xyz,
        to: tokyo_xyz,
        frameTime: time
      }), /*#__PURE__*/_react.default.createElement(_mapDot.MapDot, {
        dot: cancun_xyz
      }), /*#__PURE__*/_react.default.createElement(_textPole.TextPole, {
        dot: cancun_xyz,
        text: 'CANCUN',
        rotate: 2.5,
        mouseEnterEvent: e => setEnter(true),
        mouseLeaveEvent: e => setEnter(false)
      }), /*#__PURE__*/_react.default.createElement(_movingPath.MovingPath, {
        from: vancouver_xyz,
        to: cancun_xyz,
        frameTime: time
      }), /*#__PURE__*/_react.default.createElement(_mapDot.MapDot, {
        dot: la_xyz
      }), /*#__PURE__*/_react.default.createElement(_textPole.TextPole, {
        dot: la_xyz,
        text: 'LA',
        rotate: 2.5,
        mouseEnterEvent: e => setEnter(true),
        mouseLeaveEvent: e => setEnter(false)
      }), /*#__PURE__*/_react.default.createElement(_movingPath.MovingPath, {
        from: vancouver_xyz,
        to: la_xyz,
        frameTime: time
      }), /*#__PURE__*/_react.default.createElement(_mapDot.MapDot, {
        dot: berlin_xyz
      }), /*#__PURE__*/_react.default.createElement(_textPole.TextPole, {
        dot: berlin_xyz,
        text: 'BERLIN',
        rotate: 3.0,
        mouseEnterEvent: e => setEnter(true),
        mouseLeaveEvent: e => setEnter(false)
      }), /*#__PURE__*/_react.default.createElement(_movingPath.MovingPath, {
        from: beijing_xyz,
        to: berlin_xyz,
        frameTime: time
      }), /*#__PURE__*/_react.default.createElement(_mapDot.MapDot, {
        dot: toronto_xyz
      }), /*#__PURE__*/_react.default.createElement(_textPole.TextPole, {
        dot: toronto_xyz,
        text: 'TORONTO',
        rotate: 2.5,
        mouseEnterEvent: e => setEnter(true),
        mouseLeaveEvent: e => setEnter(false)
      }), /*#__PURE__*/_react.default.createElement(_movingPath.MovingPath, {
        from: vancouver_xyz,
        to: toronto_xyz,
        frameTime: time
      }), /*#__PURE__*/_react.default.createElement(_mapDot.MapDot, {
        dot: vancouver_xyz
      }), /*#__PURE__*/_react.default.createElement(_textPole.TextPole, {
        dot: vancouver_xyz,
        text: 'VANCOUVER',
        rotate: 2.5,
        mouseEnterEvent: e => setEnter(true),
        mouseLeaveEvent: e => setEnter(false),
        mouseDownEvent: e => {
          window.open("https://www.google.com/maps/place/Vancouver,+BC/@49.2577062,-123.2063043,12z/data=!3m1!4b1!4m6!3m5!1s0x548673f143a94fb3:0xbb9196ea9b81f38b!8m2!3d49.2827291!4d-123.1207375!16zL20vMDgwaDI?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D");
        }
      }), /*#__PURE__*/_react.default.createElement(_movingPath.MovingPath, {
        from: beijing_xyz,
        to: vancouver_xyz,
        frameTime: time
      }), /*#__PURE__*/_react.default.createElement(_mapDot.MapDot, {
        dot: dubai_xyz
      }), /*#__PURE__*/_react.default.createElement(_textPole.TextPole, {
        dot: dubai_xyz,
        text: 'DUBAI',
        rotate: 2.5,
        mouseEnterEvent: e => setEnter(true),
        mouseLeaveEvent: e => setEnter(false),
        mouseDownEvent: e => {
          window.open("https://en.wikipedia.org/wiki/University_of_Saskatchewan");
        }
      }), /*#__PURE__*/_react.default.createElement(_movingPath.MovingPath, {
        from: beijing_xyz,
        to: dubai_xyz,
        frameTime: time
      }), /*#__PURE__*/_react.default.createElement(_movingPath.MovingPath, {
        from: toronto_xyz,
        to: dubai_xyz,
        frameTime: time
      }))
    }))
  });
}