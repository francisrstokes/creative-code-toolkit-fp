// curry :: (a -> b -> ... -> n) -> (a -> b) -> (b -> ...) -> (... -> n)
const curry = (fn) => {
  const curried = (...args) => {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...argsNext) => curried(...args, ...argsNext);
  };
  return curried;
};

// pipe :: (a -> b) -> (b -> ...) -> (... -> n)
const pipe = (fn1, ...functions) =>
  (...args) =>
    functions.reduce((acc, fn) => fn(acc), fn1(...args));

// compose :: (... -> n) -> (b -> ...) -> (a -> b)
const compose = (...functions) => pipe(...functions.reverse());

// mapRange :: toRange -> tromRange -> value  -> Number
// mapRange :: Vector  -> Vector    -> Number -> Number
const mapRange = curry(([c, d], [a, b], v) => (v-a)/(b-a) * (d-c) + c);

// sinMap :: Vector -> Number -> Number
const sinMap = curry(([a, b], div, v) => mapRange([a, b], [-1, 1], Math.sin(v / div)));

// cosMap :: Vector -> Number -> Number
const cosMap = curry(([a, b], div, v) => mapRange([a, b], [-1, 1], Math.cos(v / div)));

// wrapValue :: Number -> Number -> Number -> Number
const wrapValue = curry((m, M, v) => m + (v % M));

// deepArrayCopy :: [a] -> [a]
const deepArrayCopy = (a) => a.map(ae => (Array.isArray(ae)) ? deepArrayCopy(ae) : ae);

// genArray :: Number -> []
const genArray = (s) => Array.apply(null, {length: s});

// get1dY :: Number -> Number -> Number
const get1dY = curry((cols, i) => Math.floor(i / cols));

// get1dX :: Number -> Number -> Number
const get1dX = curry((cols, i) => (i % cols));

// get1dIndex :: Number -> Number -> Number -> Number
const get1dIndex = curry((cols, x, y) => (y * cols) + x);

// without :: (*) -> [*] -> [*]
const without = curry((item, arr) => {
  const itemIndex = arr.indexOf(item);
  if (itemIndex === -1) return [...arr];
  const arr2 = [...arr];
  arr2.splice(itemIndex, 1);
  return arr2;
});

// choose :: [a] -> a
const choose = (a) => a[(Math.random() * a.length)|0];

// chooseWithout :: a -> [a] -> [a]
const chooseWithout = curry((item, arr) => choose(without(arr, item)));

// rndB :: Vector -> Number
const rndB = ([a = 0, b = 1]) => mapRange([a, b], [0, 1], Math.random());

// rndIntB :: Vector -> Number
const rndIntB = ([a = 0, b = 1]) => Math.round(rndB(a, b) + 0.5);

/* start window exports */
/**
 * Polutes the global scope with unnamespaced functions
 */
const polute = function () {
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
}

/**
 * Exposed API
 */
window.ccToolkit = {
  mapRange,
  sinMap,
  cosMap,
  wrapValue,
  deepArrayCopy,
  genArray,
  get1dY,
  get1dX,
  get1dIndex,
  choose,
  without,
  chooseWithout,
  rndB,
  rndIntB,
  polute
};
/* end window exports */

/* start exports */
export { mapRange as mapRange };
export { sinMap as sinMap };
export { cosMap as cosMap };
export { wrapValue as wrapValue };
export { deepArrayCopy as deepArrayCopy };
export { genArray as genArray };
export { get1dY as get1dY };
export { get1dX as get1dX };
export { get1dIndex as get1dIndex };
export { without as without };
export { choose as choose };
export { chooseWithout as chooseWithout };
export { rndB as rndB };
export { rndIntB as rndIntB };
/* end exports */
