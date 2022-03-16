function multiplicar() {
    var tn1 = document.querySelector('input#txtn1')
    var tn2 = document.querySelector('input#txtn2')
    var res = document.querySelector('div#res')
    
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var multi = n1 * n2

    res.innerHTML=`<p>O resultado de ${n1} x ${n2} é igual a ${multi}.</p>`
}