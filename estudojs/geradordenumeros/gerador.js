
let saida = document.querySelector('div#saida')

function gerar() {
    let minimo = 1
    let maximo = 100
    let diferenca = maximo - minimo
    let aleatorio = Math.random()
    let numero = minimo + Math.trunc(diferenca * aleatorio)

    saida.innerHTML = `Número gerado foi <mark>${numero}</mark>!`
}
function limpar() {
    saida.innerHTML = null
}