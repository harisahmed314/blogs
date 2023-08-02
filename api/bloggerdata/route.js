import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";



export async function GET(request){
  // Replace the uri string with your connection string.
      const uri = "mongodb+srv://ahmedharis212:haris@cluster0.wlfhfrf.mongodb.net/";

      const client = new MongoClient(uri);

      try {
        const database = client.db('bloggers');
        const movies = database.collection('data');
    
        // Query for a movie that has the title 'Back to the Future'
        const query = {  };
        const movie = await movies.find(query).toArray();
        return NextResponse.json({movie})
        console.log(movie);
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }   
