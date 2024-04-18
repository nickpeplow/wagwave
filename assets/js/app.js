const navMenu = document.querySelector('.header nav');
window.onscroll = function () {
    const windowHeight = window.innerHeight;

    if (window.scrollY >= 20) {
        navMenu.classList.add('active');
    } else {
        navMenu.classList.remove('active');
    }
};

// ============ Slider
$('.owl-carousel').owlCarousel({
    loop: true,
    dots: true,
    autoplay: true,
    margin: 16,
    dotsEach: true,
    // autoplayHoverPause: true, //When mouse over stop auto play
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        992: {
            items: 3,
        },
        1200: {
            items: 4,
        },
    },
});

document.getElementById('full-year').textContent = new Date().getFullYear();
