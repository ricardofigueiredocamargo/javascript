let resultado = document.querySelector('div#resultado')

function converter(t) {
    resultado.innerHTML = ''

    if (t == 1) {
        let temp = window.prompt('Digite uma temperatura em °C (Celsius)')
        converterCelsius(temp)
    } else if (t == 2) {
        let temp = window.prompt('Digite uma temperatura em °F (Fahrenheit)')
        converterFahrenheit(temp)
    } else {
        let temp = window.prompt('Digite uma temperatura em °K (Kelvin)')
        converterKelvin(temp)
    }
}

function converterCelsius(n) {
    let tempF = (n * 9) / 5 + 32
    let tempK = Number(n) + 273.15

    resultado.innerHTML += `<h2>A temperatura de ${n}°C corresponde a...</h2>`
    resultado.innerHTML += `<p>${tempK.toLocaleString('pt-BR')}°K (Kelvin)</p>`
    resultado.innerHTML += `<p>${tempF.toLocaleString('pt-BR')}°F (Fahrenheit)</p>`
}

function converterFahrenheit(n) {
    let tempC = (n - 32) * 5 / 9
    let tempK = (n - 32) * 5 / 9 + 273.15

    resultado.innerHTML += `<h2>A temperatura de ${n}°F corresponde a...</h2>`
    resultado.innerHTML += `<p>${tempK.toLocaleString('pt-BR')}°K (Kelvin)</p>`
    resultado.innerHTML += `<p>${tempC.toLocaleString('pt-BR')}°C (Celsius)</p>`
}

function converterKelvin(n) {
    let tempC = Number(n) - 273.15
    let tempF = (n - 273.15) * 9 / 5 + 32

    resultado.innerHTML += `<h2>A temperatura de ${n}°K corresponde a...</h2>`
    resultado.innerHTML += `<p>${tempF.toLocaleString('pt-BR')}°F (Fahrenheit)</p>`
    resultado.innerHTML += `<p>${tempC.toLocaleString('pt-BR')}°C (Celsius)</p>`
}