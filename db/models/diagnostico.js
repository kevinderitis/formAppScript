const mongoose = require('mongoose');

const diagnosticoCollection = 'diagnostico';

const diagnosticoSchema = new mongoose.Schema({
    mail: {type: String, max: 100},
    fecha: {type: String, max: 100},
    actitud: {type: String, max: 100},
    motivacion: {type: String, max: 100},
    metas: {type: String, required: true, max: 100},
    habSociales: {type: String, max: 100},
    dialogos: {type: String, max: 100},
    imagineria: {type: String, max: 100},
    ansiedad: {type: String, max: 100},
    emociones: {type: String, max: 100},
    concentracion: {type: String, max: 100}
})

const diagnosticoModel = mongoose.model(diagnosticoCollection, diagnosticoSchema);

module.exports = { diagnosticoModel };