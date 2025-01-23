import { crearEmpleado } from "../controllers/empleados.controllers.js";
import { obtenerEmpleado } from "../controllers/empleados.controllers.js";
import { actualizarEmpleado } from "../controllers/empleados.controllers.js";

import express from "express";

export const empleadoRouter = express.Router();

empleadoRouter.post('/crear', crearEmpleado);
empleadoRouter.get('/obtener', obtenerEmpleado);
empleadoRouter.put('/actualizar/:id', actualizarEmpleado);