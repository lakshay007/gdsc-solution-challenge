const mongoose = require('mongoose');
const lawyerSchema = mongoose.Schema(
    {
        Name:{
            type: String,
            required: [true, "please enter a Name"]
        },
        Phone:{
            type: Number,
            required: true
        },
        Email:{
            type: String,
            required: true
        },
        Exp:{
            type: Number,
            required: true
        },
        Location:{
            type: String,
            required: true
        },
        Specialization:{
            type: String,
            required: true
        },
        Age:{
            type: Number,
            reuqired:true
        }
    }
)
const LawyerData = mongoose.model('LawyerData',lawyerSchema);
module.exports = LawyerData;


























