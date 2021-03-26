const assert = require('assert');

const addOne = (param1) => {
    let newArr = []
    for (let i = 0; i < param1.length; i += 1) {
        newArr.push(param1[i] + 1)
    }
    return newArr
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);