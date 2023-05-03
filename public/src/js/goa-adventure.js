/* carousel start */
(function ($) {
    "use strict";
    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        nav: false,
        dots: true,
        dotsData: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


})(jQuery);

// Wait for the DOM to be fully loaded before doing anything
document.addEventListener("DOMContentLoaded", function () {
    // Get the navbar toggler button, the navbar collapse element, and the close button
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");
    var closeButton = document.querySelector(".close-btn");

    // Add a click event listener to the navbar toggler button
    navbarToggler.addEventListener("click", function () {
        // Toggle the "show" class on the navbar collapse element
        navbarCollapse.classList.toggle("show");
    });

    // Add a click event listener to the close button
    closeButton.addEventListener("click", function () {
        // Remove the "show" class from the navbar collapse element
        navbarCollapse.classList.remove("show");
    });
});
