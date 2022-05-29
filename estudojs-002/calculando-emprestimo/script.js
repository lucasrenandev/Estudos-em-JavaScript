
let calcular = document.querySelector('#calcular')
let empréstimo 

calcular.addEventListener('click', calculo_empréstimo)

function calculo_empréstimo() {
    const valor_casa = document.querySelector('#valor-casa').value
    const salário_comprador = document.querySelector('#salario-comprador').value
    const anos_financiamento = document.querySelector('#anos-financiamento').value
    const saida = document.querySelector('#saida')

    const prestação = Number(valor_casa / (anos_financiamento * 12))
    const salário_mínimo = Number(salário_comprador * 30 / 100)

    saida.innerHTML = `Preço da casa <strong>R$ ${valor_casa}</strong> com empréstimo de ${anos_financiamento} anos!`
    saida.innerHTML += `<br> <br> O empréstimo será de <strong>R$ ${prestação.toFixed(2)}</strong>`

    if (prestação <= salário_mínimo) {

        empréstimo = ` <br> <br> O empréstimo foi <strong>Aprovado</strong>!`
    }

    else {

        empréstimo = `<br> <br> O empréstimo foi <strong>Negado</strong>!`
    }

    saida.innerHTML += empréstimo
}