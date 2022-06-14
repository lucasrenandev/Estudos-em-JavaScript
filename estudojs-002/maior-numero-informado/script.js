
const button = document.querySelector("#button") 

button.addEventListener('click', verificarMaior)

function verificarMaior() {

    const resultado = document.querySelector("#resultado")

    const n1 = parseInt(window.prompt("Informe um número: "))
    const n2 = parseInt(window.prompt("Informe outro: "))
    const n3 = parseInt(window.prompt("Informe mais um: "))

    if (n1 !== parseInt(n1) || n2 !== parseInt(n2) || n3 !== parseInt(n3)) {

        resultado.innerHTML = "Impossível verificar. Informe todos os valores!"
    }

    else {

        var maior

        maior = n1
   
        if (n2 > n1 ) {

        maior = n2
    }
    
        if (n3 > maior) {

        maior = n3
    }

        if (n1 == parseInt(n2) && n2 == parseInt(n3) && n3 == parseInt(n1) && n3 == parseInt(n2)) {

            resultado.innerHTML = "Todos os valores são iguais!"
        }

    else {

        resultado.innerHTML = `O maior valor informado foi o <mark>${maior}!</mark>`
    }
       
    }

}