const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

var app = express();
const port = 8000;
 
app.use(morgan('combined'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// routes
app.use(require('./routes/api.js'))
app.use(require('./routes/html.js'))



app.listen(port, function(){
    console.log("server run well on port 8000")
});
