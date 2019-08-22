const express= require('express');
const bodyParser= require('body-parser');

const student = require('./routes/student.route');
const teacher=require('./routes/teacher.route');

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Authorization, Accept");
    res.header("Access-Control-Expose-Headers", "X-token");
    
    next();
  });
  
  

//app.get('/student',function(req,res){
  //  res.send('hii this my api');
//})
app.use('/api/student',student);
app.use('/api/teacher',teacher)


let port = process.env.PORT || 8888;

app.listen(port,()=>{
    console.log('server is up and running on port number' + port);
    
});
