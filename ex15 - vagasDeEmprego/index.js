let menu = ''
const vagas = []
function exibirMenu() {
    return prompt(
        "Sistema de vagas de emprego\n" +
        "1. Listar vagas disponíveis\n" +
        "2. Criar nova vaga\n" +
        "3. Visualizar uma vaga\n" +
        "4. Cadastrar candidato em uma vaga\n" +
        "5. Excluir uma vaga\n" +
        "6. Sair\n"
    )
}
function listarVagas(){
    let mensagem = ""

    vagas.forEach(function(vaga, indice){
        mensagem += `
    Candidatos inscritos:  

    Índice: ${vaga[indice].indice}
    Nome: ${vaga[indice].nome}
    `
    })

alert(mensagem)
}
function criarNovaVaga(){
    let nomeDaVaga = prompt(`Qual o nome da vaga?`)
    let descricao = prompt(`Descreva a vaga`)
    let dataLimite  = prompt(`Qual a data limite?`)
    let candidatos = []
    let confirmacao = confirm(
        `
        Informações da vaga:

        Nome: ${nomeDaVaga}
        Descrição : ${descricao}
        Data limite : ${dataLimite}

        Deseja confirmar a criação dessa vaga?
        `)
    if (confirmacao){
        const vaga = {}
        vaga.indice = vagas.length
        vaga.nome = nomeDaVaga
        vaga.descricao = descricao
        vaga.data = dataLimite
        vaga.candidatos = candidatos
        vagas.push(vaga)
    }
}
function visualizarUmaVaga(){
    let id = Number(prompt(`Qual o índice da vaga?`))
    alert(
        `
        Informações da vaga:
    
        Índice: ${vagas.indice}
        Nome: ${vagas[id].nome}
        Descrição : ${vagas[id].descricao}
        Data limite : ${vagas[id].data}
        Quantidade de candidatos: ${vagas[id].candidatos.length}
        Candidatos:
        ${vagas[id].candidatos.join('\n')}
        `)
}
function cadastrarCandidato (){
    let nome = prompt(`Qual o nome do candidato?`)
    let indice = Number(prompt(`Qual o índice da vaga?`))
    let confirmacao = confirm(
        `
        Informações da vaga:
    
        Nome: ${vagas[indice].nome}
        Descrição : ${vagas[indice].descricao}
        Data limite : ${vagas[indice].data}
    
        Deseja cadastrar ${nome} nessa vaga?
        `)
    if (confirmacao){
        vagas[indice].candidatos.push(nome)
    }
}

while(menu !='6'){
    menu = exibirMenu()
    switch(menu){
        case '1':            
            break
        case '2':  
            criarNovaVaga()          
            break
        case '3':  
            visualizarUmaVaga()          
            break
        case '4':   
            cadastrarCandidato()         
            break
        case '5':
            break
        case '6':
            alert(`Encerrando...`)
            break
        default: alert(`Opção inválida!`)
    }
}
