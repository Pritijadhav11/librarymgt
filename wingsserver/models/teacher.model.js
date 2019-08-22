const mongoose= require('mongoose');

require('./db');

const Schema=mongoose.Schema;
let TeacherSchema= new Schema({
    firstName:{type:String,required:true,max:100},
    middleName: {type:String,required:true,max:100},
      lastName:{type:String,required:true,max:100},
      rollNo:{type:String,required:true,unique:true},
     college:{type:String},
     mobile:{type:String,required:true,unique:true},
     email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
});
const Teacher=mongoose.model('Teacher',TeacherSchema);
module.exports=Teacher;