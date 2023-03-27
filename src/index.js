const debounce = require('lodash.debounce');
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';

import {
  createCountryCard,
  createMarkupList,
  resetMarkup,
} from './renderMarkup';

const DEBOUNCE_DELAY = 300;

const inputEl = document.getElementById('search-box');

inputEl.addEventListener(
  'input',
  debounce(getCityNameFromInput, DEBOUNCE_DELAY)
);

function getCityNameFromInput(event) {
  const countryName = inputEl.value.trim();

  fetchCountries(countryName)
    .then(createMarkup)
    .catch(() => {
      resetMarkup();
      Notify.failure('Oops, there is no country with that name');
    });

  if (countryName === '') {
    resetMarkup();

    return;
  }
}

function createMarkup(country) {
  if (!country) {
    return;
  }

  if (country.length <= 10 && country.length > 1) {
    resetMarkup();
    return createMarkupList(country);
  } else if (country.length === 1) {
    resetMarkup();
    return createCountryCard(country);
  } else if (country.length > 10) {
    resetMarkup();
    Notify.warning(
      'Too many matches found. Please enter a more specific name.'
    );
  }
}
console.log(inputEl);
