const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const porta = process.env.PORT || 3000
let produtos = require('./produtos/produtos.json')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use(express.json())

app.get("/produtos", (req, res) => {
    // res.status(200)
    return res.json(produtos)    
})

app.post("/produtos",(req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).end()
    }

    produtos.push(body)
    return res.json(body)
})

app.delete("/produtos/:id",(req, res) => {
    const id = req.params.id
    
    let novoProduto = produtos.filter(item => {
        if (item.id !== id) {
            console.log('DIFERENTE', item.id)

            return item
        }    
    })

    produtos = novoProduto
    return res.send(novoProduto)
})

app.listen(porta, () => {

    console.info('');
    console.info("==> ✅  Servidor Funcionando!!!");
    console.info(`==> 🌎  Servidor rodando em: http://localhost:${porta}/`);
    console.info('');

})
