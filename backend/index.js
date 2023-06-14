const express = require("express");
const app = express();
const { connection } = require("./db/db");
require("dotenv").config();
const {userRouter}=require("./router/user.router")
const port = process.env.PORT;
app.use(express.json());
app.use("/users",userRouter)
app.listen(port,async(req,res)=>{
    try {
        await connection;
        console.log("db is connected")
        console.log(`it is running at ${port}`)
    } catch (error) {
        console.log(error)
        console.log('there is something wrong with this')
    }
});
