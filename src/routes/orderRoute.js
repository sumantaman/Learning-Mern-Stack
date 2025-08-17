import express from 'express'
import orderController from "../controller/orderController.js";
import auth from "../middlewares/auth.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { MERCHANT, ADMIN, USER } from "../constants/roles.js";

const router = express.Router();

router.get('/',auth,roleBasedAuth(ADMIN),orderController.getOrders)
router.get('/:id',auth,roleBasedAuth(ADMIN),orderController.getOrdersById)
router.put('/:id',auth,roleBasedAuth(ADMIN),orderController.updateOrder)
router.get('/user',auth,orderController.getOrdersByUser)
router.post('/create-order',orderController.createOrders)


export default router