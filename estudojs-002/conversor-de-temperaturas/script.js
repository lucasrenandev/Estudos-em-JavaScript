
var calcular = document.querySelector('.calcular')

calcular.addEventListener('click', calculo_celsius)

function calculo_celsius() {

    const celsius = document.querySelector('.temperatura').value
    const fahrenheit = (9 * celsius / 5) + 32
    const saida = document.querySelector('.saida')

    saida.innerHTML = `A temperatura de ${celsius}°C corresponde à ${fahrenheit}°F! `
}