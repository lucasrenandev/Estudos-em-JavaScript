function Calcular() {
    const numero = parseFloat(window.prompt('Digite um número: '))
    const res = document.getElementById('res')

    dobro = numero * 2
    metade = numero / 2

    res.innerHTML = `O dobro de ${numero} é ${dobro} e a metade é ${metade}!`
}