const express = require('express');
const router = express.Router();

const Category = require('../models/category.model');

router.get('/', async (req, res) => {
    const data = await Category.find().lean().exec()
    return res.send(data).status(200)
})

router.post('/', async (req, res) => {
    const data = await Category.create(req.body)
    return res.send(data).status(201)
})
    
module.exports = router;