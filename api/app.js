const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('./models/Usuario');
const Usuario = mongoose.model('Usuario');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE');
    res.header("Access-Control-Allow-Headers", 'X-PINGOTHER, Content-Type, Authorization')
    app.use(cors());
    next();
});

mongoose.connect('mongodb://localhost/cadastroNode', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com o MongoDB OK")
}).catch((err) => {
    console.log("Erro de Conexão ao MongoDB: " + err)
})

app.get('/', (req, res) => {
    console.log(req.body)
    res.send('teste');
})

app.get('/usuarios', async (req, res) => {
    await Usuario.find({}).then((usuario) => {
        return res.json({
            error: false,
            usuario
        });
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum resgistro encontrado!"
        });
    });
});

app.post('/usuarios', async (req, res) => {

    const dados = {
        "nome": "susana",
        "cpf": "12345678900",
    }
    await Usuario.create(req.body, (err) => { //usei pelo insomnia
        //await Usuario.create(dados, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: conteudo da pagina nao cadastrado com sucesso"
        })
    })
    return res.json({
        error: false,
        message: "conteudo da pagina cadastrado com sucesso"
    })
})

app.listen(8080, () => {
    console.log("servidor iniciado na porta 8080: http://localhost:8080")
})