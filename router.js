const fs = require('fs')
const cities = require('./model/City')
const itinerary = require('./model/Itinerary')
const activity= require('./model/Activity')
const user=require('./model/User')
var express = require('express');
var app = express.Router();
const bcrypt = require('bcrypt');

app.get("/cities/", (req, res) =>
  cities.find()
    .then((cities) => (res.json(cities)))
    .catch((err) => res.json(err))
);
app.post("/cities/", (req, res) => {
  if (cities.exists({ name: req.body.name }))
    res.status(500).send("Existing City")
  else {
    const newCity = new cities({
      name: req.body.name,
      country: req.body.country,
      img: req.body.img,
      itineraries: [],
    })
    newCity.save()
      .then(city => {
        res.send(city)
      })
      .catch(cities => {
        res.status(500).send("Server error")
      })
  }
})
app.post("/commet/:id",(req,res) =>{
  activity.findOneAndUpdate({id:req.params.id},{$push:{Comments:req.body.message}})
  activity.save()
  .then(()=>{
    res.send("Se envio el comentario con exito")
  })
  .catch(err=>{
    res.status(500).send("Error en el commit")
  })
})





app.get("/cities/:name", (req, res) => {
  cities.findOne({ name: req.params.name })
    .populate({
      path:"itineraries"
      ,populate:{path:"activities",model:"activity"}
    })
    .then((city) => {
      res.json(city)
    })
});


app.get("/itinerary/:id",(req,res)=>{
  itinerary.findById(req.params.id)
  .then((itinerary)=>{
    res.json(itinerary)
  })
})

//Recibe la carpeta y nombre de la foto y la entrega
app.get("/image/:folder/:name", (req, res) => {
  fs.readFile('./image' + '/' + req.params.folder + '/' + req.params.name, (err, data) => {
    res.writeHead(200, 'Content-Type', 'image/jpeg')
    res.end(data)
  })
});
app.get("/image/:name", (req, res) => {
  fs.readFile('./image' + '/' + req.params.name, (err, data) => {
    res.writeHead(200, 'Content-Type', 'image/jpeg')
    res.end(data)
  })
});  


//Autenticacion y Creacion de usuarios

app.post("/user",(req,res)=>{
  var username=req.body.username;
  var email=req.body.email;
  var password="";
  if(req.body.username=="" && req.body.username=="" && req.body.username=="" ){

  }
  bcrypt.hash(req.body.password, 10), function(err, hash) {
    password=hash
  };

  user.count({$or[{username:username},{email:email}]})
  .then(count=>{
    if(count>0)
      res.status(400).send("El usuario o email ya estan registrados").end()
  })
  .catch(err=>{
    console.log("error en servidor" +err)
  })



})



module.exports.router=app;