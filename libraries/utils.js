module.exports = {
    calcularDivisores(numero) {

        let objeto = [];
        let auxiliar = 0;

        for (let i = 1; i <= parseInt(numero); i++) {

            if (numero % i == 0) {

                objeto.push(i);
                auxiliar++;
            }
        }

        return objeto;

    }, calcularNumerosPrimos(numero) {

        for (let i = 2; i < parseInt(numero); i++) {
            if (numero % i == 0) {
                return false;
            }
        }

        return numero > 1;

    }, validaNumerosPositivos(numero) {
        if (numero >= 0) {
            return true;
        }

        return false;

    }, validaNumerosInteiros(numero) {
        if (numero % 1 === 0) {
            return true;
        }

        return false;

    }, validaNumeros(str) {
        var regex = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/
        return (regex.test(str));
    }
}