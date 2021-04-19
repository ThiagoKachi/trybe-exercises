function myFizzBuzz(num) {
  if (typeof num !== 'number') throw new Error('parameters must be numbers');
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
test('FizzBuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
})

test('fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz')
})

test('buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz')
})

test('Não divisivel por 3 nem por 5', () => {
    expect(myFizzBuzz(2)).toBe(2)
})

test('Erro, recebe um valor diferente de number', () => {
    expect(() => {myFizzBuzz('3')}).toThrow('parameters must be numbers')
})
