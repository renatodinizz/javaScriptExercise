let palavra = prompt(`Qual a palavra desejada?`)
let invertida = ''

for(let i = palavra.length-1; i >= 0; i--){
    invertida+= palavra[i]
}
console.log(invertida)

if (palavra === invertida){
    alert(`A palavra ${palavra} é um palíndromo`)
} else {
    alert(`
        A palavra ${palavra} não é um palíndromo!
        
        Essa palavra invertida fica: ${invertida}
        `)
}