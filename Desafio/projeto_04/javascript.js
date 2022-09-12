function clicar() {
    let num_1 = document.body.querySelector('input#num_1')
    let select = document.body.querySelector('select#seltab')

    if (num_1.value.length == 0) {
        alert('[ERRO] Favor preencha os dados')
    }
    else {
        let num = Number(num_1.value)
        var c = 0
        select.innerHTML = ''
        while (c < 10) {
            let itens = document.createElement('option')
            itens.text = `${num} x ${c} = ${num * c}`
            itens.value = `select${c}`
            select.appendChild(itens)
            c++
        }
    }
}