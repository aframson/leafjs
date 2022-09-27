/**
 * DATABASE SETTINGS (MYSQL)
 * Comment the section you dont want to activate the databse 
 * Choose one.
 */

// local connection 
// Connect to a local MongoDB instance using the mongoose.connect() function.
// We pass the useNewUrlParser: true, etc. to mongoose.connect() to avoid the DeprecationWarning.
const mongoose = require("mongoose");

localhost_url = 'mongodb://localhost:27017/usersdb'
mongoose.connect(localhost_url,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);


//Create a connection to MongoDB Atlas
// We pass the useNewUrlParser: true, etc. to mongoose.connect() to avoid the DeprecationWarning.
const username = "<mongodb username>";
const password = "<password>";
const cluster = "<cluster name>";
const dbname = "myFirstDatabase";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);


const db = mongoose.connection;
db.on("error", console.error.bind(console, "❌❌ MongoDB connection error: "));
db.once("open", function () {
  console.log("⚡ 🌿 ✅  MongoDB Connected successfully");
});


module.exports = db;