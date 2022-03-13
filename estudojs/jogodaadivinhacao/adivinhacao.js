let jogador = 0
let computador = 0
let result = document.querySelector('div#result')

function sortear() {
    let min = 1
    let max = 100
    let diferenca = max - min
    let aleatorio = Math.random()
    computador = min + Math.trunc(diferenca * aleatorio)
}


function adivinhar() {
    let jogador = Number(window.prompt('Qual o seu palpite? '))

    if (jogador < computador) {
        result.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR!</strong>`
    }else if (jogador > computador) {
        result.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR</strong>!`
    }else if (jogador == computador) {
        result.innerHTML += `<p><strong>PARABÉNS</strong>! Você acertou! Eu tinha sorteado o número ${computador}!`
        
    }


}