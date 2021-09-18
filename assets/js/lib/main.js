var $j = jQuery.noConflict();
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        nav: true,
        center: true,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        },

    });
    $j('.our-clients').sliphover({ backgroundColor: 'rgba(240, 14, 14, 0.6)', caption: 'title', });



});