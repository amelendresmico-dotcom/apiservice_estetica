module.exports = (sequelize, DataTypes) => {
    const Articulo = sequelize.define('Articulo', {
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
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        }
    }, {
        tableName: 'articulos',
        timestamps: false
    });

    return Articulo;
};