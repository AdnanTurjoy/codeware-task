const express = require("express");
const OrderItem = require("../models/orderItemModel");

const Order = require("../models/orderModel");

const addOrder = async (req, res) => {
  try {
    const { phone } = req.body;

    const newOrder = new Order({
      phone,
    });
    await newOrder.save();

    res.status(200).json({
      success: true,
      newOrder,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const orderDetails = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("orderItem", "quantity product -_id", OrderItem)
      .select({
        _id: 0,
        __v: 0,
      });
    res.status(200).send({ orderDetails: orders });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = { addOrder, orderDetails };
