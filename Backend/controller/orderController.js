import cartSchema from "../models/cartModel.js";
import orderSchema from "../models/orderModel.js";

export const createOrder = async (req, res) => {
  try {
    const cart = await cartSchema
      .findOne({ user: req.user.id })
      .populate("items.dish");
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    let totalPrice = 0;
    let orderItems = [];
    for (const item of cart.items) {
      totalPrice += item.dish.price * item.quantity;

      orderItems.push({
        dish: item.dish._id,
        name: item.dish.name,
        price: item.dish.price,
        quantity: item.quantity,
      });
    }

    const newOrder = await orderSchema.create({
      user: req.user.id,
      items: orderItems,
      totalPrice,
    });

    cart.items = [];
    await cart.save();

    res.status(201).json({
      message: "Order created succefully",
      order: newOrder,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await orderSchema
      .find({ user: req.user.id })
      .populate("items.dish");
    if (!orders || orders.length === 0) {
      return res.status(200).json({ orders: [] });
    }
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await orderSchema
      .find()
      .populate("user", "username")
      .populate("items.dish");
    if (!orders || orders.length === 0) {
      return res.status(200).json({ orders: [] });
    }
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatuses = ["pending", "preparing", "delivered", "canceled"];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        message: "Invalid order status",
      });
    }

    const order = await orderSchema.findById(id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    order.status = status;

    await order.save();

    res.status(200).json({
      message: "Order status updated successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await orderSchema.findById(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    await orderSchema.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Order deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
