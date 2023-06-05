const navbar = document.querySelector('.navbar')
const cartItems = document.querySelector('.cart-items-section')
const searchBtn = document.querySelector('.search-box-section')


document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active')
    searchBtn.classList.remove('active')
    cartItems.classList.remove('active')     
}

document.querySelector('#shopping-cart').onclick = () => {
    cartItems.classList.toggle('active')
    navbar.classList.remove('active')
    searchBtn.classList.remove('active')   
}

document.querySelector('#search-btn').onclick = () => {
    searchBtn.classList.toggle('active')
    navbar.classList.remove('active')
    cartItems.classList.remove('active')     
}

window.onscroll = () => {
    navbar.classList.remove('active')
    searchBtn.classList.remove('active')
    cartItems.classList.remove('active')               
}