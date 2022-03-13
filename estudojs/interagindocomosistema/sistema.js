function verificarSistema() {

var agora = new Date

var saida = document.querySelector('div#saida')

saida.innerHTML = `Horário do sistema recebido: <mark style=background:lightgreen;>${agora}</mark>`

}