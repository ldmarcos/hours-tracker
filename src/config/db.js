const Sequelize = require('sequelize')


const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD,{
    dialect:'mysql',
    host: process.env.DATABSE_HOST, 
    port: process.env.DATABSE_PORT
})

async function conectaNoBanco() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

conectaNoBanco()
module.exports = sequelize


