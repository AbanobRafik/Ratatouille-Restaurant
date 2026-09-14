import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  items: [
    {
      dish: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dish",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: [1, "Quantity must be at least 1."],
      },
    },
  ],

  status: {
    type: String,
    enum: ["pending", "preparing", "delivered", "canceled"],
    default: "pending",
  },

  totalPrice: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Order", orderSchema);
