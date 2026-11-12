const cryptoJS = require('crypto-js')
const secretKey = 'eliel'

function authMiddleware(req, res, next) {
    const token = req.header['authorization']
    if (!token) {
        return res.status(401).json({ message: 'Token inválido' })
    }

    try {
        const bytes = cryptoJS.AES.decrypt(token, secretKey)
        const dadosDescripto = bytes.toString(cryptoJS.enc.Utf8)

        if (!dadosDescripto) {
            return res.status(401).json({ message: 'Token inválido' })
        }
        const payload = JSON.parse(dadosDescripto)
        if (Date.now() > payload.expiraEm) {
            return res.status(401).json({ message: 'Sessão expirada' })
        }

        next()
    } catch (err) {
        console.error('Erro na operação', err)
        return res.status(500).json({ message: 'Erro na operação', err })
    }
}

module.exports = authMiddleware