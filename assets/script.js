const backToTopBtn = document.querySelector(".backToTop");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backToTopBtn.classList.add("active");
  }
  else {
    backToTopBtn.classList.remove("active")
  }
})
