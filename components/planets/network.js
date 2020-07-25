const express = require('express');
const { getPlanets, getPlanet } = require('./controller');
const response = require('../../api/response');
const router = express.Router();

router.get('/', (req, res) => {
    getPlanets(req.query.page)
    .then((result) => response.success(req, res, result))
    .catch((e) => response.error(req, res, e));
})

router.get('/:id', (req, res) => {
    getPlanet(req.params.id)
    .then((result) => response.success(req, res, result))
    .catch((e) => response.error(req, res, e));
})

module.exports = router;