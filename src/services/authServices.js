import User from "../models/User.js";
import bcrypt from "bcrypt";

const login = async (data) => {
  const user = await User.findOne({ email: data.email });

  const isPasswordMatch = bcrypt.compareSync(data.password, user.password);
  if (!isPasswordMatch)
    throw { statusCode: 400, message: "Incorrect email or password" };
  return {
    id: user._id,
    email: user.email,
    name: user.name,
  };
};

const register = async (data) => {
  const hashpassword = bcrypt.hashSync(data.password, 10);
  return (await User.create({
    name: data.name,
    email: data.email,
    password: hashpassword,
    address: data.address,
    phone: data.phone,
  })).toObject();
};

export default { register, login };
