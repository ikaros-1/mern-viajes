let mongoose = require('mongoose');
require('mongoose-type-dbref');
let citiesSchema = new mongoose.Schema({
  name:String,
  country:String,
  itineraries:[mongoose.SchemaTypes.DBRef]
})

module.exports=mongoose.model('cities',citiesSchema);