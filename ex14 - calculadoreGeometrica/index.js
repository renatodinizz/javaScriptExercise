function triangulo(){
    let base = Number(prompt(`Qual o valor da base?`))
    let altura = Number(prompt(`Qual o valor da altura?`))
    return base * altura / 2
}
function retangulo(){
    let base = Number(prompt(`Qual o valor da base?`))
    let altura = Number(prompt(`Qual o valor da altura?`))
    return base * altura
}
function quadrado(){
    let lado = Number(prompt(`Qual o valor do lado?`))
    return lado * lado
}
function trapezio(){
    let baseMaior = Number(prompt(`Qual o valor da base maior?`))
    let baseMenor = Number(prompt(`Qual o valor da base menor?`))
    let altura = Number(prompt(`Qual o valor da altura?`))
    return (baseMaior + baseMenor) * altura / 2
}
function circulo(){
    let raio = Number(prompt(`Qual o valor da raio?`))
    return 3.14 * (raio * raio)
}
function exibirMenu() {
    return prompt(
        "Calculadora Geométrica\n" +
        "1. Calcular área de triângulo\n" +
        "2. Calcular área de retângulo\n" +
        "3. Calcular área de quadrado\n" +
        "4. Calcular área de trapézio\n" +
        "5. Calcular área de círculo\n" +
        "6. Sair\n"
    )
}
function calculoGeometrico(menu){
    let resultado
    switch(menu){
        case '1':            
            resultado = triangulo()
            break
        case '2':            
            resultado = retangulo()
            break
        case '3':            
            resultado = quadrado()
            break
        case '4':            
            resultado = trapezio()
            break
        case '5':
            resultado = circulo()
            break
        case '6':
            alert(`Encerrando...`)
            break
        default: alert(`Opção inválida!`)
    }
    if (resultado){
        alert(`Resultado: ${resultado}`)
    }
}
function executar(){
    let menu = ''
    while(menu !='6'){
        menu = exibirMenu()
        calculoGeometrico(menu)
    }
}
executar()