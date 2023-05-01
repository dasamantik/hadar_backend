import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  telegram:{
    type:String,
    require: true,
  },
  name:{
    type:String,
    require: true,
  },
  phoneNumber:{
    type:String,
    require: true,
  },
  question:{
    type:String,
    require: true,
  }
});
export default mongoose.model("Question", questionSchema);
