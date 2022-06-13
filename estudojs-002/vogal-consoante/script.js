 
const button = document.querySelector("button")

button.addEventListener('click', vogal_ou_consoante)

function vogal_ou_consoante() {

    const resultado = document.querySelector("#resultado")
    const letra = window.prompt("Digite uma letra:")

    const letra_digitada = letra.toUpperCase()

    if (letra == '' || letra == Number(letra) || letra == null) {

        resultado.innerHTML = "impossível verificar. Letra não informada!"
    }

    else {

        if (letra_digitada == "A" || letra_digitada == "E" || letra_digitada == "I" || letra_digitada == "O" || letra_digitada == "U") {

            resultado.innerHTML = "A letra digitada é uma <mark>VOGAL!</mark>"
        }

        else {

            resultado.innerHTML = "A letra digitada é uma <mark>CONSOANTE!</mark>"
        }
    }

}