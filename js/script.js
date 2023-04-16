// header section start here
let changeIcon = function (icon) {
  icon.classList.toggle("fa-xmark");
};

// search-bar
const searchBtn = document.querySelector(".search-icon"),
  searchField = document.querySelector(".show-search"),
  closeBtn = document.querySelector(".search-button");

searchBtn.addEventListener("click", (e) => {
  searchBtn.classList.add("active");
  searchField.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  searchBtn.classList.remove("active");
  searchField.classList.remove("active");
});

AOS.init();
// jquery

// header section starts here
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $("#navbar").addClass("scrolled");
  } else {
    $("#navbar").removeClass("scrolled");
  }
});

// top button
const toTop = document.querySelector(".top_btn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
