let numero = Number(prompt(`Escolha um número!`))
let result = ''

for(let i = 1; i <=20; i++){
    result += `
    ${numero} * ${i} = ${numero*i}
    `
}
console.log(result)