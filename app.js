const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();

const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'Travel_wise';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/bookings', (req, res) => {
  MongoClient.connect(mongoUrl, (err, client) => {
    if (err) throw err;

    const db = client.db(dbName);
    const collection = db.collection('all_bookings');

    collection.find({}).toArray((err, docs) => {
      if (err) throw err;

      res.json(docs);
      client.close();
    });
  });
});

app.get('/users', (req, res) => {
  MongoClient.connect(mongoUrl, (err, client) => {
    if (err) throw err;

    const db = client.db(dbName);
    const collection = db.collection('user_login');

    collection.find({}).toArray((err, docs) => {
      if (err) throw err;

      res.json(docs);
      client.close();
    });
  });
});

app.get('/rewards', (req, res) => {
  MongoClient.connect(mongoUrl, (err, client) => {
    if (err) throw err;

    const db = client.db(dbName);
    const collection = db.collection('reward_points');

    collection.find({}).toArray((err, docs) => {
      if (err) throw err;

      res.json(docs);
      client.close();
    });
  });
});

app.get('/destinations', (req, res) => {
  MongoClient.connect(mongoUrl, (err, client) => {
    if (err) throw err;

    const db = client.db(dbName);
    const collection = db.collection('destinations');

    collection.find({}).toArray((err, docs) => {
      if (err) throw err;

      res.json(docs);
      client.close();
    });
  });
});

app.get('/travel-blogs', (req, res) => {
  MongoClient.connect(mongoUrl, (err, client) => {
    if (err) throw err;

    const db = client.db(dbName);
    const collection = db.collection('social_components');

    collection.find({}).toArray((err, docs) => {
      if (err) throw err;

      res.json(docs);
      client.close();
    });
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
