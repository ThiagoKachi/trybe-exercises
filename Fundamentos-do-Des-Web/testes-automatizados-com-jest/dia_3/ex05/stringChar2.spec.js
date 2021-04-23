const funcs = require('./stringChar2')

describe('Testando funções', () => {
    test('Transformar em caixa baixa', () => {
        const first = jest.spyOn(funcs, 'toUpper').mockImplementation(str => str.toLowerCase())
    
        expect(first('UPPERCASE')).toBe('uppercase')
        expect(first).toHaveBeenCalled()
        expect(first).toHaveBeenCalledTimes(1)
        expect(first).toHaveBeenCalledWith('UPPERCASE')

        funcs.toUpper.mockRestore()

        expect(funcs.toUpper('lowercase')).toBe('LOWERCASE')
    })
})
