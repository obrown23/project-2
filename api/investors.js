const mongoose = require('./db/connection.js');
// const ObjectId = mongoose.Schema.Types.ObjectId;

/* Defining the shape of the entities that we'll be using */
const investorsSchema = mongoose.Schema({
  name: String,
  website: String,
  email: String,
  phone: Number,

});

let InvestorsCollection = mongoose.model("Investors", investorsSchema);

function InvestorsAll(){
    return InvestorsCollection.find();
};

function InvestorsOne(){
    return InvestorsCollection.findById();
};
function InvestorsNew(){
    return InvestorsCollection.create();
};
function InvestorsUpdate(){
    return InvestorsCollection.findByIdAndUpdate();
};
function InvestorsDelete(){
    return InvestorsCollection.findByIdAndDelete();
};

module.exports = {
InvestorsAll,
InvestorsOne,
InvestorsNew,
InvestorsUpdate,
InvestorsDelete
};