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
        breakpoint: 576,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 9,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 12,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 17,
        }
      }
    ]
  });
};

export default slickTestimonialsFace;