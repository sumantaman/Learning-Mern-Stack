import express from 'express'

import productController from '../controller/productController.js';
import auth from '../middlewares/auth.js';
const router = express.Router();

router.get('/', productController.getProduct);
router.post('/create-product',auth ,productController.createProduct)
router.get('/product/:id', productController.getProductById)
router.put('/product/:id', productController.updateProduct)
router.delete('/product/:id', productController.deleteProduct)


export default router;
