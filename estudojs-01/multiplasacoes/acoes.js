let res = document.querySelector('div#res')


function acoesmultiplas() {
    let n1 = Number(window.prompt('Qual o primeiro valor? '))
    let n2 = Number(window.prompt('Qual o segundo valor? '))
    let valores = Number(window.prompt(`Valores informados: ${n1} e ${n2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))

    res.innerHTML = '<h2>Calculando...'
    
    switch(valores) {
        case 1:
            res.innerHTML += `${n1} + ${n2} = <strong>${n1+n2}`
            break
        case 2:
            res.innerHTML += `${n1} - ${n2} = <strong>${n1-n2}`
            break
        case 3:
            res.innerHTML += `${n1} x ${n2} = <strong>${n1*n2}`
            break
        case 4:
            res.innerHTML += `${n1} / ${n2} = <strong>${(n1/n2).toLocaleString('pt-BR')}`
            break
        default:
            res.innerHTML += 'OPÇÃO INVÁLIDA. TENTE NOVAMENTE!'
            break


    }   
    
}