function Fatorial() {
    let saida = document.querySelector('section#saida')
    let n = Number(document.querySelector('input#txtn').value)

    
    let contador = n
    let fat = 1

    saida.innerHTML += `<h2 style=font-size:18pt>Cálculo de <strong>${n}!</strong</h2>`

    while (contador > 1) {
        saida.innerHTML += ` ${contador} x `
        fat *= contador
        contador --
    }
    saida.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
}