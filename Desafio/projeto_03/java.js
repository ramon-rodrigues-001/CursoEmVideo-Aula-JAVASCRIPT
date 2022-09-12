function clicar() {
    var corpo = document.body.querySelector('div#corpo')

    var inicio = document.body.querySelector('input#inicio')
    var fim = document.body.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if (inicio.value.length == 0 || fim.value.length == 0) {
        alert('[IMPOSSIVEL CONTA] Verifique os dados e tente novamente')
    }
    else {
        if (p == 0) {
            alert('PASSO INVALIDO CONSIDERADO [1]')
            p = 1
        }
        if (i > f) {
            for (i; i>=f; i-=p) {
                corpo.innerHTML += `<strong>${i}</strong> `
            }
        }
        else {
            for (i; i<=f; i>=p) {
                corpo.innerHTML += `<strong>${i}</strong>`
            }
        }
        
    }
}