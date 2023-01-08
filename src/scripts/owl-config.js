$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    rtl: false,
    nav: false,
    loop: true,
    center: true,
    dots: false,
    lazyLoad: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      }
    }
  })
});