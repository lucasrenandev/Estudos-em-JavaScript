
const button = document.getElementById("button")

button.addEventListener('click', calculoCircunferência)

function calculoCircunferência() {
    
    const resultado = document.getElementById("resultado")
    const raio = Number(window.prompt('Qual o raio do círculo?'))
    
    if (raio == '' || raio !== Number(raio)) {

        resultado.innerHTML = "Impossível calcular. Valor não informado!"
    }

    else {

        let valor_raio 
        valor_raio = raio
    
        let comprimento = Number(2 * Math.PI * raio).toFixed(2)
        let area = Number(Math.PI * raio * raio).toFixed(2)

        resultado.innerHTML = `Área: <mark>${area}</mark> <br> comprimento: <mark>${comprimento}</mark>`
    
    }
    
}