var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()

var body = document.body
var corpo = document.body.querySelector('section#corpo')
var imagem = document.body.querySelector('img#imagem')
var titulo_rodape_01 = document.body.getElementsByClassName("mudar-de-cor")[0]
var titulo_rodape_02 = document.body.getElementsByClassName("mudar-de-cor")[1]


corpo.innerHTML = `<h2>A Hora Atual; ${hora}:${minutos}</h2>`

if (hora <= 5) {
    body.style.background = '#BFFFFF'
    corpo.innerHTML += `<img src="midia/manha.png" alt="">`
    corpo.innerHTML += '<h2>Boa Manha</h2>'
}
else if (hora < 12) {
    body.style.background = '#78C2FA'
    corpo.innerHTML += `<img src="midia/dia.png" alt="">`
    corpo.innerHTML += '<h2>Bom Dia</h2>'
}
else if (hora < 18) {
    body.style.background = '#5A8BD6'
    corpo.innerHTML += `<img src="midia/tarde.png" alt="">`
    corpo.innerHTML += '<h2>Boa Tarde</h2>'
}
else {
    body.style.background = '#0D2B42'
    titulo_rodape_01.style.color = '#ffff'
    titulo_rodape_02.style.color = '#ffff'
    corpo.innerHTML += `<img src="midia/noite.png" alt="">`
    corpo.innerHTML += '<h2>Boa Noite</h2>'
}