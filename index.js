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
    .then((cities)=>{
      console.log(cities)
      if(cities.itineraries==undefined ){
        var obj={name:cities.name}
        res.json(obj);
        return true
      }
      var itineraries=[];
      cities.itinerary.map((item)=>{
        itinerary.findById(item.$id)
        .then((ite)=>{itineraries.push(ite)
        console.log(ite)
        })
        .catch((err)=>console.log(err))
      }).then(()=>{
        console.log(itineraries)
        var obj={name:cities.name,itinerary:itineraries}
        res.send(obj);
        }
      )
    }
    )
    .catch((err)=>res.json(err))
});

app.get("/itinerary/:name",(req,res)=>
  cities.find({name: req.params.name}).then((itinerary)=>(res.send(itinerary[0].country)))
  );

//Recibe la carpeta y nombre de la foto y la entrega
app.get("/image/:folder/:name",(req,res)=>{
 var directoryPath = path.join(__dirname, 'image/'+req.params.folder);

  fs.readFileSync(directoryPath)
    .then((file)=>res.send(file))
    .catch((err)=>res.json(err))

});  