import express from "express";
import { addPersonalInformation } from "../controllers/userController.js";
const router = express.Router();

router.patch('/add-personal-info', addPersonalInformation);

export default router;