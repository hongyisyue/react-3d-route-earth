"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.TextPole = TextPole;

var _three = require("three");

var THREE = _interopRequireWildcard(_three);

var _pole = require("../components/pole");

var _default = require("../data/default");

var _text3d = require("../components/text3d");

var _fiber = require("@react-three/fiber");

var _bold = require("../assets/fonts/bold.blob");

var _bold2 = _interopRequireDefault(_bold);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
    var dot = params.dot;
    var text = params.text;
    var lengthFactor = params.length ? 4 / params.length : 4;
    var rotate = params.rotate || 1;
    var font = (0, _fiber.useLoader)(THREE.FontLoader, _bold2.default);
    var textOption = params.textOption || _extends({
        font: font
    }, _default.DefaultSettings.textOption);

    // mouse events
    var enterEvent = params.mouseEnterEvent;
    var leaveEvent = params.mouseLeaveEvent;
    var downEvent = params.mouseDownEvent;

    // returns a point of the end of the pole
    // p1 should always be the center point of the earth
    function getLineEndPonit(p1, p2) {
        var v3 = new THREE.Vector3(p2.x + (p2.x - p1.x) / lengthFactor, p2.y + (p2.y - p1.y) / lengthFactor, p2.z + (p2.z - p1.z) / lengthFactor);

        return v3;
    }

    if (dot && text) {
        var center = _default.DefaultSettings.earth_center;
        var poleEnd = getLineEndPonit(center, dot);
        return React.createElement(
            "span",
            null,
            React.createElement(_pole.Pole, {
                dot: dot,
                length: params.length ? params.length : 1
            }),
            React.createElement(_text3d.Text3d, {
                pos: poleEnd,
                text: text,
                textOption: textOption,
                rotate: rotate,
                mouseEnterEvent: enterEvent,
                mouseLeaveEvent: leaveEvent,
                mouseDownEvent: downEvent
            })
        );
    }
}