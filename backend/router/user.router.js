const express = require("express");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const { UserModel } = require("../model/user.model");
// registration
userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const existedUser = await UserModel.findOne({ email });
  try {
    if (existedUser) {
      res.status(200).json({ msg: "User already registered!!" });
    } else {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          res.status(400).json({ msg: "Something error" });
        } else {
          let newUser = new UserModel({ name, email, password: hash });
          await newUser.save();
          res.status(200).json({ msg: "You registered successfully!!" });
        }
      });
    }
  } catch (error) {
    res.status(400).json({ msg: "something wrong" });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const existedUser = await UserModel.findOne({ email });
  try {
    if (existedUser) {
      bcrypt.compare(password, existedUser.password, (err, result) => {
        if (result) {
          const token = jwt.sign({ data: "data" }, process.env.KEY);
          res.status(200).json({ msg: "You are successfully Logged In!!",token:token });
        } else {
          res.status(400).json({ msg :"You are not authorized"});
        }
      });
    } else {
      res.status(200).json({ msg: "You are not logged in" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = {
  userRouter,
};