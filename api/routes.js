const planets = require('../components/planets/network');
const films = require('../components/films/network');
const people = require('../components/people/network');

const routes = (app) => {
    app.use('/planets', planets);
    app.use('/films', films);
    app.use('/people', people);
}

module.exports = routes;