
const button = document.getElementById('button')

button.addEventListener('click', dia_da_semana)

function dia_da_semana() {

    const resultado = document.getElementById("resultado")
    const n1 = Number(window.prompt("Informe um número para ver seu dia da semana:"))

    if (n1 !== Number(n1) || n1 == null || n1 < 0) {

        resultado.innerHTML = "Valor inválido ou campo vazio. Tente novamente!"

    }

    else {

        const numeroInformado = n1

        switch(numeroInformado) {

            case 1 :
                resultado.innerHTML = "<mark>DOMINGO</mark>"
                break

            case 2:
                resultado.innerHTML = "<mark>SEGUNDA-FEIRA</mark>"
                break

            case 3:
                resultado.innerHTML = "<mark>TERÇA-FEIRA</mark>"
                break

            case 4:
                resultado.innerHTML = "<mark>QUARTA-FEIRA</mark>"
                break

            case 5:
                resultado.innerHTML = "<mark>QUINTA-FEIRA</mark>"
                break

            case 6:
                resultado.innerHTML = "<mark>SEXTA-FEIRA</mark>"
                break

            case 7:
                resultado.innerHTML = "<mark>SÁBADO</mark>"
                break

            default:
                resultado.innerHTML = "VALOR INVÁLIDO!"
    }

    }

}