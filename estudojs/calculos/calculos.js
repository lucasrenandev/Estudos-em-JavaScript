function calcular() {
    let numero = Number(window.prompt('Informe um número!'))
    let res = document.querySelector('div#res')

    res.innerHTML = `<p>O número a ser analisado sera o <strong>${numero}</strong></p><hr>` 
    res.innerHTML += `<p>O seu valor absoluto é o ${Math.abs(numero)}</p>`
    res.innerHTML += `<p>Sua parte inteira é o ${Math.trunc(numero)}</p>` 
    res.innerHTML += `<p>O valor inteiro mais próximo é o ${Math.round(numero)}`
    res.innerHTML += `Sua raiz quadrada é ${Math.sqrt(numero)}`
    res.innerHTML += `<p>Sua raiz cúbica é ${Math.cbrt(numero)}</p>`
    res.innerHTML += `<p>O valor de ${numero}² é ${Math.pow(numero, 2)}</p>`
    res.innerHTML += `<p>O valor de ${numero}³ é ${Math.pow(numero, 3)}`
}