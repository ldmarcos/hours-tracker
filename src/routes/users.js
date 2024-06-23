const express = require('express');
const usersController = require('../controllers/usersController.js')

const router = express.Router();

router.get('/users', usersController.exibirUsuarios)
router.get('/users/:id', usersController.exibirUsuarioId)
router.post('/users', usersController.criaUsuario)
router.put('/users/:id', usersController.atualizaUsuario)
router.delete('/users/:id', usersController.excluiUsuario)
module.exports = router;