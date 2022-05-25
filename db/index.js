const mongoose = require('mongoose');
const { diagnosticoModel } = require('./models/diagnostico');

connect()

async function connect(){
    try{
        const url = 'mongodb+srv://coderhouse:coder123456@cluster0.pf6p5.mongodb.net/diagnostico?retryWrites=true&w=majority';
        let rta = await mongoose.connect(url);
        console.log('Base de datos conectada');
    }catch(err){
        console.log(err)
    }
}

async function obtenerDiagnosticos(){
    try{
        let diagnostico = await diagnosticoModel.find();
        return diagnostico;
    }catch(err){
        console.log(err)
    }
}

async function obtenerReporte(id){
    try{
        let diagnostico = await diagnosticoModel.findOne({_id: id});
        return diagnostico;
    }catch(err){
        console.log(err)
    }
}


async function insertarDiagnostico(diagnostico){
    try {
        const diagnosticoSaveModel = new diagnosticoModel(diagnostico);
        let diagnosticoSave = await diagnosticoSaveModel.save();
        return diagnosticoSave;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { obtenerDiagnosticos, insertarDiagnostico, obtenerReporte };