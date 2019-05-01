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

function FundingOne(fund){
    return FundingCollection.findById(fund);
};
function FundingNew(fund){
    return FundingCollection.create(fund);
};
function FundingUpdate(x,y){
    return FundingCollection.findByIdAndUpdate(x,y);
};
function FundingDelete(r,h){
    return FundingCollection.findByIdAndDelete(r,h);
};

module.exports = {
FundingAll,
FundingOne,
FundingNew,
FundingUpdate,
FundingDelete
};