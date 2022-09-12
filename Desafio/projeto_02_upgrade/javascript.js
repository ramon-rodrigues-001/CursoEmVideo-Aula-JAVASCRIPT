var butao = document.body.querySelector('button#butao')
var corpo = document.body.querySelector('div#corpo')
var input_check = document.body.getElementsByClassName('check')

var data_atual = new Date()
var ano_atual = data_atual.getFullYear()

butao.addEventListener('click', clicar)
function clicar() {
    corpo.innerHTML = ''
    var data_txt = document.body.querySelector('input#data')

    var data = Number(data_txt.value)
    var idade = ano_atual - data
    
    if (idade == ano_atual) {
        alert('Preencha os dados corretamente')
    }
    else if (idade < 0 || idade > 110) {
        alert ('Tem certeza que voçe naçeu nesta data!!!? [Tente Novamente]')
    }
    else {

        if (input_check[0].checked) {
            corpo.innerHTML += `Detectado homem com ${idade} anos`
            if (idade < 6) {
                corpo.innerHTML += `<img src="midia/homen.5anos.png">`
            }
            else if (idade < 25) {
                corpo.innerHTML += `<img src="midia/homen.20anos.png">`
            }
            else if (idade < 40) {
                corpo.innerHTML += `<img src="midia/homen.40anos.png">`
            }
            else if (idade < 60) {
                corpo.innerHTML += `<img src="midia/homen.60anos.png">`
            }
        }
        else if (input_check[1].checked) {
            corpo.innerHTML += `Detectado mulher com ${idade} anos`
            if (idade < 6) {
                corpo.innerHTML += `<img src="midia/mulher.5anos.png">`
            }
            else if (idade < 25) {
                corpo.innerHTML += `<img src="midia/mulher.20anos.png">`
            }
            else if (idade < 40) {
                corpo.innerHTML += `<img src="midia/mulher.40anos.png">`
            }
            else if (idade < 60) {
                corpo.innerHTML += `<img src="midia/mulher.60anos.png">`
            }
        }
    }
}