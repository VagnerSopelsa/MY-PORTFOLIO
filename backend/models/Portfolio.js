const mongoose = require('mongoose');

const { Schema } = mongoose;

const portFolioSchema = new Schema ( {
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.noew()
    }
} );

module.exports = mongoose.model('portfolio',portFolioSchema);