/* window loader start */
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.classList.add("hidden");
    }, 500);
});
/* window loader end */

/* header start */
// Get the navbar toggler and the navbar collapse element
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Add an event listener to the navbar toggler to toggle the visibility of the navbar collapse element
navbarToggler.addEventListener('click', function () {
    navbarCollapse.classList.toggle('show');
});

// Add an event listener to the window to hide the navbar collapse element when the user clicks outside of it
window.addEventListener('click', function (event) {
    if (!event.target.matches('.navbar-toggler')) {
        navbarCollapse.classList.remove('show');
    }
});
/* header end */