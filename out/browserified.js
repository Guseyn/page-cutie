"use strict";

var PageAsyncObject = require('./AsyncObject');

var _require = require('@cuties/cutie'),
    AsyncObject = _require.AsyncObject;

module.exports = function (asyncObjects) {
  Object.keys(asyncObjects).forEach(function (key) {
    if (asyncObjects[key].prototype instanceof AsyncObject) {
      Object.setPrototypeOf(asyncObjects[key].prototype, PageAsyncObject.prototype);
      Object.setPrototypeOf(asyncObjects[key], PageAsyncObject);
    }
  });
  return asyncObjects;
};
