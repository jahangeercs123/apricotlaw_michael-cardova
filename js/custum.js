$(document).ready(function () {
    $('.author-slider-text').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
    });

    $('.slider-items').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
    });
    $('.client-feedback-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
    });
});
