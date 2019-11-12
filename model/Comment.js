let mongoose = require('mongoose');

let citiesSchema = new mongoose.Schema({
  text:String,
  Date:Date
})

module.exports=mongoose.model('cities',citiesSchema);