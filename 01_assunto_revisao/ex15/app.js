//EX15

let lado = parseFloat(prompt('Digite o valor referente ao lado do quadrado:'))

let area = Math.pow(lado, 2)
console.log(area)

let perimetro = lado + lado + lado + lado
console.log(perimetro)

document.getElementById('resultado').innerHTML = `
  <p>
    Área: ${area}. <br>
    Perímetro: ${perimetro}.
  </p>
`
