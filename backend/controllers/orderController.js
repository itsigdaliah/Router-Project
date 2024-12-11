const Order = require('../models/Order');
const Product = require('../models/Product');

exports.createOrder = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const totalPrice = product.price * quantity;

    const order = new Order({
      product: productId,
      buyer: req.user.id,
      quantity,
      totalPrice,
    });

    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ buyer: req.user.id }).populate('product', 'name price');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
