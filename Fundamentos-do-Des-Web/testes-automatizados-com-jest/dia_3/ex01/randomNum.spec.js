// Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

const number = require('./randomNum')

test('Número randomico', () => {
    number.randomNum = jest.fn().mockReturnValue(10)

    expect(number.randomNum()).toBe(10)
    expect(number.randomNum).toHaveBeenCalled()
    expect(number.randomNum).toHaveBeenCalledTimes(1)
})