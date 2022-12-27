const express = require("express");
const orderItem = require("../models/orderItemModel");
const order = require("../models/orderModel");

const addOrder = async (req, res) => {
  try {
    // const { phone } = req.body;

    // const newOrder = new order({
    //   phone,
    //   orderItem,
    // });
    // await newOrder.save();

    // res.status(200).json({
    //   success: true,
    //   newOrder,
    // });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const orderDetails = async (req, res) => {
  try {
    const orders = await order.find({});
    return res.status(200).send({ orderDetails: orders });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = { addOrder, orderDetails };
