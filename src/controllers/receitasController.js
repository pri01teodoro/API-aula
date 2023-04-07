import Receita from "../models/Receita.js"

const listarReceitas = async (req, res) => {
    
    const receitas = await Receita.find();
    res.status(200).send(receitas);

}

const listarReceitaPorId = async (req, res) => {
    
    const receitas = await Receita.findById(req.params.id);
    res.status(200);
    res.send(receitas);

}

const criarReceita = async (req, res) => { //js não é assíncrono (não espera uma linha executar para executar a outra)
    const { titulo, tempoPreparo, porcoes, imagem} = req.body; //desestruturação do body pegando apenas esses 4 e criando variáveis
    
    const novaReceita = new Receita({ //jogando as variáveis nesse novo objeto
        titulo,
        tempoPreparo,
        porcoes,
        imagem
    });

    const receitaSalva = await novaReceita.save(); //criando uma nova constante para retornar um novo ID. await quer dizer que essa linha só vai ser executada após salvar a novaReceita no banco
    res.status(201).send(receitaSalva);

}

const alterarReceita = (req, res) => {
    const receitas = Receita.find();
    res.status(200);
    res.send(receitas);

}

const deletarReceita = (req, res) => {
    const receitas = Receita.find();
    res.status(200);
    res.send(receitas);

}

const receitasController = {
    listarReceitas,
    listarReceitaPorId,
    criarReceita,
    alterarReceita,
    deletarReceita
}

export default receitasController;