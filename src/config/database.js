import mongoose from "mongoose";

const URL = "mongodb://localhost:27017/db_receitas";

await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(response => console.log("MongoDB conectado!"))
    .catch(response => console.log("Erro na conexão com o MongoDB"));

let db = mongoose.connection;

export default db;