const mongoose = require("mongoose");
const driverSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    pass: { type: String, required: true },
    contact: { type: String },
    location: { type: String },
    vehicle: { type: String },
    vehicleType: { type: String },
    availability: { type: Boolean, default: false },
    ratings: { type: Number },
    reviews: [
      {
        text: { type: String },
        rating: { type: Number },
      },
    ],
  },
  {
    versionKey: false,
  }
);

const DriverModel = mongoose.model("driver", driverSchema);

module.exports = {
  DriverModel,
};
