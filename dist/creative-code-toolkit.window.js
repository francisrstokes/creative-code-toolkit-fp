(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

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

/* start window exports */
/**
 * Polutes the global scope with unnamespaced functions
 */
var polute = function polute() {
  window.mapRange = mapRange;
  window.sinMap = sinMap;
  window.cosMap = cosMap;
  window.wrapValue = wrapValue;
  window.deepArrayCopy = deepArrayCopy;
  window.genArray = genArray;
  window.get1dY = get1dY;
  window.get1dX = get1dX;
  window.get1dIndex = get1dIndex;
  window.choose = choose;
  window.chooseWithout = chooseWithout;
  window.without = without;
  window.rndB = rndB;
  window.rndIntB = rndIntB;
};

/**
 * Exposed API
 */
window.ccToolkit = {
  mapRange: mapRange,
  sinMap: sinMap,
  cosMap: cosMap,
  wrapValue: wrapValue,
  deepArrayCopy: deepArrayCopy,
  genArray: genArray,
  get1dY: get1dY,
  get1dX: get1dX,
  get1dIndex: get1dIndex,
  choose: choose,
  without: without,
  chooseWithout: chooseWithout,
  rndB: rndB,
  rndIntB: rndIntB,
  polute: polute
};
/* end window exports */
},{}]},{},[1])