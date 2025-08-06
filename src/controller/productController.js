import fs from 'fs'
import productService  from '../services/productServices.js'

const getProduct = async (req, res)=>{
    const products = await productService.getProducts(req.query);
    res.json(products);
}

const getProductById = async (req, res)=>{
    const product = await productService.getProductById(req.params.id);
    res.json(product);
}

const createProduct =  async (req,res)=>{
   const data = await productService.createProduct(req.body,req.user._id)
   res.json(data)
}


const updateProduct = async (req, res)=>{
    const id = req.params.id;

    try {
        const data = await productService.updateProduct(id, req.body);
        res.json(data);
    } catch (error) {
        res.status(404).json({ message: 'Product not found' });
    }

}

const deleteProduct = async (req,res)=>{
    const id = req.params.id;
    const deletedProduct = await productService.deleteProduct(id);
    res.json(deletedProduct);
}

export default { getProduct,createProduct,getProductById , updateProduct, deleteProduct};