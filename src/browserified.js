const PageAsyncObject = require('./AsyncObject')
const { AsyncObject } = require('@cuties/cutie')

module.exports = (asyncObjects) => {
  Object.keys(asyncObjects).forEach(key => {
    if (asyncObjects[key].prototype instanceof AsyncObject) {
      Object.setPrototypeOf(asyncObjects[key].prototype, PageAsyncObject.prototype)
      Object.setPrototypeOf(asyncObjects[key], PageAsyncObject)
    }
  })
  return asyncObjects
}
