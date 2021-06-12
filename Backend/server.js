import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import userRouter from "./Router/userRouter.js";
import productRouter from "./Router/productRouter.js";
import orderRouter from "./Router/orderRouter.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
mongoose.connect(process.env.DB_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(res => {
  console.log("Connected to the MongoDB Atlas")
}).catch(error => {
  console.log(error)
})

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use('/api/orders', orderRouter);
app.get("/", (req, res) => {
  res.send("server is started");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`server at http://localhost${port}`);
});
