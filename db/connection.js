// requirements: import mongoose
const mongoose = require('mongoose')

const dbConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/project-2'
mongoose.connect(dbConnection, { useNewUrlParser: true})
  .then(() => {
    console.log("mongo is working");
  })

// export your mongoose connection
module.exports = mongoose;