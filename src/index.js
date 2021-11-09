const Isotope = require('isotope-layout');
const imagesLoaded = require('imagesloaded');

const elem = document.querySelector('.grid');

imagesLoaded(elem, function (instance) {
  console.log('all images are loaded');
  const iso = new Isotope(elem, {
    itemSelector: '.grid__item',
    layoutMode: 'masonry',
    masonry: {
      columnWidth: '.grid__sizer',
      gutter: 25
    }
  });
});
