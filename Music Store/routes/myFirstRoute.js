'use strict';
const express = require('express');
const router = express.Router(); //Para decirle a Express que aquí van las rutas
const users = require('../controllers/users');

router.get(
  '/users',
  users.find //Aquí va el método que se va a ejecutar
);

router.get(
  '/someUser/:id([0-9a-fA-F]{24})',
  users.findSomeUser
);

module.exports = router; //Para exportar las rutas