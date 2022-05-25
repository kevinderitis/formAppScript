const express = require('express');
const { getResultJson } = require('./utils');
const { obtenerDiagnosticos, insertarDiagnostico, obtenerReporte } = require('./db');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/login')
})


app.post('/login', (req, res) => {

    const { nombre, password } = req.body;

    if (nombre == 'fran' && password == 'Elgatitotito1') {
        res.redirect('/getDiagnosticos')
    }
    return res.render('pages/login-error');
    
  })

app.get('/getDiagnosticos', async function(req, res) {
    let jsonData = await obtenerDiagnosticos()
    console.log(jsonData)
    res.render('pages/lista', { jsonData });
});

app.post('/diagnostico', async (req, res) => {
    try {
        let data = await getResultJson(req.body);
        await insertarDiagnostico(data)
        res.send(data)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
   
})

app.get('/health', (req, res) => {
    res.send('Todo ok')
})

app.get('/getReporte/:id', async (req, res) => {
    let jsonData = await obtenerReporte(req.params.id);
    res.render('pages/reporte', { jsonData });
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('Server running'))