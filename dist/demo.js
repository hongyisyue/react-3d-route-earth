"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.Demo = Demo;

var _fiber = require("@react-three/fiber");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _locations = require("./data/locations");

var _mapDot = require("./mapDot");

var _movingPath = require("./movingPath");

var _textPole = require("./textPole");

var _default = require("./data/default");

var _earth = require("./earth");

var _space = require("./space");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Demo(params) {
    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        isEnter = _useState2[0],
        setEnter = _useState2[1];

    var _useState3 = (0, _react.useState)(0.0),
        _useState4 = _slicedToArray(_useState3, 2),
        time = _useState4[0],
        setTime = _useState4[1];

    var earth_r = _default.DefaultSettings.earth_r || 1.6;

    /** Locations */
    var beijing_xyz = (0, _locations.geoToXYZ)(earth_r, _locations.MyLocations.beijing);
    var vancouver_xyz = (0, _locations.geoToXYZ)(earth_r, _locations.MyLocations.vancouver);
    var toronto_xyz = (0, _locations.geoToXYZ)(earth_r, _locations.MyLocations.toronto);
    var la_xyz = (0, _locations.geoToXYZ)(earth_r, _locations.MyLocations.la);
    var tokyo_xyz = (0, _locations.geoToXYZ)(earth_r, _locations.MyLocations.tokyo);
    var cancun_xyz = (0, _locations.geoToXYZ)(earth_r, _locations.MyLocations.cancun);
    var berlin_xyz = (0, _locations.geoToXYZ)(earth_r, _locations.MyLocations.berlin);
    var dubai_xyz = (0, _locations.geoToXYZ)(earth_r, _locations.MyLocations.dubai);

    /** Animation */
    (0, _fiber.useFrame)(function () {
        setTime(time + 0.2);
    });

    return _react2.default.createElement(_space.Space, {
        content: _react2.default.createElement(_earth.Earth, {
            isEnter: isEnter,
            content: _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(_mapDot.MapDot, { dot: beijing_xyz }),
                _react2.default.createElement(_textPole.TextPole, {
                    dot: beijing_xyz,
                    text: 'BEIJING',
                    rotate: 1.2,
                    mouseEnterEvent: function mouseEnterEvent(e) {
                        return setEnter(true);
                    },
                    mouseLeaveEvent: function mouseLeaveEvent(e) {
                        return setEnter(false);
                    },
                    mouseDownEvent: function mouseDownEvent(e) {
                        window.open("https://www.google.com/maps/place/Xiamen,+Fujian,+China/@24.4788776,117.7973602,11z/data=!3m1!4b1!4m6!3m5!1s0x34148379e5bfeb27:0x28a0670a9668d056!8m2!3d24.4795099!4d118.0894799!16zL20vMDEyNmMz?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D");
                    }
                }),
                _react2.default.createElement(_mapDot.MapDot, { dot: tokyo_xyz }),
                _react2.default.createElement(_textPole.TextPole, {
                    dot: tokyo_xyz,
                    text: 'TOKYO',
                    rotate: 1.1,
                    mouseEnterEvent: function mouseEnterEvent(e) {
                        return setEnter(true);
                    },
                    mouseLeaveEvent: function mouseLeaveEvent(e) {
                        return setEnter(false);
                    }
                }),
                _react2.default.createElement(_mapDot.MapDot, { dot: cancun_xyz }),
                _react2.default.createElement(_textPole.TextPole, {
                    dot: cancun_xyz,
                    text: 'CANCUN',
                    rotate: 0.1,
                    mouseEnterEvent: function mouseEnterEvent(e) {
                        return setEnter(true);
                    },
                    mouseLeaveEvent: function mouseLeaveEvent(e) {
                        return setEnter(false);
                    }
                }),
                _react2.default.createElement(_mapDot.MapDot, { dot: la_xyz }),
                _react2.default.createElement(_textPole.TextPole, {
                    dot: la_xyz,
                    text: 'LA',
                    rotate: 0.1,
                    mouseEnterEvent: function mouseEnterEvent(e) {
                        return setEnter(true);
                    },
                    mouseLeaveEvent: function mouseLeaveEvent(e) {
                        return setEnter(false);
                    }
                }),
                _react2.default.createElement(_mapDot.MapDot, { dot: berlin_xyz }),
                _react2.default.createElement(_textPole.TextPole, {
                    dot: berlin_xyz,
                    text: 'BERLIN',
                    rotate: 1.7,
                    mouseEnterEvent: function mouseEnterEvent(e) {
                        return setEnter(true);
                    },
                    mouseLeaveEvent: function mouseLeaveEvent(e) {
                        return setEnter(false);
                    }
                }),
                _react2.default.createElement(_mapDot.MapDot, { dot: dubai_xyz }),
                _react2.default.createElement(_textPole.TextPole, {
                    dot: dubai_xyz,
                    text: 'DUBAI',
                    rotate: 1.3,
                    mouseEnterEvent: function mouseEnterEvent(e) {
                        return setEnter(true);
                    },
                    mouseLeaveEvent: function mouseLeaveEvent(e) {
                        return setEnter(false);
                    },
                    mouseDownEvent: function mouseDownEvent(e) {
                        window.open("https://en.wikipedia.org/wiki/University_of_Saskatchewan");
                    }
                }),
                _react2.default.createElement(_mapDot.MapDot, { dot: toronto_xyz }),
                _react2.default.createElement(_textPole.TextPole, {
                    dot: toronto_xyz,
                    text: 'TORONTO',
                    rotate: 0.1,
                    mouseEnterEvent: function mouseEnterEvent(e) {
                        return setEnter(true);
                    },
                    mouseLeaveEvent: function mouseLeaveEvent(e) {
                        return setEnter(false);
                    }
                }),
                _react2.default.createElement(_mapDot.MapDot, { dot: vancouver_xyz }),
                _react2.default.createElement(_textPole.TextPole, {
                    dot: vancouver_xyz,
                    text: 'VANCOUVER',
                    rotate: 0.1,
                    mouseEnterEvent: function mouseEnterEvent(e) {
                        return setEnter(true);
                    },
                    mouseLeaveEvent: function mouseLeaveEvent(e) {
                        return setEnter(false);
                    },
                    mouseDownEvent: function mouseDownEvent(e) {
                        window.open("https://www.google.com/maps/place/Vancouver,+BC/@49.2577062,-123.2063043,12z/data=!3m1!4b1!4m6!3m5!1s0x548673f143a94fb3:0xbb9196ea9b81f38b!8m2!3d49.2827291!4d-123.1207375!16zL20vMDgwaDI?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D");
                    }
                }),
                _react2.default.createElement(_movingPath.MovingPath, {
                    from: beijing_xyz,
                    to: tokyo_xyz,
                    frameTime: time
                }),
                _react2.default.createElement(_movingPath.MovingPath, {
                    from: vancouver_xyz,
                    to: cancun_xyz,
                    frameTime: time
                }),
                _react2.default.createElement(_movingPath.MovingPath, {
                    from: vancouver_xyz,
                    to: la_xyz,
                    frameTime: time
                }),
                _react2.default.createElement(_movingPath.MovingPath, {
                    from: beijing_xyz,
                    to: berlin_xyz,
                    frameTime: time
                }),
                _react2.default.createElement(_movingPath.MovingPath, {
                    from: beijing_xyz,
                    to: dubai_xyz,
                    frameTime: time
                }),
                _react2.default.createElement(_movingPath.MovingPath, {
                    from: toronto_xyz,
                    to: berlin_xyz,
                    frameTime: time
                }),
                _react2.default.createElement(_movingPath.MovingPath, {
                    from: toronto_xyz,
                    to: berlin_xyz,
                    frameTime: time
                }),
                _react2.default.createElement(_movingPath.MovingPath, {
                    from: vancouver_xyz,
                    to: toronto_xyz,
                    frameTime: time
                }),
                _react2.default.createElement(_movingPath.MovingPath, {
                    from: beijing_xyz,
                    to: vancouver_xyz,
                    frameTime: time
                })
            )
        }) });
}