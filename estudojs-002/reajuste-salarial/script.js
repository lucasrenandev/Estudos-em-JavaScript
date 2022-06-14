
const button = document.querySelector("#calcular")

button.addEventListener('click', reajuste_20Porcento)
button.addEventListener('click', reajuste_15Porcento)
button.addEventListener('click', reajuste_10Porcento)
button.addEventListener('click', reajuste_5Porcento)
button.addEventListener('click', validacao)

function validacao() {

    const salario = Number(document.querySelector("#salario").value)
    const saida = document.querySelector("#saida")

    if (salario == '' || salario <= 0) {

        saida.innerHTML = "Informe o salário do funcionário!"
    }

}

function reajuste_20Porcento() {

    const salario = Number(document.querySelector("#salario").value)
    const saida = document.querySelector("#saida")

    if (salario <= 280) {

        let valor_aumento 
        let aumento = salario + (salario * 20 / 100)
        valor_aumento = aumento - salario

        saida.innerHTML = `Salário do Funcionário: <mark>R$ ${salario.toFixed(2)}</mark>`
        saida.innerHTML += "<br> Porcentual de Aumento: <mark>R$ 10%</mark>"
        saida.innerHTML += `<br> Valor do Aumento: <mark>R$ ${valor_aumento.toFixed(2)}</mark>`
        saida.innerHTML += `<br> Valor do novo Salário: <mark>R$ ${aumento.toFixed(2)}</mark>`

    }    
     
}

function reajuste_15Porcento() {

    const salario = Number(document.querySelector("#salario").value)
    const saida = document.querySelector("#saida")

    if (salario > 280 && salario <= 700) {

        let valor_aumento
        let aumento = salario + (salario * 15 / 100)
        valor_aumento = aumento - salario

        saida.innerHTML = `Salário do Funcionário: <mark>R$ ${salario.toFixed(2)}</mark>`
        saida.innerHTML += "<br>Porcentual de Aumento: <mark>R$ 15%</mark>"
        saida.innerHTML += `<br>Valor do Aumento: <mark>R$ ${valor_aumento.toFixed(2)}</mark>`
        saida.innerHTML += `<br>Valor do novo Salário: <mark>R$ ${aumento.toFixed(2)}</mark>`
    }
}

function reajuste_10Porcento() {

    const salario = Number(document.querySelector("#salario").value)
    const saida = document.querySelector("#saida")

    if (salario > 700 && salario <= 1500) {

        let valor_aumento
        let aumento = salario + (salario * 10 / 100)
        valor_aumento = aumento - salario

        saida.innerHTML = `Salário do Funcionário: <mark>R$ ${salario.toFixed(2)}</mark>`
        saida.innerHTML += `<br>Porcentual de Aumento: <mark>R$ 10%</mark>`
        saida.innerHTML += `<br>Valor do Aumento: <mark>R$${valor_aumento.toFixed(2)}</mark>`
        saida.innerHTML += `<br>Valor do novo Salário: <mark>R$${aumento.toFixed(2)}</mark>`
    }    
}

function reajuste_5Porcento() {

    const salario = Number(document.querySelector("#salario").value)
    const saida = document.querySelector("#saida")

    if (salario > 1500) {

        let valor_aumento
        let aumento = salario + (salario * 5 / 100)
        valor_aumento = aumento - salario

        saida.innerHTML = `Salário do Funcionário: <mark>R$ ${salario.toFixed(2)}</mark>`
        saida.innerHTML += `<br>Porcentual de Aumento: <mark>R$ 10%</mark>`
        saida.innerHTML += `<br>Valor do Aumento: <mark>R$${valor_aumento.toFixed(2)}</mark>`
        saida.innerHTML += `<br>Valor do novo Salário: <mark>R$${aumento.toFixed(2)}</mark>`
    }    

}
