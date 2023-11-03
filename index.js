const express = require('express')
// const mongoose = require('mongoose');
const { connectToDatabase, queryCollection, insertDocument } = require('./mongoConfig');

const app = express()
const PORT = 3000

// const mongoDBUrl = "mongodb+srv://mjaiswal3105:VOQ8iPBuUI2PiiSa@cluster0.k8x8ffh.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to the MongoDB database');
// });

async function main() {
  try {
    const db = await connectToDatabase();

    // const data = await queryCollection('Dummy', { });
    // console.log('Queried data:', data);

    // // Insert a document
    // const newDocument = { name: 'Jane', age: 25, email: 'jane@example.com' };
    // const insertedDoc = await insertDocument('poldet', newDocument);
    // console.log('Inserted document:', insertedDoc);

    // Close the connection
    // db.close();
  } catch (error) {
    console.error('Error:', error);
  }
}

main();

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Api is running')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

app.get('/dummy', async (req, res) => {
  const data = await queryCollection('Dummy', { });
  console.log("Data is ",data)
})

app.get('/insert', async (req, res) => {
  const data = await insertDocument('Dummy', { Name : "test" });
  console.log("Data is ",data)
  res.status(200).json({ data: data });
})

module.exports = app;