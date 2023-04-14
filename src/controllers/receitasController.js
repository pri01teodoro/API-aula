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

//PUT - precisa passar todas as informações do model
const alterarReceita = async (req, res) => {
    const receitas = await Receita.findById(req.params.id);

    receitas.titulo = req.body.titulo;
    receitas.tempoPreparo = req.body.tempoPreparo;
    receitas.porcoes = req.body.porcoes;
    receitas.imagem = req.body.imagem;

    /* PATH - atualiza somente se for passado no corpo da requisição
    req.body.imagem && `${receitas.imagem = req.body.imagem}` */ 

    await receitas.save();

    res.status(200);
    res.send(receitas)
}

const deletarReceita = async (req, res) => {
    const receitas = await Receita.findByIdAndDelete(req.params.id);

    res.status(200);

    if(receitas != null){
        res.send({
            message: "Receita deletada com sucesso",
            receitas: receitas
        })
    }else{
        res.send({message: "Receita não encontrada"});
    }
    

}

const receitasController = {
    listarReceitas,
    listarReceitaPorId,
    criarReceita,
    alterarReceita,
    deletarReceita
}

export default receitasController;