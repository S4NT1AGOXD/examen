const {response, query} = require('express')

const Hurto = require('../models/hurto')

const  hurtoGet = async(req, res = response) =>{
    const {direccion} = req.query

    const hurtos = await Hurto.find()

    res.json({
        hurtos
    })
}

const hurtoPost = async (req, res = response) => {
    const quey = req.query;
    let mensaje = '';

    try{
        const hurto = new Hurto(query)
        await hurto.save()
        mensaje = 'el registro fue un exito'

        res.json({
            ok: true,
            mensaje,
            hurto
        })
    } catch(error) {
        console.log(error);
      if (error.name === 'ValidationError') {
        res.status(400).json({
          ok: false,
          mensaje: 'Error al crear hurto',
          errores: Object.values(error.errors).map(val => val.message)
        });
      } else {
        res.status(500).json({
          ok: false,
          mensaje: 'Error al crear hurto',
          error
        });
    }
}
}

const hurtoPut = async(req, res = response) => {

    const {direccion, latitud,longitud,descripcion, fecha} = req.body
    let mensaje = ''

    try {
        const hurto = await Hurto.findOneAndUpdate({fecha: fecha},{direccion: direccion,latitud: latitud,longitud:longitud, descripcion:descripcion  })
        mensaje = 'La modificacion fue con exito'
    } catch (error){
        mensaje = 'Se presentaron probleams'
    }

    res.json({
        msg: mensaje
    })

}

const hurtoDelete = async(req, res = response) => {

    const {_id} = req.body
    let mensaje = ''

    try{
        const hurto = await Hurto.deleteOne({_id: _id})
        mensaje = 'se elimino'
    }catch(error){
        mensaje= 'se presentaron problemas'
    }
    res.json({
        msg: mensaje
    })

}

module.exports = {
    hurtoGet,
    hurtoPost,
    hurtoPut,
    hurtoDelete
}