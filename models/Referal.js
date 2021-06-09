// imports
const mongoose = require('mongoose');

const ReferalSchema = new mongoose.Schema({
   nombre: {
      type: String
   },
   sitio: {
      type: String,
   },
   canal: {
      type: String,
   },
   titulo: {
      type: String
   },
   desc: {
      type: String
   },
   keywords: [
      String
   ],
   visitas: [
      String
   ],
   _date: {
      type: Date, default: Date.now
   },
   presupuesto: {
      type: Number
   },
   autor: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
   },
},
/// virtuals
{
   toJSON: { virtuals: true },
   toObject: { virtuals: true }
}
);
// indexes

// Reverse populate
ReferalSchema.virtual('_leads', { // <<--este es el mombre virtual que tendra en la respuesta JSON
   ref: 'LaEstacionForma', // <<-- este es el modelo en el que vamos a buscar
   localField: '_id', // <<-- este es el VALOR del modelo actual que vamos a buscar  (en este caso un valor que existe en Empresa)
   foreignField: 'refID', // <<-- este es el campo externo donde vamos a buscar (un campo que exista en el modelo Ticket)
   justOne: false
})
// x4otgRTAsXy93sxNoa85qjnmfbNP290e
const Referal = mongoose.model('Referal', ReferalSchema);
module.exports = Referal;