import WaitlistService from "./waitlist.service.js";

const waitlistService = new WaitlistService();

class WaitlistController {
  

  async addWaitlist(req, res) {
    return res.status(201).json(
      await waitlistService.addBook({
        email: req.body.email,
      })
    );
  }
}

export default WaitlistController;
