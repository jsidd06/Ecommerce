import dotenv from 'dotenv'
dotenv.config()
import express from "express"
import data from "./data.js";
import mongoose from "mongoose"
import userRouter from "./Router/userRouter.js";
const app = express();
console.log(process.env.DB_STRING)
mongoose.connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

app.get('/api/products/:id', (req,res) => {
    const product = data.products.find((x) => x.id === req.params.id) 
    if(product){
        res.send(product)
    } else {
        res.status(404).send({message: "Product not found"})
    }
})
app.get("/api/products", (req,res) => {
    res.status(200).send(data.products)
})

app.use('/api/users', userRouter)
app.get('/', (req,res) => {
    res.send("server is started")
})

app.use((err, req, res, next) =>{
    res.status(500).send({message: err.message})
})

const port = process.env.PORT || 5000;
app.listen(5000, () =>{
    console.log(`server at http://localhost${port}`);
})