import express from 'express'
import orderController from "../controller/orderController.js";

const router = express.Router();

router.get('/',orderController.getOrders)
router.post('/create-order',orderController.createOrders)


export default router