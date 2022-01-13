const readline = require('readline');
const utils = require('./libraries/utils');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número: ', (numero) => {

    try {
        const validaNumeros = utils.validaNumeros(numero);

        if (validaNumeros) {
            console.log(`Número de entrada: ${numero}`);

            const validaNumeroPositivo = utils.validaNumerosPositivos(numero);
            const validaNumeroInteiro = utils.validaNumerosInteiros(numero);

            if (validaNumeroPositivo && validaNumeroInteiro) {
                let retCalcularDivisores = utils.calcularDivisores(numero);

                console.log(`Números divisores: ${retCalcularDivisores}`);

                let objetoFinal = [];
                retCalcularDivisores.forEach(numero => {
                    let retCalcularPrimos = utils.calcularNumerosPrimos(numero);

                    if (retCalcularPrimos) {
                        objetoFinal.push(numero);
                    }

                });

                console.log(`Divisores Primos: ${objetoFinal}`);
            } else {
                console.log(`Número negativo ou número com vírgula`);
            }
        } else {
            console.log("Foi digitado uma letra ao invés de números");
        }

        console.log(`Fim! :)`);
        process.exit();
    } catch (Exception) {
        throw new Error("Erro ao executar o código");
    }
});
