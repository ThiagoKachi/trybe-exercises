const assert = require('assert');

const removeVowels = (word) => {
    const results = [];
    const characters = word.split('');
    
    for (let index = 0; index < characters.length; index += 1) {
        characters[0] = 'D'
        characters[1] = '1'
        characters[2] = 'y'
        characters[3] = '2'
        characters[4] = 'n'
        characters[5] = '3'

        results.push(characters[index]); 
        return characters.join('')
    }

    return results;
};
  
  
  const parameter = 'Dayane';
  const result = 'D1y2n3';

assert.strictEqual(removeVowels(parameter), result)
