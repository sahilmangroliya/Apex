$(document).ready(function () {
    $('#slider_1').owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
        // nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        navText: ['<i class="fa-sharp fa-solid fa-angle-left"></i>', '<i class="fa-sharp fa-solid fa-angle-right"></i>'],
        smartSpeed: 1000,
        autoplayHoverPause: true,
    });
    $('#slider_2').owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
        smartSpeed: 1000,
        autoplayHoverPause: true,
    });

    $(window).scroll(function () {
        w = $(window).scrollTop();

        if (w > 150) {
            $('.main_header').addClass('position-fixed top-0 start-0 w-100 top_header_fix')
        }
        else {
            $('.main_header').removeClass('position-fixed top-0 start-0 w-100 top_header_fix')
        }
    })

});