module.exports = (sequelize, DataTypes) => {
    // Corregido el nombre a Articulo
    const Articulo = sequelize.define('Articulo', {
        id: {
            type: DataTypes.INTEGER, // Corregido: INTEGER
            allowNull: false,
            autoIncrement: true,
            primaryKey: true // Te recomiendo añadir esto si es tu ID
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true // True con minúscula es mejor
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        cantidad: {
            type: DataTypes.INTEGER, // Corregido: INTEGER
            allowNull: true,
            defaultValue: 0
        }
    }, {
        tableName: 'articulos',
        timestamps: false
    });

    return Articulo; // Corregido para que coincida con la variable de arriba
};