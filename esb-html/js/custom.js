$(document).ready(function() {
    // Example Application
    $('.banner-top').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        autoplay: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.logo-slide').owlCarousel({
        loop: true,
        margin: 20,
        dots: true,
        autoplay: false,
        smartSpeed: 1000,
        navText: ['<p><img src="images/left-arrow.svg" class="img-fluid" alt="Left arrow" /></p>', '<p><img src="images/right-arrow.svg" class="img-fluid" alt="Right arrow" /></p>'],
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 6
            }
        }
    });

});