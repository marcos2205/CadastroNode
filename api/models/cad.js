const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cad = new Schema({ 
    nome: {
        type: String
    },  
    cpf: {
        type: String
    },     
},{
    timestamps: true,
});

mongoose.model('Cad', cad);
