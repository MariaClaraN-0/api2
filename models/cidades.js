const mongoose = require("mongoose");

const cidadesModel = new mongoose.Schema({
    nome: { type: String, required: true},
    quantidadeBairros: { type: Number, required: true},
    populacao: { type: Number, required: true},
    aniversarioCidade: { type: Number, required: true},
    dataCriacao: { type: Date, default: Date.now }
});

const cidade = mongoose.model("cidades", cidadesModel);

module.exports = cidade;