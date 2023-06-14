const mongoose = require("mongoose");
// user Scheama

const userSchema =
  ({
    name: String,
    email: String,
    password: String,
  });

//model

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
