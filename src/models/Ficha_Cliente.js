module.exports = (sequelize, DataTypes) => {
    const FichaCliente = sequelize.define('FichaCliente', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        alergias: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tipo_cabello_piel: {
            type: DataTypes.STRING,
            allowNull: true
        },
        observaciones: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        tableName: 'ficha_cliente',
        timestamps: true
    });

    return FichaCliente;
};