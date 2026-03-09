let valor = Number(prompt('Qual o valor em metros?'))

let escolha = prompt(
    `Escolha a unidade de medida a ser convertida:
    
    1)milímetro (mm)
    2)centímetro (cm)
    3)decímetro (dm)
    4)decâmetro (dam)
    5)hectômetro (hm)
    6)quilômetro (km)
    `
)

switch (escolha){
    case '1':
        alert(`A conversão de ${valor} metro para milímetro é de: ${valor * 1000}mm`)
        break
    case '2':
        alert(`A conversão de ${valor} metro para centímetro é de: ${valor * 100}cm`)
        break
    case '3':
        alert(`A conversão de ${valor} metro para decímetro é de: ${valor * 10}dm`)
        break
    case '4':
        alert(`A conversão de ${valor} metro para decâmetro é de: ${valor / 10}dam`)
        break
    case '5':
        alert(`A conversão de ${valor} metro para hectômetro é de: ${valor / 100}hm`)
        break
    case '6':
        alert(`A conversão de ${valor} metro para quilômetro é de: ${valor / 1000}km`)
        break
    default:
        alert(`Opção inválida!`)        
}