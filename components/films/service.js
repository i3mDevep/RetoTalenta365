const axios = require('axios');

class ApiService {
    async getFilms () {
        const response = await axios.get(`https://swapi.dev/api/films`)
        const myResponse = []
        response.data.results.forEach(element => {
            const { title } = element;
            myResponse.push({
                name: title
            })
        });
        return myResponse;
    }
    async getFilm (id) {
        const response = await axios.get(`https://swapi.dev/api/films/${id}`)
        const { title } = response.data;
        const myResponse = {
            name: title
        }
        return myResponse;
    }
}
module.exports= ApiService;