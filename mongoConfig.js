const mongoose = require('mongoose');

const mongoDBUrl = "mongodb+srv://mjaiswal3105:VOQ8iPBuUI2PiiSa@cluster0.k8x8ffh.mongodb.net/proposalDetails?retryWrites=true&w=majority";
const dbName = 'proposalDetails'; // Your database name
const collectionName = 'ProposalDetail'; // Your collection name

mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Function to connect to the MongoDB database
const connectToDatabase = async () => {
  return new Promise((resolve, reject) => {
    db.once('open', () => {
      console.log('Connected to the MongoDB database');
      resolve(db);
    });
  });
};

// Function to query the collection
const queryCollection = async (collectionName, query = {}) => {
  return new Promise(async (resolve, reject) => {

    const collection = db.collection(collectionName);

    try {
      const result = await collection.find(query).toArray();
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

// Function to insert a document into the collection
const insertDocument = async (collectionName, document) => {
  return new Promise(async (resolve, reject) => {
    const collection = db.collection(collectionName);

    try {
      const result = await collection.insertOne(document);
      console.log("Result is ",result)
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { connectToDatabase, queryCollection, insertDocument };