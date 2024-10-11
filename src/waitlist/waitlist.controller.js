import WaitlistModel, { Referral } from "./waitlist.model.js";
import WaitlistService from "./waitlist.service.js";
import randomstring from "randomstring";

const waitlistService = new WaitlistService();

class WaitlistController {

  // Output: "jF9lM0nZpK"
  

  async addWaitlist(req, res) {
    let referral = await Referral.findOne({refCode:req.query.refCode})
    if(referral){
      referral.updateOne({points:referral.points+10})
    }

    let waitlistEmail = await WaitlistModel.findOne({email:req.body.email})
    if(waitlistEmail){
       return res.status(400).json("Email already exists")
    }

    let newRef = new Referral({
      email:waitlistEmail.email,
      points:10,
      refCode:randomstring.generate(8)
    })
    
    return res.status(201).json({
     data:await waitlistService.addToWaitlist({
        email: req.body.email,
      })
    });
  }


  async getReferralDetails(req, res){
    let referral = await Referral.findOne({email:req.body.email})
    if(!referral){
      return res.status(404).json({message:"You've not joined the waitlist"})
    }
    return res.status(200).json({message:"Details retrived", data:referral})
  }
}

export default WaitlistController;
