var data = new Date()
var hr = data.getHours()

if (hr <= 5) {
    console.log('Boa Manha!!')
}
else if (hr < 12) {
    console.log('Bom Dia!!')
}
else if (hr < 17) {
    console.log('Boa Tarde!!')
}
else {
    console.log('Boa Noite')
}