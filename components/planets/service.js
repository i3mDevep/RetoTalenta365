const axios = require('axios');

class ApiService {
    async getPlanets (page) {
        const response = await axios.get(`https://swapi.dev/api/planets/?page=${page || 1}`)
        const myResponse = []
        response.data.results.forEach(element => {
            const { name, terrain, gravity, diameter, population } = element;
            myResponse.push({
                name,
                terrain,
                diameter,
                gravity,
                population
            })
        });
        return myResponse;
    }
    async getPlanet (id) {
        const response = await axios.get(`https://swapi.dev/api/planets/${id}`)
        const { name, terrain, gravity, diameter, population } = response.data;
        const myResponse = {
            name,
            terrain,
            gravity,
            diameter,
            population
        }
        return myResponse
    }
}
module.exports= ApiService;