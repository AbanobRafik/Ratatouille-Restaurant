import dishSchema from "../models/dishModel.js";
import cartSchema from "../models/cartModel.js";

// * add dish to cart
export const addCart = async (req, res) => {
  try {
    const { dishId, quantity } = req.body;
    const dish = await dishSchema.findById(dishId);
    if (!dish) {
      return res.status(404).json({ message: "Dish not found" });
    }

    let cart = await cartSchema.findOne({ user: req.user.id });
    if (!cart) {
      cart = new cartSchema({
        user: req.user.id,
        items: [{ dish: dishId, quantity }],
      });
      await cart.save();
      // * check if the same dish added to cart to increase the quantity
    } else {
      const dishIndex = cart.items.findIndex(
        (item) => item.dish.toString() === dishId,
      );
      if (dishIndex > -1) {
        cart.items[dishIndex].quantity += quantity;
      } else {
        cart.items.push({ dish: dishId, quantity });
      }
      await cart.save();
    }
    res.status(200).json({ message: "added to cart", cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// * get cart
export const getCart = async (req, res) => {
  try {
    let cart = await cartSchema
      .findOne({ user: req.user._id })
      .populate("items.dish");

    // User doesn't have a cart yet
    if (!cart) {
      cart = await cartSchema.create({
        user: req.user._id,
        items: [],
      });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// * remove one quantity from cart
export const removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;

    const cart = await cartSchema.findOne({
      user: req.user._id,
    });

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    const item = cart.items.find((item) => item.dish.toString() === id);

    if (!item) {
      return res.status(404).json({
        message: "Dish not found in cart",
      });
    }

    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      cart.items = cart.items.filter((item) => item.dish.toString() !== id);
    }

    await cart.save();

    await cart.populate("items.dish");

    res.status(200).json({
      message: "Cart updated",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// * clear cart
export const clearCart = async (req, res) => {
  try {
    const cart = await cartSchema.findOne({ user: req.user.id });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    cart.items = [];
    await cart.save();
    res.status(200).json({ message: "Cart cleared", cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
