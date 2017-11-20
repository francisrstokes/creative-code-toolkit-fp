"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
 * @param {Number} cols
 */
var get1dY = function get1dY(i, cols) {
  return i / cols | 0;
};

/**
 * Get the X component of a 1d array containing 2d data when the index is i
 * @param {Number} i
 * @param {Number} cols
 */
var get1dX = function get1dX(i, cols) {
  return i % cols;
};

/**
 * Get the index to a 1d Array from coordinates where the number of columns is cols
 * @param {*} x
 * @param {*} y
 * @param {*} cols
 */
var get1dIndex = function get1dIndex(x, y, cols) {
  return y * cols + x;
};

/**
 * Copy of an array without a given element
 * @param {*} arr
 * @param {*} item
 */
var without = function without(arr, item) {
  var itemIndex = arr.indexOf(item);
  if (itemIndex === -1) return [].concat(_toConsumableArray(arr));
  var arr2 = [].concat(_toConsumableArray(arr));
  arr2.splice(itemIndex, 1);
  return arr2;
};

/**
 * pick a random element from the array a
 * @param {Array<any>} a
 */
var choose = function choose(a) {
  return a[Math.random() * a.length | 0];
};

/**
 * Pick a random element from an array without a given item
 * @param {*} arr
 * @param {*} item
 */
var chooseWithout = function chooseWithout(arr, item) {
  return choose(without(arr, item));
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
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
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
exports.get1dIndex = get1dIndex;
exports.without = without;
exports.choose = choose;
exports.chooseWithout = chooseWithout;
exports.rndB = rndB;
exports.rndIntB = rndIntB;
/* end exports */