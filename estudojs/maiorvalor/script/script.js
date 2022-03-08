function verificarMaior() {
    var n1 = window.document.getElementById('txtn1').value
    var n2 = window.document.getElementById('txtn2').value
    var res = window.document.getElementById('res')

    maior = Number(n1)
    menor = Number(n1)

    if (n2 > maior) {
        maior = n2
    } else if (n2 < menor) {
        menor = n2
    }
    res.innerHTML=`O maior valor digitado foi ${maior}.`
}