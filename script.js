let nav = document.querySelector("nav");
let scrollToTopButton = document.querySelector(".scroll-to-top");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollToTopButton.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollToTopButton.style.display = "none";
  }
};
