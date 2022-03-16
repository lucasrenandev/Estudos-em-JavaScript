function verificarMaior() {
    var n1 = document.getElementById('txtn1').value
    var n2 = document.getElementById('txtn2').value
    var res = document.getElementById('res')

    maior = Number(n1)
    menor = Number(n1)

    if (n2 > maior) {
        maior = n2
    } else if (n2 < menor) {
        menor = n2
    }
    res.innerHTML=`<p>O maior valor digitado foi ${maior}.<p>`
}