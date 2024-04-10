// const express = require("express")
import env from "dotenv/config"
import express from "express"
const app = express()
const port = process.env.PORT || 5000;
import productRoutes from './routes/products.js'
import connectDB from "./db/connect.js";
// const product_routes = require('./routes/products')

// env.config()

app.get("/",(req,res)=>{
res.send("Hello")
})

app.use("/api/products",productRoutes)

const start = async() =>{
    try{
        await connectDB()
        app.listen(port,()=>{
            console.log(`Server is running at port ${port}.`);
        })

    }catch(error){
        console.log(error);
    }
}

start()