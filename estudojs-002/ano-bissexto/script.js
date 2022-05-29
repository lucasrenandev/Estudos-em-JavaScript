
let calcular = document.querySelector('#calcular')
let data = new Date
let ano_atual = data.getFullYear()

calcular.addEventListener('click', calculo_ano_bissexto)

function calculo_ano_bissexto() {

    const ano = document.querySelector('#ano').value
    const saida = document.querySelector('.saida')
    let resultado = ''

    if (ano == '' || ano > ano_atual || ano < 0) {

        window.alert('[ERRO] campo VAZIO ou ANO inválido. Tente novamente!')
    }

    else {

        if (ano % 4 == 0 && ano % 100 !== 0 || ano % 400 == 0) {
            resultado = `Analisando o ano <strong>${ano}</strong>, ele <strong>é BISSEXTO</strong>!`
        }

        else {
            resultado = `Analisando o ano <strong>${ano}</strong>, ele <strong> não é BISSEXTO</strong>!`
        }

        saida.innerHTML = resultado
    }
   
}