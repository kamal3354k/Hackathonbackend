const { MongoClient } = require('mongodb');

const mongoURI = 'mongodb+srv://mjaiswal3105:VOQ8iPBuUI2PiiSa@cluster0.k8x8ffh.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection URI

const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
client.connect()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });