var select = document.querySelector('select#select')
var res = document.querySelector('div#res')
var lista = []

var butao_adicionar = document.querySelector('button#adicionar')
butao_adicionar.addEventListener('click', function (){

    var input_txt = document.querySelector('input#input')
    var input_number = Number(input_txt.value)

    
    if (lista.length == 0) {
        lista.push(input_number)
        maior = lista[0]
        menor = lista[0]
        select.innerHTML += `<option value="">Adicionado valor: <strong>${input_number}</strong></option>`
    }
    else if (lista.indexOf(input_number) >= 0) {
        alert('Esse numero já foi adicionado.')
    } 
    else if (input_number > 100 || input_number < 0) {
        alert('Esse numero não é valido, Tente novamente!.')
    }
    else {
        lista.push(input_number)
        select.innerHTML += `<option value="">Adicionado valor: <strong>${input_number}</strong></option>`
    }
    res.innerHTML = ''
})


var butao_mostrar = document.querySelector('button#mostrar')
butao_mostrar.addEventListener('click', function(){

    var soma = Number(0)

    if (lista.length == 0){
        alert('Cara!, Sabe o trabalho que deu fazer isso!?. Vamos preencher isso corretamente.')
    }
    else {
        for (var c = 0; c < lista.length; c++) {
            soma = soma + lista[c]

            if (maior < lista[c]) {
               maior = lista[c]
            }
            if (menor > lista[c]) {
                menor = lista[c]
            }
        }
        var media = soma / lista.length

        res.innerHTML = `Total de numero registrado: ${lista.length} <br>`
        res.innerHTML += `O maior numero digitado foi: ${maior} <br>`
        res.innerHTML += `O menor numero foi: ${menor} <br>`
        res.innerHTML += `A soma de todos os numeros são: ${soma} <br>` 
        res.innerHTML += `A media dos numeros digitados é: ${media.toFixed(2)}`
    }
          
})