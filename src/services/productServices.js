import fs from "fs";
import Product from "../models/Product.js";

// const rawData  = fs.readFileSync('./src/data/products.json','utf8');
// const product = JSON.parse(rawData)

const getProducts = async (query) => {
  const products = await Product.find();
  return products;
};

const getProductById = async (id) => {
  return await Product.findById(id);
};
const createProduct = (data, createdBy) => {
  Product.create({ ...data, createdBy })
    .then(() => console.log(data))
    .catch((err) => {
      console.log(err);
    });
};

const updateProduct = async (id, data) => {
  const updatedProduct = await Product.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updatedProduct;
};

const deleteProduct = async (id) => {
  const deletedProduct = await Product.findByIdAndDelete(id);
  return deletedProduct;
};

export default {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
