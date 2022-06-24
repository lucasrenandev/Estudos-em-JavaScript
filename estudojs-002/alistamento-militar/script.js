
let anoNascimento = null
let anoAlistamento = null
let analise = null
let anosSoma = null 
let anoAtual = new Date().getFullYear()
let idade = null
let verificar = document.querySelector("#verificar")
let resultado = document.querySelector("#resultado")

verificar.addEventListener('click', calculoAlistamento)
verificar.addEventListener('click', validacaoCalculo)

function calculoAlistamento() {

    anoNascimento = Number(window.prompt('Ano de Nascimento?'))

    idade = anoAtual - anoNascimento

    resultado.innerHTML = `Quem nasceu em ${anoNascimento} tem ${idade} de idade!`

    if (idade === 18) {
        analise = "<br>Hora de se alistar <mark>IMEDIATAMENTE</mark>"
    }

    else if (idade < 18) {
        
        anosSoma = 18 - idade
        anoAlistamento = Number(anoAtual + anosSoma)
        analise = `<br>Ainda faltam <mark>${anosSoma}</mark> anos para o alistamento.`
        analise += `<br>O alistamento será em <mark>${anoAlistamento}</mark>.`
    }
    
    else if (idade > 18) {

        anoAlistamento = idade - 18
        anosSoma = anoAtual - anoAlistamento        
        analise = `<br>Já deveria ter se alistado há <mark>${anoAlistamento}</mark> anos.`
        analise += `<br>O alistamento foi em <mark>${anosSoma}</mark>.`
    }

    resultado.innerHTML += analise
}

function validacaoCalculo() {

    if (anoNascimento < 0 || anoNascimento > anoAtual || anoNascimento !== Number(anoNascimento)) {

        resultado.innerHTML = "Informe um ano válido para continuar!"
        
    }
}