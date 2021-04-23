const funcs = require('./stringChar')

describe('Testando funções', () => {
    test('Transformar em caixa baixa', () => {
        funcs.concatStrings = jest.fn().mockImplementationOnce((str) => str.toLowerCase())
    
        expect(funcs.concatStrings('LALALA')).toBe('lalala')
        expect(funcs.concatStrings).toHaveBeenCalled()
        expect(funcs.concatStrings).toHaveBeenCalledTimes(1)
        expect(funcs.concatStrings).toHaveBeenCalledWith('LALALA')
    })
    
    test('Capturar a última letra da string', () => {
        funcs.firstChar = jest.fn().mockImplementationOnce((str) => str.split('').pop())
    
        expect(funcs.firstChar('ola')).toBe('a')
        expect(funcs.firstChar).toHaveBeenCalled()
        expect(funcs.firstChar).toHaveBeenCalledTimes(1)
        expect(funcs.firstChar).toHaveBeenCalledWith('ola')
    })
    
    test('Concatenar três strings', () => {
        funcs.concatStrings = jest.fn().mockImplementationOnce((str1, str2, str3) => str1 + str2 + str3)
    
        expect(funcs.concatStrings('ola', 'oi', 'adeus')).toBe('olaoiadeus')
        expect(funcs.concatStrings).toHaveBeenCalled()
        expect(funcs.concatStrings).toHaveBeenCalledTimes(1)
        expect(funcs.concatStrings).toHaveBeenCalledWith('ola', 'oi', 'adeus')
    })
})
