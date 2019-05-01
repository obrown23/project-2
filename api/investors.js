const mongoose = require('../db/connection');
// const ObjectId = mongoose.Schema.Types.ObjectId;

/* Defining the shape of the entities that we'll be using */
const investorsSchema = mongoose.Schema({
  name: String,
  website: String,
  email: String,
  phone: String,

});

let InvestorsCollection = mongoose.model("Investors", investorsSchema);

function InvestorsAll(){
    return InvestorsCollection.find();
};

function InvestorsOne(invest){
    return InvestorsCollection.findById(invest);
};
function InvestorsNew(invest){
    return InvestorsCollection.create(invest);
};
function InvestorsUpdate(x, y){
    return InvestorsCollection.findByIdAndUpdate(x,y);
};
function InvestorsDelete(r, h){
    return InvestorsCollection.findByIdAndDelete(r, h);
};

module.exports = {
InvestorsAll,
InvestorsOne,
InvestorsNew,
InvestorsUpdate,
InvestorsDelete
};