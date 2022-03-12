function verificar() {
    var saida = document.querySelector('div#saida')
    var número = window.prompt('Digite um número!')

    let msg
    if (número % 2 == 0) {
        msg = `O número ${número} é <strong>PAR</strong>!`
    }else {
        msg = `O número ${número} é <strong>ÍMPAR!</strong>`
    }

    saida.innerHTML = msg

}