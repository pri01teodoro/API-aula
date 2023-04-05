import receitasRoutes from "./receitasRoutes.js"

const routes = (app) => {

    app.get('/ping', (req, res) => { //get é um método do express que tem como parâmetro a rota e uma aero function com parâmetro de requisição do usuário e resposta da API
        res.status(200), //status que retorna ok (parametro do res)
        res.send({resposta: "pong"}); // retorna os dados
    })

    app.use(receitasRoutes)

}

export default routes; 