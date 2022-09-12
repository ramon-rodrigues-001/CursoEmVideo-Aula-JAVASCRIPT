var idade = Number(18)
console.log(`Voçe tem ${idade} Anos`)
if (idade < 16) {
    console.log('Não vota')
}
else if (idade < 18 || idade > 60) {
    console.log('Voto Opicional')
}
else {
    console.log('Voto obrigatorio')
}