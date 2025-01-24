import { departamentoModel } from "../models/Departamentos.js";

//PETICIONES HTTP O CRUD


// POST CREAR DEP_________________

export const crearDepartamento = async (req, res) => {

    //Manejo de errores
    try {

        //Establecer los componentes del modelo departamento

        const {name,codigo_departamento} = req.body;

        const nuevoDepartamento = await departamentoModel.create({
            name,
            codigo_departamento
        });

        //Arrojamos mensaje de creación exitosa

        return res.status(201).json({
            mensaje: 'Departamento creado correctamente',
            datos: nuevoDepartamento
        });
        
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error al crear el departamento',
            problema: error || error.message
        });
        
    }

}

// GET MOSTRAR DEP_________________

export const obtenerDepartamentos = async (req, res) => {

    //Manejo de errores

    try {
        
        //Primero debemos encontrar todos los departamentos en la base de datos

        let departamentos = await departamentoModel.find();

        //Para el caso que no haya información en la base de datos:

        if(departamentos.length === 0){
            return res.status(200).json({
                mensaje:'Aún no hay departamentos registrados en la base de datos'
            });
        }

        return res.status(200).json({
            mensaje: 'Se encontraron los siguientes departamentos:',
            numeroDepartamentos: departamentos.length,
            datos: departamentos
        });

    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error, no es posible obtener los departamentos',
            problema: error || error.message
        });
        
    }
}

// PUT ACTUALIZAR DEP_________________

export const actualizarDepartamento = async (req, res) => {

    //Manejo de errores

    try {
        let idDeActualizar = req.params.id;
        let infoDeActualizar = req.body;

        const departamentoActualizado = await departamentoModel.findByIdAndUpdate(idDeActualizar, infoDeActualizar);

        // await departamentoActualizado.save();
        if(!departamentoActualizado){
            return res.status(404).json({
                mensaje: 'Departamento no encontrado, valida el id del departamento'
            });
        }

        return res.status(200).json({
            mensaje: 'Se actualizo correctamente el departamento',
            datos: infoDeActualizar
        });

    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error al actualizar el departamento',
            error: error || error.message
        });
    }
}