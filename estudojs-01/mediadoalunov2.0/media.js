function calcular() {
    let nome = window.prompt('Qual é o nome do aluno?')
    let nota1 = Number(window.prompt('Qual a primeira nota de ' + nome + '?'))
    let nota2 = Number(window.prompt('Alem de ' + nota1 + ', Qual a segunda nota de ' + nome + '?'))
    let res = document.querySelector('div#res')

    média = (nota1 + nota2).toFixed(2) / 2

    let msg 
    if (média >= 6) {
        msg = 'A mensagem que temos é: <strong style=color:green;>Meus parabéns!</strong>'
    }else  {
        msg = 'A mensagem que temos é: <strong style=color:red;>Estude um pouco mais!</strong>'
    }

    res.innerHTML = `<p>Calculando a média final de <strong>${nome.toUpperCase()}...</strong></p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${nota1} e ${nota2}</mark></p>`
    res.innerHTML += `<p>A média final será <mark>${média}</mark></p>`
    res.innerHTML += msg
}