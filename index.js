const express = require('express')
const database = require('./database')
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const router=require("./router").router
const passport=require("passport")
//passport middleware
app.use(passport.initialize());
//passport configuration
require("./passport");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.json({ resputas: "Hello node" }));

app.listen(8080, () => console.log("inicio node"));

app.use(router)

