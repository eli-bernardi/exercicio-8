const Inspecao = require('../models/Inspecao')
const cryptoJS = require('crypto-js')
const secretKey = 'eliel'


const cadastrar = async (req, res) => {
    const valores = req.body
    console.log(valores)

    if (!valores.data || !valores.status || !valores.idEquipamento) {
        return res.status(401).json({ message: 'Todos os dados devem ser inseridos' })
    }

    if (!valores.idEquipamento) {
        return res.status(404).json({ message: 'Cliente não encontrado' })
    }

    try {
        const inspecao = await Inspecao.create({
            data: valores.data,
            status: valores.status,
            idEquipamento: valores.idEquipamento
        })
        return res.status(201).json({ message: 'Operação realizada com sucesso' })
    } catch (err) {
        console.error('Erro na operação', err)
        return res.status(500).json({ message: 'Erro na operação', err })
    }
}

module.exports = { cadastrar }