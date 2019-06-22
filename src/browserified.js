const PageAsyncObject = require('./AsyncObject')

module.exports = (...asyncObjects) => {
  for (let i = 0; i < asyncObjects.length; i++) {
    if (asyncObjects[i].prototype instanceof PageAsyncObject) {
      Object.setPrototypeOf(asyncObjects[i].prototype, PageAsyncObject.prototype)
      Object.setPrototypeOf(asyncObjects[i], PageAsyncObject)
    }
  }
}
