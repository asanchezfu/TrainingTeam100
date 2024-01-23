const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";

// Create a new client and connect to MongoDB with the previous URI
const client = new MongoClient(uri);

async function findDocuments() {

    const database = client.db("Music_Store");

    const user = await database.collection("users").find(
      { email: "yaper@unal.edu.co" }
    );
    
    // Print a message if no documents were found
    if ((await database.collection("users").countDocuments(
        { email: "yaper@unal.edu.co" }
    )) === 0) {
        console.log("No documents matching!");
      }
    // Print returned documents
    for await (const doc of user) {
      console.dir(doc);
    }
    
    const song = await database.collection("songs").find(
      { artist: "Frank Ocean" }
    );
    
    // Print a message if no documents were found
    if ((await database.collection("songs").countDocuments(
      { artist: "Frank Ocean" }
    )) === 0) {
        console.log("No documents matching!");
      }
    // Print returned documents
    for await (const doc of song) {
      console.dir(doc);
    }
    await client.close();
}

findDocuments().catch(console.dir);
