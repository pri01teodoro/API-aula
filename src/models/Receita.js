import mongoose from "mongoose";

const receitaSchema = new mongoose.Schema ({
    titulo: {
        type: String, 
        required: [true, "O título da receita não pode estar em branco!"], //validação
        minlenght: [10, "O título da receita não pode ter menos que 10 caracteres!"]
    },
    tempoPreparo: {
        type: Number, 
        required: true,
        validate: { //validação criada
            validator: v => {
                return v < 10
            },
            message: "O tempo de preparo não pode ser menor que 10 minutos!"
        }
    },
    porcoes: {
        type: Number, 
        required: [true, "As porções não podem estar em branco!"],
    },
    imagem: {
        type: String, 
        required:[true, "A imagem é obrigatória!"]}
})

const Receita = mongoose.model('Receitas', receitaSchema); //collection chamada Receitas no mongo

export default Receita;