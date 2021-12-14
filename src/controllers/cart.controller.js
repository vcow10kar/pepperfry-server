const express = require('express');
const router = express.Router();

const Cart = require('../models/cart.model');

router.get('/:id', async (req, res) => {
    const cart = await Cart.find({ user_id: { $eq: req.params.id } })
        .populate("user_id")
        .lean().exec();

    return res.status(200).send({ cart });
})

router.post('/', async (req, res) => {
    const cart = await Cart.create(req.body);

    return res.status(200).send({ message: 'Cart has been created', cartId: cart._id });
})

module.exports = router;