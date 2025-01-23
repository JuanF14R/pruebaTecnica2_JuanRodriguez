import express from "express";//ECMA6
import dotenv from "dotenv";// DEPENDENCIA PARA MANEJAR VARIABLES DE ENTORNO
import { connectionMongo } from "./src/config/dataBase.js";
import cors from "cors"
import { departamentoRouter } from "./src/routes/departamentos.routes.js";
import { empleadoRouter } from "./src/routes/empleados.routes.js";

// EL SEGUNDO PASO ES: 2. CONFIGURAR EL USO DE NUESTRO SERVIDOR:
// Dependencia express
const app = express(); 
// Dependencia dotenv
dotenv.config(); // CONFIGURANDO PARA VARIABLES DE ENTORNO. CADA DEPENDENCIA TIENE SU FORMA DE USO, REVISAR DOCUMENTACIÓN. TODAS LAS DEPENDENCIAS SI SE DEBEN IMPORTAR
// Dependencia mongoose
connectionMongo();
const port = process.env.PORT;
app.use(cors());

//Configutaión de rutas:
app.use(express.json());

app.use('/departamentos', departamentoRouter);
app.use('/empleados', empleadoRouter);


// EL TERCER PASO ES: 3. EJECUTAR EL SERVIDOR EN NUESTRO COMPUTADOR
app.listen(port, ()=>{
    console.log("El servidor esta ejecutandose correctamente, en el puerto", port);
});

