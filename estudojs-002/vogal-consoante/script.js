 
const button = document.querySelector("button")

button.addEventListener('click', vogal_ou_consoante)

function vogal_ou_consoante() {

    const resultado = document.querySelector("#resultado")
    const letra = String(window.prompt("Digite uma letra:")).toUpperCase()

    if (letra == '' || letra == Number(letra)) {

        resultado.innerHTML = "impossível verificar. Letra não informada!"
    }

    else {

        if (letra == "A" || letra == "E" || letra == "I") {

            resultado.innerHTML = "Temos uma vogal!"
        }

        else if (letra == "O" || letra == "U")  {

            resultado.innerHTML = "Temos uma vogal!"
        }

        else {

            resultado.innerHTML = "A letra digitada não é uma vogal!"
        }
    }

}