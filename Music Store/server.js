'use strict'
const express = require('express');

// const routes = require('./routes')
// const user = require('./routes/user')
// const http = require('http')
// const path = require('path')

const app = express();

//Importar ruta 
//const ruta = require('/routes/myFirstRoute');
const ruta = require('./routes/myFirstRoute')

//Implementar ruta
app.use('/', ruta);

//Conectar base de datos
//database.connect();

//Puerto
const port = 3000;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
})


