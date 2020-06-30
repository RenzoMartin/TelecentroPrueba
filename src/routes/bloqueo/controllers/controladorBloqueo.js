//imports
const express = require('express');
const router = express.Router()

//imports middlewares
const {postValidator} = require('../middlewares/validator');

//imports handlers
const nuevaOperacionBloqueo = require('../handlers/newBlockingOperation');
const obtenerBloqueos = require('../handlers/getBlockingOperation');

//ruteo
router.post('/', postValidator, nuevaOperacionBloqueo);
router.get('/', obtenerBloqueos);


module.exports = router;