const calculator = require('../libraries/utils');

test('Calculator prime numbers should be ok 45', () => {
    expect(calculator.calcularNumerosPrimos(45)).toStrictEqual(false);
});

test('Calculator prime numbers should be ok 2', () => {
    expect(calculator.calcularNumerosPrimos(2)).toStrictEqual(true);
});

test('Calculator prime numbers should be ok 1', () => {
    expect(calculator.calcularNumerosPrimos(1)).toStrictEqual(false);
});

test('Calculator prime numbers should be ok 1', () => {
    expect(calculator.calcularNumerosPrimos(17)).toStrictEqual(true);
});