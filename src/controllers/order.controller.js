const express = require('express');
const router = express.Router();

const Order = require('../models/order.model');

router.get('/:id', async (req, res) => {
    const data = await Order.find({ user_id: { $eq: req.params.id } })
        .populate("user_id")
        .lean().exec();

    return res.status(200).send({ data });
})

router.post('/', async (req, res) => {
    const order = await Order.create(req.body);

    return res.status(200).send({ order });
})

module.exports = router;