let select = document.body.querySelector('select#select_1')
let txt_num = document.body.querySelector('input#txt')
let lista = []

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
}

function clicar_1(){
    if (txt_num.value.length == 0 || txt_num.value > 100 || inlista(txt_num.value, lista)) {
        alert('ERRO!! Favor tentar novamente')
    }
    else  {
    let num = Number(txt_num.value)
    let itens = document.createElement('option')
    itens.text = `Adicionado valor: ${num}`
    select.appendChild(itens)
    lista.push(num)
    }
    res.innerHTML = ''
    txt_num.value = ''
    txt_num.focus()
}  
 

function clicar_2() {
    txt_num.focus()
    if (lista.length == 0) {
        alert('Serio isso!! adicione um valor idiota')
    }
    else {
        let soma = 0
        let maior = lista[0]
        let menor = lista[0]
        let res = document.body.querySelector('div#res')

        for (c=0; c<lista.length; c++) {
            soma += lista[c]
            if (lista[c] > maior) {
                maior = lista[c]
            }
            if (lista[c] < menor) {
                menor = lista[c]
            }
        }
        res.innerHTML = `<strong>Total de Numeros digitados: ${lista.length}</strong> <br>`
        res.innerHTML += `<strong>O maior numero digitado foi: ${maior}</strong> <br>`
        res.innerHTML += `<strong>O menor numero foi: ${menor}</strong> <br>`
        res.innerHTML += `<strong>A soma de dodos os numeros são: ${soma}</strong> <br>`
        res.innerHTML += `<strong>A media dos numeros digitados é: ${soma / lista.length}</strong>`
    }
    
}