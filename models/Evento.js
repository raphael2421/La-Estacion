// imports
const mongoose = require('mongoose');


const EventoSchema = new mongoose.Schema({
    desarrollo: {
        type: String,
    },
    nombre: {
        type: String, required: [true, 'Por favor introduzca su nombre']
    },
    telefono: {
        type: Number, required: false
    },
    correo: {
        type: String, required: [true, 'Por favor introduzca un correo válido']
    },
    _date:{
        type: Date, default: Date.now
    },
    asesor: {
        type: String,
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
EventoSchema.virtual('_campaña', { // <<--este es el mombre virtual que tendra en la respuesta JSON
    ref: 'Referal', // <<-- este es el modelo en el que vamos a buscar
    localField: 'correo', // <<-- este es el VALOR del modelo actual que vamos a buscar  (en este caso un valor que existe en Empresa)
    foreignField: '_id', // <<-- este es el campo externo donde vamos a buscar (un campo que exista en el modelo Ticket)
    justOne: false
})

// x4otgRTAsXy93sxNoa85qjnmfbNP290e
const Evento = mongoose.model('Evento', EventoSchema);
module.exports = Evento;