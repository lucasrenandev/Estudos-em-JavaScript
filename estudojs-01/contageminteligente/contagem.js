function Contagem() {
    let n1 = Number(document.querySelector('input#txtn1').value)
    let n2 = Number(document.querySelector('input#txtn2').value)
    let saida = document.querySelector('section#saida')

    saida.innerHTML += `<h2>Contando de ${n1} até ${n2}...<h2>`
    let contador
    if (n1 < n2) {
        contador = n1
        while (contador <= n2) {
            saida.innerHTML += ` ${contador} &#x1F449;`
            contador ++
        }
    }else if (n2 < n1) {
            contador = n1
            while (contador >= n2) {
                saida.innerHTML += ` ${contador} &#x1F449;`
                contador --
            }
        }else {
            saida.innerHTML += `Não é possivel contar, pois os números são iguais!`
        
    }
    saida.innerHTML += ' &#x1F3C1;'
}