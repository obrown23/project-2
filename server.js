
const express = require('express');
const app = express();
const methodOverride = require('method-override');

//tells express to parse HTML form requests properly
//BOILER
app.use(express.urlencoded())

app.use(methodOverride('_method'))

//tell express we're using hbs to render page
//BOILER (if using handlebars)
app.set('view engine', 'hbs');

//route handler
app.get('/', function(req, res){
    res.send('Hello World');
 });


//BOILER
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Connected at: " + PORT);
});
