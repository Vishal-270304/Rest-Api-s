import env from "dotenv/config"
import connectDB from "./db/connect.js";
import Product from "./models/product.js";
import productJson from './product.json' assert {type:'json'}
const start = async() =>{
    try{
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany()
        await Product.create(productJson)
        console.log("sucess");
    }catch(error){
        console.log(error);
    }
}

start()