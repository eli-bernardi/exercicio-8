const Funcionario = require('./Funcionario')
const Cliente = require('./Cliente')
const Equipamento = require('./Equipamento')
const Inspecao = require('./Inspecao')

Cliente.hasMany(Equipamento, {
    foreignKey: 'codCliente',
    as: 'equipamentoCliente',
    onDelete: 'CASCADE'
})
Equipamento.belongsTo(Cliente, {
    foreignKey: 'codCliente',
    as: 'clienteEquipamento',
    allowNull: false
})


Equipamento.hasMany(Inspecao, {
    foreignKey: 'codEquipamento',
    as: 'inspecaoEquipamento',
    onDelete: 'CASCADE'
})
Inspecao.belongsTo(Equipamento, {
    foreignKey: 'codEquipamento',
    as: 'equipamentoInspecao',
    allowNull: false
})

module.exports = { Funcionario, Cliente, Equipamento, Inspecao }