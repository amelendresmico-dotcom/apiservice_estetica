module.exports = (sequelize, DataTypes) => {
    const Servicio = sequelize.define('Servicio', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre_servicio: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precio_base: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        duracion_estimada: {
            type: DataTypes.INTEGER, // En minutos (ej: 30, 60)
            allowNull: true
        }
    }, {
        tableName: 'servicios',
        timestamps: false
    });

    return Servicio;
};