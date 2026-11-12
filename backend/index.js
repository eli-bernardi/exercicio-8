const express = require('express')
const app = express()
const cors = require('cors')

const db = require('./db/db')
const HOSTNAME = 'localhost'
const PORT = 3000

const funcionarioController = require('./controller/funcionario.controller')
const equipamentoController = require('./controller/equipamento.controller')
const clienteController = require('./controller/cliente.controller')
const inspecaoController = require('./controller/inspecao.controller')
// const authController = require('./controller/auth.controller')

//Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


require('./models/rel')
//Rotas públicas
app.post(`/funcionario`, funcionarioController.cadastrar)
// app.post(`/login`, authController.cadastrar)

app.get('/', (req, res) => {
    console.log(`Aplicação rodando`)
})


//Rotas privadas
app.post(`/equipamento`, equipamentoController.cadastrar)
app.post(`/cliente`, clienteController.cadastrar)
app.post(`/inspecao`, inspecaoController.cadastrar)

//
db.sync()
    .then(() => {
        app.listen(PORT, HOST => {
            console.log(`Aplicação rodando em http://${HOSTNAME}:${PORT}`)
        })
    }).catch((err) => {
        console.log(`Erro`, err)
    })