let dinheiroInicial = Number(prompt(`Qual a quantidade de dinheiro inicial?`))
let menu = ''

do {
    menu = prompt(`
        Saldo: ${dinheiroInicial}

        Escolha uma das opções:

        1) Depositar
        2) Sacar
        3) Sair
        `)
    
    switch(menu){
        case '1':
            let add = Number(prompt(`Qual o valor a ser depositado?`))
            dinheiroInicial += add
            break
        case '2':
            let sub = Number(prompt(`Qual o valor a ser sacado?`))
            dinheiroInicial -= sub
            break
        case '3':
            alert(`Encerrando...`)
            break
        default: alert(`Opção inválida!`)
    }
} while(menu !=3)