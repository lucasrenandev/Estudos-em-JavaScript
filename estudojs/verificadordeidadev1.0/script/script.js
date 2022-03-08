function Verificar() {
    var idade1 = document.getElementById('txtidade1').value
    var idade2 = document.getElementById('txtidade2').value
    var res = document.querySelector('div#res')

    let id1 = Number(idade1)
    let id2 = Number(idade2)    

    let maior = id1
    let menor = id1

    if (id2 > maior) {
        maior = id2
    }else if (id2 < menor) {
        menor = id2
    }
    res.innerHTML = 'A maior idade é ' + maior + ' e ' + 'a menor é ' + menor + '!'
}