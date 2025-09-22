//EX 11

let numero1 = parseInt(prompt('Digite o primeiro número: '))
let numero2 = parseInt(prompt('Digite o segundo numero: '))

document.getElementById('resultado').innerHTML = `
  <p>
    Os números digitados foram: ${numero1} e ${numero2}. <br>
    O primeiro número acrescido de uma unidade é ${numero1 + 1}. <br>
    O segundo número decrescido de uma unidade é ${numero2 - 1}.
  </p>
`