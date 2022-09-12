function carregar() {                       
    var data = new Date()
    var hr = data.getHours()
    var min = data.getMinutes()

    var img1 = document.body.querySelector('div#foto')    //mostra hora
    var msg1 = document.body.querySelector('div#msg')     //imagem
    var msg2 = document.body.querySelector('div#msg2')    //bom dia

    var corpo = document.body

    msg1.innerHTML = `<h2>São ${hr}:${min} Horas</h2>`
    
    if (hr < 6) {
        img1.innerHTML = '<img src="midia/manha.png">'
        msg2.innerHTML = '<h2>Boa Manha</h2>'
        corpo.style.background = '#f6D84D'
    }
    else if (hr < 12) {
        img1.innerHTML = '<img src="midia/dia.png">'
        msg2.innerHTML = '<h2>Bom dia</h2>'
        corpo.style.background = '#95ff59'
    }
    else if (hr < 17) {
        img1.innerHTML = '<img src="midia/tarde.png">'
        msg2.innerHTML = '<h2>Boa tarde</h2>'
        corpo.style.background = '#BFE1FE'
    }
    else {
        img1.innerHTML = '<img src="midia/noite.png">'
        msg2.innerHTML = '<h2>Boa noite</h2>'
        corpo.style.background = '#312952'
    }
}
