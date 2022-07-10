 
const button = document.querySelector("button")

button.addEventListener('click', vogal_ou_consoante)

function vogal_ou_consoante() {

    const resultado = document.querySelector("#resultado")
    const letra = window.prompt("Digite uma LETRA:")

    const letra_digitada = letra
    

    if (letra_digitada == '' || letra_digitada == Number(letra) || letra_digitada == null) {

        resultado.innerHTML = "Impossível verificar. Letra não informada!"
    }

    else {

        if (letra_digitada.toUpperCase() == "A" || letra_digitada.toUpperCase() == "E" || letra_digitada.toUpperCase() == "I" || letra_digitada.toUpperCase() == "O" || letra_digitada.toUpperCase() == "U") {

            resultado.innerHTML = "A letra digitada é uma <mark>VOGAL!</mark>"
        }

        else {

            resultado.innerHTML = "A letra digitada é uma <mark>CONSOANTE!</mark>"
        }
    }

}