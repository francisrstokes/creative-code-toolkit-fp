const mapRange = (val, a, b, c, d) => (val-a)/(b-a) * (d-c) + c;

const sinMap = (fc, div, a, b) => mapRange(Math.sin(fc/div), -1, 1, a, b);

const cosMap = (fc, div, a, b) => mapRange(Math.cos(fc/div), -1, 1, a, b);

const wrapValue = (v, m, M) => m + (v % M);

const deepArrayCopy = (a) => a.map(ae => (Array.isArray(ae)) ? deepArrayCopy(ae) : ae);

const genArray = (s, v) => {
  const out = Array.apply(null, {length: s});
  return (typeof v !== 'undefined') ? 
    out.map(x => v) :
    out;
}

const get1dY = (i, rowLength) => (i / rowLength)|0;

const get1dX = (i, rowLength) => (i % rowLength);

const choose = (a) => a[(Math.random() * a.length)|0];

const rndB = (x = 0, y = 0) => Math.floor(Math.random()*(y-x+1)+x);

/* start window exports */
/**
 * Polutes the global scope with unnamespaced functions
 */
const polute = function () {
  window.setCanvasSize = setCanvasSize;
}

/**
 * Exposed API
 */
window.modulation = {
  polute,
};
/* end window exports */

/* start exports */
export { setCanvasSize as setCanvasSize};
/* end exports */
