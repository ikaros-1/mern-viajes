let mongoose = require('mongoose');

let ItinerarySchema = new mongoose.Schema({
  title:String,
  profilePic:String,
  rating:Number,
  duration:Number,
  price:Number,
  hashtags:Array,
  Activity:[mongoose.SchemaTypes.ObjectId],
  Comment:[mongoose.SchemaTypes.ObjectId]
})

module.exports=mongoose.model('itinerary',ItinerarySchema);