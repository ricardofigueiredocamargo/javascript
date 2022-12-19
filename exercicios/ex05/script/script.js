let valores = []
let analise = document.getElementById('analise')

function adicionar() {
    let numero = document.getElementById('inumero')
    let lista = document.getElementById('ilista')
    let repetido = false
    n = Number(numero.value)

    // para números repetidos
    for (let pos in valores) {
        if (valores[pos] == n) {
            repetido = true
        } 
    }

    if (numero.value.length == 0 || n < 1 || n > 100 || repetido == true) {
        window.alert('Valor inválido ou já encontrado na lista.')
    } else {
        analise.innerHTML = ''
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        lista.appendChild(item)
        valores.push(n)
    }  

    numero.value = ''
    numero.focus()
}

function finalizar() {
    analise.innerHTML = ''

    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        // total de números
        if (valores.length == 1) {
            analise.innerHTML += `<p>Ao todo, temos 1 número cadastrado</p>`
        } else {
            analise.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados</p>`
        }

        // maior e menor número e soma dos números
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for (let pos in valores) {
            if (maior < valores[pos]) {
                maior = valores[pos]
            }

            if (menor > valores[pos]) {
                menor = valores[pos]
            }

            soma += valores[pos]
        }
        analise.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        analise.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        analise.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`

        // média dos números 
        let media = soma / valores.length
        analise.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}
