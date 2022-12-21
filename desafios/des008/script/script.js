let resultado = document.querySelector('div#resultado')

function descontar() {
    let nome = window.prompt('Qual é o produto que você está comprando?')
    let preco = window.prompt(`Qual é o preço do produto ${nome}?`)
    let desconto = Number(preco) / 10
    let precoComDesconto = Number(preco) - Number(desconto)

    preco = Number(preco).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    desconto = desconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    precoComDesconto = precoComDesconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    resultado.innerHTML = ''
    resultado.innerHTML += `<h2>Calculando desconto de 10% para ${nome}</h2>`
    resultado.innerHTML += `<p>O preço original era ${preco}.</p>`
    resultado.innerHTML += `<p>Você acaba de ganhar ${desconto} de desconto (10%).</p>`
    resultado.innerHTML += `<p>No fim, você vai pagar ${precoComDesconto} no produto ${nome}.</p>`
}