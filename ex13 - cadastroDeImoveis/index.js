let menu = ''
let imoveis = []

while(menu !=3){
    menu = prompt(
        `
        Quantidade de imoveis: ${imoveis.length}
        Escolha uma opção:
        1) Salvar imovel
        2) Mostrar imovel
        3) Sair
        
        `)
        switch(menu){
            case '1':
            const imovel = {}
            imovel.nome = prompt(`Qual o nome do proprietário?`)
            imovel.quartos = prompt(`Quantos quartos tem o imóvel?`)
            imovel.banheiros = prompt(`Quantos banheiros tem o imóvel?`)
            imovel.garagem = prompt(`Possui garagem? (Sim/Não)`)

            const confirma = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + imovel.nome +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui Garagem? " + imovel.garagem
            )

            if (confirma) {
                imoveis.push(imovel)
                alert("Imóvel cadastrado com sucesso!")
            }
            break

        case '2':
            for(let i = 0; i < imoveis.length; i++){
                alert(
                `Imóvel ${i + 1}

                Proprietário: ${imoveis[i].nome}
                Quartos: ${imoveis[i].quartos}
                Banheiros: ${imoveis[i].banheiros}
                Garagem: ${imoveis[i].garagem}
                `)
            }
            break
        case '3':
            alert(`Encerrando...`)
            break
        default: alert(`Opção inválida!`)
    }
    console.log(imoveis)
}