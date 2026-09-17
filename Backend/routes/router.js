import express from "express";
import {
  addNewDish,
  deleteDish,
  getAllDishes,
  getDishByCode,
  updateDish,
} from "../controller/dishController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";
import {
  addCart,
  clearCart,
  getCart,
  removeFromCart,
} from "../controller/cartController.js";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getUserOrders,
  updateOrderStatus,
} from "../controller/orderController.js";

const router = express.Router();

//* for admin only
router.post("/add", authMiddleware, adminMiddleware, addNewDish);
router.delete("/delete/:id", authMiddleware, adminMiddleware, deleteDish);
router.put("/update/:id", authMiddleware, adminMiddleware, updateDish);

// * public read access; ordering and cart actions remain protected below
router.get("/getAll", getAllDishes);
router.get("/dish/:id", authMiddleware, getDishByCode);

// * cart routes
router.post("/cart/addToCart", authMiddleware, addCart);
router.get("/cart", authMiddleware, getCart);
router.delete("/cart/removeFromCart/:id", authMiddleware, removeFromCart);
router.post("/cart/clearCart", authMiddleware, clearCart);

// * order routes
router.post("/order/create", authMiddleware, createOrder);
router.get("/orders/getMyOrders", authMiddleware, getUserOrders);
router.get(
  "/orders/getAllOrders",
  authMiddleware,
  adminMiddleware,
  getAllOrders,
);
router.put(
  "/order/:id/editStatus",
  authMiddleware,
  adminMiddleware,
  updateOrderStatus,
);

router.delete(
  "/orders/deleteOrder/:id",
  authMiddleware,
  adminMiddleware,
  deleteOrder,
);

export default router;
