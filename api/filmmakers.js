const mongoose = require('./db/connection.js');
const ObjectId = mongoose.Schema.Types.ObjectId;

/* Defining the shape of the entities that we'll be using */
const filmmakersSchema = mongoose.Schema({
  film: String,
  director: String,
  producer: String,
  trailer: String,
  website: String,
  filmPitch: String,
  email: String,
  phone: Number,

});

/* create an API that will talk to the "users" collection in mongodb */
let FilmmakersCollection = mongoose.model("Film", filmmakersSchema);

function FilmAll(){
    return FilmmakersCollection.find();
};

function FilmOne(){
    return FilmmakersCollection.findById();
};

module.exports = {
FilmAll,
FilmOne
};