"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Text3d = Text3d;

var _three = require("three");

var THREE = _interopRequireWildcard(_three);

var _fiber = require("@react-three/fiber");

var _default = require("../data/default");

var _bold = require("../assets/fonts/bold.blob");

var _bold2 = _interopRequireDefault(_bold);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
    var position = params.pos;
    //NOTE: text Grometry cannot take in lower case letter
    var text = params.text;
    var rotate = params.rotate || 1;
    var font = (0, _fiber.useLoader)(THREE.FontLoader, _bold2.default);
    var textOption = params.textOption || _extends({
        font: font
    }, _default.DefaultSettings.textOption);

    // mouse events
    var enterEvent = params.mouseEnterEvent;
    var leaveEvent = params.mouseLeaveEvent;
    var downEvent = params.mouseDownEvent;

    if (position && text) {
        return React.createElement(
            "mesh",
            {
                onPointerEnter: enterEvent,
                onPointerLeave: leaveEvent,
                onPointerDown: downEvent,
                position: position,
                rotation: [0, Math.PI / rotate, 0]
            },
            React.createElement("textGeometry", { args: [text, textOption] }),
            React.createElement("meshBasicMaterial", { color: "#BFF8FF", side: THREE.DoubleSide })
        );
    }
}