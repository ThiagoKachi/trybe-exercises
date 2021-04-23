const number = require('./randomNum3')

describe('Testando implementações', () => {
    test('Número randomico - Divisao dos parâmetros', () => {
        number.randomNum3 = jest.fn().mockImplementationOnce((a, b, c) => a * b * c)
    
        expect(number.randomNum3(10, 5, 2)).toBe(100)
        expect(number.randomNum3).toHaveBeenCalled()
        expect(number.randomNum3).toHaveBeenCalledTimes(1)
        expect(number.randomNum3).toHaveBeenCalledWith(10, 5, 2)
    })

    test('Retornando o dobro', () => {
        number.randomNum3.mockReset()
        expect(number.randomNum3).toHaveBeenCalledTimes(0)

        number.randomNum3 = jest.fn().mockImplementationOnce(a => a * a)

        expect(number.randomNum3(2)).toBe(4)
        expect(number.randomNum3).toHaveBeenCalled()
        expect(number.randomNum3).toHaveBeenCalledTimes(1)
        expect(number.randomNum3).toHaveBeenCalledWith(2)
    })
})