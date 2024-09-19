import cors from "cors";
import "dotenv/config";
import express, { Router } from "express";
import morgan from "morgan";

import mongoose from "mongoose";
import waitlistRouter from "./waitlist/waitlist.router.js";

const app = express();

const { MONGO_URI } = process.env;
// connect database

const connectionParams = {
  autoIndex:false,
  dbName:process.env.DATABASE_NAME
}
try{
  let dbConn = await mongoose.connect(MONGO_URI, connectionParams)
  if(dbConn ){
      console.log("Successfully connected to database");
    }
}catch(error){

    console.log("database connection failed. exiting now...");
    console.error(error);
    process.exit(1);
}
mongoose.set("strictQuery", false);

// middlewares

app.use(express.json());
app.use(
  morgan(
    "[:date[clf]] :method :url HTTP/:http-version :status :res[content-length] - :response-time ms"
  )
);
app.use(
  cors({
    origin: "*",
  })
);

// routes
const rootRouter = Router();

rootRouter.use(waitlistRouter);

app.use("/api/v1/", rootRouter);

export default app;
