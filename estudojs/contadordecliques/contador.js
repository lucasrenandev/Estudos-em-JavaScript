
let contador = 0
let res = document.querySelector('div#res')

function IniciarContador() {
    contador ++
    res.innerHTML = `O contador está com <mark>${contador}</mark> cliques.`
}
function ZerarContador() {
    contador = 0
    res.innerHTML = null
}