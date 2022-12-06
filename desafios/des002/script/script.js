function calcular() {
    var agora = new Date()
    var anoAtual = parseInt(agora.getFullYear())
    var anoNasc = parseInt(document.getElementById('iano').value)
    var idade = anoAtual - anoNasc

    var main = document.querySelector('main')
    var sexo = document.querySelector('input[name="sexo"]:checked').value
    var paragrafo = document.getElementById('paragrafo')
    var imagem = document.getElementById('imagem')

    // Especificando gênero e idade
    if (idade <= 2) {
        var genero = 'um bebê'
    } else if (idade <= 12) {
        var genero = 'uma criança'
    } else {
        if (sexo == 'M' && idade < 18) {
            var genero = 'um adolescente'
        } else if (sexo == 'M' && idade < 60) {
            var genero = 'um homem'
        } else if (sexo == 'M' && idade <= 100) {
            var genero = 'um idoso'
        }

        if (sexo == 'F' && idade < 18) {
            var genero = 'uma adolescente'
        } else if (sexo == 'F' && idade < 60) {
            var genero = 'uma mulher'
        } else if (sexo == 'F' && idade <= 100) {
            var genero = 'uma idosa'
        }
    }

    // Validação da idade
    if (idade > 100 || idade < 0) {
        window.alert('[ERRO] Verifique seus dados e tente novamente')
        fail 
    } else {
        paragrafo.innerHTML = `Detectamos ${genero} de ${idade} anos`
        paragrafo.style.textAlign = 'center'
        main.style.height = '430px'
    }

    // Para o gênero masculino
    if (sexo == 'M' && idade <= 2) {
        imagem.innerHTML = `<img src="imagens/bebe-foto2.jpg" alt="bebê">`
    } else if (sexo == 'M' && idade <= 12) {       
        imagem.innerHTML = `<img src="imagens/menino-foto2.jpg" alt="menino">`       
    } else if (sexo == 'M' && idade < 18) {        
        imagem.innerHTML = `<img src="imagens/adolescente-m-foto2.jpg" alt="adolescente">`       
    } else if (sexo == 'M' && idade < 60) {       
        imagem.innerHTML = `<img src="imagens/homem-foto2.jpg" alt="homem">`        
    } else if (sexo == 'M' && idade <= 100) {
        imagem.innerHTML = `<img src="imagens/idoso-foto2.jpg" alt="idoso">`   
    } 

    // Para o gênero feminino
    if (sexo == 'F' && idade <= 2) {
        imagem.innerHTML = `<img src="imagens/bebe-foto2.jpg" alt="bebê">`
    } else if (sexo == 'F' && idade <= 12) {
        imagem.innerHTML = `<img src="imagens/menina-foto2.jpg" alt="menina">`
    } else if (sexo == 'F' && idade < 18) {
        imagem.innerHTML = `<img src="imagens/adolescente-f-foto2.jpg" alt="adolescente">`
    } else if (sexo == 'F' && idade < 60) {
        imagem.innerHTML = `<img src="imagens/mulher-foto2.jpg" alt="mulher">`
    } else if (sexo == 'F' && idade <= 100) {
        imagem.innerHTML = `<img src="imagens/idosa-foto2.jpg" alt="idosa">`
    } 
}     