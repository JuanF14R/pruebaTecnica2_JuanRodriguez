import { crearDepartamento } from "../controllers/departamentos.controllers.js";
import { actualizarDepartamento } from "../controllers/departamentos.controllers.js";
import { obtenerDepartamentos } from "../controllers/departamentos.controllers.js";

import express from "express";

export const departamentoRouter = express.Router();

departamentoRouter.post('/crear', crearDepartamento);
departamentoRouter.get('/obtener', obtenerDepartamentos);
departamentoRouter.put('/actualizar/:id', actualizarDepartamento);