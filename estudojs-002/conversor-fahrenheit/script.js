
const button = document.querySelector("#button")

button.addEventListener('click', conversor_fahrenheit)

function conversor_fahrenheit() {

    const resultado = document.querySelector("#resultado")

    const fahrenheit = Number(window.prompt("Informe à temperatura em °F:"))

    if (fahrenheit == '') {

        resultado.innerHTML = "Impossível converter. Temperatura não informada!"
    }

    else {

        const celsius = 5 * (fahrenheit - 32) / 9

        resultado.innerHTML = `Temperatura em °F:  <mark>${fahrenheit}</mark> <br> <br> Convertida em °C:  <mark>${celsius.toFixed(2)}</mark>`
    }
}