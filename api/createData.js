const { MongoClient } = require('mongodb');
const assert = require('assert');

export default (req, res) => {
  // res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  debugger;

  const { url } = process.env;

  // Database Name
  const dbName = 'demo';

  // Create a new MongoClient
  const client = new MongoClient(url, { useUnifiedTopology: true });

  // Use connect method to connect to the Server
  client.connect(function(err) {
    assert.equal(null, err);

    const db = client.db();
    db.collection('fruites').insertOne(
      { message: req.body },
      (error, result) => {
        if (error) {
          res.json(err);
        } else {
          res.json(result);
        }

        client.close();
      }
    );
  });
};
