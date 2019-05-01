
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const filmmakersApi = require("./api/filmmakers");
const investorsApi = require("./api/investors");
const fundingApi = require("./api/funding");
app.use('/public', express.static("public"))

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

// grabing  all filmmakers portion
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
app.post('/filmmakers', function (req, res) {
    filmmakersApi.FilmNew(req.body)
        .then(() => {
            res.redirect("/filmmakers")
        })
});
app.get('/filmmakers/:id/update', function (req, res) {
    filmmakersApi.FilmOne(req.params.id)
        .then(film => {
            res.render('filmmakers/update', { film });
        })
});
app.put('/filmmakers/:id', (req, res) => {
    filmmakersApi.FilmUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect("/filmmakers/" + req.params.id)
        })
});

app.delete('/filmmakers/:id', (req, res) => {
    filmmakersApi.FilmDelete(req.params.id)
        .then(() => {
            res.redirect("/filmmakers");
        });
});



// grabing all investors
app.get('/investors', function (req, res) {
    investorsApi.InvestorsAll()
    .then(investors => {
        res.render('investors/index', {investors})
    })
})
app.get('/investors/:id', function (req, res) {
    investorsApi.InvestorsOne(req.params.id)
        .then(investor => {
            res.render('investors/single', { investor })
        })
});
app.post('/investors', function (req, res) {
    investorsApi.InvestorsNew(req.body)
        .then(() => {
            res.redirect("/investors")
        })
});
app.get('/investors/:id/update', function (req, res) {
    investorsApi.InvestorsOne(req.params.id)
        .then(investor => {
            res.render('investors/update', { investor });
        })
});
app.put('/investors/:id', (req, res) => {
    investorsApi.InvestorsUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect("/investors/" + req.params.id)
        })
});

app.delete('/investors/:id', (req, res) => {
    investorsApi.InvestorsDelete(req.params.id)
        .then(() => {
            res.redirect("/investors");
        });
});

// grabing all funding companies
app.get('/funders', function (req, res) {
    fundingApi.FundingAll()
    .then(fundings => {
        res.render('funders/index', {fundings})
    })
})
app.get('/funders/:id', function (req, res) {
    fundingApi.FundingOne(req.params.id)
        .then(funderings => {
            res.render('funders/single', { funderings })
        })
});
app.post('/funders', function (req, res) {
    fundingApi.FundingNew(req.body)
        .then(() => {
            res.redirect("/funders")
        })
});
app.get('/funders/:id/update', function (req, res) {
    fundingApi.FundingOne(req.params.id)
        .then(funderings => {
            res.render('funding/update', { funderings});
        })
});
app.put('/funders/:id', (req, res) => {
    fundingApi.FundingUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect("/funders/" + req.params.id)
        })
});

app.delete('/funders/:id', (req, res) => {
    fundingApi.FundingDelete(req.params.id)
        .then(() => {
            res.redirect("/funders");
        });
});

//BOILER
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Connected at: " + PORT);
});
