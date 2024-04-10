import mongoose from "mongoose"
const  uri = process.env.MONGODB_URL

const connectDB = () =>{
    console.log("Db connected")
    return mongoose.connect(uri)
}

export default connectDB;