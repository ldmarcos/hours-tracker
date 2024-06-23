const Sequelize = require('sequelize');
const database = require('../config/db.js')
const Registro = require('./Registro.js')


const Users = database.define('users',{
    id_user:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },

    email:{
        type: Sequelize.STRING,
        allowNull: false 
    },

    password:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
},
{
    timestamps: false,

    createdAt: false,
  
    updatedAt: false,
})

module.exports = Users