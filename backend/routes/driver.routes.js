const express = require("express");
const bcrypt = require("bcrypt");
const driverRouter = express.Router();
const { DriverModel } = require("../models/driver.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

driverRouter.get("/", async (req, res) => {
  try {
    const drivers = await DriverModel.find();
    res.status(200).json(drivers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch drivers" });
  }
});

driverRouter.post("/register", async (req, res) => {
  const {
    name,
    email,
    pass,
    contact,
    location,
    vehicle,
    vehicleType,
    availability,
    ratings,
    reviews,
  } = req.body;
  try {
    bcrypt.hash(pass, 5, async (err, hash) => {
      if (err) {
        res.json({ error: err.message });
      } else {
        const driver = new DriverModel({
          name,
          email,
          contact,
          location,
          vehicle,
          vehicleType,
          availability,
          ratings,
          reviews,
          pass: hash,
        });
        await driver.save();
        res.json({ msg: "Driver has been registered", driver: req.body });
      }
    });
  } catch (error) {
    res.json({ error: err.message });
  }
});

driverRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const driver = await DriverModel.findOne({ email });
    if (driver) {
      bcrypt.compare(pass, driver.pass, (err, result) => {
        if (result) {
          let token = jwt.sign(
            { driverID: driver._id, driver: driver.name },
            process.env.secret
          );
          res.json({ msg: "logged In", token });
        } else {
          res.json({ error: "wrong credentials" });
        }
      });
    } else {
      res.json({ error: "driver does not exist" });
    }
  } catch (err) {
    res.json({ error: err.message });
  }
});

driverRouter.patch("/update/:userID", async (req, res) => {
  const { userID } = req.params;
  const payload = req.body;
  try {
    await DriverModel.findByIdAndUpdate({ _id: userID }, payload);
    const updatedUser = await DriverModel.find({ _id: userID });
    res.status(200).json({ msg: "data has been updated", user: updatedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

driverRouter.delete("/delete/:userID", async (req, res) => {
  const { userID } = req.params;
  try {
    const deletedUser = await DriverModel.find({ _id: userID });
    await DriverModel.findByIdAndDelete({ _id: userID });
    res
      .status(200)
      .json({ msg: "the user has been deleted", deletedUser: deletedUser });
  } catch (error) {
    res.status.json({ msg: err.message });
  }
});

module.exports = {
  driverRouter,
};
