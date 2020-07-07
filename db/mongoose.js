const mongoose = require("mongoose");
const mongo_uri = require("../config/keys").mongoURI;

mongoose.connect(
  mongo_uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("MongoDB Connected");
    }
  }
);
