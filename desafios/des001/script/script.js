var corpo = document.body
var hora = new Date().getHours()
var minuto = new Date().getMinutes()
var tempo = document.getElementById('tempo')
var imagem = document.getElementById('imagem')

tempo.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
if (hora < 12) {
    imagem.innerHTML = `<img src="imagens/manha-foto3.jpg" alt="tarde">`
    corpo.style.background = '#CEBD90'
} else if (hora <= 18) {
    imagem.innerHTML = `<img src="imagens/tarde-foto2.jpg" alt="tarde">`
    corpo.style.background = '#A47762'
} else {
    imagem.innerHTML = `<img src="imagens/noite-foto2.jpg" alt="tarde">`
    corpo.style.background = '#474849'
} 