const slides = document.querySelectorAll('.slide')

//Show Card

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()


        slide.classList.add('active')
    })
}

//Hide Card

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}