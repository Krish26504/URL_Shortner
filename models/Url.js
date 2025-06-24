const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    orignalUrl: {
        type: String,
        required : true,
        trim: true
    },
    shortCode: {
        type : String,
        required : true,
        unique: true,
        trim : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    expiresAt: {
        type: Date
    }
});

module.exports = mongoose.model('Url', urlSchema);