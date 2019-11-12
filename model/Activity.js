let mongoose = require('mongoose');

let citiesSchema = new mongoose.Schema({
  name:String
})

module.exports=mongoose.model('cities',citiesSchema);