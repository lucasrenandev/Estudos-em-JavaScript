
let saida
let calculo

function calcular(n1, n2) {

    n1 = Number(document.getElementById('n1').value)
    n2 = Number(document.getElementById('n2').value)
    const selector = document.getElementById('selector').value
    const resultado = document.getElementById('resultado')

    switch(selector) {

            case '+':
        
                calculo = n1 + n2
                saida = `${n1} + ${n2} = ${calculo}`
                break
        
            case '-':
        
                calculo = n1 - n2
                saida = `${n1} - ${n2} = ${calculo}`
                break
        
            case '*':
        
                calculo = n1 * n2
                saida = `${n1} x ${n2} = ${calculo}`
                break
        
            case '/':
        
                calculo = n1 / n2

                if (Number.isNaN(calculo)) {

                    saida = "Insira um divisível válido!"
                    break
                }

                else {

                    saida = `${n1} / ${n2} = ${calculo.toFixed(2)}`
                    break
                }
        
            default:

                saida = "Impossível Contar!"
                break
    }   

    resultado.innerHTML = saida
    
}