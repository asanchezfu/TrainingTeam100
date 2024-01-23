const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";

// Create a new client and connect to MongoDB with the previous URI
const client = new MongoClient(uri);

async function updateDocument() {
    const database = client.db("Music_Store");

    const songs = await database.collection("songs").updateOne(
        { genre: 'R&B' },
        {
            $set: { 
                title: 'IVY'
            }
        },
        { upsert: true }
    );

    const users = await database.collection("users").updateOne(
        { surname: 'Rojas' },
        {
            $set: { 
                password: 'frankouchan'
            }
        },
        { upsert: true }
    );
    await client.close();
}

updateDocument().catch(console.dir);