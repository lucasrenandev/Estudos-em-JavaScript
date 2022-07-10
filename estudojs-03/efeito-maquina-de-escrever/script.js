
function efeitoEscrever(elemento) {
    const separaTexto = elemento.innerHTML.split('')

    elemento.innerHTML = ''
    for(let i = 0; i < separaTexto.length; i++) {
        setTimeout(function() {
            elemento.innerHTML += separaTexto[i]
        }, 75 * i)
    }
}

const texto = document.querySelector("h1")
efeitoEscrever(texto)