
document.addEventListener('DOMContentLoaded', function () {
    let servicesSwipersArr = [];
    const servicesSwipers = document.querySelectorAll(".services-swiper");
    servicesSwipers.length && servicesSwipers.forEach((swiper, index) => {
        let swiperID = swiper.id;
        let sectionID = swiper.closest(".services-swiper-section").id;
        servicesSwipersArr[index] = new Swiper(".services-swiper#" + swiperID, {
            speed: 400,
            // watchOverflow: true,
            // centerInsufficientSlides: true,
            // centeredSlidesBounds: true,
            spaceBetween: 15,
            slidesPerView: 'auto',
            pagination: {
                el: `#${sectionID} .swiper-pagination`,
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: `#${sectionID} .swiper-button-next`,
                prevEl: `#${sectionID} .swiper-button-prev`,
            },

        });
    });
});

//# sourceMappingURL=app.js.map
