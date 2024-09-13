import mongoose from "mongoose";

export const WaitlistSchema = new mongoose.Schema({
  email:{
    type:String,
    required:true
  },
},{timestamps:true});

export default mongoose.model("WaitlistModel", WaitlistSchema);
