
let calcular = document.querySelector('#calcular')
let ano_atual = new Date().getFullYear()
let idade 
let classificação

calcular.addEventListener('click', classificação_atletas)

function classificação_atletas() {
    
    const ano_nascimeto = document.querySelector('#ano').value
    const saida = document.querySelector('.saida')

    if (ano_nascimeto == '' || ano_nascimeto > ano_atual || ano_nascimeto < 0) {
        window.alert('[ERRO] campo VAZIO ou ANO inválido. Tente novamente!')
    }

    else {
        
        idade = Number(ano_atual - ano_nascimeto)
        
        saida.innerHTML = 'O atleta nasceu em ' + ano_nascimeto + ' e tem ' + idade + ' anos de idade!' 
        
        if (idade <= 9) {
            classificação = 'MIRIM'
        }

        else if (idade <= 14) {
            classificação = 'INFANTIL'
        }

        else if (idade <= 19) {
            classificação = 'JUNIOR'
        }

        else if (idade <= 25) {
            classificação = 'SÊNIOR'
        }

        else {
            classificação = 'MASTER'
        }

        saida.innerHTML += '<br> <br> Classificação: ' + classificação + '!'
    }

}