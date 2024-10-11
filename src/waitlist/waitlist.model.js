import mongoose from "mongoose";

export const WaitlistSchema = new mongoose.Schema({
  email:{
    type:String,
    required:true
  },
},{timestamps:true});

export default mongoose.model("WaitlistModel", WaitlistSchema);

const ReferralSchema = new mongoose.Schema({
  email:{
    type:String
  },
  points:{
    type:Number
  },
  refCode:{
    type:String
  }
},{timestamps:true})

export const Referral =  mongoose.model("Referral", ReferralSchema);