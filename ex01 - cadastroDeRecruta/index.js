let nome = prompt('Qual seu primeiro nome?')
let sobrenome = prompt('Qual seu sobrenome?')
let estudo = prompt('Qual seu campo de estudo?')
let ano = Number(prompt('Qual ano você nasceu?'))
let idade = 2026 - ano

alert(
    `Nome: ${nome} ${sobrenome}
    \nCampo de estudo: ${estudo}
    \nIdade: ${idade}`
)