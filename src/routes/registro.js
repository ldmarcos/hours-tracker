const express = require('express');
const registroController = require('../controllers/registroController.js')

const router = express.Router();

router.get('/registro', registroController.exibirRegistros)
router.get('/registro/:id', registroController.exibirRegistroId)
router.post('/registro', registroController.iniciarJornada)
router.put('/registro/:id', registroController.finalizarJornada)
module.exports = router;