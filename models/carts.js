const mongoose = require('mongoose');


const CartItemSchema = mongoose.Schema({
    product: {
        type: mongoose.ObjectId,
        ref: 'StoreItem',
        required: true
    },

    quantity:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('CartItem', CartItemSchema);
