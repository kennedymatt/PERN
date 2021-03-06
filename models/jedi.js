module.exports = function(sequelize, DataTypes) {
    return sequelize.define('jedi', {
        Name: {
            type: DataTypes.STRING,
           allowNull: true
        },
        Race: {
            type: DataTypes.STRING,
           allowNull: true
        },
        Lightsaber: {
            type: DataTypes.STRING,
           allowNull: true
        },
        Vehicle: {
            type: DataTypes.STRING,
           allowNull: true
        },
        Planet: {
            type: DataTypes.STRING,
           allowNull: true
        } 
    })
}