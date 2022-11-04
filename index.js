const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const port = process.env.PORT || 5001;
const app = express();

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rbe1w.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});

const run = async () => {
  try {
    const db = client.db('genius-car');
    const serviceCollection = db.collection('services');

    app.get('/services', async (req, res) => {

    });
  }
  finally {

  }
}
run().catch(err => console.error(err));


app.get('/', (req, res) => {
  res.send('Genius Car Server is Running...');
});

app.listen(port, () => {
  console.log(`Genius car server running on ${port}`);
});