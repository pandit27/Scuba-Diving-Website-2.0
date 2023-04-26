// scroll appear logo
var element = document.querySelector(".my-element");
element.style.display = "none"; // hide the element on page load

window.addEventListener("scroll", function () {
  var position = element.getBoundingClientRect();

  // If the element is in view and the user has already scrolled down, show it
  if (position.top < window.innerHeight && position.bottom >= 0 && window.pageYOffset > 0) {
    element.style.display = "block";
  }

  // If the scrollbar is at the top of the page, hide the element
  if (document.documentElement.scrollTop === 0) {
    element.style.display = "none";
  }
});
