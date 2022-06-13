
const button = document.getElementById("button")

button.addEventListener('click', calculoCircunferência)

function calculoCircunferência() {
    
    const resultado = document.getElementById("resultado")
    const raio = Number(window.prompt('Qual o raio do círculo?'))
    
    if (raio == '' || raio !== Number(raio)) {

        resultado.innerHTML = "Impossível calcular. Valor não informado!"
    }

    else {

        const valor_raio = raio

        const comprimento = Number(2 * Math.PI * valor_raio).toFixed(2)
        const area = Number(Math.PI * raio * valor_raio).toFixed(2)

        resultado.innerHTML = `Área: <mark>${area}</mark> <br> Circunferência: <mark>${comprimento}</mark>`
    
    }
    
}