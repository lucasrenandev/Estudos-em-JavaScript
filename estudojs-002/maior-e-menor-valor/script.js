
const button = document.querySelector("#button")

button.addEventListener('click', maior_e_menor)

function maior_e_menor() {

    const resultado = document.querySelector("#resultado")
    const n1 = parseInt(window.prompt("Digite um número: "))
    const n2 = parseInt(window.prompt("Digite outro: "))
    const n3 = parseInt(window.prompt("Digite mais um para finalizar: "))


    if (n1 !== parseInt(n1) || n2 !== parseInt(n2) || n3 !== parseInt(n3)) {

        resultado.innerHTML = "Informe todos os valores!"
    }

    else {

        var maior = n1
        var menor = n1

        //Verificando maior número

        if (n2 > maior) {
            maior = n2
        }
        if (n3 > maior) {
            maior = n3
        }

        //Verificando menor número

        if (n2 < menor ) {
            menor = n2
        }
        if (n3 < menor) {
            menor = n3
        }

        resultado.innerHTML = `Maior valor informado: <mark>${maior}</mark> <br> Menor valor informado: <mark>${menor}</mark>`
    }
}