'use strict';
const express = require('express');
const router = express.Router(); //Para decirle a Express que aquí van las rutas
const songs = require('../controllers/songs');

router.get(
  '/findSong',
  songs.findSong
);

router.post(
  '/addSong',
  songs.addSong
);

/*
router.delete(
    '/deleteSong/:title(/^[a-zA-Z]+$/)',
    songs.deleteSong
);
*/

module.exports = router; //Para exportar las rutas