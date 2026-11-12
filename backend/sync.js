const db = require('./db/db')
const { Funcionario, Cliente, Equipamento, Inspecao } = require('./models/rel')

async function syncDataBase() {
    try {
        await db.sync({ force: true })
        console.log('Abrindo conexão')
    } catch (err) {
        console.log('Erro', err)
        return res.status(401).json({ message: 'err', err })
    } finally {
        await db.close()
        console.log('Fechando conexão')
    }
}
syncDataBase()