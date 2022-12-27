const express = require("express");
const orderItem = require("../models/orderItemModel");

const addOrderItem = async (req, res) => {
  const { quantity, product } = req.body;
  //console.log(quantity,product);
  try {
    const newOrderItem = await orderItem.create({
      quantity,
      product,
    });

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
