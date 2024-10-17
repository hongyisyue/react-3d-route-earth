"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.Earth = Earth;

var _fiber = require("@react-three/fiber");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _drei = require("@react-three/drei");

var _k_earth_clouds = require("./assets/textures/8k_earth_clouds.jpg");

var _k_earth_clouds2 = _interopRequireDefault(_k_earth_clouds);

var _k_earth_daymap = require("./assets/textures/8k_earth_daymap.jpg");

var _k_earth_daymap2 = _interopRequireDefault(_k_earth_daymap);

var _k_earth_normal_map = require("./assets/textures/8k_earth_normal_map.jpg");

var _k_earth_normal_map2 = _interopRequireDefault(_k_earth_normal_map);

var _k_earth_specular_map = require("./assets/textures/8k_earth_specular_map.jpg");

var _k_earth_specular_map2 = _interopRequireDefault(_k_earth_specular_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Earth(params) {
    /** refs */
    var cloudsRef = (0, _react.useRef)();
    var earthRef = (0, _react.useRef)();

    var content = params.content;
    var isEnter = params.isEnter;
    var r = params.earth_r || DefaultSettings.earth_r;
    var horSegment = 64;
    var verSegment = 64;

    /** Textures */

    var _useLoader = useLoader(THREE.TextureLoader, [_k_earth_clouds2.default]),
        _useLoader2 = _slicedToArray(_useLoader, 1),
        cloudsMap = _useLoader2[0];

    var _useLoader3 = useLoader(TextureLoader, [_k_earth_daymap2.default, _k_earth_normal_map2.default, _k_earth_specular_map2.default]),
        _useLoader4 = _slicedToArray(_useLoader3, 3),
        dayMap = _useLoader4[0],
        normalMap = _useLoader4[1],
        specularMap = _useLoader4[2];

    /** Animation */


    (0, _fiber.useFrame)(function () {
        if (!isEnter) {
            cloudsRef.current.rotation.y += 0.005;
        }
    });

    return _react2.default.createElement(
        "mesh",
        { ref: cloudsRef, position: [2, 0, 0] },
        _react2.default.createElement(_drei.TrackballControls, null),
        _react2.default.createElement("sphereGeometry", { args: [r + 0.05, horSegment, verSegment] }),
        _react2.default.createElement("meshPhongMaterial", {
            map: cloudsMap,
            opacity: 0.45,
            depthWrite: true,
            transparent: true,
            side: THREE.DoubleSide
        }),
        _react2.default.createElement(
            "mesh",
            { ref: earthRef, position: [0, 0, 0] },
            _react2.default.createElement("sphereGeometry", { args: [r, horSegment, verSegment] }),
            _react2.default.createElement("meshPhongMaterial", { specularMap: specularMap }),
            _react2.default.createElement("meshStandardMaterial", {
                map: dayMap,
                normalMap: normalMap,
                metalness: 0.6,
                roughness: 0.5
            }),
            content
        )
    );
}