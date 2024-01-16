window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var scrollTopButton = document.getElementById("scrollTopButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.classList.add("show");
  } else {
    scrollTopButton.classList.remove("show");
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;  // Para navegadores da web
  document.documentElement.scrollTop = 0;  // Para IE/Edge
}// JavaScript Document