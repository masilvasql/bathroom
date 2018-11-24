
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
const port = 3000

var statusBanheiro = 'Aberto'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/trocarStatus', (req, res) => {
    statusBanheiro = req.body.status
    res.send(req.body.status)

})


app.get('/buscaStatus', (req, res) => {
    console.log('chamou ', statusBanheiro)
    res.send(statusBanheiro)
})






app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})