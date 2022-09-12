function clicar() {
    
    var data = new Date()                                     //Buscando Ano atua
    var ano_atual = data.getFullYear()
    
    
    var txt_ano = document.body.querySelector('input#txt1')   //Buscando data de nacimento
    var nacimento = Number(txt_ano.value)


    var idade_pessoa = ano_atual - nacimento             //ano atual - ano de nacmento
    

    var corpo = document.body.querySelector('div#corpo-2')    //div-2 onde vai ficar imagen


    var sex = document.body.getElementsByClassName('check')   //pega os dois label de check


    if (idade_pessoa < 0 || idade_pessoa > 150) {
        alert(`Inpossivel ter ${idade_pessoa} Anos tente novamente`)
    }

    else {
        if (sex[0].checked) {
            corpo.innerHTML = `<h2>Detectamos mulher com ${idade_pessoa} Anos</h2>`
            if (idade_pessoa < 6) {
                corpo.innerHTML += `<img src="midia/mulher.5anos.png">`
            }
            else if (idade_pessoa < 25) {
                corpo.innerHTML += `<img src="midia/mulher.20anos.png">`
            }
            else if (idade_pessoa < 45) {
                corpo.innerHTML += `<img src="midia/mulher.40anos.png">`
            }
            else {
                corpo.innerHTML += `<img src="midia/mulher.60anos.png">`
            }
        }

        else if (sex[1].checked) {
            corpo.innerHTML = `<h2>Detectamos Homem com ${idade_pessoa} Anos</h2>`
            if (idade_pessoa < 6) {
                corpo.innerHTML += `<img src="midia/homen.5anos.png">`
            }
            else if (idade_pessoa < 25) {
                corpo.innerHTML += `<img src="midia/homen.20anos.png">`
            }
            else if (idade_pessoa < 45) {
                corpo.innerHTML += `<img src="midia/homen.40anos.png">`
            }
            else {
                corpo.innerHTML += `<img src="midia/homen.60anos.png">`
            }
        }
        
    }
    
}