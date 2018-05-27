const RequestHelper = require('../helpers/request_helper.js');
const PubSub =  require('../helpers/pub_sub.js');

const Countries = function () {
  this.countriesData = []
}

Countries.prototype.getData = function () {
// Request Helper takes in a URL of the API to be queried.
const requestHelper = new RequestHelper('https://restcountries.eu/rest/v2/all?fields=name');

requestHelper.get((data) => {
  PubSub.publish('Countries:countries-ready', data);
  console.log(data);
});
}

module.exports = Countries;
