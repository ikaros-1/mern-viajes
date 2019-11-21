const express = require('express')
const fs = require('fs')
const path= require('path')
//const database = require('./database')
const mongoose = require('mongoose')
const cities = require('./model/City')
const itinerary= require('./model/Itinerary')
const app =express();
const cors = require('cors')
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());

app.get("/",(req,res)=>res.json({resputas:"Hello node"}));

app.listen(8080,()=>console.log("inicio node"));

mongoose.connect("mongodb+srv://matias:hola@cluster0-7eb5p.gcp.mongodb.net/mern?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>{
  console.log('Database connection successful')
})
.catch(err => {
  console.error('Database connection error'+err)
})

app.get("/cities/all",(req,res)=>
  cities.find()
    .then((cities)=>(res.json(cities)))
    .catch((err)=>res.json(err))
  );

app.get("/cities/:name",(req,res)=>{
    cities.findOne({name: req.params.name})
    .populate("itineraries")
    .then((city)=>{
      console.log(city)
      res.json(city)
    })
});

//Recibe la carpeta y nombre de la foto y la entrega
app.get("/image/:folder/:name",(req,res)=>{
  fs.readFile('./image'+'/'+req.params.folder+'/'+req.params.name,(err,data)=>{
    res.writeHead(200,'Content-Type', 'image/jpeg')
    res.end(data)
  })
});  
app.get("/image/:name",(req,res)=>{
  fs.readFile('./image'+'/'+req.params.name,(err,data)=>{
    res.writeHead(200,'Content-Type', 'image/jpeg')
    res.end(data)
  })
});  