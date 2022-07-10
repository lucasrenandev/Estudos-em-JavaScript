function contar() {
    let res = document.getElementById('res')

    res.innerHTML = `<h2>Iniciando contagem...`
    let cont = 1
    while (cont <= 15) {
        res.innerHTML += ` ${cont} &#x1F449;`
        cont ++
    }
    res.innerHTML += ` &#x1F3C1;`
}