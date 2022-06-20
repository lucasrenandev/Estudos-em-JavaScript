
let analise
const button = document.getElementById('button')

button.addEventListener('click', verificadorNumeros)

function verificadorNumeros() {
    
    const resultado = document.getElementById('resultado')
    const n1 = Number(window.prompt('Digite um número: '))
    const n2 = Number(window.prompt('Digite outro: '))
    const operacao = Number(window.prompt('Qual operação/verificação deseja realizar? \n[1] Par ou Ímpar \n[2] Positivo ou Negativo \n[3] Inteiro ou Decimal'))

    let soma 
    soma = n1 + n2

    if (operacao == 1) {

        if (soma % 2 == 0) {
            analise = 'Par'
        }
        else {
            analise = 'impar'
        }
    }
    else if (operacao == 2) {

        if (soma < 0) {
            analise = 'Negativo'
        }
        else {
            analise = 'Positivo'
        }
    }
    else if (operacao == 3) {

        if (soma % 1 == 0) {
            analise = 'Inteiro'
        }
        else {
            analise = 'Decimal'
        }
    }
    else {
        analise = 'Impossível realizar operação. Valores não informados!'
    }

    resultado.innerHTML = analise
}   