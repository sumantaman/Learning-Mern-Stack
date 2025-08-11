import mongoose from "mongoose";
import {
  ORDER_STATUS_CONFIRM,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_SHIPPING,
} from "../constants/orderStatus.js";

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  orderItem: [
    {
      productId: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: String,
        default: 1,
      },
    },
  ],
  status: {
    type: String,
    default: ORDER_STATUS_PENDING,
    enum: [ORDER_STATUS_CONFIRM, ORDER_STATUS_DELIVERED, ORDER_STATUS_SHIPPING],
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  shippingAddress: {
    country: {
      type: String,
      default: "Nepall",
    },
    province: {
      type: String,
      default: "Koshi",
    },
    city: {
      type: String,
      default: "Itahari",
    },
  },
  phone: {
    type: String,
  },
});

const model = mongoose.model("Order", orderSchema);

export default model;
