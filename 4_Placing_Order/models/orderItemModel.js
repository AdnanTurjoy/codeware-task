const mongoose = require("mongoose");

const OrderItem = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
});

const orderItem = mongoose.model("orderItem", OrderItem);

module.exports = orderItem;
