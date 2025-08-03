import userServices from "../services/userServices.js";

const createUser = async (req, res) => {
    const data = await userServices.createUser(req.body);
    res.status(201).json(data);
}


const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await userServices.deleteUser(id)
        res.status(200).json(data);
    } catch (error) {
        res.send(error.message)
    }
}

const getUser = async (req, res) => {
    const user = await userServices.getUser(req.query);
    res.status(200).json(user);
}


export default { createUser , deleteUser,getUser}