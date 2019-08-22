
const express = require('express');
const router = express.Router();

const StudentCtrl = require('../controllers/student.controller');
const student = new StudentCtrl();

//http://localhost:8888/api/student/create 

// a simple test url to check that all of our files are communicating correctly.
router.post('/create', student.createStudent);

router.get('/',student.getStudent);
router.put('/update/:id',student.updateStudent);
router.delete('/delete/:id',student.removeStudent);

router.post('/auth',student.authentication);

/*  
//router.get('/:id',student.getStudent);


router.post('/auth',student.authenticate)
*/
module.exports = router;