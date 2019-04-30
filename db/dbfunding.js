let funding = require('../api/funding.js')

let newFunding = [
    {
        name: "Bankside Films",
        website: "https://www.bankside-films.com/home/",
        email: "films@bankside-films.com",
        phone: 4402076366085,
    }, 
    {
        name: "Bertha BRITDOC Connect Fund",
        website: "https://docsociety.org/funds/",
        email: "bertha@films.org",
        phone: 6067757070,
    },
    {
        name: "Collabor8te",
        website: "http://collabor8te.com/how-to-apply/",
        email: "collabor8te@film.org",
        phone: 4048227572,
    }, 
    {
        name: "TFI Sloan Filmmaker Fund",
        website: "http://www.tribecafilminstitute.org/",
        email: "institute@tfiny.org",
        phone: 2122748080,
    }, 
    {
        name: "Channel 4 Fund",
        website: "http://britdoc.org/real_funds/britdoc-fund",
        email: "drummerboy@drummerboy.org",
        phone: 6067757070,
    }, 
    {
        name: "National Film and Video Foundation",
        website: "http://nfvf.co.za/home/index.php?ipkContentID=57",
        email: "info@nfvf.co.za",
        phone: 7114830880,
    }, 
    {
        name: "Alter-Ciné Foundation",
        website: "http://altercine.org/html/en/programme-de-bourses.php",
        email: "altercine@videotron.ca",
        phone: 6756542348,
    },  
]
funding.FundingNew(newFunding)