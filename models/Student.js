const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const StudentSchema=new Schema({
    rollNo:{type:Number},
    Name:{type:String},
    fatherName:{type:String},
    addharCardNo:{type:Number},
    mobileNo:{type:String}
})
module.exports=mongoose.model('Student',StudentSchema)
