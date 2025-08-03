// schema of product
import mongoose from "mongoose";
import { type } from "os";


 const productSchema = mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    description:String,
    createDate: {
        type:Date,
        default:Date.now
    }
});

// now builde model;
const model = mongoose.model("Product",productSchema)

export default model