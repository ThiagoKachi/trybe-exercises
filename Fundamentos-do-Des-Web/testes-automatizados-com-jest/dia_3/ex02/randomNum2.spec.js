const number = require('./randomNum2')

test('Número randomico - Divisao dos parâmetros', () => {
    number.randomNum2 = jest.fn().mockImplementationOnce((a, b) => a / b)

    expect(number.randomNum2(10, 5)).toBe(2)
    expect(number.randomNum2).toHaveBeenCalled()
    expect(number.randomNum2).toHaveBeenCalledTimes(1)
    expect(number.randomNum2).toHaveBeenCalledWith(10, 5)
})