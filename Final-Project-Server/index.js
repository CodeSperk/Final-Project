require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

//middlewares
app.use(cors({
  origin: ["http://localhost:5173", "https://job-explorer-client.web.app"],
  credentials: true,
}));
app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.b15ehgh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const menuCollection = client.db("TasteTrackDB").collection("menu");
    const reviewCollection = client.db("TasteTrackDB").collection("reviews");

    // To get menu data
    app.get("/menu", async(req, res) => {
      const result = await menuCollection.find().toArray();
      res.send(result);
    })

    // To get review data
    app.get("/reviews", async(req, res) => {
      const result = await reviewCollection.find().toArray();
      res.send(result);
    })
    


    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send("boos is sitting");
});

app.listen(port, () => {
  console.log(`taste track server is running. ${port}`);
})