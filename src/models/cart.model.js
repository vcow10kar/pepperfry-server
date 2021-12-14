const mongoose = require('mongoose');

let cartSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, trim: true, required: true, ref: 'users'}
}, {
    versionKey: false,
    timestamps: true
});

let Cart = mongoose.model('carts', cartSchema);

module.exports = Cart;