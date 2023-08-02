import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
  // Replace the uri string with your connection string.
  const uri = "mongodb+srv://ahmedharis212:haris@cluster0.9n1jy9l.mongodb.net/";

  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB client
    await client.connect();

    const database = client.db('blogger');
    const collection = database.collection('data');

    // Query for all documents in the collection
    const data = await collection.find().toArray();

    // Return the data as a JSON response
    NextResponse.json({ data });
  

  } catch (error) {
    // Return an error response
    res.status(500).json({ error: error.message });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
