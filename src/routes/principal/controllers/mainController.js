const express = require('express');
const router = express.Router()

const controladorBloqueo = require('../../bloqueo/controllers/controladorBloqueo');
const controladorBaja = require('../../baja/controllers/controladorBaja');

router.use('/bloqueo', controladorBloqueo);
router.use('/baja', controladorBaja);

module.exports = router;