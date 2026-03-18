function escalar(){
    let nome = document.getElementById('nome').value
    let posicao = document.getElementById('posicao').value
    let numero = document.getElementById('numero').value

    let confirmar = confirm(`Deseja escaladar ${nome} (${numero}) como ${posicao}?`)

    if (confirmar){   
        let ulTime = document.getElementById('time')
        let newLi = document.createElement('li')
        newLi.id = 'player-' + numero
        newLi.innerText = `${posicao}: ${nome} (${numero})`
        ulTime.append(newLi)
    }

    document.getElementById('nome').value = ''
    document.getElementById('posicao').value = ''
    document.getElementById('numero').value = ''
}

function remover(){
    let numero = document.getElementById('numeroRemover').value
    let playerToRemove = document.getElementById('player-'+numero)

    let confirmar = confirm(`Deseja excluir ${playerToRemove.innerText}?`)
    if (confirmar){
        document.getElementById('time').removeChild(playerToRemove)
        document.getElementById('numeroRemover').value = ''
    }
}