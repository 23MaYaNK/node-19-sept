const express=require('express');
const router=express.Router();
const studentcontroller=require('../controllers/studentcontroller');


router.post('/add/user',(req,res)=>{
    studentcontroller.addStudents(req,res);
    
})
router.get('/users',(req,res)=>{
    studentcontroller.getStudents(req,res);
})


module.exports=router;