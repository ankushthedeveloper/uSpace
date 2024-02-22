import  express from "express";
import { getMessage, sendMessage} from "../controllers/Message.controller.js";
import protectRoute from "../middlewares/protectRoute.js";

const router=express.Router();


router.get('/get/:id',protectRoute,getMessage)
router.post('/send/:id',protectRoute,sendMessage)

export default router;