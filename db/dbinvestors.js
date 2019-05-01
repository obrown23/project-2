let investor = require('../api/investors.js')

let newInvestors = [
    {
        name: "Jose Tyler",
        website: "www.josetyler.com",
        email: "jose.tyler@gmail.com",
        phone: "4843225464",
    }, 
    {
        name: "Ali Harper",
        website: "www.aliHarperRush.org",
        email: "allifinancial@financial.org",
        phone: "6107615592",
      
    },
    {
        name: "Omar Brown",
        website: "omarbrown.org",
        email: "omarbrown510@gmail.com",
        phone: "4439348370",
    },
    {
        name: "Jason Pergy",
        website: "www.jPergyLawn.org",
        email: "lawnPergy@pergy.org",
        phone: "5419675667",
      
    },
    {
        name: "Todd Wilcher",
        website: "www.eastAtlantaTodd.com",
        email: "eastAtlantaTodd@aol.com",
        phone: "6635197475",
    },

]
investor.InvestorsNew(newInvestors).then(investors =>{
    console.log('Added DB', investors)
})