const rwd = window.matchMedia("(min-width: 1200px)");

const rwdGo = function() {
  const newsletterFormContainer = document.querySelector('.newsletter-form-b__container');

  if(rwd.matches) {
    newsletterFormContainer.classList.add('input-group-lg');
  } else {
    newsletterFormContainer.classList.remove('input-group-lg');
  }
};

const customHeightNewsletterForms = function() {
  rwdGo(rwd);
  rwd.addListener(rwdGo);
};

export default customHeightNewsletterForms;