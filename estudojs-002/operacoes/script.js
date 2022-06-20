
const button = document.getElementById('button')
let resultado = document.getElementById('resultado')

button.addEventListener('click', verificadorNumeros)

function verificadorNumeros() {

    const n1 = Number(window.prompt('Digite um número: '))
    const n2 = Number(window.prompt('Digite outro: '))
    const operacao = Number(window.prompt('Qual operação deseja realizar? \n[1] Par ou Ímpar \n[2] Positivo ou Negativo \n[3] Inteiro ou Decimal'))

    let soma 
    soma = n1 + n2

    if (operacao == 1) {

        if (soma % 2 == 0) {
            resultado.innerHTML = 'Par'
        }
        else {
            resultado.innerHTML = 'impar'
        }
    }
    else if (operacao == 2) {

        if (soma < 0) {
            resultado.innerHTML = 'Negativo'
        }
        else {
            resultado.innerHTML = 'Positivo'
        }
    }
    else if (operacao == 3) {

        if (soma % 1 == 0) {
            resultado.innerHTML = 'Inteiro'
        }
        else {
            resultado.innerHTML = 'Decimal'
        }
    }
    else {
        resultado.innerHTML = 'Impossível realizar operação. Valores não informados!'
    }

}   