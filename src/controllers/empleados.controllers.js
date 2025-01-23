import { empleadoModel } from "../models/empleados.js";


// POST CREAR DEP_________________

export const crearEmpleado = async (req, res) => {

    //Manejo de errores
    try {

        //Establecer los componentes del modelo departamento

        const {codigo_empleado,nombres, primerApellido, segundoApellido, codigo_departamento} = req.body;



        const nuevoEmpleado = await empleadoModel.create({
            codigo_empleado,
            nombres,
            primerApellido,
            segundoApellido,
            codigo_departamento
        });

        //Arrojamos mensaje de creación exitosa

        return res.status(201).json({
            mensaje: 'Empleado creado correctamente',
            datos: nuevoEmpleado
        });
        
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error al crear el nuevo empleado',
            problema: error || error.message
        });
        
    }

}

// GET MOSTRAR DEP_________________

export const obtenerEmpleado = async (req, res) => {

    //Manejo de errores

    try {
        
        //Primero debemos encontrar todos los departamentos en la base de datos

        let empleados = await empleadoModel.find();

        //Para el caso que no haya información en la base de datos:

        if(empleados.length === 0){
            return res.status(200).json({
                mensaje:'Aún no hay empleados registrados en la base de datos'
            });
        }

        return res.status(200).json({
            mensaje: 'Se encontraron los siguientes empleados:',
            numeroEmpleados: empleados.length,
            datos: empleados
        });

    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error, no es posible obtener los empleados',
            problema: error || error.message
        });
        
    }
}

// PUT ACTUALIZAR DEP_________________

export const actualizarEmpleado = async (req, res) => {

    //Manejo de errores

    try {
        let idDeActualizar = req.params.id;
        let infoDeActualizar = req.body;

        const empleadoActualizado = await empleadoModel.findByIdAndUpdate(idDeActualizar, infoDeActualizar);

        // await departamentoActualizado.save();
        if(!empleadoActualizado){
            return res.status(404).json({
                mensaje: 'Empleado no encontrado, valida el id del empleado'
            });
        }

        return res.status(200).json({
            mensaje: 'Se actualizo correctamente el empleado',
            datos: infoDeActualizar
        });

    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error al actualizar el empleado',
            error: error || error.message
        });
    }
}