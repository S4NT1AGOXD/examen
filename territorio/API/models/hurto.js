const {Schema, model} = require('mongoose')

const HurtoSchema = Schema({
    direccion: {
        type: String,
        minlength: [true,'estado obligatorio'],
        required:[true, 'este campo es obligatorio']
    },
    latitud: {
        type: String,
        minlength: [6.13,'El minimo debe ser de 6.13'],
        maxlength:[6.217, 'El maximo es 6.217'],
        required:[true, 'este campo es obligatorio']
    },
    longitud: {
        type: String,
        minlength: [-75.567,'El minimo debe ser de -75.567'],
        maxlength:[-75.34, 'El maximo es -75.34'],
        required:[true, 'este campo es obligatorio']
    },
    descripcion: {
        type: String,
        required:[true, 'este campo es obligatorio']
    },
    fecha: {
        type:Date
    }

})

module.exports = model('Hurto',HurtoSchema)