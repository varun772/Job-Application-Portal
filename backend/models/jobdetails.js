const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const jobSchema = new Schema({
  title:{
    type:String,
    required:true
  },
  type:{
    type:String,
    required:true
  },
  duration:{
    type:Number,
    required:true
  },
  salary:{
    type:Number,
    required:true
  },
  rating:{
    type:Number,
    required:true
  },
  maxapplication:{
    type:Number,
    required:true
  },
  maxposition:{
    type:Number,
    required:true
  },
  date:{
    type:Date,
    required:false
  },
  skills:{
    type:[String],
    required:true
  }

});





module.exports = job = mongoose.model("job", jobSchema);
