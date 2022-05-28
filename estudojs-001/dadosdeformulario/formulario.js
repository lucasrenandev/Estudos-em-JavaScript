function Contar() {
    let num = Number(document.querySelector('input#txtv').value)
    let res = document.querySelector('div#res')

    res.innerHTML += `<h2>Iniciando contagem de 0 até ${num}...</h2>`
    let contador = 0
    while (contador <= num) {
        res.innerHTML += ` ${contador} &#x1F449;`
        contador++   
    }

    res.innerHTML += ' &#x1F3C1;'
}