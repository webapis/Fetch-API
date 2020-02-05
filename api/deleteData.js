const { MongoClient, ObjectID } = require('mongodb');
const assert = require('assert');

export default (req, res) => {
  const { id } = req.query;

  // res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  debugger;

  const { url } = process.env;

  // Create a new MongoClient
  const client = new MongoClient(url, { useUnifiedTopology: true });

  // Use connect method to connect to the Server
  client.connect(err => {
    assert.equal(null, err);

    const db = client.db();
    db.collection('fruites').deleteOne(
      { _id: new ObjectID(id) },
      (error, result) => {
        if (error) {
          console.log('DATA DELETtion err', req.query);
          client.close();
          res.json(err);
        } else {
          console.log('DATA DELETED', req.query);
          client.close();
          res.json(result);
        }
      }
    );
  });
};
