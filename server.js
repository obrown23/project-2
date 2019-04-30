
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const filmmakersApi = require("./api/filmmakers");
// const investorApi = require("./api/investors");
// const fundingApi = require("./api/funding");

//tells express to parse HTML form requests properly
//BOILER
app.use(express.urlencoded())

app.use(methodOverride('_method'))

//tell express we're using hbs to render page
//BOILER (if using handlebars)
app.set('view engine', 'hbs');

//route handler
app.get('/', function (req, res) {
    res.render('home');
});

// all filmmakers portion
app.get('/filmmakers', function (req, res) {
    filmmakersApi.FilmAll()
        .then(filmmaker => {
            res.render('filmmakers/index', { filmmaker })
        })
});
app.get('/filmmakers/:id', function (req, res) {
    filmmakersApi.FilmOne(req.params.id)
        .then(filmmakers => {
            res.render('filmmakers/single', { filmmakers })
        })
});

//  app.get('/filmmakers/new', function(req, res){
//     res.render('filmmakers/new');
//  });

app.post('/filmmakers', function (req, res) {
    filmmakersApi.FilmNew(req.body)
        .then(() => {
            res.redirect("/filmmakers")
        })
});
app.get('/filmmakers/:id/update', function (req, res) {
    filmmakersApi.FilmOne(req.params.id)
        .then(film => {
            res.render('filmmakers/update', {film});
        })
});
app.put('/filmmakers/:id', (req, res) => {
    filmmakersApi.FilmUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect("/filmmakers/" + req.params.id)
        })
});

  app.delete('/filmmakers/:id', (req, res) => {
    filmmakersApi.FilmDelete(req.params.id, req.body)
      .then(() => {
        res.render("/filmmakers/" + req.params.id);
      });
  });


//BOILER
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Connected at: " + PORT);
});
