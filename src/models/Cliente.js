module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: true
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: { isEmail: true }
        }
    }, {
        tableName: 'clientes',
        timestamps: true // Útil para saber cuándo se registró el cliente
    });

    return Cliente;
};