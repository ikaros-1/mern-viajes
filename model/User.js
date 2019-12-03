let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  username:String,
  password:String,
  img:String,
  email:String,
  firstname:String,
  lastname:String
})

module.exports.model=mongoose.model('user',UserSchema);
