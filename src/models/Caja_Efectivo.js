module.exports = (sequelize, DataTypes) => {
    const CajaEfectivo = sequelize.define('CajaEfectivo', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        concepto: {
            type: DataTypes.STRING,
            allowNull: true
        },
        monto_unitario: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        metodo_pago: {
            type: DataTypes.STRING,
            allowNull: true
        },
        monto_efectivo: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        monto_saldo: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        observaciones: {
            type: DataTypes.STRING,
            allowNull: true
        },
        creado_en: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        tableName: 'caja_efectivo',
        timestamps: false
    });

    return CajaEfectivo;
};