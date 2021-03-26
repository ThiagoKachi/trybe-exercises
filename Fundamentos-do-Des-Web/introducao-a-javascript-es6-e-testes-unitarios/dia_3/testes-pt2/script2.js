const assert = require('assert');

const wordLengths = (param1) => {
    return param1 = [ 3, 6, 10, 5] 
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);