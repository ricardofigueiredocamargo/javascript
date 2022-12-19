function calcular() {
    let numDig = window.prompt('Digite um número inteiro qualquer')
    let num = Number(numDig)
    window.alert(`Antes de ${num}, temos o número ${num-1}.
    Depois de ${num}, temos o número ${num+1}.`)
}