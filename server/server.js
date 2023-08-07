const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors');

app.use(cors())
app.use(express.json())

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('pauline');
    const ceramics = db.collection('ceramics');
    const ceramicsRouter = createRouter(ceramics);
    app.use('/api/pauline/ceramics', ceramicsRouter);
  
  });

  app.listen(9000, function(){
    console.log(`app listening on port ${this.address().port}`);
});