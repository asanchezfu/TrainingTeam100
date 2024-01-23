'use strict'
const express = require('express');
const router = express.Router(); //Para decirle a Express que aquí van las rutas

router.get('/', (req, res) => {
    res.send('Hello World!');
    console.log(req);
  })
  
module.exports = router; //Para exportar las rutas