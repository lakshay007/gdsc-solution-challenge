const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const UserData = require('./userSchema')
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send("hello node api")
})
mongoose.connect('mongodb+srv://Lakshay:gdschackathonpractice@gdschackathonpractice.myehzxm.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("connected to mongodb")
    app.listen(3000, ()=>{
        console.log("app is running on port 3000");
    })

}).catch((error)=>{
    console.log(error)
})
app.post('/UserData', async(req,res)=>{
    console.log(res.body);
    const userdata = await UserData.create(req.body);
    res.status(200).json(userdata);
})
app.get('/UserData/:id', async(req,res)=>{
    const data = await UserData.findOne({username: req.params.id})
    res.status(200).json(data);
})











