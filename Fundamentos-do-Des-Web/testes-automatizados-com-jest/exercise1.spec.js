function sum(a, b) {
  if (typeof (a) !== 'number' || typeof (b) !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
test('Soma de dois valores', () => {
    expect(sum(2, 3)).toBe(5)
})

test('Erro, recebe um valor diferente de number', () => {
    expect(() => {sum(4, '4')}).toThrow('parameters must be numbers')
})
