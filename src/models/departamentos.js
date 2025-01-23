// Importamos base de datos de mongoose para manejo en baso de datos

import mongoose from "mongoose";

//Creación del modelo o esquema de la estructiura para la información de cada departamento

const modeloDepartamento = new mongoose.Schema ({
    name: {type: String, require: true},
    codigo_departamento: {type: Number, required: true, unique:true},
});

export const departamentoModel = mongoose.model("departamento", modeloDepartamento);