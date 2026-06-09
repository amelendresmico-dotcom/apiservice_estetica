const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('db_estetica', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

const Articulo      = require('./Articulo')(sequelize, DataTypes);
const Caja_Efectivo = require('./Caja_Efectivo')(sequelize, DataTypes);
const Cliente       = require('./Cliente')(sequelize, DataTypes);
const Ficha_Cliente = require('./Ficha_Cliente')(sequelize, DataTypes);
const Historial     = require('./Historial_servicio')(sequelize, DataTypes);
const Personal      = require('./Personal')(sequelize, DataTypes);
const Roles         = require('./Roles')(sequelize, DataTypes);
const Servicio      = require('./Servicio')(sequelize, DataTypes);
const Usuario       = require('./Usuario')(sequelize, DataTypes);

module.exports = {
    sequelize,
    Articulo,
    Caja_Efectivo,
    Cliente,
    Ficha_Cliente,
    Historial,
    Personal,
    Roles,
    Servicio,
    Usuario
};