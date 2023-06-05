const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-cart-item')
        } else {
            entry.target.classList.remove('show-cart-item')
        }
    })
})



const cartElements = document.querySelectorAll('.cart-item')
cartElements.forEach((el) => observer.observe(el))