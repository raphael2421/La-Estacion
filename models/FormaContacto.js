// imports
const mongoose = require('mongoose');


const FormaContactoSchema = new mongoose.Schema({
    nombre: {
        type: String, required: [true, 'Por favor introduzca su nombre']
    },
    telefono: {
        type: Number, required: false
    },
    correo: {
        type: String, required: [true, 'Por favor introduzca un correo válido']
    },
    pref_contacto: {
        type: String, required: false
    },
    horario_atencion: {
        type: String, required: false
    },
    lastURL:{
        type: String,
    },
    refURL:{
        type: String,
    },
    refID:{
        type: String,
    },
    _date:{
        type: Date, default: Date.now
    },
    asignado:{
        type: Boolean,
        default: false
    },
}, // forma schema
   /// virtuals
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
}
);
// indexes


// Reverse populate
FormaContactoSchema.virtual('_campaña', { // <<--este es el mombre virtual que tendra en la respuesta JSON
    ref: 'Referal', // <<-- este es el modelo en el que vamos a buscar
    localField: 'correo', // <<-- este es el VALOR del modelo actual que vamos a buscar  (en este caso un valor que existe en Empresa)
    foreignField: '_id', // <<-- este es el campo externo donde vamos a buscar (un campo que exista en el modelo Ticket)
    justOne: false
})

// x4otgRTAsXy93sxNoa85qjnmfbNP290e
const FormaContacto = mongoose.model('LaEstacionForma', FormaContactoSchema);
module.exports = FormaContacto;