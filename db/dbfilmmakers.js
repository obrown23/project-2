let filmmaker = require('../api/filmmakers')

let newFilmmakers = [
    {
        film: "The Drummer Boy",
        director: "Axel Foley",
        writer: "Don Cheatal",
        trailer: "https://www.youtube.com/watch?v=cOy9zhNDUtA",
        website: "www.drummerboy.com",
        email: "drummerboy@drummerboy.org",
        phone: "6067757070",
    },
    {
        film: "Dark Burner",
        director: "Chaz Vex",
        writer: "Duce Vannin",
        trailer: "https://www.youtube.com/watch?v=oD1vbhicJUY",
        website: "www.darkburner.com",
        email: "darkburner2019@vice.org",
        phone: "585434987",

    },
    {
        film: "Sunset",
        director: "László Nemes",
        writer: "Duce Vannin",
        trailer: "https://www.youtube.com/watch?v=iV-LRlyI2dQ",
        website: "www.laszlofilm.com",
        email: "laszlofilm2019@film.org",
        phone: "4748089212",

    },
    {
        film: "Ugly Dogs",
        director: "Kelly Asbury",
        writer: "David Horvath ",
        trailer: "https://www.youtube.com/watch?v=Z6Z-cyG4MfM",
        website: "https://www.imdb.com/title/tt1946502/",
        email: "uglydogs2019@film.org",
        phone: "7854789245",

    },
    {
        film: "Captain Marvel",
        director: "Anna Boden",
        writer: "Ryan Fleck",
        trailer: "https://www.youtube.com/watch?v=0LHxvxdRnYc",
        website: "https://www.imdb.com/title/tt4154664/",
        email: "captainmarvel2020@film.org",
        phone: "6447225671",

    },
    {
        film: "Little",
        director: "Tina Gordon",
        writer: "Tracy Oliver",
        trailer: "https://www.youtube.com/watch?v=5HdNhpeI1g4",
        website: "https://www.imdb.com/title/tt8085790/",
        email: "little2019@film.org",
        phone: "2095783543",

    },
    {
        film: "Gran Torino",
        director: "Clint Eastwood",
        writer: "Nick Schenk",
        trailer: "https://www.youtube.com/watch?v=RMhbr2XQblk",
        website: "https://www.imdb.com/title/tt1205489/",
        email: "grantorino2008@film.org",
        phone: "7875482135",

    },
    {
        film: "Pans Labyrinth",
        director: "Guillermo del Toro",
        writer: "Guillermo del Toro",
        trailer: "https://www.youtube.com/watch?v=4Evmr2ZCjWc",
        website: "https://www.imdb.com/title/tt0457430/",
        email: "panslabyrinth2006@film.org",
        phone: "4128236753",

    },
    {
        film: "The Birth of a Nation",
        director: "Nate Parker",
        writer: "Nate Parker",
        trailer: "https://www.youtube.com/watch?v=ezWiUTXB11A",
        website: "https://www.imdb.com/title/tt4196450/",
        email: "thebirthofanation@film.org",
        phone: "3216547861",

    },
    {
        film: "The Boy Who Harnessed the Wind",
        director: "Chiwetel Ejiofor",
        writer: "Chiwetel Ejiofor",
        trailer: "https://www.youtube.com/watch?v=nPkr9HmglG0",
        website: "https://www.imdb.com/title/tt7533152/",
        email: "tbwhtf@film.org",
        phone: "5632793092",

    }


]

filmmaker.FilmNew(newFilmmakers)
.then(filmmakers =>{
    console.log('Added DB', filmmakers)
})