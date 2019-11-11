const slickTestimonialsFace = function() {
  $('.slick-testimonials-face-slider-b').slick({
    slidesToShow: 21,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    firstMobile: true,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 6,
        }
      }
    ]
  });
};

export default slickTestimonialsFace;