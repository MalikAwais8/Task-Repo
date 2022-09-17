const express = require('express')
const router = express.Router()

const User = require("../models/userModel")


//configure routes jo bnaya hy axios ki call k waqt

router.route("/register").post((req, res) =>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({
        name,
        email,
        password
    }) 

    newUser.save();

router.route("/myusers").get((req, res)=>{
    User.find()
    .then(foundUsers => res.json(foundUsers))
})

})


module.exports = router

//use this router in server.js
