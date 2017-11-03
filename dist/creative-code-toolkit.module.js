"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Map v in range [a, b] to range [c, d]
 * @param {Number} v
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 * @param {Number} d
 */
var mapRange = function mapRange(v, a, b, c, d) {
  return (v - a) / (b - a) * (d - c) + c;
};

/**
 * Map the output sin(v / div) to the range [a, b]
 * @param {Number} v
 * @param {Number} div
 * @param {Number} a
 * @param {Number} b
 */
var sinMap = function sinMap(v, div, a, b) {
  return mapRange(Math.sin(v / div), -1, 1, a, b);
};

/**
 * Map the output cos(v / div) to the range [a, b]
 * @param {Number} v
 * @param {Number} div
 * @param {Number} a
 * @param {Number} b
 */
var cosMap = function cosMap(v, div, a, b) {
  return mapRange(Math.cos(v / div), -1, 1, a, b);
};

/**
 * if v is greater than M or less than m, wrap the value around to stay in this range
 * @param {Number} v
 * @param {Number} m
 * @param {Number} M
 */
var wrapValue = function wrapValue(v, m, M) {
  return m + v % M;
};

/**
 * Return a deep copy array a
 * @param {Array<any>} a
 */
var deepArrayCopy = function deepArrayCopy(a) {
  return a.map(function (ae) {
    return Array.isArray(ae) ? deepArrayCopy(ae) : ae;
  });
};

/**
 * Create an array of size s
 * @param {Number} s
 */
var genArray = function genArray(s) {
  return Array.apply(null, { length: s });
};

/**
 * Get the Y component of a 1d array containing 2d data when the index is i
 * @param {Number} i
 * @param {Number} rowLength
 */
var get1dY = function get1dY(i, rowLength) {
  return i / rowLength | 0;
};

/**
 * Get the X component of a 1d array containing 2d data when the index is i
 * @param {Number} i
 * @param {Number} rowLength
 */
var get1dX = function get1dX(i, rowLength) {
  return i % rowLength;
};

/**
 * pick a random element from the array a
 * @param {Array<any>} a 
 */
var choose = function choose(a) {
  return a[Math.random() * a.length | 0];
};

/**
 * Random number in range [a, b]
 * @param {Number} a
 * @param {Number} b
 */
var rndB = function rndB() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return Math.random() * (b - a + 1) + a;
};

/**
 * Random integer in range [a, b]
 * @param {Number} a
 * @param {Number} b
 */
var rndIntB = function rndIntB() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return rndB(a, b) + 0.5 >> 0;
};

/* start exports */
exports.mapRange = mapRange;
exports.sinMap = sinMap;
exports.cosMap = cosMap;
exports.wrapValue = wrapValue;
exports.deepArrayCopy = deepArrayCopy;
exports.genArray = genArray;
exports.get1dY = get1dY;
exports.get1dX = get1dX;
exports.choose = choose;
exports.rndB = rndB;
exports.rndIntB = rndIntB;
/* end exports */