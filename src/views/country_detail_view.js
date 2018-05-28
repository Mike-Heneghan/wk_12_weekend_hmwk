
const CountryDetailView = function(country){
  this.country = country
}

CountryDetailView.prototype.createDetailView = function () {
  const countryDetail = document.createElement('div');
  countryDetail.classList.add('country-detail');

  const countryHeading = document.createElement('h2');
  countryHeading.textContent = this.country.name;
  countryDetail.appendChild(countryHeading);

  const countryLanguages = document.createElement('ul');
  const languagesArray = [];
  this.country.languages.forEach((language) => {
    languagesArray.push(language.name);
  });
  languagesArray.forEach((language) => {
    const languageItem = document.createElement('li');
    languageItem.textContent = language;
    countryLanguages.appendChild(languageItem);
  });
  countryDetail.appendChild(countryLanguages);

  const countryCurrencies = document.createElement('ul');
  const currenciesArray = [];
  this.country.currencies.forEach((currency) => {
    currenciesArray.push(currency.name);
  });
  currenciesArray.forEach((currency) => {
    const currencyItem = document.createElement('li');
    currencyItem.textContent = currency;
    countryCurrencies.appendChild(currencyItem);
  });
  countryDetail.appendChild(countryCurrencies);

  return countryDetail;

};

module.exports = CountryDetailView;
