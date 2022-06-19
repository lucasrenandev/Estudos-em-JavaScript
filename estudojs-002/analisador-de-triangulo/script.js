
const button = document.getElementById('button')

button.addEventListener('click', analisadorTriangulo)

function analisadorTriangulo() {

    const resultado = document.getElementById('resultado')
    const ladoA = Number(window.prompt('Informe à medida do lado A:'))
    const ladoB = Number(window.prompt('Informe à medida do lado B:'))
    const ladoC = Number(window.prompt('Informe à medida do lado C:'))

    if (ladoA == '' || ladoA !== Number(ladoA) || ladoA <= 0 
    || ladoB == '' || ladoB !== Number(ladoB) || ladoB <= 0 
    || ladoC == '' || ladoC !== Number(ladoC) || ladoC <= 0) {

        resultado.innerHTML = "Medidas inválidas ou campo vazio. Tente novamente!"
    }

    else {
        
        if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
        
        resultado.innerHTML = "As medidas podem formar um triângulo: "
        if (ladoA == ladoB && ladoC == ladoA && ladoC == ladoB){
            resultado.innerHTML += '<mark>Equilátero</mark>'
        }

        else if (ladoA == ladoB || ladoC == ladoA || ladoC == ladoB) {
            resultado.innerHTML += '<mark>Isósceles</mark>'
        }

        else if (ladoA !== ladoB && ladoC !== ladoA && ladoC !== ladoB) {
            resultado.innerHTML += '<mark>Escaleno</mark>'
        }

        else {
            resultado.innerHTML = 'As medidas não podem formar um triângulo!' 
        }
        
    }

    }

}