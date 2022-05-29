
var calcular = document.querySelector('#calcular')

calcular.addEventListener('click', calculo_litros)

function calculo_litros() {
    
    const largura = document.querySelector('#largura').value
    const altura = document.querySelector('#altura').value
    const resultado = document.querySelector('#resultado')

    if (largura == '' || altura == '') {

        window.alert('Preencha os campos para continuar!')
    }
    
    else {

        const área = largura * altura

        resultado.innerHTML = `Sua parede tem a dimensão de ${largura} x ${altura} e sua <strong>área</strong> é de <strong>${área} m²</strong>!`
    
        const tinta = área / 2
    
        resultado.innerHTML += `<br> <br> Para pintar esta parede, você precisará de <strong>${tinta}L</strong> de tinta!`
    }

}