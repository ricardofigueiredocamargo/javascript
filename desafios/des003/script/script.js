function contar() {
    var inicio = parseInt(document.getElementById('inumIni').value)
    var fim = parseInt(document.getElementById('inumFim').value)
    var passo = parseInt(document.getElementById('inumPas').value)
    var resultado = document.getElementById('resultado')
    var contagem = ''

    if (document.getElementById('inumIni').value.length == 0 || document.getElementById('inumFim').value.length == 0) {
        resultado.innerHTML = `<p>Impossível contar!</p>`
        fail
    } else if (passo == 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        passo = 1
    } 

    resultado.innerHTML = '<p>Contando:</p>'
    for (inicio; inicio <= fim; inicio += passo) {
        contagem += `${inicio} 👉 `
    }
    contagem += '🏁'
    resultado.innerHTML += `<p>${contagem}</p>`
}

//👉
//🏁