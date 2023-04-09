const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const porta = process.env.PORT || 3333
let pets = require('./pets/pets.json')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use(express.json())

app.get("/pets", (req, res) => {
    return res.json(pets)    
})

app.post("/pets",(req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).end()
    }

    pets.push(body)
    return res.json(body)
})

app.delete("/pets/:id",(req, res) => {
    const id = req.params.id
    
    let novoPet = pets.filter(item => {
        if (item.id !== id) {
            console.log('DIFERENTE', item.id)

            return item
        }    
    })

    pets = novoPet
    return res.send(novoPet)
})

app.listen(porta, () => {

    console.info('');
    console.info("==> ✅  Servidor Funcionando!!!");
    console.info(`==> 🌎  Servidor rodando em: http://localhost:${porta}/`);
    console.info('');

})
