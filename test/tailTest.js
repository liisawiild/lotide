const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['b', 'c'] when provided with ['a', 'b', 'c']", () => {
  assert.deepEqual(tail(['a', 'b', 'c']), ['b', 'c']);
  });

  it("returns [] when provided with []", () => {
    assert.deepEqual(tail([]), []);
    });

  it("returns [] when provided with [2]", () => {
    assert.deepEqual(tail([2]), []);
    });

  it("returns ['welcome', 'to', 'unit', 'testing'] when provided with ['Hello', 'welcome', 'to', 'unit', 'testing']", () => {
    assert.deepEqual(tail(['Hello', 'welcome', 'to', 'unit', 'testing']), ['welcome', 'to', 'unit', 'testing']);
    });

});