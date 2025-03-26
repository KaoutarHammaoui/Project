
const mongoose= require('mongoose');
const productSchema = new mongoose.Schema({
    name:String,
    description: String,
    prix: Number,
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports= mongoose.model('productCollection',productSchema)