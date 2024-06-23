const express = require('express');
const users = require('./users.js')
const registro = require('./registro.js')
const routes = (app) =>{
    app.route('/').get((req, res) => res.status(200).send('Sistema de Ponto'))
    app.use(express.json(), users, registro)
}

module.exports = routes