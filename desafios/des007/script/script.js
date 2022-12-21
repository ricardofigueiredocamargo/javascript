let resultado = document.querySelector('div#resultado')
let cotDolar = {}

function perguntar() {
    cotDolar.n = window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')
}

function converter() {
    let reais = window.prompt('Quantos R$ você tem na carteira?')
    let dolares = reais / cotDolar.n
    reais = Number(reais).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    dolares = dolares.toLocaleString('en-us', {style: 'currency', currency: 'USD'})

    resultado.innerHTML = ''
    resultado.innerHTML += `<p>Com ${reais}, é possível comprar ${dolares}.</p>`
}