const express = require('express')

const router = express.Router();

const Products = require("../models/products.model")

router.get("/",async(req,res)=>{
    return res.status(201).send("get--->proucts")
})

router.post("/",async(req,res)=>{

    const product = await Products.create(req.body);

    return res.status(200).send(product)
})

router.patch("/",async(req,res)=>{
    return res.status(201).send("patch--->product")
})

router.delete("/",async(req,res)=>{
    return res.status(201).send("Delete--->product")
})

module.exports = router