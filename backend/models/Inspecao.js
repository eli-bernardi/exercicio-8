const { DataTypes } = require('sequelize')
const db = require('../db/db')

const Inspecao = db.define('Inspecao', {
    codInspecao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('PENDENTE', 'REALIZADA'),
        allowNull: false
    },
    idEquipamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'equipamento',
            key: 'codEquipamento'
        }
    }
}, {
    timestamps: false,
    tableName: 'Inspecao'
})

module.exports = Inspecao