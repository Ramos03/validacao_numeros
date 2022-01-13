const calculator = require('../libraries/utils');

test('Calculator prime numbers should be ok 45', () => {
    expect(calculator.validaNumerosPositivos(45)).toStrictEqual(true);
});

test('Calculator prime numbers should be ok 2', () => {
    expect(calculator.validaNumerosPositivos(2)).toStrictEqual(true);
});

test('Calculator prime numbers should be ok 1', () => {
    expect(calculator.validaNumerosPositivos(1)).toStrictEqual(true);
});

test('Calculator prime numbers should be ok 1', () => {
    expect(calculator.validaNumerosPositivos(-17)).toStrictEqual(false);
});

test('Calculator prime numbers should be ok 1', () => {
    expect(calculator.validaNumerosPositivos(-1)).toStrictEqual(false);
});

test('Calculator prime numbers should be ok 1', () => {
    expect(calculator.validaNumerosPositivos(0)).toStrictEqual(true);
});


