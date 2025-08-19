import crypto from "crypto";
import Order from "../models/Order.js";

const getOrders = async () => {
  const orders = await Order.find().populate("orderItem.productId");
  return orders;
};

const getOrdersByUser = async (userId) => {
  const orders = await Order.find({ user: userId })
    .populate("orderItem.product")
    .populate("user", ["name", "email", "phone", "address"]);
};

const getOrdersById = async (id) => {
  const orders = await Order.findById(id)
    .populate("orderItem.product")
    .populate("user", ["name", "email", "phone", "address"]);

  if (!orders) {
    throw {
      status: 404,
      message: "not found",
    };
  }
};

const updateOrder = async (id, data) => {
  return await Order.findByIdAndUpdate(
    id,
    { status: data.status },
    { new: true }
  );
};

const createOrder = async (data,userId) => {
  const orderNumber = crypto.randomUUID();
  return await Order.create({ ...data,userId,orderNumber });
};



const deleteOrder = async (id) => {
  return await Order.findByIdAndDelete(id);
};

const orderPayment =(id,data)=>{
  return "order payment init"
}


export default {
  getOrders,
  createOrder,
  deleteOrder,
  updateOrder,
  getOrdersByUser,
  getOrdersById,
  orderPayment
};
