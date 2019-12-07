const fs = require('fs')
const cities = require('./model/City')
const itinerary = require('./model/Itinerary')
const activity = require('./model/Activity')
const user = require('./model/User')
var express = require('express');
var app = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const keys = require("./keys");
const multer = require("multer");
const sharp = require("sharp");
const storage= require("./upload.config")
const upload = multer(storage);
const path = require('path')
const passport=require("passport")

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
app.post("/commet/:id", (req, res) => {
  activity.findOneAndUpdate({ id: req.params.id }, { $push: { Comments: req.body.message } })
  activity.save()
    .then(() => {
      res.send("Se envio el comentario con exito")
    })
    .catch(err => {
      res.status(500).send("Error en el commit")
    })
})





app.get("/cities/:name", (req, res) => {
  cities.findOne({ name: req.params.name })
    .populate({
      path: "itineraries"
      , populate: { path: "activities", model: "activity" }
    })
    .then((city) => {
      res.json(city)
    })
});


app.get("/itinerary/:id", (req, res) => {
  itinerary.findById(req.params.id)
    .then((itinerary) => {
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

app.post("/image/user/:name", multer({ dest: './public/uploads/'}).single('file'), async (req, res) => {

  //const { filename: image } = req.file

  await sharp(req.file.path)
    .resize(500)
    .jpeg({ quality: 50 })
    .toFile(
      path.resolve(req.file.destination, 'resized', image)
    )
  fs.unlinkSync(req.file.path)

  return res.status(200).send("success");
})


//Autenticacion y Creacion de usuarios

app.post("/user",passport.authenticate("jwt", { session: false }), (req, res) => {
  var username = req.body.username;
  var email = req.body.email;
  var password = "";
  let validator = user.validate({ username: username, password: req.body.password, email: email, firstname: req.body.firstname, lastname: req.body.lastname });
  if (validator.error != undefined) {
    res.status(400).send(validator.error).end();
  }
  user.count({ $or: [{ username: username }, { email: email }] })
    .then(count => {
      if (count > 0)
        return res.status(400).send("El usuario o email ya estan registrados").end()
    })
    .catch(err => {
      console.log("error en servidor" + err)
      return res.status(400).send("Error en la base de datos").end()
    })
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      if (err) throw err;
      const newUser = new user({
        username: username,
        password: hash,
        email: email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        img: req.body.img
      })
      newUser.save()
        .then(_user => {
          res.json(_user);
        })
        .catch(err => {
          console.log("error en el guardado del usuario" + err);
          return res.send("Error en el cargar la info al servidor").end();
        })
    })
  });
})

app.post("/login",passport.authenticate("jwt", { session: false }), (req, res) => {

  var validate = user.valideLogin({ username: req.body.username, password: body.password });

  if (validate.error != undefined)
    return res.status(400).send(validate.error).end();

  user.findOne({ email: req.body.username })
    .then((user) => {
      if (!user)
        return res.status(404).json({ error: "User not found" })

      bcrypt.compare(req.body.password, user.password).then(isMatch => {
        if (isMatch) {
          const payload = { id: user._id }
          jwt.sign(payload,
            keys.secretOrKey,
            { expiresIn: 2592000 },
            (err, token) => {
              if (err) {
                res.status(400).json({
                  success: false,
                  token: "Error en la generacion de token"
                })
              }
              else {
                res.status(200).json({
                  success: true,
                  token: token
                });
              }
            });
        }
        else {
          return res.status(404).json({ error: "Password Incorrect" })
        }
      })

    })
})



module.exports.router = app;