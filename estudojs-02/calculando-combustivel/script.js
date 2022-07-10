
let km, litros_combustível

const button = document.getElementById('button')

button.addEventListener('click', calcular_combustível)

function calcular_combustível() {

    const dinheiro = Number(window.prompt('Quantos R$ você quer abastecer?'))
    const resultado = document.getElementById('resultado')

    litros_combustível = Number(dinheiro / 5)
    km = Number(litros_combustível * 20)

    if (dinheiro <= 0 || dinheiro == '') {

        resultado.innerHTML = "Digite um valor válido para ser calculado!"
    }

    else {

        resultado.innerHTML = `Com <mark>R$${dinheiro}</mark> você pode comprar <mark>${litros_combustível}L</mark> de combustível. E você conseguirar andar <mark>${km}KM</mark>`
        
    }

}