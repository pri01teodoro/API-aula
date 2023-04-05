import Receita from "../models/Receita"

const listarReceitas = (req, res) => {
    const receitas = Receita.find();
    res.status(200);
    res.send(receitas);

}

const receitasController = {
    listarReceitas
}

export default receitasController;