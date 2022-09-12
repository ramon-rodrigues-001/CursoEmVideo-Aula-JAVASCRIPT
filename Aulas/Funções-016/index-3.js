function soma(x=0, y=0) {
    return x + y;
}
function multiplicação(x=0, y=0) {    //Utilizar esse x=0 e y=0 Para caso 
    return x * y                      //O valor não for passado o valor vai 
}                                     //Ser considerado 0

var resultado = [multiplicação(5, 5)]
resultado.push(soma(5, 5))

console.log(resultado)