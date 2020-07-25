const express = require('express');
const { getPeople, getPerson } = require('./controller');
const response = require('../../api/response');
const router = express.Router();

router.get('/', (req, res) => {
    getPeople()
    .then((result) => response.success(req, res, result))
    .catch((e) => response.error(req, res, e));
})

router.get('/:id', (req, res) => {
    getPerson(req.params.id)
    .then((result) => response.success(req, res, result))
    .catch((e) => response.error(req, res, e));
})

module.exports = router;