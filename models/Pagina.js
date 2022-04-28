// imports
const mongoose = require('mongoose');


const PaginaSchema = new mongoose.Schema({
   titulo: {
      type: String
   },
   nombre: {
      type: String
   },
   meta_tags: {
      type: Object,
   },
   url: {
      type: String, required: false,
   },
   pretty_permalink: {
      type: String, required: false, unique: true, index: true
   },
   autor: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
   },
   desarrollo: {
      type: mongoose.Schema.ObjectId,
      ref: 'Desarrollo',
   },
   template: {
      type: String, required: false,
   },
   _date: {
      type: Date, default: Date.now,
   },
   last_mod: [Object],
   header: {
      type: mongoose.Schema.ObjectId,
      ref: 'Pagina',
   },
   footer: {
      type: mongoose.Schema.ObjectId,
      ref: 'Pagina',
   },
   menu: {
      type: mongoose.Schema.ObjectId,
      ref: 'Pagina',
   },
   content: {
      type: Object,
   },
   slug: {
      type: String,
      trim: true,
      toLowerCase: true,
   },
   precio: {
      type: mongoose.Schema.ObjectId,
      ref: 'Desarrollo',
   }
},
   {
      timestamps: true,
      toJSON: { virtuals: true },
      toObject: { virtuals: true },
      collection: 'web_estacion'
   }
); // end Schema

const Pagina = mongoose.model('Pagina', PaginaSchema);
module.exports = Pagina;
