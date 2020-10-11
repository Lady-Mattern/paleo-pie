const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const pieSchema = new Schema({
    name: {type: String, required: true},
    image: {type: String},
    price: {type: Number},
    description: {type: String},
    ingredients: {type: Object}
}, {timestamps: true})

// Create Model from Schema
const Pie = mongoose.model('Pie', pieSchema);
const FavePie = mongoose.model('FavePie', pieSchema);

// Export Pie Model
module.exports = {
    Pie, 
    FavePie
};