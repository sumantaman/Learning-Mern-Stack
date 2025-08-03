import express from 'express';

import userController from "../controller/userController.js";


const router = express.Router();

router.post('/create-user',userController.createUser)
router.delete('/delete-user',userController.deleteUser)
router.get('/get-user',userController.getUser)

export default router;