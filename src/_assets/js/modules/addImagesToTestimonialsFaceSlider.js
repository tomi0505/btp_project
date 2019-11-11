const slickTestimonialsFaceSlider = document.querySelector('.slick-testimonials-face-slider-b');

const addImagesToTestimonialsFaceSlider = function(numberOfPhotos) {
  let imageId = 0;
  let i = 0;

  do {
    const slideItemContainerTemplate = `
    <div>
      <img src="https://i.pravatar.cc/150?img=${imageId}" alt="ludzka twarz">
    </div>
  `;

    const slideItemNewEl = document.createElement('div');
    slideItemNewEl.innerHTML = slideItemContainerTemplate;

    slickTestimonialsFaceSlider.appendChild(slideItemNewEl);

    i++;
    imageId+=3;
  } while(i < numberOfPhotos);
};

export default addImagesToTestimonialsFaceSlider;