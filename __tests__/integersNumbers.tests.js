const calculator = require('../libraries/utils');

test('Calculator integer numbers should be ok 45', () => {
    expect(calculator.validaNumerosInteiros(45)).toStrictEqual(true);
});

test('Calculator integer numbers should be ok 2', () => {
    expect(calculator.validaNumerosInteiros(2)).toStrictEqual(true);
});

test('Calculator integer numbers should be ok 1', () => {
    expect(calculator.validaNumerosInteiros(1.7)).toStrictEqual(false);
});

test('Calculator integer numbers should be ok 1', () => {
    expect(calculator.validaNumerosInteiros(0.5)).toStrictEqual(false);
});