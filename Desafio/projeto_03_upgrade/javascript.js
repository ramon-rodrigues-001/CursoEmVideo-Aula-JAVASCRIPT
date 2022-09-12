var res = document.body.querySelector('div#res')

var butao = document.querySelector('button#butao')       //Butão
butao.addEventListener('click', clicar)                  //Chamado da função

function clicar() {
    res.innerHTML = ''
    var input_inicio = document.querySelector('input#inicio')
    var input_fim = document.querySelector('input#fim')
    var input_passos = document.querySelector('input#passos')

    var inicio = Number(input_inicio.value)
    var fim = Number(input_fim.value)
    var passos = Number(input_passos.value)

    if (inicio == 0 || passos == 0) {
        res.innerHTML = "Impossivel Contar"
    }
    else {
        if (fim == 0) {
            alert('O fim não foi mecionado; Ira ser donsiderado 0')
            fim = 0
        }
        while (inicio >= fim) {
            res.innerHTML += `${inicio} 👉 `
            inicio -= passos}
    }

    res.innerHTML += "🏳️"
}