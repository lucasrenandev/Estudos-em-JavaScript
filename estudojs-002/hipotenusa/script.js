
let calcular = document.querySelector('.calcular')

calcular.addEventListener('click', calculo_hipotenusa)

function calculo_hipotenusa() {
    const cateto_oposto = document.querySelector('.cateto-oposto').value
    const cateto_adjacente = document.querySelector('.cateto-adjacente').value
    const hipotenusa = Math.hypot(cateto_oposto, cateto_adjacente)
    const saida = document.querySelector('.saida')

    saida.innerHTML = `A hipotenusa irá medir <strong>${hipotenusa.toFixed(2)}</strong>!`
}