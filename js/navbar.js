const layout = document.querySelector(".layout");
const button_navigation = document.querySelector(".navbar-navigation")
const navbar_content = document.querySelector(".navbar-nav-container")

const navbar = document.getElementById("navbar")
const navbarTop = navbar.offsetTop

const navbarScrollTop = () => {


    console.log(navbarTop)
    if (window.scrollY >= navbarTop) {
        navbar.classList.add('p-fixed')
    } else {
        navbar.classList.remove('p-fixed')
    }
}

window.onscroll = () => navbarScrollTop()










button_navigation.addEventListener("click", () => {
    navbar_content.classList.toggle("show")
    layout.classList.toggle("overflow-y-hidden")
})

