const express = require('express');
const mongoose = require('mongoose');


const app = express();

//DB Config
const db = require('./config/keys').mongoURI;

mongoose.connect(db, {
    useNewUrlParser: true
  })
  .then(() => console.log('MongoDB Connected !'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send("Hello World !!"));

app.listen(port, () => console.log(`Server Running on port ${port}`));