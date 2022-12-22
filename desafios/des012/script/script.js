let resultado = document.querySelector('div#resultado')

function verificar() {
    let precoAntigo = window.prompt('Qual é o preço anterior do produto?')
    let precoNovo = window.prompt('Qual é o preço atual do produto?')
    let caroOuBarato = ''
    let subiuOuCaiu = ''
    let cimaOuBaixo = ''

    let n1 = Number(precoAntigo)
    let n2 = Number(precoNovo)

    let varia = n1 - n2

    if (n1 > n2) {
        caroOuBarato = 'barato'
        subiuOuCaiu = 'caiu'
        cimaOuBaixo = 'baixo'
    } else {
        caroOuBarato = 'caro'
        subiuOuCaiu = 'subiu'
        cimaOuBaixo = 'cima'
        varia = -varia
    }

    let variaPorcent = ((varia / n1) * 100).toFixed(2) + '%'

    n1 = n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    n2 = n2.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    varia = varia.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    resultado.innerHTML = ''
    resultado.innerHTML += `<h2>Analisando os valores informados</h2>`
    resultado.innerHTML += `<p>O produto custava ${n1} e agora custa ${n2}.</p>`
    resultado.innerHTML += `<p>Hoje o produto está mais ${caroOuBarato}.</p>`
    resultado.innerHTML += `<p>O preço ${subiuOuCaiu} ${varia} em relação ao preço anterior.</p>`
    resultado.innerHTML += `<p>Uma variação de ${variaPorcent.replace('.',',')} pra ${cimaOuBaixo}.</p>`
}
