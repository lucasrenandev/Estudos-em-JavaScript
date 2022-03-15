var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var date = new Date()
//var hora = date.getHours()
var hora = 20
msg.innerHTML='Agora são ' + hora + ' horas' + '!'

if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = './img/manha.jpg'
    document.body.style.background='#F6B633'
}else if (hora >=12 && hora <= 18) {
    //boa tarde
    img.src = './img/tarde.jpg'
    document.body.style.background = '#BE702D'
}else {
    //boa noite
    img.src = './img/noite.jpg'
    document.body.style.background = '#0A203D'
}  