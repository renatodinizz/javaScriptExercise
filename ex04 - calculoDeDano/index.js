let nomePersonagem1 = prompt('Qual o nome do primeiro personagem?')
let poderPersonagem1 = Number(prompt('Qual o poder de ataque de ' + nomePersonagem1 + '?'))

let nomePersonagem2 = prompt('Qual o nome do segundo personagem?')
let vidaPersonagem2 = Number(prompt('Quantos pontos de vida de ' + nomePersonagem2 + '?'))
let defesaPersonagem2 = Number(prompt('Qual o poder de defesa de ' + nomePersonagem2 + '?'))
let escudoPersonagem2 = confirm('Possui escudo?')

if (poderPersonagem1 > defesaPersonagem2 && escudoPersonagem2 == false){
    alert(`
        O poder de ataque de ${nomePersonagem1} é de: ${poderPersonagem1}
        O poder de defesa de ${nomePersonagem2} é de: ${defesaPersonagem2}
        Escudo: Não
        
        ${nomePersonagem2} tem ${vidaPersonagem2 - (poderPersonagem1 - defesaPersonagem2)} pontos de vida`
    )
} else if (poderPersonagem1 > defesaPersonagem2 && escudoPersonagem2 == true){
    alert(`
        O poder de ataque de ${nomePersonagem1} é de: ${poderPersonagem1}
        O poder de defesa de ${nomePersonagem2} é de: ${defesaPersonagem2}
        Escudo: Sim
        
        ${nomePersonagem2} tem ${vidaPersonagem2 - ((poderPersonagem1 - defesaPersonagem2)/2)} pontos de vida`
    )
} else {
    alert(`
        O poder de ataque de ${nomePersonagem1} é de: ${poderPersonagem1}
        O poder de defesa de ${nomePersonagem2} é de: ${defesaPersonagem2}
        
        ${nomePersonagem2} tem ${vidaPersonagem2} pontos de vida, pois a defesa é maior que o ataque!`
    )
}