const mongoose = require("mongoose");

const alumniSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    
    highestQualification:{ 
        type: String
    },
  
    course:{
        type:String
    },

    batch:{
        type:String
    },
    placementStatus:{
        type:String
    },
    CompanyName :{
        type:String
    }
});

module.exports = mongoose.model("alumniAddModel", alumniSchema);