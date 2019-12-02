let mongoose = require('mongoose');

let ItinerarySchema = new mongoose.Schema({
  title:String,
  profilePic:String,
  rating:Number,
  duration:Number,
  price:Number,
  hashtags:Array,
  activities:[{type:mongoose.SchemaTypes.ObjectId}],
  City:Object
})

module.exports=mongoose.model('itinerary',ItinerarySchema);