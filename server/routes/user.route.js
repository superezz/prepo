import express from "express";
import { getCurrentUser } from "../controllers/user.controller.js";
import isAuth from "../middleware/isAuth.js";





const userRoute = express.Router();

userRoute.get("/current-user", isAuth, getCurrentUser);
  
export default userRoute;