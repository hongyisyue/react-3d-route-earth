"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyLocations = void 0;
exports.geoToXYZ = geoToXYZ;
// Add your location here
const MyLocations = exports.MyLocations = {
  beijing: {
    lat: 39.916,
    lng: 116.3833
  },
  vancouver: {
    lat: 49.2462,
    lng: -123.1162
  },
  toronto: {
    lat: 43.6510,
    lng: -79.3470
  },
  la: {
    lat: 34.0523,
    lng: -118.2436
  },
  tokyo: {
    lat: 35.6528,
    lng: 139.8394
  },
  cancun: {
    lat: 21.1619,
    lng: -86.8515
  },
  berlin: {
    lat: 52.52,
    lng: 13.4049
  },
  dubai: {
    lat: 25.2769,
    lng: 55.2962
  }
};

// returns a point with lat & lng to a vertor3 point
function geoToXYZ(earth_r, location) {
  const p = {
    lat: location.lat * Math.PI / 180,
    lng: location.lng * -1 * Math.PI / 180
  };
  return {
    x: earth_r * Math.cos(p.lng) * Math.cos(p.lat),
    y: earth_r * Math.sin(p.lat),
    z: earth_r * Math.sin(p.lng) * Math.cos(p.lat)
  };
}