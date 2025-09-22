//EX 14

let numero = parseInt(prompt("Digite um número inteiro"));

document.getElementById('resultado').innerHTML = `
  <p>
    O número digitado foi ${numero}, seu antecessor é ${numero - 1} e seu sucessor é ${numero + 1}.
  </p>
`