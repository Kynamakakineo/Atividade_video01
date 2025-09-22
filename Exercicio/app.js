
let nome = prompt('Qual é o seu nome?');
let sobrenome = prompt('Qual é o seu sobrenome?');

document.getElementById('boasVindas').innerHTML = `Olá, ${nome} ${sobrenome}, bem-vindo(a) ao mundo do JavaScript!`
console.log(`Olá, ${nome} ${sobrenome}, bem-vindo(a) ao mundo do JavaScript!`);

let idade = parseFloat(prompt('Qual é a sua idade?'));
let idadeAoCubo = idade * idade * idade

document.getElementById('idadeCubo').innerHTML = `Sua idade (${idade}) elevada ao cubo é: ${idadeAoCubo}`
console.log(`Sua idade (${idade}) elevada ao cubo é: ${idadeAoCubo}`);

let lado = idade

let area = lado * lado
let perimetro = lado * 4

document.getElementById('quadrado').innerHTML = `
  A área do quadrado com lado ${lado} (sua idade) é: ${area}.<br>
  O perímetro do quadrado com lado ${lado} é: ${perimetro}.
`
console.log(`A área do quadrado com lado ${lado} é: ${area}.`);
console.log(`O perímetro do quadrado com lado ${lado} é: ${perimetro}.`);

let numero1 = parseFloat(prompt('Digite o primeiro número:'));
let numero2 = parseFloat(prompt('Digite o segundo número:'));
let numero3 = parseFloat(prompt('Digite o terceiro número:'));

let soma = numero1 + numero2 + numero3

document.getElementById('somaTresNumeros').innerHTML = `A soma dos números ${numero1}, ${numero2} e ${numero3} é: ${soma}`
console.log(`A soma dos números é: ${soma}`);