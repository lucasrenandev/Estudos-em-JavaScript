function Calcular() {
    const numero = parseFloat(window.prompt('Digite um número: '))
    const res = document.getElementById('res')

    dobro = numero * 2
    metade = numero / 2

    res.innerHTML = `O dobro de <mark>${numero}</mark> é <mark>${dobro}</mark> e a metade é <mark>${metade}</mark>!`
}