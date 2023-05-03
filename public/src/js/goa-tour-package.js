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
