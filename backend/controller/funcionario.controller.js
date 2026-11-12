const Funcionario = require('../models/Funcionario')
const cryptoJS = require('crypto-js')
const secretKey = 'eliel'


const cadastrar = async (req, res) => {
    const valores = req.body
    console.log(valores)

    if (!valores.email || !valores.senha || !valores.nome) {
        return res.status(401).json({ message: 'Todos os dados devem ser inseridos' })
    }
    try {
        const bytes = cryptoJS.AES.encrypt(valores.senha, secretKey)
        const senhaCripto = bytes.toString(cryptoJS.enc.Utf8)

        const funcionario = await Funcionario.create({
            nome: valores.nome,
            email: valores.email,
            senha: senhaCripto
        })
        return res.status(201).json({ message: 'Operação realizada com sucesso' })
    } catch (err) {
        console.error('Erro na operação', err)
        return res.status(500).json({ message: 'Erro na operação', err })
    }
}

module.exports = { cadastrar }