
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

  return countryDetail;

};

module.exports = CountryDetailView;
