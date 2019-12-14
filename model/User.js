let mongoose = require('mongoose');
const Joi = require('@hapi/joi');

let UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  img: String,
  email: String,
  firstname: String,
  lastname: String
});

const schema = Joi.object({
  username: Joi.string()
    .pattern(/^[a-zA-Z0-9]{3,8}$/)
    .required(),
  password: Joi.string()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
    .required(),
  email: Joi.string()
    .email()
    .required(),
  firstname: Joi.string().optional(),
  lastname: Joi.string().optional()
});
const schemaLogin = Joi.object().keys({
  username: Joi.string(), //.pattern(/^[a-zA-Z0-9]{3,8}$/),
  password: Joi.string().min(8)
});

module.exports.user = mongoose.model('user', UserSchema);
module.exports.schema = async function(obj) {
  try {
    const e = await schema.validateAsync(obj);
    return { value: e, err: '' };
  } catch (err) {
    return { err: err, value: {} };
  }
};
module.exports.valideLogin = async function(obj) {
  try {
    const e = await schema.validateAsync(obj);
    return { value: e, err: '' };
  } catch (err) {
    return { err: err, value: {} };
  }
};
