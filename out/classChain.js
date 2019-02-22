'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var classChain = function classChain(obj, chain) {
  if (!chain) {
    chain = [];
  }

  if (typeof obj === 'function') {
    if (!obj.name || obj === Object) {
      return [];
    }

    return classChain(Object.getPrototypeOf(obj).name, chain.concat(obj));
  }

  if (_typeof(obj) === 'object' && obj !== null) {
    return classChain(obj.constructor, chain);
  }

  return [];
};

module.exports = classChain;
