import orderServices from "../services/orderServices.js";

const getOrders = async (req, res) => {
  const orders = await orderServices.getOrders();
  res.json(orders);
};

const getOrdersByUser = async (req, res) => {
  try {
    const data = await orderServices.getOrdersByUser(req.user._id);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

const getOrdersById = async (req, res) => {
  try {
    const data = await orderServices.getOrdersById(req.params.id);
  
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

const updateOrder = async (req, res) => {
  try {
    const data = await orderServices.updateOrder(req.params.id, req.body);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

const createOrders = async (req, res) => {
  const input = req.body;
  const id = req.user.id;
  try {
    if (!input.orderItem || input.orderItem.length === 0) {
      return res.status(400).json({ message: "Order item is required" });
    }
    const data = await orderServices.createOrder(input,id);
    res.json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const orderPayment = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await orderServices.orderPayment(id);
    console.log(data)
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

const deleteOrder = async (req, res) => {
  const id = req.params.id;
  await orderServices.deleteOrder(id);
  res.send("delete order successfully");
};

export default {
  getOrders,
  createOrders,
  updateOrder,
  deleteOrder,
  getOrdersByUser,
  getOrdersById,
  orderPayment,
};
