const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});

const carousel = document.querySelector(".carousel");
let carouselInstance = M.Carousel.init(carousel, {
  duration: 200,
  fullWidth: true,
  indicators: true,
  noWrap: false
});

setInterval(() => {
  carouselInstance.next();
}, 5000);

// Scrollspy
const ss = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(ss, {});
