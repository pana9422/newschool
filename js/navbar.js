( function (d) {
    const navbar = d.querySelector(".header__navbar")
    const navigation = d.querySelector(".header__button-navigation")

    navigation.addEventListener("click", () => {
        navbar.classList.toggle("header__navbar--open")
        navigation.classList.toggle("header__button-navigation--active")
    })
})(document)