const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = 'mongodb+srv://jramirezle:Milo.2020@cluster0.aecvodh.mongodb.net/?retryWrites=true&w=majority';

// Create a new client and connect to MongoDB with the previous URI
const client = new MongoClient(uri);

async function insertSomeDocuments() {

    const database = client.db("Music_Store");

    await database.collection("users").insertMany([
        req.body = 
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
            password: "AEIOU1234",

        },
        {
            name: "Slodovan",
            surname: "Milosevich",
            email: "smilosevich@unal.edu.co",
            password: "UTFncj48",
        },
        {
            name: "Felipe",
            surname: "Sánchez",
            email: "asanchezfu@unal.edu.co",
            password: "ABCD1234",

        },
        {
            name: "Juan Diego",
            surname: "Ramirez",
            email: "jramirezle@unal.edu.co",
            password: "juanr123",
        },
        {
            name: "Will",
            surname: "Smith",
            email: "wsmith@unal.edu.co",
            password: "AAAAEEEEIII",

        },
        {
            name: "Shakira",
            surname: "Mebarak Ripoll",
            email: "smebarak@unal.edu.co",
            password: "UnaLobaEnElArmario",
        },
        {
            name: "Leonel",
            surname: "Messi",
            email: "lmessi@unal.edu.co",
            password: "meregalanbalonesdeoro",
        },
        {
            name: "Gustavo",
            surname: "Petro",
            email: "petrosky@unal.edu.co",
            password: "colombiahumana",

        },
        {
            name: "Pepe",
            surname: "Grillo",
            email: "pgrillo@unal.edu.co",
            password: "pinocho123",
        }
    ]);

    console.log('Some documents were inserted into the "users" collection');

    await database.collection("songs").insertMany([
        {
            title: "El Incomprendido",
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
        },
        {
            title: "Ivy",
            artist: "Frank Ocean",
            genre: "R&B"
        },
        {
            title: "Seigfried",
            artist: "Frank Ocean",
            genre: "R&B",
        },
        {
            title: "Distance",
            artist: "Casper Sage",
            genre: "R&B",
        },
        {
            title: "La lluvia",
            artist: "Nicolás y los fumadores",
            genre: "Indie rock",
        },
        {
            title: "Algo Contigo",
            artist: "Los Panchos",
            genre: "Bolero",
        },
        {
            title: "Por mil noches",
            artist: "AIRBAG",
            genre: "Rock",
        }
    ]);

    console.log('Some documents were inserted into the "songs" collection');
    await client.close();
}

insertSomeDocuments().catch(console.dir);