const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

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

app.listen(8080, () => {
    console.log("servidor iniciado na porta 8080")
})