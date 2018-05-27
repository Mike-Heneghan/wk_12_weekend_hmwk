const RequestHelper = require('../helpers/request_helper.js');
const PubSub =  require('../helpers/pub_sub.js');

const Countries = function () {
  this.countriesData = [];
}

Countries.prototype.getData = function () {
// Request Helper takes in a URL of the API to be queried.
const RequestHelper = new RequestHelper('https://restcountries.eu/rest/v2/all')
};
//
RequestHelper.get((data) => {

})
module.exports = Countries;
