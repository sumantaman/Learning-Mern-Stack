import express from 'express';

import authController from "../controller/authController.js";
// import router from './productRoute';


const router = express.Router()


router.post('/register',authController.register_user)
router.post('/login',authController.login)

export default router

