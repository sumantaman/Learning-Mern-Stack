import Order from "../models/Order.js"


const getOrders = async () => {
    const orders = await Order.find().populate("orderItem.productId");
    return orders;
}

const createOrder = async (data,userId)=> {
    const orderNumber = crypto.randomUUID()
    return await Order.create({...data,userId,orderNumber})
};

const deleteOrder = async (id)=>{
    return await Order.findByIdAndDelete(id)
}
export default {getOrders, createOrder,deleteOrder};