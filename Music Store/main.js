const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";

// Create a new client and connect to MongoDB with the previous URI
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to the "insertDB" database
    const database = client.db("Music_Store");
    
    // Create users collection
    const usersCollection = database.collection("users");
    
    // Create songs collection
    const songsCollection = database.collection("songs");
    
    // Create collections  
    console.log('Collections created!');

    // Delete docs
    await deleteDocument();

  } finally {
     // Close the MongoDB client connection
    await client.close();
  }
}

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

// Run the function and handle any errors
run().catch(console.dir);
//insertOneDocument().catch(console.dir);
//insertSomeDocuments().catch(console.dir);