import express from 'express';
import {test,userLogin,userRegister,userLogout} from '../controllers/authController.js';

const router=express.Router()

router.get("/",test)
router.post('/register',userRegister)
router.post('/login',userLogin)
router.post('/logout',userLogout)



export default router