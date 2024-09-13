import { Router } from "express";
import WaitlistController from "./waitlist.controller.js";

const waitlistRouter = Router();
const waitlistController = new WaitlistController();

waitlistRouter.post("/join-waitlist/", waitlistController.addWaitlist);

export default waitlistRouter;
