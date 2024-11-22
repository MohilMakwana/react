// BRANDS SWIPPER SLIDER 

var swiper = new Swiper('.brandSwiper', {
    slidesPerView: 7,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 1000,
    },
    speed: 1500,
    breakpoints: {
        1200: {
            slidesPerView: 7,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        500: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
})



// SKILLS SWIPPER SLIDER 

var swiper = new Swiper('.skillSwiper', {
    slidesPerView: 6,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 1000,
    },
    speed: 1500,
    breakpoints: {
        1200: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        500: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
})


// BLOGS SWIPPER SLIDER 

var swiper = new Swiper('.blogSwiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 1000,
    },
    speed: 1500,
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        500: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
})

// TESTIMONIALS SWIPPER SLIDER 

var swiper = new Swiper('.testimonialSwiper', {
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,
    autoplay: {
        delay: 1500,
    },
    speed: 1500,
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        500: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
})


// SHOW MENU 

const bar = document.querySelector('.bars');
const menu = document.querySelector('.menu');

bar.addEventListener('click', () => {
    menu.classList.toggle('show_menu')
})