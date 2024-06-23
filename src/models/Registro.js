const Sequelize = require('sequelize')
const database = require('../config/db.js')
const Users = require('./Users.js')

const Registro = database.define('registros',{
    id_registro:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    id_user:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    nome_user: {
        type: Sequelize.STRING,
        allowNull: false
    },

    data_registro:{
        type: Sequelize.DATE,
        allowNull: false
    },

    hora_inicio:{
        type: Sequelize.TIME,
        allowNull: false
    },

    hora_termino:{
        type: Sequelize.TIME,
        allowNull: true
    }
},
{
    timestamps: false,

    createdAt: false,
  
    updatedAt: false,
})
module.exports = Registro