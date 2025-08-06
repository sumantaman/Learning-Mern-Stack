import express from "express";

import productController from "../controller/productController.js";
import auth from "../middlewares/auth.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { MERCHANT } from "../constants/roles.js";
const router = express.Router();

router.get("/", productController.getProduct);
router.post(
  "/create-product",
  auth,
  roleBasedAuth(MERCHANT),
  productController.createProduct
);
router.get("/product/:id", productController.getProductById);
router.put("/product/:id", auth, productController.updateProduct);
router.delete("/product/:id", auth, productController.deleteProduct);

export default router;
