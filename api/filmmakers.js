const mongoose = require('./db/connection.js');
// const ObjectId = mongoose.Schema.Types.ObjectId;

/* Defining the shape of the entities that we'll be using */
const filmmakersSchema = mongoose.Schema({
  film: String,
  director: String,
  writer: String,
  trailer: String,
  website: String,
  email: String,
  phone: Number,

});

let FilmmakersCollection = mongoose.model("Film", filmmakersSchema);

function FilmAll(){
    return FilmmakersCollection.find();
};

function FilmOne(){
    return FilmmakersCollection.findById();
};
function FilmNew(){
    return FilmmakersCollection.create();
};
function FilmUpdate(){
    return FilmmakersCollection.findByIdAndUpdate();
};
function FilmDelete(){
    return FilmmakersCollection.findByIdAndDelete();
};

module.exports = {
FilmAll,
FilmOne,
FilmNew,
FilmUpdate,
FilmDelete
};