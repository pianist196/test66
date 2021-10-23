const circles = document.querySelectorAll('.courses__top-lenght-circle')

circles.forEach(circle => {
    circle.addEventListener('click', () => {
        removeActive(circles)
        circle.classList.add('circle-active')
    })
})

const removeActive = (items) => {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('circle-active')
    }
}

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000
    }
});
