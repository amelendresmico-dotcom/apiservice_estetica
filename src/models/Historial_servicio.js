module.exports = (sequelize, DataTypes) => {
    const HistorialServicio = sequelize.define('HistorialServicio', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        fecha_servicio: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        total_pago: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        estado: {
            type: DataTypes.ENUM('pendiente', 'completado', 'cancelado'),
            allowNull: false,
            defaultValue: 'pendiente'
        },
        notas: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        tableName: 'historial_servicio',
        timestamps: false
    });

    return HistorialServicio;
};