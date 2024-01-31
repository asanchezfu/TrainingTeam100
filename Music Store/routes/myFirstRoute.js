'use strict'
const express = require('express');
const router = express.Router(); //Para decirle a Express que aquí van las rutas


router.get('/', async (req, res) => {
    //res.send('Hello World!');
    console.log(req);

    const database = req.app.locals.db;
    const collection = database.collection('songs');

    const documentos = await collection.find().toArray();

    res.json({ documentos });
  });
  
module.exports = router; //Para exportar las rutas