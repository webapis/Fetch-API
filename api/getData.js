const { MongoClient } = require('mongodb');
const assert = require('assert');

export default (req, res) => {
  // res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  debugger;

  const { url } = process.env;

  // Create a new MongoClient
  const client = new MongoClient(url, { useUnifiedTopology: true });

  // Use connect method to connect to the Server
  client.connect(err => {
    assert.equal(null, err);


    const db = client.db();
    db.collection('fruites')
      .find({})
      .toArray((e, docs) => {
        if (e) {
          client.close();
          res.json(err);
        } else {
          client.close();
          res.json(docs);
        }
      });
  });
};
