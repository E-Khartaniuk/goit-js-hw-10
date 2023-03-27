const MAIN_URL = 'https://restcountries.com/v3.1/name/';
export function fetchCountries(countryName) {
  return fetch(
    `${MAIN_URL}/${countryName}?fields=name,flags,capital,population,languages`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
