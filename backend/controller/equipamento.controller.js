const Equipamento = require('../models/Equipamento')
const cryptoJS = require('crypto-js')
const secretKey = 'eliel'


const cadastrar = async (req, res) => {
    const valores = req.body
    console.log(valores)

    if (!valores.marca || !valores.modelo || !valores.numeroSerie || !valores.idCliente) {
        return res.status(401).json({ message: 'Todos os dados devem ser inseridos' })
    }

    if (!valores.idCliente) {
        return res.status(404).json({ message: 'Cliente não encontrado' })
    }

    try {
        const bytes = cryptoJS.AES.encrypt(valores.numeroSerie, secretKey)
        const numeroSerieCripto = bytes.toString(cryptoJS.enc.Utf8)

        const equipamento = await Equipamento.create({
            marca: valores.marca,
            modelo: valores.modelo,
            numeroSerie: numeroSerieCripto,
            idCliente: valores.idCliente,
        })
        return res.status(201).json({ message: 'Operação realizada com sucesso' })
    } catch (err) {
        console.error('Erro na operação', err)
        return res.status(500).json({ message: 'Erro na operação', err })
    }
}

module.exports = { cadastrar }