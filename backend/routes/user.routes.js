import express from 'express';
import protectRoute from '../middlewares/protectRoute.js';
import { getusersSidebar } from '../controllers/getusersSidebar.js';

const router=express.Router();

router.get('/',protectRoute,getusersSidebar)

export default router