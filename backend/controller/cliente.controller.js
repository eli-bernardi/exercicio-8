const Cliente = require('../models/Cliente')
const cryptoJS = require('crypto-js')
const secretKey = 'eliel'


const cadastrar = async (req, res) => {
    const valores = req.body
    console.log(valores)

    if (!valores.email || !valores.senha || !valores.nome || !valores.cpf || !valores.telefone || !valores.endereco) {
        return res.status(401).json({ message: 'Todos os dados devem ser inseridos' })
    }
    try {
        const byteSenha = cryptoJS.AES.encrypt(valores.senha, secretKey)
        const senhaCripto = byteSenha.toString(cryptoJS.enc.Utf8)
        const byteCPF = cryptoJS.AES.encrypt(valores.cpf, secretKey)
        const cpfCripto = byteCPF.toString(cryptoJS.enc.Utf8)

        const cliente = await Cliente.create({
            nome: valores.nome,
            email: valores.email,
            senha: senhaCripto,
            cpf: cpfCripto,
            telefone: valores.telefone,
            endereco: valores.endereco,
        })
        return res.status(201).json({ message: 'Operação realizada com sucesso' })
    } catch (err) {
        console.error('Erro na operação', err)
        return res.status(500).json({ message: 'Erro na operação', err })
    }
}

module.exports = { cadastrar }