const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const database = 'Node-tut';
const client = new MongoClient(url);

async function dbConnect() 
{
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('Coder');
}

module.exports = dbConnect;

db()