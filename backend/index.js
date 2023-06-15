const express = require("express");
const cors = require("cors");
const app = express();
const { connection } = require("./db/db");
const { connection1 } = require("./db");
const { driverRouter } = require("./routes/driver.routes");
const { driverPageRouter } = require("./routes/driverPage.routes");
app.use(express.json());

app.use(cors());
app.use("/drivers", driverRouter);
app.use("/driverpage", driverPageRouter);
require("dotenv").config();
const { userRouter } = require("./router/user.router");
const port = process.env.port;

app.use("/users", userRouter);
app.listen(port, async (req, res) => {
  try {
    await connection;
    await connection1;
    console.log("db is connected");
    console.log(`Surver is running at ${port}`);
  } catch (error) {
    console.log(error);
    console.log("there is something wrong with this");
  }
});
