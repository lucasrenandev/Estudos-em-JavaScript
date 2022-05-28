function Contar() {
    let inicio = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] faltam dados!')
        res.innerHTML = `Impossível contar`
    }else {
        res.innerHTML = `Contando... <br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo 1.')
            p = 1
        }
        if (i < f) {
            for(c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }else {
            for(c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
    }
    res.innerHTML += ` \u{1F3C1}`

}