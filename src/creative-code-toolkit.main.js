/**
 * Map v in range [a, b] to range [c, d]
 * @param {Number} v
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 * @param {Number} d
 */
const mapRange = (v, a, b, c, d) => (v-a)/(b-a) * (d-c) + c;

/**
 * Map the output sin(v / div) to the range [a, b]
 * @param {Number} v
 * @param {Number} div
 * @param {Number} a
 * @param {Number} b
 */
const sinMap = (v, div, a, b) => mapRange(Math.sin(v / div), -1, 1, a, b);

/**
 * Map the output cos(v / div) to the range [a, b]
 * @param {Number} v
 * @param {Number} div
 * @param {Number} a
 * @param {Number} b
 */
const cosMap = (v, div, a, b) => mapRange(Math.cos(v / div), -1, 1, a, b);

/**
 * if v is greater than M or less than m, wrap the value around to stay in this range
 * @param {Number} v
 * @param {Number} m
 * @param {Number} M
 */
const wrapValue = (v, m, M) => m + (v % M);

/**
 * Return a deep copy array a
 * @param {Array<any>} a
 */
const deepArrayCopy = (a) => a.map(ae => (Array.isArray(ae)) ? deepArrayCopy(ae) : ae);

/**
 * Create an array of size s
 * @param {Number} s
 */
const genArray = (s) => Array.apply(null, {length: s});

/**
 * Get the Y component of a 1d array containing 2d data when the index is i
 * @param {Number} i
 * @param {Number} cols
 */
const get1dY = (i, cols) => (i / cols)|0;

/**
 * Get the X component of a 1d array containing 2d data when the index is i
 * @param {Number} i
 * @param {Number} cols
 */
const get1dX = (i, cols) => (i % cols);

/**
 * Get the index to a 1d Array from coordinates where the number of columns is cols
 * @param {*} x
 * @param {*} y
 * @param {*} cols
 */
const get1dIndex = (x, y, cols) => (y * cols) + x;

/**
 * Copy of an array without a given element
 * @param {*} arr
 * @param {*} item
 */
const without = (arr, item) => {
  const itemIndex = arr.indexOf(item);
  if (itemIndex === -1) return [...arr];
  const arr2 = [...arr];
  arr2.splice(itemIndex, 1);
  return arr2;
}

/**
 * pick a random element from the array a
 * @param {Array<any>} a
 */
const choose = (a) => a[(Math.random() * a.length)|0];

/**
 * Pick a random element from an array without a given item
 * @param {*} arr
 * @param {*} item
 */
const chooseWithout = (arr, item) => choose(without(arr, item));

/**
 * Random number in range [a, b]
 * @param {Number} a
 * @param {Number} b
 */
const rndB = (a = 0, b = 1) => Math.random() * (b - a + 1) + a;

/**
 * Random integer in range [a, b]
 * @param {Number} a
 * @param {Number} b
 */
const rndIntB = (a = 0, b = 1) => (rndB(a, b) + 0.5) >> 0;

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
