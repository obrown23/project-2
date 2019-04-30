const mongoose = require('../db/connection');
// const ObjectId = mongoose.Schema.Types.ObjectId;

/* Defining the shape of the entities that we'll be using */
const filmmakersSchema = mongoose.Schema({
  film: String,
  director: String,
  writer: String,
  trailer: String,
  website: String,
  email: String,
  phone: String,

});

let FilmmakersCollection = mongoose.model("Film", filmmakersSchema);

function FilmAll(){
    return FilmmakersCollection.find();
};

function FilmOne(film){
    return FilmmakersCollection.findById(film);
};
function FilmNew(film){
    return FilmmakersCollection.create(film);
};
function FilmUpdate(x, y){
    return FilmmakersCollection.findByIdAndUpdate(x, y);
};
function FilmDelete(r,h){
    return FilmmakersCollection.findByIdAndDelete(r,h);
};

module.exports = {
FilmAll,
FilmOne,
FilmNew,
FilmUpdate,
FilmDelete
};