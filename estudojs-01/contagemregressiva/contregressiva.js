function contagemregressiva() {
    let result = document.getElementById('result')

    result.innerHTML = '<h2>Contagem... </h2>'
    cont = 10
    while (cont >= 0) {
        result.innerHTML += ` ${cont} &#x1F449;`
        cont --
    }
    result.innerHTML += ' &#x1F3C1;'
    
}