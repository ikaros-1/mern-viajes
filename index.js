const express = require('express')
//const database = require('./database')
const mongoose = require('mongoose')
const cities = require('./model/cities')
const app =express();

let json=[
  {
    "name": "London",
    "country": "UK"
  },
  {
    "name": "Berlin",
    "country": "Germany"
  },
  {
    "name": "Madrid",
    "country": "Spain"
  },
  {
    "name": "Rome",
    "country": "Italy"
  },
  {
    "name": "Paris",
    "country": "France"
  },
  {
    "name": "Bucharest",
    "country": "Romania"
  },
  {
    "name": "Budapest",
    "country": "Hungary"
  },
  {
    "name": "Hamburg",
    "country": "Germany"
  },
  {
    "name": "Warsaw",
    "country": "Poland"
  },
  {
    "name": "Belgrade",
    "country": "Serbia"
  },
  {
    "name": "Vienna",
    "country": "Austria"
  },
  {
    "name": "Milan",
    "country": "Italy"
  },
  {
    "name": "Munich",
    "country": "Germany"
  },
  {
    "name": "Prague",
    "country": "Czech"
  },
  {
    "name": "Sofia",
    "country": "Bulgaria"
  },
  {
    "name": "Napoli",
    "country": "(Naples)"
  },
  {
    "name": "Stockholm",
    "country": "Sweden"
  },
  {
    "name": "Helsinki",
    "country": "Finland"
  },
  {
    "name": "Copenhagen",
    "country": "Denmark"
  },
  {
    "name": "Oslo",
    "country": "Norway"
  }
 ]

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


app.get("/",(req,res)=>res.json({resputas:"Hello node"}));

app.listen(8080,()=>console.log("inicio node"));

mongoose.connect("mongodb+srv://matias:hola@cluster0-7eb5p.gcp.mongodb.net/mern?retryWrites=true&w=majority",{ useNewUrlParser: true })
.then(()=>{
  console.log('Database connection successful')
})
.catch(err => {
  console.error('Database connection error'+err)
})

app.get("/cities",(req,res)=>
  cities.find()
    .then((cities)=>(res.json(cities))
    .catch((err)=>res.json(err))
  )
);

