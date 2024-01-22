const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";

// Create a new client and connect to MongoDB with the previous URI
const client = new MongoClient(uri);

async function findDocuments() {

    const database = client.db("Music_Store");
    const usersCollection = database.collection("users");
    const songsCollection = database.collection("songs"); 

    const userQuery = (
        { email: "yaper@unal.edu.co" } 
    );

    const user = await usersCollection.find(userQuery);
    
    // Print a message if no documents were found
    if ((await usersCollection.countDocuments(userQuery)) === 0) {
        console.log("No documents matching!");
      }
    // Print returned documents
    for await (const doc of user) {
      console.dir(doc);
    }

    const songQuery = (
        { artist: "Frank Ocean" } 
    );

    const song = await songsCollection.find(songQuery);
    
    // Print a message if no documents were found
    if ((await songsCollection.countDocuments(songQuery)) === 0) {
        console.log("No documents matching!");
      }
    // Print returned documents
    for await (const doc of song) {
      console.dir(doc);
    }
}

findDocuments().catch(console.dir);
