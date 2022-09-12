var dicionario = {nome: 'Ramon', 
idade: 18, 
altura: 1.17, 
peso:55, 
engordar(p=0) {
    this.peso += p 
    console.log(`${dicionario.nome} engordou agora esta pesando ${dicionario.peso}Kg.`)
}, 
emagrecer(p=0) {
    this.peso -= p
    console.log(`${dicionario.nome} Enmagreceu agora esta pesando ${dicionario.peso}Kg`)
}} 

dicionario.engordar(9)
/* OU */
dicionario.emagrecer(4)