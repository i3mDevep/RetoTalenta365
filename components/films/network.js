const express = require('express');
const { getFilms, getFilm } = require('./controller');
const response = require('../../api/response');
const router = express.Router();

router.get('/', (req, res) => {
    getFilms()
    .then((result) => response.success(req, res, result))
    .catch((e) => response.error(req, res, e));
})

router.get('/:id', (req, res) => {
    getFilm(req.params.id)
    .then((result) => response.success(req, res, result))
    .catch((e) => response.error(req, res, e));
})

module.exports = router;