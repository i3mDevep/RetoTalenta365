
const ApiService = require('./service');
const apiService = new ApiService();

const getPlanets = async (page) => {
   return apiService.getPlanets(page);
}
const getPlanet = async (id) => {
    return apiService.getPlanet(id);
 }

module.exports = { getPlanets, getPlanet };