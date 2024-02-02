'use strict';

const database = require('../connection');

const findUser = async (req, res) => {
    try {
        const db = await database.getDb();
        const users = await db.collection('users').find().toArray();//El toArray es para varios
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const addUser = async (req, res) => {
    try {
        const db = await database.getDb();
        const result = await db.collection('users').insertOne(req.body);
        console.log('Se ha insertado un nuevo documento en la colección "users":');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const findSomeUser = async (req, res) => {
    try {
        const db = await database.getDb();
        console.log(req.params.id);
        const someUser = await db.collection('users').findOne(
            { _id : new database.ObjectId(req.params.id)  }
        );
        res.status(200).json(someUser);

    } catch (error){
        res.status(500).json({ message: error.message });
    }

} 

//const addUser 

module.exports = { findUser, findSomeUser, addUser };
