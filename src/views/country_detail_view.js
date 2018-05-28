
const CountryDetailView = function(country){
  this.country = country
}

CountryDetailView.prototype.createDetailView = function () {
  const countryDetail = document.createElement('div');
  countryDetail.classList.add('country-detail');

  const countryHeading = document.createElement('h2');
  countryHeading.textContent = this.country.name;
  countryDetail.appendChild(countryHeading);

  return countryDetail;

};

module.exports = CountryDetailView;
