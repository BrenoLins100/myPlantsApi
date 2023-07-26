const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    scientificName:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    imageUrl:{
        type: String,
        required: true
    },
    updatedAt:{
        type: Date,
        default: new Date
    }
}, {versionKey: false} );

module.exports = mongoose.model('Plant',plantSchema);