const uppercase = (str, callback) => {
    callback(str.toUpperCase());
};

it('Se for maiúsculas', (done) => {
    uppercase('test', (str) => {
        expect(str).toBe('TEST')
        done()
    })
})


