const Countries = require('./models/countries.js');
const CountriesCurrenciesListView = require('./views/countries_currencies_list_view.js');


document.addEventListener('DOMContentLoaded', () => {
  // Hook into the dom to get the div which will contain the countries and currencies information.
  const listContainer = document.querySelector('#country-list');

  // Need to create a view to maipulate the dom object.
  const countriesCurrenciesListView = new CountriesCurrenciesListView(listContainer);
  countriesCurrenciesListView.getCountriesData();

// New up a countries object and call getData to return the countries and currencies from the api.
  const countries = new Countries;
  countries.getData();

});
