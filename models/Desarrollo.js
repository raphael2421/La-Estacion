// imports
const mongoose = require('mongoose');


const DesarrolloSchema = new mongoose.Schema({
   nombre: {
      type: String, required: [true, 'Por favor introduzca nombre del desarrollo']
   },
   slug: { type: String},
   dominio: {
      type: String, unique: true, index: true
   },
   precios:{}
},
   {
      timestamps: true
   }
);
// indexes

// x4otgRTAsXy93sxNoa85qjnmfbNP290e
const Desarrollo = mongoose.model('Desarrollo', DesarrolloSchema);
module.exports = Desarrollo;
