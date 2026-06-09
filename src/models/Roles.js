module.exports = (sequelize, DataTypes) => {
    const Roles = sequelize.define('Roles', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre_rol: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        tableName: 'roles',
        timestamps: false
    });

    return Roles;
};