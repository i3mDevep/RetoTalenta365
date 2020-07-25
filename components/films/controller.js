
const ApiService = require('./service');
const apiService = new ApiService();

const getFilms = async () => {
   return apiService.getFilms();
}
const getFilm = async (id) => {
    return apiService.getFilm(id);
 }

module.exports = { getFilms, getFilm };