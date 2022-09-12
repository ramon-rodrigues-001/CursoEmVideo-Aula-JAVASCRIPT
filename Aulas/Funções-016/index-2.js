// UMA FUNÇÃO DENTRO DE UMA VARIAVEL
// É bem simples basta prestar atenção querido eu do foturo


var fatorial = function fato(x) {
    if (x == 1) {
        return 1
    }
    else {
        soma = x
        for (var c = x-1; c > 1; c--) {
            soma *= c
        }
        return soma
    }
}

console.log(fatorial(5))