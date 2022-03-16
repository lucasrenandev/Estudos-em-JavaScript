function verificarRaiz() {
    var n1 = document.getElementById('txtn1').value
    var res = document.getElementById('res')

    var raiz = Number(n1 * n1)

    res.innerHTML=`<p>A raiz de ${n1} é igual a ${raiz.toFixed(2)}!</p>`
}