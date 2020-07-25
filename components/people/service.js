const axios = require('axios');

class ApiService {
    async getPeople () {
        const response = await axios.get(`https://swapi.dev/api/people`)
        const myResponse = []
        response.data.results.forEach(element => {
            const { name, gender, hair_color, skin_color, eye_color, height, homeworld, species } = element;
            myResponse.push({
                name,
                gender,
                hair_color,
                skin_color,
                eye_color,
                height,
                homeworld,
                species
            })
        });
        return  myResponse;
    }
    async getPerson (id) {
        const response = await axios.get(`https://swapi.dev/api/people/${id}`)
        const { name, gender, hair_color, skin_color, eye_color, height, homeworld, species } = response.data;
        const myResponse = {
            name,
            gender,
            hair_color,
            skin_color,
            eye_color,
            height,
            homeworld,
            species        }
        return myResponse;
    }
}
module.exports= ApiService;