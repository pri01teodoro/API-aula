import mongoose from "mongoose";

const receitaSchema = new mongoose.Schema ({
    titulo: {type: String, require: true},
    tempoPreparo: {type: Number, require: true},
    porcoes: {type: Number, require: true},
    imagem: {type: String, require:true}
})

const Receita = mongoose.model('Receita', receitaSchema);

export default Receita;