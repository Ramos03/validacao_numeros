const calculator = require('../libraries/utils');

test('Calculator numbers should be ok 45', () => {
    expect(calculator.validaNumerosPositivos(45)).toStrictEqual(true);
});

test('Calculator numbers should be ok 2', () => {
    expect(calculator.validaNumerosPositivos(2)).toStrictEqual(true);
});

test('Calculator numbers should be ok 2', () => {
    expect(calculator.validaNumerosPositivos('asdada')).toStrictEqual(false);
});