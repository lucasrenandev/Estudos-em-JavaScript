
const button = document.getElementById("button")

button.addEventListener('click', ordem_decrescente)

function ordem_decrescente() {

    const resultado = document.getElementById("resultado")
    const n1 = parseInt(window.prompt("Informe um número:"))
    const n2 = parseInt(window.prompt("Informe outro:"))
    const n3 = parseInt(window.prompt("Informe mais um para finalizar:"))

    if (n1 !== parseInt(n1) || n2 !== parseInt(n2) || n3 !== parseInt(n3)) {

        resultado.innerHTML = "Informe os valores para continuar!"
    }

    else {

        let num1 = n1
        let num2 = n2
        let num3 = n3
        let auxiliar = n1

        if (num2 > auxiliar) {
            auxiliar = num2
            num2 = num1
            num1 = auxiliar
        }

        if (num3 > num1) {
            auxiliar = num3
            num3 = num1
            num1 = auxiliar
        }

        if (num3 > num2) {
            auxiliar = num3
            num3 = num2
            num2 = auxiliar
        }

        resultado.innerHTML = `Valores informados em ordem decrescente: <mark>${num1} - ${num2} - ${num3}</mark>`
    }
}