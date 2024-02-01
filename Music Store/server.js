// Importa el módulo de Express
const express = require('express');
const database = require('./connection');

// Crea una instancia de la aplicación Express
const app = express();


//MId
app.use(express.json());

//Importar Ruta
const myFirst = require('./routes/myFirstRoute');

//Implementar ruta
app.use('/', myFirst);

// Connect to mongodb database
database.connect();


// Puerto en el que escuchará el servidor
const PORT = 3000;

// Inicia el servidor
const server = app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

module.exports = { server };

