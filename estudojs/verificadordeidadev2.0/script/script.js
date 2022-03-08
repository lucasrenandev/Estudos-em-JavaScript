function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', '../img/foto-criancaH.jpg')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', '../img/foto-jovemH.jpg')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', '../img/foto-adultoH.jpg')
            }else{
                //idoso
                img.setAttribute('src', '../img/foto-idosoH.jpg')
            }
        }
    } if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            //crianca
            img.setAttribute('src', '../img/foto-criancaM.jpg')
        }else if (idade < 21) {
            //jovem
            img.setAttribute('src', '../img/foto-jovemM.jpg')
        }else if (idade < 50) {
            //adulto
            img.setAttribute('src', '../img/foto-adultoM.jpg')
        }else {
            //idoso
            img.setAttribute('src', '../img/foto-idosoM.jpg')
        }

    }
    res.style.textAlign='center'
    res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    
    
}