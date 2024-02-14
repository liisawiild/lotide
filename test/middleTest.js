const assert = require('chai').assert;
const middle = require ('../middle');

describe("#middle", () => {
  it("returns [2, 3] when provided [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [3] when provided [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [] when provided []", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns ['b', 'c'] when provided ['a', 'b', 'c', 'd']", () => {
    assert.deepEqual(middle(['a', 'b', 'c', 'd']), ['b', 'c']);
  }); 

  it("make sure the original array was not altered by the middle function", () => {
    const words = ["hello", "world", "lighthouse"];
    middle(words);
    assert.strictEqual(words.length, 3);
  });

});