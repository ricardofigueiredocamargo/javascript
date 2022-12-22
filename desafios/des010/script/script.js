let resultado = document.querySelector('div#resultado')
let segundoCalculo = document.querySelector('section#segundoCalculo')
let segundoResultado = document.querySelector('div#segundoResultado')
let valores = {}

function calcularDelta() {
    let valorA = window.prompt('Qual é o valor de a?')
    let valorB = window.prompt('Qual é o valor de b?')
    let valorC = window.prompt('Qual é o valor de c?')

    valores = {a: Number(valorA), b: Number(valorB), c: Number(valorC)}

    let a = valores.a
    let b = valores.b
    let c = valores.c

    let delta = (b ** 2) - (4 * a * c) 

    if (a == 0 || b == 0 || c == 0) {
        window.alert('Impossível calcular! Tente outros números.')
    } else {
        resultado.innerHTML = ''
        resultado.innerHTML += `<h2>Resolvendo Bhaskara</h2>`
        resultado.innerHTML += `<p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong></p>`
        resultado.innerHTML += `<p>O cálculo realizado será <strong>&Delta; = ${b}² - 4 . ${a} . ${c}</strong></p>`
        resultado.innerHTML += `<p>O valor calculado foi <strong>&Delta; = ${delta}</strong></p>`

        valores.d = delta
        segundoCalculo.style.display = 'block'
        segundoResultado.style.display = 'block'
        segundoResultado.innerHTML = `<p>Considerando uma equação no formato <em><strong>-b +- &radic;&Delta; / 2 . a</strong></em>, aperte o botão acima para calcular o valor de x.</p>`
    }
}

function calcularX() {
    let a = valores.a
    let b = valores.b
    let delta = valores.d

    b = -b
    let positivo = (b + Math.sqrt(delta)) / (2 * a) 
    let negativo = (b - Math.sqrt(delta)) / (2 * a)

    segundoResultado.innerHTML = ''
    segundoResultado.innerHTML += `<h2>Resolvendo Bhaskara</h2>`
    segundoResultado.innerHTML += `<p>O cálculo realizado será <strong>${b} +- &radic;${delta} / 2 . ${a}</strong></p>`
    segundoResultado.innerHTML += `<p>O primeiro valor calculado foi <strong>x1 = ${positivo.toFixed(2)}</strong></p>`
    segundoResultado.innerHTML += `<p>O segundo valor calculado foi <strong>x2 = ${negativo.toFixed(2)}</strong></p>`
}