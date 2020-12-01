const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuario = new Schema({ 
    nome: {
        type: String
    },  
    cpf: {
        type: String
    },     
},{
    timestamps: true,
});

mongoose.model('Usuario', usuario);
