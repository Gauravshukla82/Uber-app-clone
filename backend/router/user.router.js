const express = require("express");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const { UserModel } = require("../model/user.model");
// registration
const cors = require("cors");
// userRouter.use(express.json());
userRouter.use(cors());

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  let existedUser = await UserModel.findOne({ email });
  try {
    if (existedUser) {
      res.status(400).json({ msg: "User already exist, please login" });
    } else {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          res.status(400).json({ msg: "something wrong" });
        } else {
          let newUser = new UserModel({
            name,
            email,
            password: hash,
          });
          await newUser.save();
          res.status(200).json({ msg: "new user has been added" });
        //   const token = jwt.sign({ userID: users._id }, process.env.secret);
        // res.json({
        //   msg: "Driver has been registered",
        //   driver: req.body,
        //   token,
        // });
        }
      });
    }
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const {name, email, password } = req.body;
  const existedUser = await UserModel.findOne({ email });
  try {
    if (existedUser) {
      bcrypt.compare(password, existedUser.password, (err, result) => {
        if (result) {
          const token = jwt.sign({ data: "data" }, process.env.secret);
          res
            .status(200)
            .json({ msg: "You are successfully Logged In!!", token: token, email:email , name:name});
            
        } else {
          res.status(400).json({ msg: "You are not authorized" });
        }
      });
    } else {
      res.status(200).json({ msg: "You are not logged in" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// we ll need a get users detials route too  
//tp 
userRouter.get("/userdetails", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch users" });
  }
});






module.exports = {
  userRouter,
};
