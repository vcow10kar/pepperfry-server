const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, required:false, ref: 'user' },
    products: { type: Array, required: true },
    email: { type: String, required: true },
    address: {
        name: { type: String, required: true },
        phoneNo: { type: String, required: true },
        pincode: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true },
    },
    totalPrice: {type: Number, required: true}
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("order", orderSchema);