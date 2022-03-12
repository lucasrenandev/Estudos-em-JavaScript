function calcularMedia() {
    var tn1 = document.getElementById('txtn1').value
    var tn2 = document.getElementById('txtn2').value
    var res = document.querySelector('div#res')

    var n1 = Number(tn1)
    var n2 = Number(tn2)

    média = (n1 + n2).toFixed(2) / 2  
    res.innerHTML=`A média do aluno é ${média}!`
    
}