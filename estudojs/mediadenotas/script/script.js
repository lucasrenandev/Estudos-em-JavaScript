function calcularMedia() {
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var res = document.querySelector('div#res')

    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)

    média = (n1 + n2) / 2
    res.innerHTML='A média do aluno é ' + média + '!'
    
}