const express = require("express");
const router = express.Router();

const Brand = require('../models/brand.model');

router.get('/', async (req, res) => {
    const data = await Brand.find().lean().exec();
    return res.send(data).status(200)
})

router.post('/', async (req, res) => {
    const data = await Brand.create( req.body )
    return res.send(data).status(201)
})

module.exports = router;