const express = require('express');

const app = express();

const cors  = require('cors');

const mongoose = require('mongoose')

app.use(cors());
//to parse the request comming from the frontend.
app.use(express.json());

//connect to mongoose

mongoose.connect("mongodb+srv://projected:1234567890@cluster0.zek49iz.mongodb.net/usersdb")

//require the route
app.use("/", require("./routes/userRoutes"))

app.listen(5000 , function(){
  console.log("express server is running on port 5000")
})