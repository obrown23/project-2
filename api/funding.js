const mongoose = require('../db/connection');
// const ObjectId = mongoose.Schema.Types.ObjectId;

/* Defining the shape of the entities that we'll be using */
const fundingSchema = mongoose.Schema({
  name: String,
  website: String,
  email: String,
  phone: String,

});

let FundingCollection = mongoose.model("Funding", fundingSchema);

function FundingAll(){
    return FundingCollection.find();
};

function FundingOne(){
    return FundingCollection.findById();
};
function FundingNew(){
    return FundingCollection.create();
};
function FundingUpdate(){
    return FundingCollection.findByIdAndUpdate();
};
function FundingDelete(){
    return FundingCollection.findByIdAndDelete();
};

module.exports = {
FundingAll,
FundingOne,
FundingNew,
FundingUpdate,
FundingDelete
};