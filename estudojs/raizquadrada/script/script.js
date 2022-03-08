function verificarRaiz() {
    var n1 = window.document.getElementById('txtn1').value
    var res = window.document.getElementById('res')

    var raiz = n1 * n1

    res.innerHTML=`A raiz de ${n1} é igual a ${raiz}!`
}