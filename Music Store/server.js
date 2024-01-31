'use strict'
const { MongoClient } = require('mongodb');
const express = require('express');

// const routes = require('./routes')
// const user = require('./routes/user')
// const http = require('http')
// const path = require('path')

const app = express();

//Importar ruta 
//const ruta = require('/routes/myFirstRoute');
const ruta = require('./connection.js')

//Conectar base de datos

const uri = 'mongodb://localhost:27017/Music_Store';

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {
    console.log('Conectado a la base de datos');
    app.locals.db = client.db('Music_Store');

    // Implementar ruta después de la conexión exitosa
    app.use('/', ruta);

    // Puerto
    const port = 3000;

    app.listen(port, () => {
      console.log(`Express server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

