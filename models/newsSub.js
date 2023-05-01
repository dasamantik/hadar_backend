import mongoose from "mongoose";

const newsSub = new mongoose.Schema({
    telegram: {
        type: String,
        require:true,
    }
})
export default mongoose.model('newsSub',newsSub);