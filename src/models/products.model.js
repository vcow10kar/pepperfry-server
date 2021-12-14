const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    // brand_id: { type: mongoose.Schema.Types.ObjectId, ref: 'brand' },
    // category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'category' },
    price: { type: Number, required: true },
    details: {
        brand: { type: String, required: true },
        dimensitions: { type: String, required: true },
        weight: { type: Number, required: true },
        warranty: { type: Number, required: true },
        assembly: { type: String, required: true },
        primary_materials: { type: Array, required: true },
        room_type: { type: String, required: true },
        seating_height: { type: String, required: true },
        colour: { type: String, required: true },
        sku: { type: String, required: true }

    },
    imagesArray: { type: Array, required: true },
    colors: [{
        colour: { type: String, required: true },
        imgLink: { type: String, required: true }
    }],
    discount_percentage: { type: Number, required: true }
})

module.exports = mongoose.model("products", productsSchema);