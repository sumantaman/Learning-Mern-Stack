import orderServices from "../services/orderServices.js"

const getOrders = async (req, res) => {
    const orders = await orderServices.getOrders()
    res.json(orders)
}

const createOrders = async (req, res) => {

    const input = req.body;
    if(!input.orderItem || input.orderItem.length){
        return res.status(400).json({ message: "Order item is required" });
    }
    const data = await orderServices.createOrder(req.body,req.user)
    res.json(data)  
}

export default {getOrders,createOrders}