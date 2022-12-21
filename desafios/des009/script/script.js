let resultado = document.querySelector('div#resultado')

function reajustar() {
    let nome = window.prompt('Qual é o nome do funcionário?')
    let salario = window.prompt(`Qual é o salário de ${nome}?`)
    let porcent = window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`)

    let reajuste = Number(salario) * Number(porcent) / 100
    let novoSalario = Number(salario) + Number(reajuste)

    salario = Number(salario).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    reajuste = reajuste.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    novoSalario = novoSalario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    resultado.innerHTML = ''
    resultado.innerHTML += `<h2>${nome} recebeu um aumento salarial!</h2>`
    resultado.innerHTML += `<p>O salário atual é de ${salario}.</p>`
    resultado.innerHTML += `<p>Com um aumento de ${porcent}%, o salário vai aumentar ${reajuste} no próximo mês.</p>`
    resultado.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar ${novoSalario}</p>`
}