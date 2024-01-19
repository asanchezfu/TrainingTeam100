const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";

// Create a new client and connect to MongoDB with the previous URI
const client = new MongoClient(uri);

async function updateDocument() {
    const database = client.db("Music_Store");
    const usersCollection = database.collection("users");
    const songsCollection = database.collection("songs"); 

    const songs = await songsCollection.updateOne(
        { genre: 'R&B' },
        {
            $set: { 
                title: 'IVY'
            }
        },
        { upsert: true }
    );

    const users = await usersCollection.updateOne(
        { surname: 'Rojas' },
        {
            $set: { 
                password: 'frankouchan'
            }
        },
        { upsert: true }
    );
}

updateDocument().catch(console.dir);