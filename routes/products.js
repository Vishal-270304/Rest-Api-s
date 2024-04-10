// const express = require("express")
import express from "express"
const router = express.Router()

// const {getAllProducts,getAllProductsTesting} = require("../controllers/products")

// import { getAllProducts } from "../controllers/products.js";
// import { getAllProductsTesting } from "../controllers/products.js";

import {getAllProducts,getAllProductsTesting} from "../controllers/products.js"

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

//   router.get("/",(req,res)=>{
//     getAllProducts();
// })



export default router
// module.exports = router