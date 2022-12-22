let resultado = document.querySelector('div#resultado')

function verificar() {
    let ano = window.prompt('Qual é o ano que você quer verificar?')
    ano = Number(ano)
    let bis = false
    let confirma = ''
    let emoji = ''

    if (ano % 4 == 0) {
        if (ano % 100 == 0) {
            if (ano % 400 == 0) {
                bis = true
            } 
        } else {
            bis = true
        }
    } 

    if (bis == true) {
        confirma = 'É BISSEXTO'
        emoji = `✅`
    } else {
        confirma = 'NÃO É BISSEXTO'
        emoji = `❌`
    }

    resultado.innerHTML = ''
    resultado.innerHTML += `<h2>Analisando o ano de ${ano}...</h2>`
    resultado.innerHTML += `<p>O ano de ${ano} <strong id="marca">${confirma}</strong> ${emoji}</p>`

    let marca = document.querySelector('strong#marca')
    if (bis == true) {
        marca.style.background = '#A6EB9A'
    } else {
        marca.style.background = '#E28783'
    }
}

//✅
//#A6EB9A
//❌
//#E28783
