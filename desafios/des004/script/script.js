function calcular() {
    var num = document.getElementById('inum')
    var tabuada = document.getElementById('itabuada')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        tabuada.innerHTML = ''

        for (var c = 1; c <= 10; c++) {
            var resultado = n * c
            tabuada.innerHTML += `<option>${n} x ${c} = ${resultado}</option>`
        }
    }
}

    