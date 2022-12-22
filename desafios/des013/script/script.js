let resultado = document.querySelector('div#resultado')

function verificar() {
    let nome = window.prompt('Qual é o nome do aluno?')
    let nota1 = window.prompt(`Primeira nota de ${nome}:`)
    let nota2 = window.prompt(`Segunda nota de ${nome}:`) 
    let intervalo = ''
    let situacao = ''

    let n1 = Number(nota1)
    let n2 = Number(nota2)
    let media = (n1 + n2) / 2

    if (media < 3) {
        intervalo = `abaixo de 3,0`
        situacao = `<strong id="marca">REPROVADO</strong>`
    } else if (media >= 3 && media < 6) {
        intervalo = `entre 3,0 e 6,0`
        situacao = `em <strong id="marca">RECUPERAÇÃO<strong>`
    } else if (media >= 6) {
        intervalo = `acima de 6,0`
        situacao = `<strong id="marca">APROVADO<strong>`
    }

    n1 = n1.toFixed(2).replace('.',',')
    n2 = n2.toFixed(2).replace('.',',')

    resultado.innerHTML = ''
    resultado.innerHTML += `<h2>Analisando a situação de ${nome}</h2>`
    resultado.innerHTML += `<p>Com as notas ${n1} e ${n2}, a <strong>média é ${media.toFixed(2).replace('.',',')}</strong></p>`
    resultado.innerHTML += `<p>Com média ${intervalo}, o aluno está ${situacao}</p>`

    let marca = document.querySelector('strong#marca')
    if (media < 3) {
        marca.style.background = '#E28783'
    } else if (media >= 3 && media < 6) {
        marca.style.background = '#C4894D'
    } else if (media >= 6) {
        marca.style.background = '#A6EB9A'
    }
}