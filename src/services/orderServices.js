import Order from "../models/Order.js"


const getOrders = async () => {
    const orders = await Order.find();
    return orders;
}

const createOrder = async (data,userId)=> {

    return await Order.create({...data,userId})
};

export default {getOrders, createOrder};