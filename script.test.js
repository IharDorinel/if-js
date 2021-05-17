const getSum = (arg1) => {
    return (arg2) => {
        return arg1 + arg2;
    }
}

test('Calculating two positive numbers', () => {
    expect(getSum(2)(5)).toBe(7);
})

test('Calculating two negative numbers', () => {
    expect(getSum(-2)(-5)).toBe(-7);
})

test('Calculating number and string', () => {
    expect(getSum(3)('bears')).toBe('3bears');
})

test('Calculating empty arguments', () => {
    expect(getSum()()).toBeNaN();
})

test('Calculating undefined arguments', () => {
    expect(getSum(undefined)(undefined)).toBeNaN();
})

test('Calculating null and null', () => {
    expect(getSum(null)(null)).toBeNull;
})


