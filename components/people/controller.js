
const ApiService = require('./service');
const apiService = new ApiService();

const getPeople = async () => {
   return apiService.getPeople();
}
const getPerson = async (id) => {
    return apiService.getPerson(id);
 }

module.exports = { getPeople, getPerson };