import mongoose from "mongoose";

const receitaSchema = new mongoose.Schema ({
    titulo: {type: String, required: true},
    tempoPreparo: {type: Number, required: true},
    porcoes: {type: Number, required: true},
    imagem: {type: String, required:true}
})

const Receita = mongoose.model('Receitas', receitaSchema); //collection chamada Receitas no mongo

export default Receita;