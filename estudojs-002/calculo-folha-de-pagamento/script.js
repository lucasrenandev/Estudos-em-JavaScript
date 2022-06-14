
const button = document.getElementById("calcular")

button.addEventListener('click', Salariomax900)
button.addEventListener('click', Salariomax1500)
button.addEventListener('click', Salariomax2500)
button.addEventListener('click', Salario_acimade2500)
button.addEventListener('click', validacao)

function validacao() {

    const saida = document.getElementById('saida')
    const hora = Number(document.getElementById("hora").value)
    const horas_trabalhadas = Number(document.getElementById("horas-trabalhadas").value)

    if (hora == '' || hora <= 0 || horas_trabalhadas == '' || horas_trabalhadas <= 0) {

        saida.innerHTML = "[ERRO] Valores inválidos ou campo vazio! "

    }

}

function Salariomax900() {

    const saida = document.getElementById('saida')
    const hora =  Number(document.getElementById('hora').value)
    const horas_trabalhadas =  Number(document.getElementById('horas-trabalhadas').value)

    const salario_bruto = hora * horas_trabalhadas 

    if (salario_bruto <= 900) {

        saida.innerHTML = `Salário bruto: <mark>R$ ${salario_bruto.toFixed(2)}</mark> (Livre)`
    }
    
}

function Salariomax1500() {

    const saida = document.getElementById('saida')
    const hora =  Number(document.getElementById('hora').value)
    const horas_trabalhadas =  Number(document.getElementById('horas-trabalhadas').value)

    const salario_bruto = hora * horas_trabalhadas 

    if (salario_bruto > 900 && salario_bruto <= 1500) {

        let imposto_renda = salario_bruto + (salario_bruto * 5 / 100)
        let desconto_renda = imposto_renda - salario_bruto
        let inss = salario_bruto + (salario_bruto * 10 / 100)
        let desconto_inss = inss - salario_bruto
        let fgts = salario_bruto + (salario_bruto * 11 / 100)
        let desconto_fgts = fgts - salario_bruto

        let total_desconto = desconto_renda + desconto_inss

        let salario_liquido = salario_bruto - total_desconto

        saida.innerHTML = `Salário Bruto: <mark>R$ ${salario_bruto}</mark>`
        saida.innerHTML += `<br>Imposto de Renda: - <mark>R$ ${desconto_renda.toFixed(2)}</mark>`
        saida.innerHTML += `<br>INSS: - <mark>R$ ${desconto_inss.toFixed(2)}</mark>`
        saida.innerHTML += `<br>FGTS: <mark>R$ ${desconto_fgts.toFixed(2)}</mark>`
        saida.innerHTML += `<br>Total de Desconto: - <mark>R$ ${total_desconto.toFixed(2)}</mark>`
        saida.innerHTML += `<br>Salário Liquido: <mark>R$ ${salario_liquido.toFixed(2)}</mark>`
    }

}

function Salariomax2500() {

    const saida = document.getElementById('saida')
    const hora =  Number(document.getElementById('hora').value)
    const horas_trabalhadas =  Number(document.getElementById('horas-trabalhadas').value)

    const salario_bruto = hora * horas_trabalhadas 

    if (salario_bruto > 1500 && salario_bruto <= 2500) {

        let imposto_renda = salario_bruto + (salario_bruto * 10 / 100)
        let desconto_renda = imposto_renda - salario_bruto
        let inss = salario_bruto + (salario_bruto * 10 / 100)
        let desconto_inss = inss - salario_bruto
        let fgts = salario_bruto + (salario_bruto * 11 / 100)
        let desconto_fgts = fgts - salario_bruto

        let total_desconto = desconto_renda + desconto_inss

        let salario_liquido = salario_bruto - total_desconto

        saida.innerHTML = `Salário Bruto: <mark>R$ ${salario_bruto}</mark>`
        saida.innerHTML += `<br>Imposto de Renda: - <mark>R$ ${desconto_renda.toFixed(2)}</mark>`
        saida.innerHTML += `<br>INSS: - <mark>R$ ${desconto_inss.toFixed(2)}</mark>`
        saida.innerHTML += `<br>FGTS: <mark>R$ ${desconto_fgts.toFixed(2)}</mark>`
        saida.innerHTML += `<br>Total de Desconto: - <mark>R$ ${total_desconto.toFixed(2)}</mark>`
        saida.innerHTML += `<br>Salário Liquido: <mark>R$ ${salario_liquido.toFixed(2)}</mark>`
    }
}

function Salario_acimade2500() {
    
    const saida = document.getElementById('saida')
    const hora =  Number(document.getElementById('hora').value)
    const horas_trabalhadas =  Number(document.getElementById('horas-trabalhadas').value)

    const salario_bruto = hora * horas_trabalhadas 

    if (salario_bruto > 2500) {

        let imposto_renda = salario_bruto + (salario_bruto * 20 / 100)
        let desconto_renda = imposto_renda - salario_bruto
        let inss = salario_bruto + (salario_bruto * 10 / 100)
        let desconto_inss = inss - salario_bruto
        let fgts = salario_bruto + (salario_bruto * 11 / 100)
        let desconto_fgts = fgts - salario_bruto

        let total_desconto = desconto_renda + desconto_inss

        let salario_liquido = salario_bruto - total_desconto

        saida.innerHTML = `Salário Bruto: <mark>R$ ${salario_bruto}</mark>`
        saida.innerHTML += `<br>Imposto de Renda: - <mark>R$ ${desconto_renda.toFixed(2)}</mark>`
        saida.innerHTML += `<br>INSS: - <mark>R$ ${desconto_inss.toFixed(2)}</mark>`
        saida.innerHTML += `<br>FGTS: <mark>R$ ${desconto_fgts.toFixed(2)}</mark>`
        saida.innerHTML += `<br>Total de Desconto: - <mark>R$ ${total_desconto.toFixed(2)}</mark>`
        saida.innerHTML += `<br>Salário Liquido: <mark>R$ ${salario_liquido.toFixed(2)}</mark>`
    }
}

