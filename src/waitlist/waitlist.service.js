import WaitlistModel from "./waitlist.model.js";

const waitlistModel = WaitlistModel;

export default class WaitlistService {
 
  async addToWaitlist(waitlistData) {
    return await waitlistModel.create(waitlistData);
  }
}
