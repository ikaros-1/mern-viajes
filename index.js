const express = require('express')
//const database = require('./database')
const mongoose = require('mongoose')
const cities = require('./model/cities')
const app =express();
const cors = require('cors')
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());

app.get("/",(req,res)=>res.json({resputas:"Hello node"}));

app.listen(8080,()=>console.log("inicio node"));

mongoose.connect("mongodb+srv://matias:hola@cluster0-7eb5p.gcp.mongodb.net/mern?retryWrites=true&w=majority",{ useNewUrlParser: true })
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

app.get("/cities/:name",(req,res)=>
  cities.find({name: req.param.name})
    .then((cities)=>(res.json(cities)))
    .catch((err)=>res.json(err))
  );

