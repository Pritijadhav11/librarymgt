const Teacher=require('../models/teacher.model')

class TeacherCtrls{
    createTeacher(req,res){
        const obj=req.body;
        const s1=new Teacher(obj);

        s1.save((err,teach)=>{
            if (err) res.status(500).send(JSON.stringify(err));
            res.status(200).send(JSON.stringify(teach));
        })
    }

    getTeacher(req,res){
        Teacher.find ((err,teach)=>{
            if (err){
                 res.status(404).send('teacher not found');
                 res.end();
        }
            res.status(200).send(JSON.stringify(teach));
            res.end();
            });
        
    }

updateTeacher(req,res){
    Teacher.findByIdAndUpdate(req.params.id, {$set: req.body},function(err,teach){
        if(err){
            res.status(404).send('teacher not found');
            res.end();
        }
        res.status(200).send(JSON.stringify(teach));
        res.end();

    });
}

removeTeacher(req,res){
    const teach= new Teacher({
        _id:req.body.id
    });

    teach.remove((err,teach)=>{
        if(err){
            res.status(404).send('could not found');
            res.end();
        }
        res.status(200).send(JSON.stringify(teach));
    });
}

}
module.exports=TeacherCtrls;
