const mongoose = require("mongoose");
const OrderItem = require("./orderItemModel")
const Order = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
  },
  orderItem: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OrderItem",
    },
  ],
});

const order = mongoose.model("order", Order);

module.exports = order;
