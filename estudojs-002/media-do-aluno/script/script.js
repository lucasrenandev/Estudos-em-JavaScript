
let analiseMedia
const calcular = document.querySelector("#calcular")

calcular.addEventListener('click', calculoMedia)

function calculoMedia(n1, n2) {

    const saida = document.querySelector("#saida")
    n1 = Number(document.querySelector("#n1").value)
    n2 = Number(document.querySelector("#n2").value)
    
    const media = (n1 + n2) / 2

    if (media >= 9 && media == 10) {
        analiseMedia = `Média do aluno ${media} <br>Nota A`
    }
    else if (media >= 7.5 && media < 9) {
        analiseMedia = `Média: ${media} <br>Nota B`
    }
    else if (media >= 6 && media < 7.5) {
        analiseMedia = `Média: ${media} <br>Nota C` 
    }
    else if (media >= 4 && media < 6) {
        analiseMedia = `Média: ${media} <br>Nota D`
    }
    else if (media < 4) {
        analiseMedia = `Média: ${media} <br>Nota E`
    }
    else {
        analiseMedia = `Impossível Calcular!`
    }

    saida.innerHTML = analiseMedia
}