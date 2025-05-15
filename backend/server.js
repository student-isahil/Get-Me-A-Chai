import express from 'express'
import dotenv from 'dotenv'
import { MongoClient } from 'mongodb'
import bodyparser from 'body-parser'
import cors from 'cors'

dotenv.config()


// Connecting to the MongoDB Client
const url = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;
const client = new MongoClient(url);
client.connect();

// App & Database
const app = express()
const port = 5000 

// Middleware
app.use(bodyparser.json())
app.use(cors())


// Get all the passwords
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
})

// Save a password
app.post('/', async (req, res) => { 
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password);
    res.send({success: true, result: findResult})
})

// Delete a password by id
app.delete('/', async (req, res) => { 
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne({ id: password.id });
    res.send({success: true, result: findResult})
})


app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
})
