const express = require("express");
const orderItem = require("../models/orderItemModel");
const Order = require("../models/orderModel");
const addOrderItem = async (req, res) => {
  const { quantity, product } = req.body;
  const newOrderItem = new orderItem({
    quantity,
    product,
  });
  try {
    const savedNewOrder = await newOrderItem.save();
    await Order.updateOne(
      {
        _id: "63ab33de6138e5f12cfe2a5e",    // Basically this ID should be get from user ID.
                                            // as this project have only one order so i have added this id manually
      },
      {
        $push: {
          orderItem: savedNewOrder._id,     // join (orderItem collection into the order collection)
        },
      }
    );
    res.status(200).json({
      success: true,
      newOrderItem,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = addOrderItem;
