const Isotope = require('isotope-layout');
const imagesLoaded = require('imagesloaded');

const elem = document.querySelector('.grid');

imagesLoaded(elem, function (instance) {
  const iso = new Isotope(elem, {
    itemSelector: '.grid__item',
    layoutMode: 'masonry',
    masonry: {
      columnWidth: '.grid__sizer',
      gutter: 25
    }
  });

  const filtersElem = document.querySelector('.js-filters-button-group');
  filtersElem.addEventListener('click', (evt) => {
    if (!evt.target.closest('button')) {
      return false;
    }

    let filterValue = evt.target.getAttribute('data-filter');
    iso.arrange({filter: filterValue});
  });

  const buttonGroups = document.querySelectorAll('.js-button-group');
  for (let i = 0; i < buttonGroups.length; i++) {
    let buttonGroup = buttonGroups[i];
    radioButtonGroup(buttonGroup);
  }

  function radioButtonGroup(buttonGroup) {
    buttonGroup.addEventListener('click', function (evt) {
      if (!evt.target.closest('button')) {
        return false;
      }

      buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
      evt.target.classList.add('is-checked');
    });
  }
});
