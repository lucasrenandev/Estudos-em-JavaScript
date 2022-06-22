
const btnMobile = document.getElementById("btn-mobile")

btnMobile.addEventListener('click', menuMobile)
btnMobile.addEventListener('touchstart', menuMobile)

function menuMobile(event) {
    
    if (event.type === 'touchstart') event.prevent.Default()
    const nav = document.getElementById("nav")
    nav.classList.toggle('active')
    const active = nav.classList.contains('active')  
    event.currentTarget.setAttribute('aria-expanded', active)
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    }
    else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}