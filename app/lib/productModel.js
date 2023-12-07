import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,

    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    img: {
        type: String,
    },
    color: {
        type: String
    },
    stock: {
        type: Number,
        min: 0,
        required: true
    },
    size: {
        type: String,
    }
}, { timestamps: true })


export const Product = mongoose.models.Product || mongoose.model("Product", productSchema)