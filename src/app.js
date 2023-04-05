import express  from "express"; //para roteamento
import routes from "./routes/index.js"

const app = express(); //instancia do express
app.use(express.json()); //midleware - homem do meio - transforma as respostas em json

routes(app);

export default app;