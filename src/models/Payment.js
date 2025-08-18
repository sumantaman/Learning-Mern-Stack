import { create } from "domain";
import mongoose from "mongoose";
import { type } from "os";

const Payment = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, "Amount is required"],
  },
  method: {
    type: String,
    required: [true, "payment method is required"],
    enum: ["cash", "card", "online"],
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "completed", "failed"],
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  transactionId: String,
});

const model = mongoose.model("Payment",Payment)

export default model