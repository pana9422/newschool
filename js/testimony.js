(function () {
    const testimonies = [...document.querySelectorAll(".testimony__card")]

    const buttonBack = document.querySelector("#testimony__back")
    const buttonNext = document.querySelector("#testimony__next")

    let value;

    const changePosition = (change) => {
        const currentElement = Number(document.querySelector(".testimony__card--show").dataset.id)
        
        value = currentElement;
        value += change

        if (value === 0 || value === testimonies.length+1) {
            value = value=== 0 ? testimonies.length : 1;
        }

        testimonies[currentElement-1].classList.toggle('testimony__card--show')
        testimonies[value-1].classList.toggle('testimony__card--show')
    }

    buttonBack.addEventListener("click", () => changePosition(-1))
    buttonNext.addEventListener("click", () => changePosition(1))

})()