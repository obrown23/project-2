const userApi = require('./api/userApi.js');
const accountApi = require('./api/accountApi.js');
//BOILER
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
app.get('/users', (req, res) => {
  userApi.getAllUsers()
    .then(users => {
      res.render("users/users", { listOUsers: users })
    });
});

app.get('/users/:userId', (req, res) => {
  //gets user
  userApi.getUserById(req.params.userId)
    .then(user => {
      //gets accounts for user
      accountApi.getAllAccountsByUserId(user._id)
        .then(accounts => {
          //put this inside of the inner most .then function :)
          res.render('users/user', { user, accounts });
        })
    });
});

app.post('/users', (req, res) => {
  userApi.createNewUser(req.body)
    .then(() => {
      res.render("users/created");
   });
});

app.delete('/users/:userId', (req, res) => {
  userApi.deleteUserById(req.params.userId)
    .then(() => {
      res.render("users/deleted");
    });
});

//BOILER
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Connected at: " + PORT);
});
