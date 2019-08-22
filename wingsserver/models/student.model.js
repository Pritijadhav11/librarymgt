const mongoose =require ('mongoose');
const Joi = require('@hapi/joi');
require('./db');
const Schema =mongoose.Schema;                                                                     

let StudentSchema= new Schema({
    name:{type:String,required:true,max:100},
    mobile:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    rollNo:{type:String},
   password:{type:String,required:true},
   gender:{type:String}
});
const Student= mongoose.model('Student',StudentSchema);// cn
/*...........joi.............. */

function validate(StudentObj){
   const schema = Joi.object()
     .keys({
      name: Joi.string().alphanum().min(3).max(30).required(),
       password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
       //      password: Joi.string(),
      rollNo:Joi.string(),
      mobile: [Joi.string(), Joi.number()],
      gender: [Joi.string(), Joi.number()],
      email: Joi.string().email({ minDomainSegments: 2 })
  }).with('name', 'email');
   
  // Return result.
return Joi.validate(StudentObj, schema);
}
module.exports= {Student,validate};  