const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";

// Create a new client and connect to MongoDB with the previous URI
const client = new MongoClient(uri);

async function insertSomeDocuments() {

    const database = client.db("Music_Store");
    const usersCollection = database.collection("users");
    const songsCollection = database.collection("songs");    

    await usersCollection.insertMany([
        {
            name: "Yamile",
            surname: "Perdomo",
            email: "yaper@unal.edu.co",
            password: "@4324arremangala",

        },
        {
            name: "Andres",
            surname: "Rojas",
            email: "arojaspe@unal.edu.co",
            password: "LYAs2hNP",

        },
        {
            name: "Slodovan",
            surname: "Milosevich",
            email: "smilosevich@unal.edu.co",
            password: "UTFncj48",
        }
    ]);

    console.log('Some documents were inserted into the "users" collection');

    await songsCollection.insertMany([
        {
            title: "EL Incomprendido",
            artist: "Rawayana - Neutro Shorty",
            genre: "Salsa",

        },
        {
            title: "Nights",
            artist: "Frank Ocean",
            genre: "R&B"
        },
        {
            title: "Circles",
            artist: "Mac Miller",
            genre: "Hip Hop",
        },
        {
            title: "2009",
            artist: "Mac Miller",
            genre: "Funk",
        }
    ]);

    console.log('Some documents were inserted into the "songs" collection');
}

insertSomeDocuments().catch(console.dir);