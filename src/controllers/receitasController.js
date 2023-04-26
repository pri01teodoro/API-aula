import Receita from "../models/Receita.js"

const listarReceitas = async (req, res, next) => { //next é um parâmetro do express que passa o erro para frente (para a função que trata os erros)
    
    try {
    
    //filtro
    const { titulo, pagina = 1 } = req.query; //desestruturação da requisição da URL pegando apenas o título (poderia colocar os outros (tempoPreparo, etc))

    //paginação
    const itensPorPagina = 10


    const filtro = titulo ? { titulo: new RegExp(titulo) } : {}; //se tiver o filtro, usa o RegExp (propriedade do mongoose) para filtrar o titulo, senão (:), ele traz todos. If ternário
    
    const totalItens = await Receita.countDocuments(filtro) //conta quantos documentos tem no banco

    const receitas = await Receita.find(filtro)
        .skip(pagina -1 ) * itensPorPagina
        .limit(itensPorPagina)

        const totalPaginas = Math.ceil(totalItens / itensPorPagina)
    res.status(200);

    res.send({
        totalItens,
        totalPaginas,
        paginaAtual: pagina,
        itensPorPagina,
        receitas
    });

    } catch(err){
        next(err);
    }
}

const listarReceitaPorId = async (req, res, next) => {
    
    try {

    const receitas = await Receita.findById(req.params.id);
    res.status(200);
    res.send(receitas);

    } catch(err){
        next(err);
    }
}

const criarReceita = async (req, res, next) => { //js não é assíncrono (não espera uma linha executar para executar a outra)
    
    try {

    const { titulo, tempoPreparo, porcoes, imagem} = req.body; //desestruturação do body pegando apenas esses 4 e criando variáveis
    
    const novaReceita = new Receita({ //jogando as variáveis nesse novo objeto
        titulo,
        tempoPreparo,
        porcoes,
        imagem
    });
    

    const receitaSalva = await novaReceita.save(); //criando uma nova constante para retornar um novo ID. await quer dizer que essa linha só vai ser executada após salvar a novaReceita no banco
    res.status(201).send(receitaSalva);

    } catch(err){
        next(err);
    }

}

//PUT - precisa passar todas as informações do model

    const alterarReceita = async (req, res, next) => {
    
    try {

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

    } catch(err){
        next(err);
    }
}

const deletarReceita = async (req, res) => {

    try {
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
    
    } catch(err){
        next(err);
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