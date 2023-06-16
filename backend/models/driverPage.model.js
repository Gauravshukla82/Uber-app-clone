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
    driver: String,
    driverID: String,
  },
  {
    versionKey: false,
  }
);

const DriverPageModel = mongoose.model("driverPgae", driverPageSchema);

module.exports = {
  DriverPageModel,
};
