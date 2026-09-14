import mongoose, { model } from "mongoose";

const dishSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    minLength: [3, "Dish code must be at least 3 characters."],
    maxLength: [20, "Dish code must be less than 20 characters."],
  },
  name: {
    type: String,
    required: true,
    minLength: [3, "DishName must be at least 3 characters."],
    maxLength: [50, "DishName must be less than 100 characters."],
  },
  description: {
    type: String,
    required: true,
    minLength: [10, "Description must be at least 10 characters."],
    maxLength: [500, "Description must be less than 800 characters."],
  },
  price: {
    type: Number,
    required: true,
    min: [1, "Price must be a positive number."],
  },
  image: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: ["appetizer", "main", "dessert"],
    default: "main",
  },
});

export default mongoose.model("Dish", dishSchema);
