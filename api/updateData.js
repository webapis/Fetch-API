const { MongoClient, ObjectID } = require('mongodb');
const assert = require('assert');

export default (req, res) => {
  // res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  const { id } = req.query;

  const { url } = process.env;

  // Create a new MongoClient
  const client = new MongoClient(url, { useUnifiedTopology: true });

  // Use connect method to connect to the Server
  client.connect(err => {
    assert.equal(null, err);

    const db = client.db();
    db.collection('fruites').updateOne(
      { _id: new ObjectID(id) },
      {
        $set: { firstName: req.body.firstName, lastName: req.body.lastName }
      },
      (error, result) => {
        if (error) {
          client.close();
          res.json(error);
        } else {
          client.close();
          res.json(result);
        }
      }
    );
  });
};
