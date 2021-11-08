const Isotope = require('isotope-layout');

const elem = document.querySelector('.grid');
const iso = new Isotope( elem, {
  // options
  itemSelector: '.grid__item',
  layoutMode: 'masonry',
  masonry: {
    columnWidth: '.grid__sizer',
    gutter: 10
  }
});
