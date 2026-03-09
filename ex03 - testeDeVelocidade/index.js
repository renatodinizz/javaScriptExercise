let nome1 = prompt('Nome do primeiro veículo:')
let velocidade1 = Number(prompt('Qual a velocidade do ' + nome1 + '?'))
let nome2 = prompt('Nome do segundo veículo:')
let velocidade2 = Number(prompt('Qual a velocidade do ' + nome2 + '?'))

if (velocidade1 > velocidade2){
    alert(nome1 + ' é mais rápido!')
} else if (velocidade1 < velocidade2){
    alert(nome2 + ' é mais rápido!')    
} else {
    alert(`${nome1} e ${nome2} tem a mesma velocidade`)
} 