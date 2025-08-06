import mongoose from "mongoose";
import { ADMIN, USER, MERCHANT } from "../constants/roles.js";
ADMIN;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    default: [USER],
    enum: [USER, MERCHANT, ADMIN],
  },
  email: {
    type: String,
    required: [true, "user name must be requiroed"],
  },
  password: { type: String, required: true },
  address: {
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

const model = mongoose.model("User", userSchema);
export default model;
