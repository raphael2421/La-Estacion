// imports
const mongoose = require('mongoose');


const LeadSchema = new mongoose.Schema({
    nombre: {
        index: true,
        trim: true,
        lowercase: true,
        type: String, required: [true, 'Por favor introduzca su nombre']
    },
    telefono: {
        type: String,
        index: true,
        trim: true,
        default: ''
    },
    correo: {
        type: String,
        index: true,
        trim: true,
        lowercase: true,
        required: [true, 'Por favor introduzca un correo válido']
    },
    pref_contacto: {
        type: String, required: false, default: ''
    },
    horario_atencion: {
        type: String, required: false, default: ''
    },
    desarrollo: {
        type: mongoose.Schema.ObjectId,
        trim: true,
        populate: true,
        ref: 'Desarrollo',
        default: '60e8952a9d74ea0a20460617'
    },
    perfila_para: {
        type: mongoose.Schema.ObjectId,
        trim: true,
        ref: 'Desarrollo',
    },
    canal: {
        type: String,
        trim: true,
        lowercase: true,
        default: 'www-estacion'
    },
    medio: {
        type: String,
        trim: true,
        lowercase: true,
        default: ''
        // digital, referido, broker, recomendado, merca
    },
    coment: {
        type: String,
    },
    atendio: {
        type: mongoose.Schema.ObjectId,
        trim: true,
        ref: 'User',
    },
    _date: {
        type: Date, default: Date.now
    },
    lastURL: {
        type: String,
    },
    refURL: {
        type: String,
    },
    refID: {
        type: String,
    },
    asignado: {
        type: mongoose.Schema.ObjectId,
        trim: true,
        ref: 'User',
    },
    departamento: {
        type: String
    },
    semana: {
        type: Number
    },
    estatus: {
        type: String,
        trim: true,
        lowercase: true,
        default: ''
        // enum: ['contactado', 'no contesta', 'datos incorrectos'],
    },
    sub_estatus: {
        type: String,
        trim: true,
        lowercase: true,
        default: ''
        // enum: ['interesado', 'no interesado', 'aparto', 'venta', 'cita programada', 'cita vencida', 'no perfila', 'visito en seguimiento', 'visito no interesado', 'se envio informacion']
    },
    producto: {
        trim: true,
        lowercase: true,
        type: String,
        default: ''
        // enum: ['residencia', 'departamento', 'terreno', 'casa', 'local comercial']
    },
    grado_interes: {
        type: String,
        trim: true,
        lowercase: true,
        default: ''
        // enum: ['muy interesado', 'poco interesado', 'medianamente interesado']
    },
    grado_cliente: { type: Number },
    mailing: { type: Boolean, default: false },
    monto_inversion: { type: Number },
    moneda: { type: String, default: 'MXN', enum: ['MXN', 'USD', 'EUR'] },
    fecha_intencion_compra: { type: Date },
    ciudad_origen: { type: String },
    causas_no_venta: {
        type: String,
        //enum: ['compro casa en otro lado', 'compro terreno en otro lado', 'compro depto en otro lado', 'problemas de salud', 'problemas familiares', 'cambio de residencia', 'fecha de entrega', 'no le gusto producto', 'se le hace caro el producto']
    },
    ultimo_esfuerzo: { type: Date },
    ultima_edicion: {
        type: mongoose.Schema.ObjectId,
        trim: true,
        ref: 'User',
    },
    movito_reasignacion: [{
        _date: { type: Date, default: Date.now },
        coment: { type: String },
        gte: { type: String },
        ejecutivo: { type: String },
    }],
    notas_seguimiento: [{
        _date: { type: Date, default: Date.now },
        coment: { type: String },
        user: { type: String }
    }],
    recordatorio: {
        _date: { type: Date },
        coment: { type: String },
        push_id: { type: String }
    }
},
    {
        timestamps: true
    }
);// end schema

LeadSchema.pre('save', async function (next) {
    if (!this.isModified()) {
        next();
    }
    this.ultima_edicion = Date.now
});

// x4otgRTAsXy93sxNoa85qjnmfbNP290e
const Lead = mongoose.model('Lead', LeadSchema);
module.exports = Lead;