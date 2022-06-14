
const button = document.querySelector("#button") 

button.addEventListener('click', verificarMaior)

function verificarMaior() {

    const resultado = document.querySelector("#resultado")

    const n1 = parseFloat(window.prompt("Informe um número: "))
    const n2 = parseFloat(window.prompt("Informe outro: "))
    const n3 = parseFloat(window.prompt("Informe mais um: "))

    var maior

    maior = n1
   
    if (n2 > n1 ) {

        maior = n2
    }
    
    if (n3 > maior) {

        maior = n3
    }

    else {

        resultado.innerHTML = "Todos os números são iguais!"
    }

    resultado.innerHTML = `O maior valor informado foi o <mark>${maior}</mark>`

}