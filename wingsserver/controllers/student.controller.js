const {Student,validate}=require('../models/student.model');
const jwt=require('jsonwebtoken');
const bcrypt=require("bcrypt");
const _ = require("lodash");
class StudentCtrl
{

createStudent(req,res)
{
    const obj=req.body;
   
   
  
    const{error}=validate(obj);

    if (error) res.status(500).send(JSON.stringify(error));
    else
    bcrypt.hash(obj.password,10,(err,pass)=>{
        if(err){
          res.status(500).send("problem while encrypting the password");
          res.end();
        }
        obj.password=pass;
        const s1=new Student(obj);
         s1.save((err,stud)=>{
     if (err) res.status(500).send(JSON.stringify(err));
     res.status(200).send(JSON.stringify(stud));
 })
});
}

getStudent(req,res)
{
   const token= req.header('Authorization');

   if(!token){
       res.status(401).send("to acess the resource you must send a token");
       res.end();
       return;
       
   }
  
   jwt.verify(token,"abc",function(err,student){
       if(err){
           console.log(err);
           
           res.status(401).send("Not authorised to acess the resource");
           res.end();
           return;

       }

       if(student.admin==false){


           res.status(401).send("Only admin can acess the list");
           res.end();
           return;

       }

    Student.find((err,studs)=>{
        if (err) {
            res.status(404).send('student not found');
            res.end();

        }
        res.status(200).send(JSON.stringify(studs));
        res.end();
    });
});

}

updateStudent(req,res)
{

    const token= req.header('Authorization');

    if(!token){
        res.status(401).send("to acess the resource you must send a token");
        res.end();
        return;
        
    }
   
    jwt.verify(token,"abc",function(err,student){
        if(err){
            console.log(err);
            
            res.status(401).send("bbbnot authorised to acess the resource");
            res.end();
            return;
 
        }
 
        if(student.admin==false){
 
 
            res.status(401).send("only admin can acess the list");
            res.end();
            return;
 
        }
 
 

    Student.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, stud){

if(err) 
{
    res.status(404).send('student not found');
    res.end();
}

res.status(200).send(JSON.stringify(stud));
res.end();

    });

});
    
}

//remove method
removeStudent (req,res){
    
    const token= req.header('Authorization');

    if(!token){
        res.status(401).send("to acess the resource you must send a token");
        res.end();
        return;
        
    }
   
    jwt.verify(token,"abc",function(err,student){
        if(err){
            console.log(err);
            
            res.status(401).send("bbbnot authorised to acess the resource");
            res.end();
            return;
 
        }
 
        if(student.admin==false){
 
 
            res.status(401).send("only admin can acess the list");
            res.end();
            return;
 
        }




const stud = new Student({
    _id:req.params.id
});

console.log("del id "+req.params.id);


stud.remove((err,stud)=>{
    if (err){
        res.status(404).send('could not detect');
        res.end();
    }
    res.status(200).send(JSON.stringify(stud));
});
});
}

authentication(req,res){
    Student.findOne({email: req.body.email},(err,result)=> {
        if(err | result == null) res.status(404).send({message:"Invalid email id"});
        else
        bcrypt.compare(req.body.password,result.password,function(er,resl){

            if(er | (resl==false))
                                res.status(404).send({message:"Invalid password"});

            jwt.sign(
                {admin:true,_id: result._id},
                "abc",
                {algorithm: "HS256"},
                function(err,token){
                    if (err) console.log(err);

                    console.log(token);
                    res.set("X-token",token);
                    
            res.status(200).send(JSON.stringify(_.pick(result,["name","email","mobile","rollNo","gender"])));
            res.end();

                   
                    
                }
            );
        
            
        
          });
    });

}

}
module.exports = StudentCtrl;


