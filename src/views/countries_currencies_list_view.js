const PubSub = require('../helpers/pub_sub.js');
const CountryDetailView = require('./country_detail_view');

const CountriesCurrenciesListView = function(container) {
  this.container = container;
};

CountriesCurrenciesListView.prototype.getCountriesData = function () {
  PubSub.subscribe('Countries:countries-ready', (evt) => {
    this.renderDetailViews(evt.detail);
  })
};

CountriesCurrenciesListView.prototype.renderDetailViews = function (countries) {
  const countriesArray = countries;
  countriesArray.forEach((country) => {
    const countryDetailView = new CountryDetailView(country);
    const item = countryDetailView.createDetailView();
    console.log(item);
    this.container.appendChild(item);
  });
};


module.exports = CountriesCurrenciesListView;
