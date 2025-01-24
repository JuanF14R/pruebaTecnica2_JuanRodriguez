// Importamos base de datos de mongoose para manejo en baso de datos

import mongoose from "mongoose";


//Creación del modelo o esquema de la estructiura para la información de cada empleado

const modeloEmpleado = new mongoose.Schema ({
    codigo_empleado: {type: Number, required: true, unique:true},
    nombres: {type: String, require: true},
    primerApellido: {type: String, require: true},
    segundoApellido: {type: String, require: true},
    codigo_departamento: {type: Number, required: true, unique:true},

})

export const empleadoModel = mongoose.model("empleado", modeloEmpleado);