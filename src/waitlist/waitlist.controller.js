import WaitlistModel from "./waitlist.model.js";
import WaitlistService from "./waitlist.service.js";

const waitlistService = new WaitlistService();

class WaitlistController {
  

  async addWaitlist(req, res) {

    let waitlistEmail = await WaitlistModel.findOne({email:req.body.email})
    if(waitlistEmail){
       return res.status(400).json("Email already exists")
    }
    
    return res.status(201).json({
     data:await waitlistService.addToWaitlist({
        email: req.body.email,
      })
    });
  }
}

export default WaitlistController;
