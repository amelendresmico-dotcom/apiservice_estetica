const { sequelize, DataTypes } = require('../db/dbconfig');

// IMPORTANTE: Aquí pasamos sequelize y DataTypes como argumentos
const Articulo = require('./Articulo')(sequelize, DataTypes);

module.exports = {
    sequelize,
    Articulo,
    
};