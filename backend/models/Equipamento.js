const { DataTypes } = require('sequelize')
const db = require('../db/db')

const Equipamento = db.define('equipamento', {
    codEquipamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numeroSerie: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idCliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'cliente',
            key: 'codCliente'
        }
    }
}, {
    timestamps: false,
    tableName: 'equipamento'
})

module.exports = Equipamento