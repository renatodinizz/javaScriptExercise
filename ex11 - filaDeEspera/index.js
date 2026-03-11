let pacientes = ['João', 'Pedro', 'Thiago']
let menu = ''

while(menu != '3'){

    let lista = ''

    for(let i = 0; i < pacientes.length; i++){
        lista += (i+1) + 'º ' + pacientes[i] + '\n'
    }
    
    let mensagem = `${lista}
Escolha uma das opções:
1) Novo paciente
2) Consultar paciente
3) Sair`

    menu = prompt(mensagem)
    switch(menu){
        case '1':
            let novoPaciente = prompt('Qual o nome do paciente?')
            pacientes.push(novoPaciente)            
            break
        case '2':
            let atendido = pacientes.shift()
            alert(`Paciente ${atendido} foi atendido.`)
            break
        case '3':
            alert(`Encerrando...`)
            break
        default:
            alert(`Opção inválida!`)
    }
}