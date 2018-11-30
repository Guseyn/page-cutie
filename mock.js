const { AsyncObject } = require('@cuties/cutie');
const PageAsyncObject = require('./src/AsyncObject');
const index = require('./out/index');

// transform all async objects from @page-libs/cutie to @cuties/cutie for testing

for (let key in index) {
  if (index[key].prototype instanceof PageAsyncObject) {
    Object.setPrototypeOf(index[key].prototype, AsyncObject.prototype);
    Object.setPrototypeOf(index[key], AsyncObject);
  }
}
