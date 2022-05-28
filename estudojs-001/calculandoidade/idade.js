function calculoIdade() {
    let agora = new Date
    let ano = agora.getFullYear()
    let nasc = window.prompt('Em qual ano você nasceu?')
    let idade = ano - nasc
    let res = document.querySelector('div#res')

    res.innerHTML = `Quem nasceu em ${nasc} vai completar <mark>${idade}</mark> anos em ${ano} `
}