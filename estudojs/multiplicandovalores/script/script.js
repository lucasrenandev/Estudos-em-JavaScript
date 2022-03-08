function multiplicar() {
    var tn1 = document.querySelector('input#txtn1')
    var tn2 = document.querySelector('input#txtn2')
    var res = document.querySelector('div#res')
    
    var n1 = (tn1.value)
    var n2 = (tn2.value)
    var multi = n1 * n2

    res.innerHTML=`O resultado de ${n1} x ${n2} é igual a ${multi}.`
}