const express = require("express");
const addOrderItem = require("../controllers/orderItemController");

const router = express.Router();

router.post("/orderitems", addOrderItem);

module.exports = router;
