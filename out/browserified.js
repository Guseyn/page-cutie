"use strict";

var PageAsyncObject = require('./AsyncObject');

module.exports = function () {
  for (var _len = arguments.length, asyncObjects = new Array(_len), _key = 0; _key < _len; _key++) {
    asyncObjects[_key] = arguments[_key];
  }

  for (var i = 0; i < asyncObjects.length; i++) {
    if (asyncObjects[i].prototype instanceof PageAsyncObject) {
      Object.setPrototypeOf(asyncObjects[i].prototype, PageAsyncObject.prototype);
      Object.setPrototypeOf(asyncObjects[i], PageAsyncObject);
    }
  }
};
