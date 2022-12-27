const express = require("express");
const { addOrder, orderDetails } = require("../controllers/orderController");

const router = express.Router();

router.post("/order", addOrder);
router.get("/orderDetails", orderDetails);
module.exports = router;
