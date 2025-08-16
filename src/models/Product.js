// schema of product
import mongoose from "mongoose";
import { type } from "os";
 const productSchema = mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    description:String,
    imageUrls:{
        type:[String]
    },
    createDate: {
        type:Date,
        default:Date.now
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:[true,"created by user id is requiered"]
    }
});

// now builde model;
const model = mongoose.model("Product",productSchema)

export default model