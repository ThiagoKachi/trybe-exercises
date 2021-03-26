const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4])
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4])

const list = [5, 6, 7, 8]
myRemove(list, 5)
assert.deepStrictEqual(list, [5, 6, 7, 8])

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4])