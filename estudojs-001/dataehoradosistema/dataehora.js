function analisedoSistema() {
    let agora = new Date
    let saida = document.querySelector('div#saida')

    let dia = agora.getDate()
    let mes = agora.getMonth()
    let ano = agora.getFullYear()
    let diasemana = agora.getDay()
    let hora = agora.getHours()
    let minutos = agora.getMinutes()
    let segundos = agora.getSeconds()


    saida.innerHTML = `<p>Dia: <mark>${dia}`
    saida.innerHTML += `<p>Mês: <mark>${mes}`
    saida.innerHTML += `<p>Ano: <mark>${ano}`
    saida.innerHTML +=  `<p>Dia da semana: <mark>${diasemana}`
    saida.innerHTML += `<p>Hora: <mark>${hora}`
    saida.innerHTML += `<p>Minutos: <mark>${minutos}`
    saida.innerHTML += `<p>Segundos: <mark>${segundos}`


}