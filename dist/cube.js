"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.Cube = Cube;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _fiber = require("@react-three/fiber");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    var ref = (0, _react.useRef)();

    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        isEnter = _useState2[0],
        setEnter = _useState2[1];

    var position = params.pos;
    var spec = params.spec || [1, 1, 1];
    var material = params.material;
    var mouseDownEvent = params.mouseDownEvent;

    /** Animation */
    (0, _fiber.useFrame)(function () {
        if (!isEnter) {
            ref.current.rotation.x += 0.005;
            ref.current.rotation.y += 0.005;
        }
    });

    if (ref && position) {
        return _react2.default.createElement(
            "mesh",
            {
                ref: ref,
                position: position,
                onPointerEnter: function onPointerEnter(e) {
                    setEnter(true);
                },
                onPointerLeave: function onPointerLeave(e) {
                    setEnter(false);
                },
                onPointerDown: mouseDownEvent
            },
            _react2.default.createElement("boxBufferGeometry", { args: spec }),
            _react2.default.createElement("meshBasicMaterial", {
                map: material,
                metalness: 0.6,
                roughness: 0.5
            })
        );
    }
}