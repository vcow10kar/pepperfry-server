const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand_id: { type: mongoose.Schema.Types.ObjectId, required:false, ref: 'brands' },
    category_id: { type: mongoose.Schema.Types.ObjectId, required:false, ref: 'categories' },
    price: { type: Number, required: true },
    details: {
        brand: { type: String, required: true },
        dimensitions: { type: String, required: true },
        weight: { type: String, required: true },
        warranty: { type: String, required: true },
        assembly: { type: String, required: true },
        primary_materials: { type: String, required: true },
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
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("products", productsSchema);