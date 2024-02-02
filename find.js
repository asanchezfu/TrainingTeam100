const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    
    // Get the database and collection on which to run the operation
    const database = client.db("newDB");
    const movies = database.collection("movies");

    // Query for a movie that has the title 'The Room'
    const query = ( 
        { title: "La sociedad de la nieve" }
        );

    const options = {
      // Sort matched documents in descending order by rating
      sort: { country : "Uruguay" },
      // Include only the `title` and `imdb` fields in the returned document
      projection: { _id: 0, title: 1, country: 1},
    };

    // Execute query
    //const movie = await movies.findOne(query, options);
    const movie = await movies.findOne(query);
    // Print the document returned by findOne()
    console.log(movie);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);