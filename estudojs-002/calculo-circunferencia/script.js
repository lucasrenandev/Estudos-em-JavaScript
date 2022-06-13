
const button = document.getElementById("button")

button.addEventListener('click', calculoCircunferência)

function calculoCircunferência() {
    
    const resultado = document.getElementById("resultado")
    raio = Number(window.prompt('Qual o raio do círculo?'))
    
    if (raio == '') {

        resultado.innerHTML = "Impossível calcular. Valor não informado!"
    }

    else {

        raio = raio
    
        comprimento = Number(2 * Math.PI * raio).toFixed(2)
        area = Number(Math.PI * raio * raio).toFixed(2)
    
        resultado.innerHTML = `Comprimento: <mark>${comprimento}</mark> <br> Área: <mark>${area}</mark>`
    }
    
}