import mongoose from "mongoose";
import Product from "../models/Product.js";

// const rawData  = fs.readFileSync('./src/data/products.json','utf8');
// const product = JSON.parse(rawData)

const getProducts = async (query) => {
  console.log(query)
  const {brand,price,name}=query;
  // const sort = JSON.parse(query.sort || '{}');
  const filter = {};
  if(brand) filter.brand = {$in : brand.split(" ,")}
  if(price) filter.price = {$lte : price}
  if(name) filter.name = {$regex : name, $options : 'i'} 

  const products = await Product.find(filter);
  return products;
};

const getProductById = async (id) => {
  if (!id) {
    throw {
      status: 404,
      message: "Product not found",
    };
  }
  return await Product.findById(id);
};

const createProduct = (data) => {
  const createdByObjectId = new mongoose.Types.ObjectId(data.createdBy);

  return Product.create({ ...data, createdBy: createdByObjectId })
    .then((product) => {
      return product;
    })
    .catch((err) => {
      console.error("Product creation error:", err.message);
      throw err;
    });
};

const updateProduct = async (id, data, userId) => {
  const product = await getProductById(id);
  console.log(
    "product id :",
    id,
    " user id :",
    userId,
    "created by :",
    product.createdBy
  );
  if (String(product.createdBy) !== String(userId)) {
    throw {
      status: 403,
      message: "accessed denied",
    };
  }
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
