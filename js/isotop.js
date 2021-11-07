'use strict';

(function (){
  const elem = document.querySelector('.grid');
  new Isotope( elem, {
    // options
    itemSelector: '.grid__item',
    layoutMode: 'fitRows'
  });

// element argument can be a selector string
//   for an individual element
  new Isotope( '.grid', {
    // options
  });
})();
