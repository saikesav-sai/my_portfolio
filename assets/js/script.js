// JavaScript
document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll(".fade-element");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function fadeInElements() {
    elements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add("fade-in");
        element.classList.remove("fade-out");
      } else {
        element.classList.remove("fade-in");
        element.classList.add("fade-out");
      }
    });
  }

  document.addEventListener("scroll", fadeInElements);
  document.addEventListener("resize", fadeInElements);
});
