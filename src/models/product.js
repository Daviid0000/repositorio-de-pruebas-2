const { DataTypes, sequelize } = require('../setting/database')


const producto = sequelize.define('producto', {
    name: {
        type: DataTypes.STRING,
        allosNull:false
    },
    completed: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: false
    }
    }, {
      timestamps: true

})

module.exports = producto