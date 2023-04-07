const express = require('express')
const app = express()

const porta = process.env.PORT || 3000
const produtos = require('./produtos/produtos.json')

console.log('porta', porta)

app.get("/produtos", (req, res) => {
    return res.json(produtos)
})

app.listen(porta, () => {
    console.log(`Exxpress /started at localhost:${porta} `)
})



// app.use(morgan('dev'))
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(express.json())
// app.use(cors())
// app.use(routes)

module.exports = app;


