const mongoose = require('mongoose');


const StoreItemSchema = mongoose.Schema({
    product: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('StoreItem', StoreItemSchema);
