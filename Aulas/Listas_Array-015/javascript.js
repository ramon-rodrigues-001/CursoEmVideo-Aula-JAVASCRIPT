
let res = document.body.querySelector('div#res')
let dados = document.body.querySelector('input#dados')
let lista = []

function clicar_1() {
    lista.push(dados.value, '=>')  
}


function clicar_2() {
    res.innerHTML = ''
    res.innerHTML = `${lista}`
}
