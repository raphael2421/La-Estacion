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
    _refURL:{
        type: String,
    },
    _refID:{
        type: String,
    },
    _date:{
        type: Date, default: Date.now
    },
    asignado:{
        type: Boolean,
        default: false
    },
});
// indexes

// x4otgRTAsXy93sxNoa85qjnmfbNP290e
const FormaContacto = mongoose.model('LaEstacionForma', FormaContactoSchema);
module.exports = FormaContacto;