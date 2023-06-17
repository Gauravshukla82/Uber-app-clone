const jwt = require("jsonwebtoken");
require("dotenv").config();
const { logout } = require("../logout");
const userAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    if (logout.includes(token)) {
      res.status(200).json({ msg: "Please login" });
    }
    try {
      const decoded = jwt.verify(token, process.env.secret);
      if (decoded) {
        next();
      } else {
        res.json({ msg: "Not authorizes" });
      }
    } catch (err) {
      res.json({ error: err.message });
    }
  } else {
    res.json({ msg: "please Login!!" });
  }
};

module.exports = {
  userAuth,
};
