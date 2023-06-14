const express = require("express");
const { connection } = require("./db");
const { driverRouter } = require("./routes/driver.routes");
const { driverPageRouter } = require("./routes/driverPage.routes");
require("dotenv").config();
// const cors = require("cors");
const app = express();

// app.use(cors());
app.use(express.json());

app.use("/drivers", driverRouter);
app.use("/driverpage", driverPageRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to the database");
    console.log(`Server running on port ${process.env.port}`);
  } catch (err) {
    console.error(err);
    console.log("Something went wrong");
  }
});
