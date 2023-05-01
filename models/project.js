import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
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
  projectStatus:{
    type:String,
    require: true,
  }
});
export default mongoose.model("Project", projectSchema);
