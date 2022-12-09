function contar() {
    var inicio = document.getElementById('inumIni')
    var fim = document.getElementById('inumFim')
    var passo = document.getElementById('inumPas')
    var resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = `<p>Impossível contar!</p>`
    } else {
        resultado.innerHTML = `Contando: <br>`
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            window.alert('[ERRO] Passo inválido! Considerando PASSO 1.')
            p = 1
        }

        if (i > f) {
            // contagem regressiva
            for (var c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} 👉 `
            }
        } else {
            // contagem progressiva
            for (var c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} 👉 `
            }
        }
        resultado.innerHTML += `🏁`
    }  
}

//👉
//🏁