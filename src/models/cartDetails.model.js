const mongoose = require('mongoose');

let cartDetailsSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, required: true, trim: true, ref: 'users'},
    cart_id: {type: mongoose.Schema.Types.ObjectId, required: true, trim: true, ref: 'carts'},
    product_id: {type: mongoose.Schema.Types.ObjectId, required: true, trim: true, ref: 'products'},
    quantity: {type: Number, required: true, trim: true}
}, {
    versionKey: false,
    timestamps: true
});

let CartDetails = mongoose.model('cartDetails', cartDetailsSchema);

module.exports = CartDetails;