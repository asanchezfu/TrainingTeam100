const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("newDB");
    const movies = database.collection("movies");

    // Create a filter for movies with the title "Random Harvest"
    const filter = { _id: new ObjectId("65a88b9898aff294e8f72fb7") };

    /* Set the upsert option to insert a document if no documents match
    the filter */
    const options = { upsert: true };

    // Specify the update to set a value for the plot field
    const updateDoc = {
      $set: {
        topic: `Drama`
      },
    };

    // Update the first document that matches the filter
    const result = await movies.updateOne(filter, updateDoc, options);
    
    // Print the number of matching and modified documents
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
  } finally {
    // Close the connection after the operation completes
    await client.close();
  }
}
// Run the program and print any thrown errors
run().catch(console.dir);
