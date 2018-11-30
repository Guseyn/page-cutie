'use strict';

require('./../mock');
const AsyncObject = require('./../out/AsyncObject');
const as = require('./../out/As');
const assert = require('assert');

class AsyncMaxNum extends AsyncObject {

  constructor(a, b, c) {
    super(a, b, c);
  }

  /** 
   it's not an operation with I/O, it's just silly example
  **/
  definedAsyncCall() {
    return (a, b, c, callback) => {
      callback(Math.max(a, b, c));
    }
  }

  callbackWithError() {
    return false;
  }

}

class SyncAssert extends AsyncObject {

  constructor(actual, expected) {
    super(actual, expected);
  }

  definedSyncCall() {
    return (actual, expected) => {
      assert.strictEqual(actual, expected);
      return actual;
    }
  }

}

class SyncMaxNum extends AsyncObject {

  constructor(a, b, c) {
    super(a, b, c);
  }

  definedSyncCall() {
    return (a, b, c) => {
      return Math.max(a, b, c);
    }
  }

}

let testAsyncObject = 
  new AsyncMaxNum(
    new AsyncMaxNum(1, 3, 
      new AsyncMaxNum(1, 2, 4).as('max1')
    ).as('max2'),
    new AsyncMaxNum(2,
      new SyncMaxNum(3, 4,
        new SyncMaxNum(5, 4, 6).as('max3')
      ).as('max4'), 1
    ).as('max5'),
    new SyncMaxNum(1, 2, 8).as('max6')
  ).as('max7')
    .after(
      new SyncAssert(
        new SyncAssert(
          new AsyncMaxNum(
            as('max1'),
            new AsyncMaxNum(
              new SyncMaxNum(
                3, as('max2'), as('max3')
              ), 4, as('max4')
            ),
            new AsyncMaxNum(4,
              new SyncMaxNum(as('max5'), 4, 
                new AsyncMaxNum(4, 6, 2)
              ), as('max6')
            )
          ),
          new AsyncMaxNum(3, 4, 8)
        ),
        new AsyncMaxNum(1, 4, 8).as('max7')
      ).after(
        new SyncAssert(8, as('max7'))
      )
    );

testAsyncObject.call();
