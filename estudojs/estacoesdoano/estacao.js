function VerificarEstação() {
    mês = window.prompt('Digite o mês por extenso (ex: Setembro)').toUpperCase()
    let res = document.querySelector('div#res')
    
    res.innerHTML = '<h2 style=color:green;>Verificando...'
    let estação
    switch(mês) {
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            estação = 'VERÃO'
            break
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estação = 'OUTONO'
            break
        case 'jULHO': case 'AGOSTO': case 'SETEMBRO':
            estação = 'INVERNO'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estação = 'PRIMAVERA'
            break
        default:
            estação = 'INDEFINIDA!'
            break
    }

    res.innerHTML += `<p>No mês de <mark><strong>${mês}</strong></mark> temos a estação <mark><strong>${estação}</strong></mark>!`
    
}