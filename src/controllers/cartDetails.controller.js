const express = require('express');
const router = express.Router();

const CartDetails = require('../models/cartDetails.model');

router.post('/', async (req, res) => {
    const cartDetails = await CartDetails.create(req.body);

    return res.status(201).send({ message: 'Cart details have been added!' });
});

router.get('/:id', async (req, res) => {
    const cartDetails = await CartDetails.find({ cart_id: { $eq: req.params.id } }).
        populate({ path: 'product_id', populate: { path: 'brand_id' } })
        .lean()
        .exec();

    res.status(200).send({cartDetails});
});

router.patch('/:id', async(req, res) => {
    const item = await CartDetails.findByIdAndUpdate(req.params.id, req.body, {new: true});

    return res.status(202).send({item});
})

router.delete('/:id', async(req, res) => {
    const item = await CartDetails.findByIdAndDelete(req.params.id);

    return res.status(203).send({message: 'Item has been removed'});
})

module.exports = router
