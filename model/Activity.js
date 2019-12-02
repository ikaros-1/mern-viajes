let mongoose = require('mongoose');

let ActivitySchema = new mongoose.Schema({
  Tittle:String,
  Location:String,
  Img:String,
  Duration:String,
  Comments:Array,
  Price:mongoose.SchemaTypes.Decimal128
})

module.exports=mongoose.model('activity',ActivitySchema);