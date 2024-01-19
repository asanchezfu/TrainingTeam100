const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";

// Create a new client and connect to MongoDB with the previous URI
const client = new MongoClient(uri);

async function deleteDocument() {
    const database = client.db("Music_Store");
    const usersCollection = database.collection("users");
    const songsCollection = database.collection("songs"); 

    const userQuery = (
        { email: "yaper@unal.edu.co" } 
    );

    const user = await usersCollection.deleteOne(userQuery);

    const songQuery = (
        { artist: "Mac Miller" } 
    );

    const song = await songsCollection.deleteOne(songQuery);
    
}

deleteDocument().catch(console.dir);
