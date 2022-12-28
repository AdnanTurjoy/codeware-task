const express = require("express");
const connectDB = require("./database/connection");
const app = express();
var cors = require("cors");
const orderItemRoute = require("./routes/orderItemsRoute");
const orderRoute = require("./routes/orderRoute");
app.use(express.json());
app.use(cors());
require("dotenv").config();

app.use("/api", orderItemRoute);
app.use("/api", orderRoute);
app.listen(process.env.PORT || 8000, async () => {
  console.log("Server is Running");
  await connectDB();
});
