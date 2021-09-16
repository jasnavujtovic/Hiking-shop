$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 5,
        autoplaySpeed: 1000,
        autoplay: true,
        nav    : true,
        smartSpeed :900,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 5
            }
        }
    });

});