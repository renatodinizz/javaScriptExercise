let nome = prompt(`Qual o nome do turista?`)
let cidades = ''
let contagem = 0
let pergunta = prompt(`Já visitou alguma cidade?(Sim/Não)`)

while(pergunta === 'Sim'){
    let cidade = prompt(`Qual cidade você visitou?`)
    cidades+= ' - ' + cidade + '\n'
    contagem++
    pergunta = prompt(`Já visitou alguma outra cidade?(Sim/Não)`)
}

alert(nome + ' visitou ' + contagem + ' cidades, que foram: \n' + cidades)