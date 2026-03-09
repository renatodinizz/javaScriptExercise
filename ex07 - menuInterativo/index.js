let menu = ''

do {        
    menu = prompt(`
    Escolha uma opção:

    1) Opção 1
    2) Opção 2
    3) Opção 3
    4) Opção 4
    5) Encerrando...
    `)

    switch(menu){
        case '1': alert(`Você escolheu a opção 1`)
        break
        case '2': alert(`Você escolheu a opção 2`)
        break
        case '3': alert(`Você escolheu a opção 3`)
        break
        case '4': alert(`Você escolheu a opção 4`)
        break
        case '5': alert(`Encerrando...`)
        break
        default: alert(`Opção inválida!`)
    }
} while(menu !== '5')