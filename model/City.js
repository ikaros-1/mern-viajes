let mongoose = require('mongoose');
let citiesSchema = new mongoose.Schema({
  name:String,
  country:String,
  itineraries:[{ type:mongoose.SchemaTypes.ObjectId, ref:'itinerary'}],
  image:String
})

module.exports=mongoose.model('cities',citiesSchema);