 
const button = document.querySelector("button")

button.addEventListener('click', vogal_ou_consoante)

function vogal_ou_consoante() {

    const resultado = document.querySelector("#resultado")
    const letra = window.prompt("Digite uma letra:")

    const letra_digitada = letra
    

    if (letra_digitada == '' || letra_digitada == Number(letra) || letra_digitada == null) {

        resultado.innerHTML = "impossível verificar. Letra não informada!"
    }

    else {

        if (letra_digitada === "a" || letra_digitada == "e" || letra_digitada == "i" || letra_digitada == "o" || letra_digitada == "u") {

            resultado.innerHTML = "A letra digitada é uma <mark>VOGAL!</mark>"
        }

        else {

            resultado.innerHTML = "A letra digitada é uma <mark>CONSOANTE!</mark>"
        }
    }

}