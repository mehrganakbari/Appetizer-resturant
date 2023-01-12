$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    rtl: false,
    nav: false,
    loop: true,
    center: true,
    dots: false,
    // lazyLoad: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1280: {
        items: 1
      },
      1536: {
        items: 1
      }
    }
  })
});