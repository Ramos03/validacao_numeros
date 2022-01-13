const calculator = require('../libraries/utils');

test('Calculator divisors should be ok 2', () => {
    const res = [1,2];
    expect(calculator.calcularDivisores(2)).toStrictEqual(res);
});

test('Calculator divisors should be ok 45', () => {
    const res = [1,3,5,9,15,45];
    expect(calculator.calcularDivisores(45)).toStrictEqual(res);
});

test('Calculator divisors should be ok 12', () => {
    const res = [1,2,3,4,6,12];
    expect(calculator.calcularDivisores(12)).toStrictEqual(res);
});

test('Calculator divisors should be ok 1', () => {
    const res = [1];
    expect(calculator.calcularDivisores(1)).toStrictEqual(res);
});