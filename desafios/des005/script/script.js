function converter() {
    let resultado = document.querySelector('div#resultado')
    let dist = window.prompt('Digite uma distância em metros (m)')
    let medidasMaiores = []
    let medidasMenores = []

    medidasMaiores.push(parseFloat(dist))
    for (let c = 1; c <= 3; c++) {
        medidasMaiores[c] = medidasMaiores[c-1] / 10
    }
    
    medidasMenores.push(parseFloat(dist))
    for (let c = 1; c <= 3; c++) {
        medidasMenores[c] = medidasMenores[c-1] * 10
    }

    resultado.innerHTML = ''
    resultado.innerHTML += `<h2>A distância de ${dist} metros corresponde a...</h2>`
    resultado.innerHTML += `<p>${medidasMaiores[3]} quilômetros (Km)</p>`
    resultado.innerHTML += `<p>${medidasMaiores[2]} hectômetros (Hm)</p>`
    resultado.innerHTML += `<p>${medidasMaiores[1]} decâmetros (Dam)</p>`
    resultado.innerHTML += `<p>${medidasMenores[1]} decímetros (dm)</p>`
    resultado.innerHTML += `<p>${medidasMenores[2]} centímetros (cm)</p>`
    resultado.innerHTML += `<p>${medidasMenores[3]} milímetros (mm)</p>`
}