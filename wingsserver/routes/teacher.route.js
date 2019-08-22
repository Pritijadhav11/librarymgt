const express = require('express');
const router = express.Router();

const TeacherCtrl=require('../controllers/teacher.controller');
const teacher= new TeacherCtrl();

router.post('/create',teacher.createTeacher);
router.get('/',teacher.getTeacher);
//router.get('/:id',teacher.getTeacherById);
router.put('/update/:id',teacher.updateTeacher);
router.delete('/delete',teacher.removeTeacher);

module.exports=router;