const circles = document.querySelectorAll('.courses__top-lenght-circle')

circles.forEach(circle => {
    circle.addEventListener('click', (event) => {
        removeActive(circles)
        circle.classList.add('circle-active')
    })
})

const removeActive = (items) => {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('circle-active')
    }
}