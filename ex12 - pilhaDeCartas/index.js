let cartas = ['2 de ouro', '3 de espada', '7 de copas']
let menu = ''

while(menu != '3'){

    let quantidade = cartas.length
    
    let mensagem = `Quantidade de cartas: ${quantidade}

Escolha uma das opções:
1) Adicionar uma carta
2) Puxar uma carta
3) Sair`

    menu = prompt(mensagem)
    switch(menu){
        case '1':
            let novaCarta = prompt('Qual o nome da carta?')
            cartas.push(novaCarta)            
            break
        case '2':
            let retirada = cartas.pop()
            alert(`A carta ${retirada} foi retirada.`)
            break
        case '3':
            alert(`Encerrando...`)
            break
        default:
            alert(`Opção inválida!`)
    }
}