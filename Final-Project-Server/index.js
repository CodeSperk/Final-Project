require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(
  cors({
    origin: ["http://localhost:5173", "https://job-explorer-client.web.app"],
    credentials: true,
  })
);
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.b15ehgh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const userCollection = client.db("TasteTrackDB").collection("users");
    const menuCollection = client.db("TasteTrackDB").collection("menu");
    const reviewCollection = client.db("TasteTrackDB").collection("reviews");
    const cartCollection = client.db("TasteTrackDB").collection("cart");

    // jwt related api
    //=================
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
        expiresIn: "1h",
      });
      res.send({ token });
    });

    // middleware to verify Token 
    const verifyToken = (req, res, next) => {
      // console.log("inside Verify Token", req.headers.authorization);
      if(!req.headers.authorization){
        return res.status(401).send({message: "Unauthorized Access"})
      }
      const token = req.headers.authorization.split(' ')[1];
      jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
        if(err){
          return res.status(401).send({message: "unAuthorized access"})
        }
        req.decoded = decoded;
        next();
      })
    }

    //Middleware to verify admin after verify token
    const verifyAdmin = async (req, res, next) => {
      const email = req.decoded.email;
      const query = {email: email};
      const user = await userCollection.findOne(query);
      const isAdmin = user?.role === 'admin';
      if(!isAdmin) {
        return res.status(403).send({message: "forbidden access"})
      }
      next();
    }

    // Manage users info
    // ===================
    app.get("/users", verifyToken, verifyAdmin, async (req, res) => {
      // console.log(req.headers)
      const result = await userCollection.find().toArray();
      res.send(result);
    });

    // to get admin
    app.get('/users/admin/:email', verifyToken, async(req, res) => {
      const email = req.params.email;
      if(email !== req.decoded.email){
        return res.status(403).send({message: 'forbidden access'})
      }
      const query = {email: email}
      const user = await userCollection.findOne(query);
      let admin = false;
      if(user) {
        admin = user?.role === 'admin';
      }
      res.send({admin});
    })

    app.post("/users", verifyToken, verifyAdmin, async (req, res) => {
      const user = req.body;
      //insert email if user doesnt exits:
      // three ways : 1. unique email, 2. upsert 3. simple
      // Using simple method
      const query = { email: user.email };
      const existingUser = await userCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: "User Already Exists", insertedId: null });
      }
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    app.patch(
      "/users/admin/:id", verifyToken, verifyAdmin, async (req, res) => {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const updatedDoc = {
          $set: {
            role: "admin",
          },
        };
        const result = await userCollection.updateOne(filter, updatedDoc);
        res.send(result);
      }
    );

    app.delete("/users/:id", verifyToken, verifyAdmin, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = userCollection.deleteOne(query);
      res.send(result);
    });

    // Menu Related Api
    //===========================
    app.get("/menu", async (req, res) => {
      const result = await menuCollection.find().toArray();
      res.send(result);
    });

    app.post('/menu', async (req, res) => {
      const newMenu = req.body;
      // console.log(newMenu);
      const result = await menuCollection.insertOne(newMenu);
      res.send(result);
    });

    app.delete("/menu/:id", verifyToken, verifyAdmin, async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result  = await menuCollection.deleteOne(query);
      res.send(result);
    })

    // Review Related Api
    //========================
    app.get("/reviews", async (req, res) => {
      const result = await reviewCollection.find().toArray();
      res.send(result);
    });

    // Carts Related API
    // ========================
    app.get("/carts", async (req, res) => {
      const email = req.query.email;
      const query = { userEmail: email };
      const result = await cartCollection.find(query).toArray();
      res.send(result);
    });

    app.post("/carts", async (req, res) => {
      const cartItem = req.body;
      const result = await cartCollection.insertOne(cartItem);
      res.send(result);
    });
    app.delete("/carts/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("boos is sitting");
});

app.listen(port, () => {
  console.log(`taste track server is running. ${port}`);
});
