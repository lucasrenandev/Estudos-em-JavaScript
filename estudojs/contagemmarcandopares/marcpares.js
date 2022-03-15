function marcandopares() {
    let result = document.getElementById('result')


    result.innerHTML = '<h2>Iniciando contagem...'
    let cont = 1
    while (cont <= 15) {
        if (cont % 2 == 0) {
            result.innerHTML += ` <mark>${cont}</mark> &#x1F449;`
        }else {
            result.innerHTML += ` ${cont} &#x1F449;`
        }
        cont ++
    
    }
    result.innerHTML += ` &#x1F3C1;`
}