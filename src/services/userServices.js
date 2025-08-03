import User from '../models/User.js';



const createUser = async (data)=>{
    const newUser = await User.create(data);
    return newUser;
}

const getUser = async (query)=>{
    const user = await User.find();
    return user;
}

const updateUser = async (id,data)=>{
    const updatedUser = await User.findByIdAndUpdate(id,data);
    return updatedUser;
}


const deleteUser = async (id)=>{
    const deletedUser = await User.findByIdAndDelete(id);
    return deletedUser;
}

export default {
    createUser, updateUser, deleteUser, getUser
}