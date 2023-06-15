const express = require("express");
const app = express();
const { connection } = require("./db/db");
const { connection1 } = require("./db");
require("dotenv").config();
const { driverRouter } = require("./routes/driver.routes");
const { driverPageRouter } = require("./routes/driverPage.routes");
const { userRouter } = require("./router/user.router");
const port = process.env.port;
const core=require("cors")
 app.use(core())
app.use("/drivers", driverRouter);
app.use("/driverpage", driverPageRouter);
app.use("/users", userRouter);

app.use(express.json());

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
