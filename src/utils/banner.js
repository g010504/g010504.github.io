import Swiper from "swiper";
function swiper() {
    var mySwiper = new Swiper("#swiper-container-one", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        effect: "fade",
    });

    mySwiper.el.onmouseover = function () {
        mySwiper.autoplay.stop();
    };
    mySwiper.el.onmouseout = function () {
        mySwiper.autoplay.start();
    };
}

function ctnOne() {
    new Swiper("#swiper-container-three", {
        loop: true,
        slidesPerView: "auto",
        loopedSlides: 15,
    });
}
function ctntwo() {
    new Swiper("#swiper-container-two", {
        loop: true,
        slidesPerView: "auto",
        loopedSlides: 15,
    });
}

export default { swiper, ctnOne, ctntwo }