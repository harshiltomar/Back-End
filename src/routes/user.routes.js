import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

//it is the postfix route for user i.e /api/v1/user/register
router.route("/register").post(registerUser);

export default Router;
