const menu = document.querySelector("#menu")
const navlinks = document.querySelector(".nav-links")
const navbar = document.querySelector(".navbar div .navbar-links")

menu.addEventListener('click', () => {
    navlinks.classList.toggle('nav-active')
    navbar.classList.toggle('disappear')
})