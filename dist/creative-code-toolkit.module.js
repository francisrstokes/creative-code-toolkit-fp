"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// curry :: (a -> b -> ... -> n) -> (a -> b) -> (b -> ...) -> (... -> n)
var curry = function curry(fn) {
  var curried = function curried() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length >= fn.length) {
      return fn.apply(undefined, args);
    }
    return function () {
      for (var _len2 = arguments.length, argsNext = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        argsNext[_key2] = arguments[_key2];
      }

      return curried.apply(undefined, args.concat(argsNext));
    };
  };
  return curried;
};

// pipe :: (a -> b) -> (b -> ...) -> (... -> n)
var pipe = function pipe(fn1) {
  for (var _len3 = arguments.length, functions = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    functions[_key3 - 1] = arguments[_key3];
  }

  return function () {
    return functions.reduce(function (acc, fn) {
      return fn(acc);
    }, fn1.apply(undefined, arguments));
  };
};

// compose :: (... -> n) -> (b -> ...) -> (a -> b)
var compose = function compose() {
  for (var _len4 = arguments.length, functions = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    functions[_key4] = arguments[_key4];
  }

  return pipe.apply(undefined, _toConsumableArray(functions.reverse()));
};

// mapRange :: toRange -> tromRange -> value  -> Number
// mapRange :: Vector  -> Vector    -> Number -> Number
var mapRange = curry(function (_ref, _ref2, v) {
  var _ref4 = _slicedToArray(_ref, 2),
      c = _ref4[0],
      d = _ref4[1];

  var _ref3 = _slicedToArray(_ref2, 2),
      a = _ref3[0],
      b = _ref3[1];

  return (v - a) / (b - a) * (d - c) + c;
});

// sinMap :: Vector -> Number -> Number
var sinMap = curry(function (_ref5, div, v) {
  var _ref6 = _slicedToArray(_ref5, 2),
      a = _ref6[0],
      b = _ref6[1];

  return mapRange([a, b], [-1, 1], Math.sin(v / div));
});

// cosMap :: Vector -> Number -> Number
var cosMap = curry(function (_ref7, div, v) {
  var _ref8 = _slicedToArray(_ref7, 2),
      a = _ref8[0],
      b = _ref8[1];

  return mapRange([a, b], [-1, 1], Math.cos(v / div));
});

// sMap :: Vector -> Number -> Number
var sMap = curry(function (R, p, t) {
  return mapRange(R, [-1, 1], Math.sin(t ** p));
});

// cMap :: Vector -> Number -> Number
var cMap = curry(function (R, p, t) {
  return mapRange(R, [-1, 1], Math.cos(t ** p));
});

// wrapValue :: Number -> Number -> Number -> Number
var wrapValue = curry(function (m, M, v) {
  if (v < m) {
    var diff = m - v - 1;
    return wrapValue(m, M, M - diff);
  }
  if (v > M) {
    var _diff = v - M - 1;
    return wrapValue(m, M, m + _diff);
  }
  return v;
});

// deepArrayCopy :: [a] -> [a]
var deepArrayCopy = function deepArrayCopy(a) {
  return a.map(function (ae) {
    return Array.isArray(ae) ? deepArrayCopy(ae) : ae;
  });
};

// genArray :: Number -> []
var genArray = function genArray(s) {
  return Array.apply(null, { length: s });
};

// get1dY :: Number -> Number -> Number
var get1dY = curry(function (cols, i) {
  return Math.floor(i / cols);
});

// get1dX :: Number -> Number -> Number
var get1dX = curry(function (cols, i) {
  return i % cols;
});

// get1dIndex :: Number -> Number -> Number -> Number
var get1dIndex = curry(function (cols, x, y) {
  return y * cols + x;
});

// without :: (*) -> [*] -> [*]
var without = curry(function (item, arr) {
  var itemIndex = arr.indexOf(item);
  if (itemIndex === -1) return [].concat(_toConsumableArray(arr));
  var arr2 = [].concat(_toConsumableArray(arr));
  arr2.splice(itemIndex, 1);
  return arr2;
});

// choose :: [a] -> a
var choose = function choose(a) {
  return a[Math.random() * a.length | 0];
};

// chooseWithout :: a -> [a] -> [a]
var chooseWithout = curry(function (item, arr) {
  return choose(without(arr, item));
});

// rndB :: Vector -> Number
var rndB = function rndB(_ref9) {
  var _ref10 = _slicedToArray(_ref9, 2),
      _ref10$ = _ref10[0],
      a = _ref10$ === undefined ? 0 : _ref10$,
      _ref10$2 = _ref10[1],
      b = _ref10$2 === undefined ? 1 : _ref10$2;

  return mapRange([a, b], [0, 1], Math.random());
};

// rndIntB :: Vector -> Number
var rndIntB = function rndIntB(_ref11) {
  var _ref12 = _slicedToArray(_ref11, 2),
      _ref12$ = _ref12[0],
      a = _ref12$ === undefined ? 0 : _ref12$,
      _ref12$2 = _ref12[1],
      b = _ref12$2 === undefined ? 1 : _ref12$2;

  return Math.round(rndB(a, b) + 0.5);
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
exports.sMap = sMap;
exports.cMap = cMap;
/* end exports */