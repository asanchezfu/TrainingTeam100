'use strict'
const express = require('express');
const router = express.Router(); //Para decirle a Express que aquí van las rutas


router.get('/', async (req, res) => {
  try {
    const database = req.app.locals.db;
    //Determinar 
    const collection = database.collection('users');
    
    const documentos = await collection.find().toArray();
    
    res.json({ documentos });
  } catch (error) {
    console.error('Error en la ruta /:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});
  
module.exports = router; //Para exportar las rutas