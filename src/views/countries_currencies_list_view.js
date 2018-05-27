const PubSub = require('../helpers/pub_sub.js');

const CountriesCurrenciesListView = function(container) {
  this.container = container;
};

CountriesCurrenciesListView.prototype.getCountriesData = function () {
  PubSub.subscribe('Countries:countries-ready', (evt) => {
    this.renderList(evt.detail);
  })
};

CountriesCurrenciesListView.prototype.renderList = function (countries) {
  const countriesArray = countries;
  countriesArray.forEach((country) => {
    const item = document.createElement('h3');
    item.textContent = country.name;
    this.container.appendChild(item);
  })

};

module.exports = CountriesCurrenciesListView;
