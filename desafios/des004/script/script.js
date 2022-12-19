function calcular() {
    let produto = window.prompt('Que produto você está comprando?')
    let preco = window.prompt(`Quanto custa ${produto} que você está comprando?`)
    let valor = window.prompt(`Qual foi o valor que você deu para pagar ${produto}?`)

    p = Number(preco)
    v = Number(valor)
    let troco = v - p
    tReal = converter(troco)
    pReal = converter(p)
    vReal = converter(v)
    window.alert(`Você comprou ${produto} que custou ${pReal}. 
    Deu ${vReal} em dinheiro e vai receber ${tReal} de troco.
    Volte Sempre!`)
}

function converter(n) {
    let numeroReal = n.toLocaleString('pr-BR', {style:'currency', currency: 'BRL'}).replace('.' , ',')
    return numeroReal
}