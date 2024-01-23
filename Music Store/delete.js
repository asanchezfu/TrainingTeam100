const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";

// Create a new client and connect to MongoDB with the previous URI
const client = new MongoClient(uri);

async function deleteDocument() {
    const database = client.db("Music_Store");

    const user = await database.collection("users").deleteOne(
        { email: "yaper@unal.edu.co" }
    );

    const song = await database.collection("songs").deleteOne(
        { artist: "Mac Miller" }
    );
    await client.close();
}

deleteDocument().catch(console.dir);
