'use strict';
const database = require('../connection');
const Joi = require('joi');

/*
const addSongsSchema = Joi.object().keys({
    title: Joi.string().required(),
    artist: Joi.string().required(),
    genre: Joi.string().required()
});

const validateRequest = (schema) => {
    return (req, res, next) => {
        console.log(''
        const result = Joi.validate(req.body, schema);
        if (result.error) {
            return res.status(400).json({
            error: result.error.details[0].message,
            });
        }
        if (!req.value) {
            req.value = {};
        }
        
        req.value['body'] = result.value;
    }
}
*/

const findSong = async (req, res) => {
    try {
        const db = await database.getDb();
        const songs = await db.collection('songs').find().toArray();//El toArray es para varios
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const addSong = async (req, res) => {
    try {
        const db = await database.getDb();
        const result = await db.collection('songs').insertOne(req.body);
        console.log('Se ha insertado un nuevo documento en la colección "songs":');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteSong = async (req, res) => {
    try {
        const db = await database.getDb();
        console.log(req.params.title);
        const song = await db.collection('songs').deleteOne(
            { _title : new database.string(req.params.title)}
        );
        
        res.status(200).json(song);

    } catch (error){
        res.status(500).json({ message: error.message });
    }

} 

module.exports = { findSong, addSong, deleteSong };
