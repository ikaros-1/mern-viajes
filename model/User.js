let mongoose = require('mongoose');
const Joi = require('@hapi/joi');

let UserSchema = new mongoose.Schema({
  username:String,
  password:String,
  img:String,
  email:String,
  firstname:String,
  lastname:String
})

let schema = Joi.object({
  username:Joi.string().pattern(/^[a-zA-Z0-9]{3,8}$/),
  password:Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
  email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  firstname:Joi.string(),
  lastname:Joi.string()

})
let schemaLogin = Joi.object({
  username:Joi.string().pattern(/^[a-zA-Z0-9]{3,8}$/),
  password:Joi.string().min(8)
})

module.exports=mongoose.model('user',UserSchema);
module.exports.validate=schema.validate;
module.exports.valideLogin=schemaLogin.validate;