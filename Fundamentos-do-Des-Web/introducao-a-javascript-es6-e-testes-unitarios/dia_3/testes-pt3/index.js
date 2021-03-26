const assert = require('assert');

const greetPeople = (people) => {
    let greeting = 'Hello ';
    let arr = []
  
    for (let i = 0; i < people.length; i += 1) {
      arr.push(`${greeting}${people[i]}`);
    }

    return arr
  };
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result)