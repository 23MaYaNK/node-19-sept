const Student=require('../models/Student');

async function addStudents(req,res) {
    try{
     console.log(req.body,'req.body')
     let student=new Student(req.body);
     await student.save();
     console.log("data saved successfully...")
     res.end("data saved successfully...")
    }catch(err){
        console.log(err);
    }
}
const getStudents= async function(req,res){
    try{
        let students= await Student.find({}); //select all data
        console.log(students);
        res.end(students);

    } catch(err){
        console.log(err);
    }
}
module.exports={
    addStudents,
    getStudents
}