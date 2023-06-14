const mongoose = require("mongoose");
const driverPageSchema = mongoose.Schema(
  {
    bio: { type: String },
    profilePicture: { type: String },
    socialMediaLinks: {
      facebook: { type: String },
      twitter: { type: String },
      instagram: { type: String },
    },
    paymentSettings: {
      paymentMethod: { type: String },
      accountNumber: { type: String },
    },
    user: String,
    userID: String,
  },
  {
    versionKey: false,
  }
);

const DriverPageModel = mongoose.model("driverPgae", driverPageSchema);

module.exports = {
  DriverPageModel,
};
