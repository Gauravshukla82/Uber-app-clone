const mongoose = require("mongoose");
// user Scheama

const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    versionKey: false,
  }
);

//model
const UserModel = mongoose.model("users", userSchema);

module.exports = {
  UserModel,
};
