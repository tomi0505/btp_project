import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';
import 'bootstrap';
import './scss/style.scss';
import slickTestimonialsFace from "./_assets/js/modules/slickInit";
import addImagesToTestimonialsFaceSlider from "./_assets/js/modules/addImagesToTestimonialsFaceSlider";

document.addEventListener("DOMContentLoaded", function() {
  addImagesToTestimonialsFaceSlider(23);
  slickTestimonialsFace();
}, false);