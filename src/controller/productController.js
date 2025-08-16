import productService from "../services/productServices.js";

const getProduct = async (req, res) => {
  const products = await productService.getProducts(req.query);
  res.json(products);
};

const getProductById = async (req, res) => {
  const product = await productService.getProductById(req.params.id);
  res.json(product);
};

// const createProduct = async (req, res) => {
//   const data = await productService.createProduct(req.body, req.user._id);
//   res.json(data);
// };
// In controller:
const createProduct = async (req, res) => {
  try {
    const input = req.body;
    // console.log("req userr", req.user);
    // const product = await productService.createProduct({
    //   ...input,
    //   createdBy: req.user.id, // 👈 attach user id here
    // });

    res.status(201).json("success");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await productService.updateProduct(id, req.body, req.user.id);
    res.json(data);
  } catch (error) {
    res.status(error.statusCode || 500).send({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const deletedProduct = await productService.deleteProduct(id);
  res.json(deletedProduct);
};

export default {
  getProduct,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
