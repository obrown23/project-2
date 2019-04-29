//BOILER
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const methodOverride = require('method-override');

//route handler
app.get('/', function(req, res){
     res.send('Hello World');
  });
//BOILER CONNECTING TO PORT 3000;
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Connected at: " + PORT);
});
