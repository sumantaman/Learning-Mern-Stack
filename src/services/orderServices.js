import crypto from "crypto";
import Order from "../models/Order.js";
import payment from "../utils/payment.js";

const getOrders = async () => {
  const orders = await Order.find().populate("orderItem.productId");
  return orders;
};

const getOrdersByUser = async (userId) => {
  const orders = await Order.find({ userId: userId })
    .populate("orderItem.productId")
    .populate("userId", ["name", "email", "phone", "address"]);
  return orders;
};

const getOrdersById = async (id) => {
  const orders = await Order.findById(id)
    .populate("orderItem.productId")
    .populate("userId", ["name", "email", "phone", "address"]);
  if (!orders) {
    throw {
      status: 404,
      message: "not found",
    };
  }
  return orders;
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


// 68a4baf66ad888719f247f0a
const deleteOrder = async (id) => {
  return await Order.findByIdAndDelete(id);
};

const orderPayment = async (id)=>{
  const order = await getOrdersById(id)
  return await payment.payKhalti({
    amount : order.totalPrice,
    purchaseOrderId : order.id,
    purchaseOrderName : order.orderNumber,
    customer : {
      name: order.userId.name,
      mail: order.userId.email,
      phone: order.userId.phone,
    },
  })
  
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
