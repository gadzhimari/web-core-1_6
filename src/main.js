import './sass/main.scss';

var init = false;
var swiper;

if (window.innerWidth < 784) {
    if (!init) {
        init = true;
        swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            slidesPerView: "auto", 
            spaceBetween: 0,
            slideToClickedSlides: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            grabCursor: true,
            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },
        });
    }
    } else if (init) { 
    if (swiper) {
        swiper.destroy();
    }
    init = false;
}