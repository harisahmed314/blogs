import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "POST") {
        // Replace the uri string with your MongoDB deployment's connection string.
        const uri = "mongodb+srv://ahmedharis212:haris@cluster0.9n1jy9l.mongodb.net/";

        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        try {
            // Connect to the MongoDB client
            await client.connect();

            const database = client.db('blogger');
            const collection = database.collection('feedback');

            // get feedback data from request body
            const feedbackData = req.body;

            // insert feedback data into database
            const result = await collection.insertOne(feedbackData);

            // return success response
            res.status(200).json({ message: "Feedback received!" });
        } catch (err) {
            // return error response
            res.status(500).json({ error: err.message });
        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }
    } else {
        res.status(400).send("Bad request");
    }
}
