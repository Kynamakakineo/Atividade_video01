let nome = prompt('Qual é o seu nome?')
let sobrenome = prompt('Qual é o seu sobrenome?')

document.getElementById('dados').innerHTML = `Você digitou: ${nome} ${sobrenome}`
console.log(nome, sobrenome)

let valor1 = parseFloat(prompt('Digite algo...'))
let valor2 = parseFloat(prompt('Digite algo...'))

console.log(valor1, valor2)
console.log(typeof valor1, typeof valor2)
console.log(valor1 + valor2)