import './css/styles.css';

const DEBOUNCE_DELAY = 300;

function fetchCountries(name) {
  fetch('https://restcountries.com/v3.1/all?fields=name,flags`');
}

fetchCountries();