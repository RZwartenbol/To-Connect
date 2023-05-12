const topbtn = document
  .getElementById("backToTopBtn")
  .addEventListener("click", scrollToTop);

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
