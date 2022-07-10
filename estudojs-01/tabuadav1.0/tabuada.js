function Tabuada() {
    let n = Number(document.querySelector('input#txtn1').value)
    let saida = document.querySelector('section#saida')

    saida.innerHTML = `<h2 style=font-size:18pt;>Tabuada de ${n}</h2>`
    let cont = 1
    while (cont <= 10) {
        saida.innerHTML += `${n} x ${cont} = <strong>${n * cont}</strong><br>`
        cont ++
    }

    
}