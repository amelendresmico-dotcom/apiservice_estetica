module.exports = (sequelize, DataTypes) => {
    const Personal = sequelize.define('Personal', {
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
        dni: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fecha_nacimiento: {
            type: DataTypes.DATE,
            allowNull: true
        },
        celular: {
            type: DataTypes.STRING,
            allowNull: true
        },
        sexo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        salario: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        activo: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        creado_en: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        tableName: 'personal',
        timestamps: false
    });

    return Personal;
};