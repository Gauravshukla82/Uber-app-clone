const express = require("express");
const { DriverPageModel } = require("../models/driverPage.model");
const { auth } = require("../middleware/auth.middleware");

const driverPageRouter = express.Router();

driverPageRouter.use(auth);

driverPageRouter.post("/add", async (req, res) => {
  try {
    const driverPage = new DriverPageModel(req.body);
    await driverPage.save();
    res.json({
      msg: "New Driverpage additional data has beed added",
      note: req.body,
    });
  } catch (err) {
    res.json({ error: err.message });
  }
});

driverPageRouter.get("/", async (req, res) => {
  try {
    const driverPage = await DriverPageModel.find({
      driverID: req.body.driverID,
    });
    res.send(driverPage);
  } catch (err) {
    res.json({ msg: err.message });
  }
});

driverPageRouter.patch("/update/:driverPageID", async (req, res) => {
  //driverId in the driver doc===driverID is the driverPage doc
  const driverIDinDriverDoc = req.body.driverID;

  const { driverPageID } = req.params;

  try {
    const driverPage = await DriverPageModel.findOne({ _id: driverPageID });
    const driverIDinDriverPageDoc = driverPage.driverID;
    if (driverIDinDriverDoc === driverIDinDriverPageDoc) {
      //update
      await DriverPageModel.findByIdAndUpdate({ _id: driverPageID }, req.body);
      res.json({ msg: `${driverPage.bio} is updated` });
    } else {
      res.json({ msg: "Not authorized" });
    }
  } catch (err) {
    res.json({ error: err.message });
  }
});

driverPageRouter.delete("/delete/:driverPageID", async (req, res) => {
  const driverIDinDriverDoc = req.body.driverID;
  const { driverPageID } = req.params;
  try {
    const driverPage = await DriverPageModel.findOne({ _id: driverPageID });
    const driverIDinDriverPageDoc = driverPage.driverID;
    if (driverIDinDriverDoc === driverIDinDriverPageDoc) {
      //update
      await DriverPageModel.findByIdAndDelete({ _id: driverPageID });
      res.json({ msg: `${driverPage.title} is been deleted` });
    } else {
      res.json({ msg: "Not authorized" });
    }
  } catch (err) {
    res.json({ error: err });
  }
});

module.exports = {
  driverPageRouter,
};
