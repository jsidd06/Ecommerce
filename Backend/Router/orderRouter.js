import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../Model/orderModel.js";
import { isAuth } from "../utils.js";

const orderRouter = express.Router();
orderRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: "cart is empty 😰🥺" });
    } else {
      const order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsprice: req.body.itemsprice,
        shippingprice: req.body.shippingprice,
        taxprice: req.body.taxprice,
        totalprice: req.body.totalprice,
        user: req.user._id,
      });
      const createdOrder = await order.save();
      res.status(201).send({ message: 'New Order Created', order: createdOrder})
    }
  })
);

export default orderRouter
