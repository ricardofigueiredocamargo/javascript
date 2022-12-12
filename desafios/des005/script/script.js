let valores = []
let analise = document.getElementById('analise')

function adicionar() {
    let numero = document.getElementById('inumero')
    let lista = document.getElementById('ilista')
    n = Number(numero.value)

    analise.innerHTML = ''

    // para números repetidos
    for (let pos in valores) {
        if (valores[pos] == n) {
            window.alert('Valor inválido ou já encontrado na lista.')
            fail
        } 
    }

    if (numero.value.length == 0 || n < 1 || n > 100 ) {
        window.alert('Valor inválido ou já encontrado na lista.')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        lista.appendChild(item)
        valores.push(n)
    }  
}

function analisar() {
    // total de números
    if (valores.length == 1) {
        analise.innerHTML += `<p>Ao todo, temos 1 número cadastrado</p>`
    } else {
        analise.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados</p>`
    }

    // maior e menor número
    let maior = valores[0]
    let menor = valores[0]
    for (let c = 1; c <= valores.length; c++) {
        if (maior < valores[c]) {
            maior = valores[c]
        }

        if (menor > valores[c]) {
            menor = valores[c]
        }
    }
    analise.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    analise.innerHTML += `<p>O menor valor informado foi ${menor}</p>`

    // soma dos números
    let soma = 0
    for (let pos in valores) {
        soma += valores[pos]
    }
    analise.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`

    // média dos números 
    let media = soma / valores.length
    analise.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
}
