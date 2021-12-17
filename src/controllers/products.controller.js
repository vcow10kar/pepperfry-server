const express = require('express')

const router = express.Router();

const Products = require("../models/products.model")

router.get("/category/:id", async (req, res) => {
    const products = await Products.find({category_id: {$eq: req.params.id}})
    .populate({path: 'brand_id'})
    .lean().exec()
    
    return res.status(201).send(products)
})


router.get("/:id", async (req, res) => {
    
    const product = await Products.findById(req.params.id).populate({path: 'brand_id'}).lean().exec();
    
    return res.status(201).send(product)
})


router.post("/", async (req, res) => {

    const product = await Products.create(req.body);

    return res.status(200).send(product)
})

router.patch("/:id", async (req, res) => {

    const product = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true })

    return res.status(201).send(product)
})

router.delete("/:id", async (req, res) => {

    const product = await Products.findByIdAndDelete(req.params.id);

    return res.status(201).send(product)
})

module.exports = router