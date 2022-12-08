function calcular() {
    var num = parseInt(document.getElementById('inum').value)
    var tabuada = document.getElementById('itabuada')

    if (document.getElementById('inum').value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        for (var c = 1; c <= 10; c++) {
            var resultado = num * c
            tabuada.innerHTML += `<p>${num} x ${c} = ${resultado}</p>`
        }
    }
}

    