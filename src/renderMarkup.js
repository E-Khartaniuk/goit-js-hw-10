// import { countryList, countryInfo } from './index';

export let countryList = document.querySelector('.country-list');
export let countryInfo = document.querySelector('.country-info');

export function createMarkupList(country) {
  const countryMarkap = country
    .map(country => {
      return `<li style="display: flex; gap: 15px; align-items: center; background-color: beige; border-radius: 10px; padding-left: 20px; margin-bottom: 15px; width: 500px; height: 50px">
            <div style="width: 50px;">
                <img src="${country.flags.svg}" alt="Country flag" style="max-height: 20px;">
            </div>
        <h3>${country.name.common}</h3>
    </li>`;
    })
    .join('');

  countryList.insertAdjacentHTML('afterbegin', countryMarkap);
}

export function createCountryCard(country) {
  const countryCardMarkap = country
    .map(country => {
      return `
        <img src="${country.flags.svg}" alt="Country flag" width="50" >
        <h3>${country.name.common}</h3>
        <h3>Capital: ${country.capital}</h3>
        <h3>Population: ${country.population}</h3>
        <h3>Languages: ${Object.values(country.languages).join(', ')}</h3>`;
    })
    .join();
  countryList.style.cssText = 'list-style: none;';
  countryInfo.style.cssText =
    'background-color: beige; border-radius: 10px; padding: 20px; width: 500px;';
  countryInfo.innerHTML = countryCardMarkap;
}

export function resetMarkup() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
  countryInfo.removeAttribute('style');
}
