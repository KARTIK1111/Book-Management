const express=require("express");
const mongoose=require("mongoose")
const route =require("./src/routes/route.js")
const multer =require('multer')
const app=express();
require('dotenv').config({path:".env"})

app.use(express.json());
app.use(multer().any())

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGODB)

.then(()=>console.log("MongoDB is connected"))
.catch((error)=>console.log(error));

app.use("/",route);

app.listen(process.env.PORT, function () {
    console.log("Express App Running on Port:", process.env.PORT);
  });

