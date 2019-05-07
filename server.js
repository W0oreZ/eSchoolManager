const express = require('express');
const mongoose = require('mongoose');

//Routes
const users = require('./routes/api/users');
const students = require('./routes/api/students');
const formations = require('./routes/api/formations');
const modules = require('./routes/api/modules');
const groupes = require('./routes/api/groupes');

//Init Express
const app = express();

//DB Config-----------------------------------------
const db = require('./config/keys').mongoURI;

mongoose.connect(db, {
    useNewUrlParser: true
  })
  .then(() => console.log('MongoDB Connected !'))
  .catch(err => console.log(err));

//---------------------------------------------------

//Test Route
app.get('/', (req, res) => res.send("Hello World !!"));

//Use Routes
app.use('/api/users', users);
app.use('/api/students', students);
app.use('/api/formations', formations);
app.use('/api/modules', modules);
app.use('/api/groupes', groupes);



//Starting WebServer---------------------------------------------

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running on port ${port}`));

//---------------------------------------------------------------