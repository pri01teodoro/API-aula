import express from "express";
import receitasController from "../controllers/receitasController.js";

const receitasRoutes = expressRoutes();

receitasRoutes.get('/receitas', receitasController.listarReceitas);

export default receitasRoutes;