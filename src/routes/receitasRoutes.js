import express from "express";
import receitasController from "../controllers/receitasController.js";

const receitasRoutes = express.Router();

receitasRoutes
.get('/receitas', receitasController.listarReceitas)
.get('/receitas/:id', receitasController.listarReceitaPorId)
.post('/receitas', receitasController.criarReceita)
.put('/receitas/:id', receitasController.alterarReceita)
.delete('/receitas/:id', receitasController.deletarReceita)


export default receitasRoutes;