
const input = document.querySelector("input")
const button = document.querySelector("button")
button.addEventListener('click', showPassword)

function showPassword() {

    if(input.type === 'password') {
        input.type = 'text'
        button.innerHTML = "&#x1f60e"
    }
    else {
        input.type = 'password'
        button.innerHTML = '&#x1f610'
    }
    
}