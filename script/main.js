// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1280: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

// Event listener for toggle light-dark mode theme
document.addEventListener("DOMContentLoaded", function () {
  var icon = document.getElementById("icon");
  var theme = localStorage.getItem("theme");

  if (theme === "dark") {
    document.body.classList.add("dark-theme");
    icon.src = "assets/images/dark-mode.svg";
  }

  icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      icon.src = "assets/images/dark-mode.svg";
      localStorage.setItem("theme", "dark");
    } else {
      icon.src = "assets/images/light-mode.svg";
      localStorage.removeItem("theme");
    }
  };
});
